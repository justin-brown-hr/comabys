import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { insights } from "@/lib/content";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical perspectives on data strategy, integration, cloud, automation, and operational resilience from Comabys Consulting.",
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${value}T12:00:00`));
}

export default function InsightsPage() {
  const [featured, ...rest] = insights;

  return (
    <>
      <PageHero
        label="Insights"
        title="Practical guidance for leaders and builders"
        description="Articles and perspectives on connecting business needs with dependable data, systems, and resilience—without unnecessary jargon."
      />

      <section className="bg-white py-10 md:py-12">
        <div className="mx-auto max-w-[96rem] space-y-6 px-3 md:px-4 lg:px-5">
          <article className="grid gap-5 rounded-xl border border-line bg-surface/60 p-5 md:grid-cols-[1.2fr_0.8fr] md:p-7">
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-teal">
                Featured · {featured.category}
              </p>
              <h2 className="mt-2 text-xl font-bold tracking-tight text-navy md:text-2xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {featured.excerpt}
              </p>
              <p className="mt-4 text-xs text-muted">
                {formatDate(featured.date)} · {featured.readMinutes} min read
              </p>
            </div>
            <div className="flex flex-col justify-end gap-3 md:items-end">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-navy px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-mid"
              >
                Talk with us about this topic
                <span aria-hidden>→</span>
              </Link>
              <p className="text-xs text-muted md:text-right">
                Full article pages can be added as content is finalized.
              </p>
            </div>
          </article>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((item) => (
              <article
                key={item.slug}
                className="flex flex-col rounded-xl border border-line bg-white p-5"
              >
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-teal">
                  {item.category}
                </p>
                <h3 className="mt-2 text-base font-bold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {item.excerpt}
                </p>
                <p className="mt-4 text-xs text-muted">
                  {formatDate(item.date)} · {item.readMinutes} min read
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-8 md:py-10">
        <div className="mx-auto flex max-w-[96rem] flex-col items-start gap-4 px-3 md:flex-row md:items-center md:justify-between md:px-4 lg:px-5">
          <div>
            <h2 className="text-xl font-bold text-white">
              Want insights tailored to your environment?
            </h2>
            <p className="mt-1 text-sm text-white/70">
              Share your challenges and we’ll bring a practical point of view.
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
