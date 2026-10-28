import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionLabel } from "@/components/SectionLabel";
import { caseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Example outcomes from Comabys Consulting engagements across data, systems, cloud, and resilience.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        label="Case Studies"
        title="Outcomes that start with the business problem"
        description="Representative engagement stories showing how connected capabilities turn fragmented systems and data into clearer decisions and more resilient operations. Details are anonymized."
      />

      <section className="bg-white py-10 md:py-12">
        <div className="mx-auto max-w-[96rem] space-y-5 px-3 md:px-4 lg:px-5">
          {caseStudies.map((study) => (
            <article
              key={study.slug}
              id={study.slug}
              className="scroll-mt-20 rounded-xl border border-line bg-surface/50 p-5 md:p-6"
            >
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-teal">
                {study.clientType}
              </p>
              <h2 className="mt-2 text-lg font-bold tracking-tight text-navy md:text-xl">
                {study.title}
              </h2>

              <div className="mt-5 grid gap-5 md:grid-cols-3">
                <div>
                  <SectionLabel>Challenge</SectionLabel>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {study.challenge}
                  </p>
                </div>
                <div>
                  <SectionLabel>Approach</SectionLabel>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {study.approach}
                  </p>
                </div>
                <div>
                  <SectionLabel>Results</SectionLabel>
                  <ul className="mt-2 space-y-2">
                    {study.results.map((result) => (
                      <li
                        key={result}
                        className="flex gap-2 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {study.services.map((service) => (
                  <span
                    key={service}
                    className="rounded-md bg-white px-2.5 py-1 text-[0.72rem] font-medium text-navy ring-1 ring-line"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-navy py-8 md:py-10">
        <div className="mx-auto flex max-w-[96rem] flex-col items-start gap-4 px-3 md:flex-row md:items-center md:justify-between md:px-4 lg:px-5">
          <div>
            <h2 className="text-xl font-bold text-white">
              Have a similar challenge?
            </h2>
            <p className="mt-1 text-sm text-white/70">
              Let’s map a clear path from your current state to a dependable
              solution.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-md border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-teal px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-teal-dark hover:text-white"
            >
              Book a Consultation
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
