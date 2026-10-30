import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactBody = {
  firstName?: string;
  lastName?: string;
  email?: string;
  organization?: string;
  message?: string;
  website?: string; // honeypot
};

function badRequest(error: string) {
  return NextResponse.json({ ok: false, error }, { status: 400 });
}

async function sendViaWeb3Forms(payload: {
  name: string;
  email: string;
  organization: string;
  message: string;
}) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) return false;

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `Comabys website inquiry from ${payload.name}`,
      from_name: payload.name,
      email: payload.email,
      organization: payload.organization || "(not provided)",
      message: payload.message,
    }),
  });

  const result = (await response.json().catch(() => null)) as {
    success?: boolean;
    message?: string;
  } | null;

  if (!response.ok || !result?.success) {
    throw new Error(result?.message || "Web3Forms delivery failed");
  }
  return true;
}

async function sendViaSmtp(payload: {
  name: string;
  email: string;
  organization: string;
  message: string;
}) {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO || "info@comabys.com";

  if (!host || !user || !pass) return false;

  const port = Number(process.env.SMTP_PORT || 465);
  const secure =
    process.env.SMTP_SECURE === "true" ||
    process.env.SMTP_SECURE === "1" ||
    port === 465;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  const text = [
    "New consultation request from the Comabys website",
    "",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Organization: ${payload.organization || "(not provided)"}`,
    "",
    "Message:",
    payload.message,
  ].join("\n");

  await transporter.sendMail({
    from: `Comabys Website <${user}>`,
    to,
    replyTo: payload.email,
    subject: `Comabys website inquiry from ${payload.name}`,
    text,
  });

  return true;
}

export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return badRequest("Invalid request body");
  }

  // Honeypot — pretend success for bots
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const firstName = String(body.firstName || "").trim();
  const lastName = String(body.lastName || "").trim();
  const email = String(body.email || "").trim();
  const organization = String(body.organization || "").trim();
  const message = String(body.message || "").trim();
  const name = `${firstName} ${lastName}`.trim();

  if (!firstName || !lastName || !email || !message) {
    return badRequest("Please fill in all required fields.");
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return badRequest("Please enter a valid email address.");
  }

  const payload = { name, email, organization, message };

  try {
    if (await sendViaWeb3Forms(payload)) {
      return NextResponse.json({ ok: true });
    }
    if (await sendViaSmtp(payload)) {
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json(
      {
        ok: false,
        error:
          "Email delivery is not configured yet. Please email info@comabys.com directly.",
      },
      { status: 503 },
    );
  } catch (error) {
    const msg =
      error instanceof Error ? error.message : "Unable to send message.";
    return NextResponse.json({ ok: false, error: msg }, { status: 502 });
  }
}
