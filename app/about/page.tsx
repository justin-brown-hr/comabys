import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionLabel } from "@/components/SectionLabel";
import { approachSteps, values } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Practical consulting. Connected solutions. Lasting value. Learn about Comabys Consulting’s mission, vision, and approach.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title="Practical Consulting. Connected Solutions. Lasting Value."
        description="At Comabys Consulting, we help organizations solve complex business and technology challenges through thoughtful analysis, effective data management, and reliable technology solutions."
      />

      <section className="bg-white py-10 md:py-12">
        <div className="mx-auto grid max-w-[96rem] gap-8 px-3 md:grid-cols-2 md:items-center md:px-4 lg:gap-12 lg:px-5">
          <div>
            <SectionLabel>Who we are</SectionLabel>
            <h2 className="mt-2 text-xl font-bold tracking-tight text-navy md:text-2xl">
              Your partner from business problem to dependable solution.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              We understand that organizations often operate with disconnected
              systems, fragmented information, manual processes, and technology
              environments that are difficult to maintain. Our goal is to help
              clients bring these pieces together into a more integrated,
              efficient, and resilient operating environment.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              We take a business-first approach to every engagement—understand
              objectives, assess the current environment, identify practical
              opportunities, and deliver solutions aligned with priorities,
              security requirements, and long-term operational needs.
            </p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80"
              alt="Collaborative consulting workspace"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-surface py-10 md:py-12">
        <div className="mx-auto grid max-w-[96rem] gap-6 px-3 md:grid-cols-2 md:px-4 lg:px-5">
          <article className="rounded-xl border border-line bg-white p-5 md:p-6">
            <SectionLabel>Our Mission</SectionLabel>
            <p className="mt-3 text-sm leading-relaxed text-muted md:text-[0.95rem]">
              To help organizations transform data, technology, and business
              processes into trusted capabilities that support informed
              decisions, operational efficiency, and sustainable growth.
            </p>
          </article>
          <article className="rounded-xl border border-line bg-white p-5 md:p-6">
            <SectionLabel>Our Vision</SectionLabel>
            <p className="mt-3 text-sm leading-relaxed text-muted md:text-[0.95rem]">
              To be a trusted consulting partner recognized for connecting
              business strategy with dependable technology solutions and helping
              organizations adapt confidently to change.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-white py-10 md:py-12">
        <div className="mx-auto max-w-[96rem] px-3 md:px-4 lg:px-5">
          <SectionLabel>Our Values</SectionLabel>
          <h2 className="mt-2 text-xl font-bold tracking-tight text-navy md:text-2xl">
            How we work with every client
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-lg border border-line bg-surface/50 p-4"
              >
                <h3 className="text-sm font-bold text-navy">{value.title}</h3>
                <p className="mt-1.5 text-[0.8rem] leading-relaxed text-muted">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-10 md:py-12">
        <div className="mx-auto max-w-[96rem] px-3 md:px-4 lg:px-5">
          <SectionLabel className="justify-center">How we work</SectionLabel>
          <h2 className="mt-2 text-center text-xl font-bold tracking-tight text-navy md:text-2xl">
            A Clear Path to Results
          </h2>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {approachSteps.map((step, index) => (
              <li
                key={step.title}
                className="flex flex-col items-center rounded-xl border border-line bg-white p-5 text-center"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-teal to-navy text-sm font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-3 text-base font-bold text-navy">
                  {step.title}
                </h3>
                <p className="mt-2 text-[0.8rem] leading-relaxed text-muted">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-navy py-8 md:py-10">
        <div className="mx-auto flex max-w-[96rem] flex-col items-start gap-4 px-3 md:flex-row md:items-center md:justify-between md:px-4 lg:px-5">
          <div>
            <h2 className="text-xl font-bold text-white">
              Ready to talk through your challenges?
            </h2>
            <p className="mt-1 text-sm text-white/70">
              Book a consultation with our team in Bethesda, MD.
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
