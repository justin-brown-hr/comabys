import Link from "next/link";

export function CtaBand() {
  return (
    <section
      id="cta"
      className="cta-pattern relative scroll-mt-20 overflow-hidden bg-navy py-8 md:py-10"
    >
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 1400 200"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0 140 C180 40 320 180 520 90 C700 10 820 160 1000 80 C1160 20 1280 120 1400 70"
          fill="none"
          stroke="#00c2cb"
          strokeWidth="1.2"
          opacity="0.35"
        />
        <path
          d="M0 170 C220 80 380 190 580 120 C760 60 900 170 1100 110 C1240 70 1320 140 1400 100"
          fill="none"
          stroke="#00c2cb"
          strokeWidth="1"
          opacity="0.22"
        />
      </svg>

      <div className="relative mx-auto flex max-w-[96rem] flex-col items-start gap-5 px-3 md:flex-row md:items-center md:justify-between md:gap-10 md:px-4 lg:px-5">
        <div className="max-w-2xl">
          <h2 className="text-xl font-bold tracking-tight text-white md:text-2xl">
            Let&apos;s build a stronger foundation for your business.
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            Whether you&apos;re looking to unify your data, modernize your
            systems, or improve operational resilience, we&apos;re here to help.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex shrink-0 items-center gap-2 rounded-md bg-teal px-5 py-2.5 text-sm font-semibold text-navy shadow-[0_0_24px_rgba(0,194,203,0.35)] transition hover:bg-teal-dark hover:text-white"
        >
          Book a Consultation
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
