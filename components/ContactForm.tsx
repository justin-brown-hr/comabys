"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const CONTACT_EMAIL = "info@comabys.com";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const firstName = String(data.get("firstName") || "").trim();
    const lastName = String(data.get("lastName") || "").trim();
    const email = String(data.get("email") || "").trim();
    const organization = String(data.get("organization") || "").trim();
    const message = String(data.get("message") || "").trim();
    const website = String(data.get("website") || "").trim(); // honeypot

    if (website) {
      setStatus("sent");
      form.reset();
      return;
    }

    const payload = {
      name: `${firstName} ${lastName}`.trim(),
      firstName,
      lastName,
      email,
      organization,
      message,
      _subject: `Comabys website inquiry from ${firstName} ${lastName}`.trim(),
      _template: "table",
      _replyto: email,
    };

    try {
      // Prefer same-origin PHP handler on Network Solutions hosting
      try {
        const phpResponse = await fetch("/contact.php", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (phpResponse.ok) {
          const result = (await phpResponse.json().catch(() => null)) as
            | { ok?: boolean; error?: string }
            | null;
          if (result?.ok === true) {
            setStatus("sent");
            form.reset();
            return;
          }
        }
      } catch {
        // PHP unavailable locally / on non-PHP hosts — use FormSubmit below
      }

      // Fallback: FormSubmit (works on static hosting after one-time email confirm)
      const submitResponse = await fetch(
        `https://formsubmit.co/ajax/${CONTACT_EMAIL}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      const result = (await submitResponse.json().catch(() => null)) as
        | { success?: string | boolean; message?: string }
        | null;

      if (!submitResponse.ok) {
        throw new Error(
          result?.message ||
            "Message could not be delivered. Please email us directly.",
        );
      }

      setStatus("sent");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Message could not be delivered. Please email us directly.",
      );
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-teal/30 bg-teal-soft/60 p-6 md:p-7">
        <h2 className="text-lg font-bold text-navy">Message sent</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Thanks for reaching out. We&apos;ll get back to you at the email you
          provided.
        </p>
        <button
          type="button"
          className="mt-5 inline-flex items-center gap-2 rounded-md bg-navy px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-mid"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 rounded-xl border border-line bg-white p-5 shadow-sm md:p-7"
      noValidate={false}
    >
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-navy">
          First name
          <input
            type="text"
            name="firstName"
            required
            disabled={status === "sending"}
            className="mt-1.5 w-full rounded-md border border-line px-3.5 py-2.5 text-ink outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20 disabled:opacity-60"
          />
        </label>
        <label className="block text-sm font-medium text-navy">
          Last name
          <input
            type="text"
            name="lastName"
            required
            disabled={status === "sending"}
            className="mt-1.5 w-full rounded-md border border-line px-3.5 py-2.5 text-ink outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20 disabled:opacity-60"
          />
        </label>
      </div>
      <label className="block text-sm font-medium text-navy">
        Work email
        <input
          type="email"
          name="email"
          required
          disabled={status === "sending"}
          className="mt-1.5 w-full rounded-md border border-line px-3.5 py-2.5 text-ink outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20 disabled:opacity-60"
        />
      </label>
      <label className="block text-sm font-medium text-navy">
        Organization
        <input
          type="text"
          name="organization"
          disabled={status === "sending"}
          className="mt-1.5 w-full rounded-md border border-line px-3.5 py-2.5 text-ink outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20 disabled:opacity-60"
        />
      </label>
      <label className="block text-sm font-medium text-navy">
        How can we help?
        <textarea
          name="message"
          rows={5}
          required
          disabled={status === "sending"}
          className="mt-1.5 w-full resize-y rounded-md border border-line px-3.5 py-2.5 text-ink outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20 disabled:opacity-60"
        />
      </label>

      {status === "error" ? (
        <p className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {errorMessage}{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-semibold underline"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-teal px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-dark disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
        {status === "sending" ? null : <span aria-hidden>→</span>}
      </button>
      <p className="text-xs text-muted">
        Messages are delivered to {CONTACT_EMAIL}.
      </p>
    </form>
  );
}
