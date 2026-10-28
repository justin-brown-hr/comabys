import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionLabel } from "@/components/SectionLabel";
import { industries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "How Comabys Consulting applies data, systems, and resilience expertise across government, healthcare, financial services, and more.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        label="Industries"
        title="Sector experience with a business-first approach"
        description="We adapt the same connected capabilities—data, integration, analytics, cloud, automation, analysis, and resilience—to the realities of each sector we serve."
      />

      <section className="bg-white py-10 md:py-12">
        <div className="mx-auto grid max-w-[96rem] gap-4 px-3 sm:grid-cols-2 lg:grid-cols-3 md:px-4 lg:px-5">
          {industries.map((industry) => (
            <article
              key={industry.slug}
              id={industry.slug}
              className="scroll-mt-20 rounded-xl border border-line bg-surface/50 p-5"
            >
              <SectionLabel>{industry.title}</SectionLabel>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {industry.summary}
              </p>
              <ul className="mt-4 space-y-2">
                {industry.focus.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-[0.8rem] leading-relaxed text-muted"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-navy py-8 md:py-10">
        <div className="mx-auto flex max-w-[96rem] flex-col items-start gap-4 px-3 md:flex-row md:items-center md:justify-between md:px-4 lg:px-5">
          <div>
            <h2 className="text-xl font-bold text-white">
              Don’t see your sector listed?
            </h2>
            <p className="mt-1 text-sm text-white/70">
              Tell us about your environment—we’ll map the right capabilities to
              your goals.
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
