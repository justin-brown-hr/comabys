"use client";

import { FormEvent, useState } from "react";

const CONTACT_EMAIL = "info@comabys.com";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setError(null);

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          firstName: String(data.get("firstName") || ""),
          lastName: String(data.get("lastName") || ""),
          email: String(data.get("email") || ""),
          organization: String(data.get("organization") || ""),
          message: String(data.get("message") || ""),
          website: String(data.get("website") || ""),
        }),
      });

      const result = (await response.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
      } | null;

      if (!response.ok || !result?.ok) {
        throw new Error(
          result?.error ||
            `Unable to send message (HTTP ${response.status}). Please email ${CONTACT_EMAIL}.`,
        );
      }

      form.reset();
      setSent(true);
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : `Unable to send message. Please email ${CONTACT_EMAIL}.`;
      // Network / Failed to fetch
      if (message === "Failed to fetch" || err instanceof TypeError) {
        setError(
          `Could not reach the server. Please email ${CONTACT_EMAIL} directly.`,
        );
      } else {
        setError(message);
      }
    } finally {
      setSending(false);
    }
  }

  if (sent) {
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
          onClick={() => setSent(false)}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-xl border border-line bg-white p-5 shadow-sm md:p-7"
      noValidate
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
            disabled={sending}
            className="mt-1.5 w-full rounded-md border border-line px-3.5 py-2.5 text-ink outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20 disabled:opacity-60"
          />
        </label>
        <label className="block text-sm font-medium text-navy">
          Last name
          <input
            type="text"
            name="lastName"
            required
            disabled={sending}
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
          disabled={sending}
          className="mt-1.5 w-full rounded-md border border-line px-3.5 py-2.5 text-ink outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20 disabled:opacity-60"
        />
      </label>
      <label className="block text-sm font-medium text-navy">
        Organization
        <input
          type="text"
          name="organization"
          disabled={sending}
          className="mt-1.5 w-full rounded-md border border-line px-3.5 py-2.5 text-ink outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20 disabled:opacity-60"
        />
      </label>
      <label className="block text-sm font-medium text-navy">
        How can we help?
        <textarea
          name="message"
          rows={5}
          required
          disabled={sending}
          className="mt-1.5 w-full resize-y rounded-md border border-line px-3.5 py-2.5 text-ink outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20 disabled:opacity-60"
        />
      </label>

      {error ? (
        <p className="rounded-md border border-red-200 bg-red-50 px-3.5 py-2.5 text-sm text-red-800">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={sending}
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-teal px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-dark disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {sending ? "Sending…" : "Send Message"}
        {sending ? null : <span aria-hidden>→</span>}
      </button>
      <p className="text-xs text-muted">
        Messages are delivered to {CONTACT_EMAIL}.
      </p>
    </form>
  );
}
