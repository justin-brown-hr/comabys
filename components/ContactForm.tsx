"use client";

import { useEffect, useState } from "react";

const CONTACT_EMAIL = "info@comabys.com";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("sent") === "1") {
      setSent(true);
      // Clean the URL without reloading
      const url = new URL(window.location.href);
      url.searchParams.delete("sent");
      window.history.replaceState({}, "", url.pathname + url.search + url.hash);
    }
  }, []);

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
      action={`https://formsubmit.co/${CONTACT_EMAIL}`}
      method="POST"
      className="space-y-4 rounded-xl border border-line bg-white p-5 shadow-sm md:p-7"
      onSubmit={() => setSending(true)}
    >
      {/* FormSubmit controls */}
      <input type="hidden" name="_subject" value="Comabys website inquiry" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input
        type="hidden"
        name="_next"
        value="https://comabys.com/contact/?sent=1"
      />
      {/* Honeypot */}
      <input
        type="text"
        name="_honey"
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

      <button
        type="submit"
        disabled={sending}
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-teal px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-dark disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {sending ? "Sending…" : "Send Message"}
        {sending ? null : <span aria-hidden>→</span>}
      </button>
      <p className="text-xs text-muted">
        Messages are delivered to {CONTACT_EMAIL}. If this is the first
        submission, check that inbox for a one-time activation link from
        FormSubmit, then try again.
      </p>
    </form>
  );
}
