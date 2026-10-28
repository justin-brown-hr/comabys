import type { ReactNode } from "react";
import Link from "next/link";
import { SectionLabel } from "@/components/SectionLabel";
import { services as serviceContent } from "@/lib/content";

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

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-white py-10 md:py-12">
      <div className="mx-auto max-w-[96rem] px-3 md:px-4 lg:px-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel>Our Services</SectionLabel>
            <h2 className="mt-2 max-w-xl text-xl font-bold tracking-tight text-navy md:text-2xl">
              Integrated Solutions for a Stronger Tomorrow
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal transition hover:text-teal-dark"
          >
            View All Services
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
          {serviceContent.map((service) => (
            <Link
              key={service.slug}
              href={`/services#${service.slug}`}
              className="group rounded-lg border border-line/80 bg-white p-3.5 shadow-[0_6px_18px_-14px_rgba(0,26,51,0.4)] transition duration-300 hover:-translate-y-0.5 hover:border-teal/35 hover:shadow-[0_14px_28px_-16px_rgba(0,194,203,0.4)]"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-teal-soft text-teal transition group-hover:bg-teal group-hover:text-white">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  aria-hidden
                >
                  {icons[service.slug]}
                </svg>
              </div>
              <h3 className="mt-3 text-[0.82rem] font-bold leading-snug text-navy">
                {service.title}
              </h3>
              <p className="mt-1.5 text-[0.72rem] leading-relaxed text-muted">
                {service.short}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
