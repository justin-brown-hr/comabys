import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    title: "Discover",
    description:
      "Understand your business goals, challenges, and opportunities.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
      />
    ),
  },
  {
    title: "Design",
    description: "Develop a tailored strategy and solution roadmap.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
      />
    ),
  },
  {
    title: "Deliver",
    description:
      "Implement solutions with focus on quality, security, and adoption.",
    icon: (
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
  },
  {
    title: "Support",
    description:
      "Provide ongoing support, optimization, and resilience planning.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    ),
  },
];

function SectionLabel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <span className="h-0.5 w-7 bg-teal" aria-hidden />
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-teal">
        {children}
      </p>
    </div>
  );
}

export function AboutApproach() {
  return (
    <section id="about" className="scroll-mt-20 bg-surface py-10 md:py-12">
      <div className="mx-auto grid max-w-[96rem] gap-8 px-3 md:px-4 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10 lg:px-5">
        {/* About: copy column + image column */}
        <div className="grid gap-5 sm:grid-cols-2 sm:items-stretch">
          <div>
            <SectionLabel>About Us</SectionLabel>
            <h2 className="mt-2 text-xl font-bold tracking-tight text-navy md:text-2xl">
              Your partner from business problem to dependable solution.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Comabys Consulting helps organizations modernize and transform
              through a practical, end-to-end approach that combines business
              analysis, data architecture, implementation, and operational
              resilience.
            </p>
            <Link
              href="/about"
              className="mt-5 inline-flex items-center gap-2 rounded-md bg-navy px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-mid"
            >
              Learn More About Us
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="relative min-h-[200px] overflow-hidden rounded-lg sm:min-h-0">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
              alt="Modern glass conference room overlooking the city"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 30vw"
            />
          </div>
        </div>

        {/* Approach — centered icons + text */}
        <div>
          <SectionLabel className="justify-center sm:justify-start">
            Our Approach
          </SectionLabel>
          <h2 className="mt-2 text-center text-xl font-bold tracking-tight text-navy sm:text-left md:text-2xl">
            A Clear Path to Results
          </h2>

          <ol className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-2">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative flex w-full items-center justify-center">
                  {index > 0 ? (
                    <span
                      className="absolute right-1/2 top-1/2 mr-6 hidden h-px w-[calc(50%-1.5rem)] -translate-y-1/2 bg-line sm:block"
                      aria-hidden
                    />
                  ) : null}
                  <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal to-navy text-white shadow-sm shadow-teal/25">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      aria-hidden
                    >
                      {step.icon}
                    </svg>
                  </div>
                  {index < steps.length - 1 ? (
                    <span
                      className="absolute left-1/2 top-1/2 ml-6 hidden h-px w-[calc(50%-1.5rem)] -translate-y-1/2 bg-line sm:block"
                      aria-hidden
                    />
                  ) : null}
                </div>
                <p className="mt-3 text-[0.8rem] font-bold text-navy">
                  <span className="text-teal">{index + 1}. </span>
                  {step.title}
                </p>
                <p className="mt-1 max-w-[11rem] text-[0.72rem] leading-relaxed text-muted">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
