import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a consultation with Comabys Consulting in Bethesda, MD.",
};

export default function ContactPage() {
  return (
    <section className="bg-surface py-10 md:py-14">
      <div className="mx-auto grid max-w-[96rem] gap-8 px-3 md:grid-cols-[0.9fr_1.1fr] md:px-4 lg:gap-12 lg:px-5">
        <div>
          <SectionLabel>Contact</SectionLabel>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-navy md:text-3xl">
            Book a Consultation
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Tell us about your project. We&apos;ll follow up to schedule a
            conversation about your goals, systems, and next steps.
          </p>

          <ul className="mt-6 space-y-3 text-sm text-muted">
            <li className="flex items-start gap-2.5">
              <svg
                className="mt-0.5 h-4 w-4 shrink-0 text-teal"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a
                href="mailto:info@comabys.com"
                className="font-medium text-navy hover:text-teal"
              >
                info@comabys.com
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <svg
                className="mt-0.5 h-4 w-4 shrink-0 text-teal"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <address className="not-italic leading-relaxed">
                <span className="block">7315 Wisconsin Ave</span>
                <span className="block">Suite 400 W</span>
                <span className="block">Bethesda, MD 20817</span>
                <a
                  href="tel:+12405070369"
                  className="mt-1.5 block font-medium text-navy hover:text-teal"
                >
                  240 507 0369
                </a>
              </address>
            </li>
          </ul>

          <p className="mt-8 text-sm text-muted">
            <Link href="/" className="font-medium text-navy hover:text-teal">
              ← Back to home
            </Link>
          </p>
        </div>

        <form
          action="mailto:info@comabys.com"
          method="post"
          encType="text/plain"
          className="space-y-4 rounded-xl border border-line bg-white p-5 shadow-sm md:p-7"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-navy">
              First name
              <input
                type="text"
                name="firstName"
                required
                className="mt-1.5 w-full rounded-md border border-line px-3.5 py-2.5 text-ink outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
              />
            </label>
            <label className="block text-sm font-medium text-navy">
              Last name
              <input
                type="text"
                name="lastName"
                required
                className="mt-1.5 w-full rounded-md border border-line px-3.5 py-2.5 text-ink outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
              />
            </label>
          </div>
          <label className="block text-sm font-medium text-navy">
            Work email
            <input
              type="email"
              name="email"
              required
              className="mt-1.5 w-full rounded-md border border-line px-3.5 py-2.5 text-ink outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
            />
          </label>
          <label className="block text-sm font-medium text-navy">
            Organization
            <input
              type="text"
              name="organization"
              className="mt-1.5 w-full rounded-md border border-line px-3.5 py-2.5 text-ink outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
            />
          </label>
          <label className="block text-sm font-medium text-navy">
            How can we help?
            <textarea
              name="message"
              rows={5}
              required
              className="mt-1.5 w-full resize-y rounded-md border border-line px-3.5 py-2.5 text-ink outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
            />
          </label>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-teal px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-dark sm:w-auto"
          >
            Send Message
            <span aria-hidden>→</span>
          </button>
          <p className="text-xs text-muted">
            Submitting opens your email client to send the message to our team.
          </p>
        </form>
      </div>
    </section>
  );
}
