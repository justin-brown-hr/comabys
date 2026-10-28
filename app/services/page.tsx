import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionLabel } from "@/components/SectionLabel";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Seven connected consulting capabilities—from data centralization and integration to cloud, automation, and resilience.",
};

const icons: Record<string, ReactNode> = {
  "data-centralization": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 7v10c0 1.1 3.6 2 8 2s8-.9 8-2V7M4 7c0 1.1 3.6 2 8 2s8-.9 8-2M4 7c0-1.1 3.6-2 8-2s8 .9 8 2m0 5c0 1.1-3.6 2-8 2s-8-.9-8-2"
    />
  ),
  "data-integration": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
    />
  ),
  "analytics-intelligence": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6m6 0V9a2 2 0 012-2h2a2 2 0 012 2v10m6 0V5a2 2 0 012-2h2a2 2 0 012 2v14"
    />
  ),
  "cloud-migration": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
    />
  ),
  automation: (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </>
  ),
  "business-systems-analysis": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  ),
  "business-continuity-disaster-recovery": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  ),
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="Integrated solutions for a stronger tomorrow"
        description="Seven connected capabilities that help organizations unify data, modernize systems, and build operational resilience—presented as a practical path from problem to dependable solution."
      >
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-teal px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-dark"
        >
          Discuss Your Project
          <span aria-hidden>→</span>
        </Link>
      </PageHero>

      <section className="bg-white py-10 md:py-12">
        <div className="mx-auto max-w-[96rem] space-y-6 px-3 md:px-4 lg:px-5">
          {services.map((service, index) => (
            <article
              key={service.slug}
              id={service.slug}
              className="scroll-mt-20 grid gap-5 rounded-xl border border-line bg-surface/60 p-5 md:grid-cols-[auto_1fr_1fr] md:gap-8 md:p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal-soft text-teal">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  aria-hidden
                >
                  {icons[service.slug]}
                </svg>
              </div>

              <div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-teal">
                  Capability {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-1 text-lg font-bold text-navy md:text-xl">
                  {service.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.detail}
                </p>
              </div>

              <div>
                <SectionLabel>What you gain</SectionLabel>
                <ul className="mt-3 space-y-2">
                  {service.outcomes.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-navy py-8 md:py-10">
        <div className="mx-auto flex max-w-[96rem] flex-col items-start gap-4 px-3 md:flex-row md:items-center md:justify-between md:px-4 lg:px-5">
          <div>
            <h2 className="text-xl font-bold text-white">
              Not sure where to start?
            </h2>
            <p className="mt-1 text-sm text-white/70">
              We&apos;ll help you prioritize the capability that unlocks the most
              value first.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-teal px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-teal-dark hover:text-white"
          >
            Book a Consultation
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
