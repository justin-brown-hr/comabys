import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative isolate min-h-[min(68vh,560px)] overflow-hidden bg-navy">
      <Image
        src="/hero-bridge.jpg"
        alt="Suspension bridge spanning the bay — connecting systems and data"
        fill
        priority
        className="object-cover object-[center_45%] scale-[1.03]"
        sizes="100vw"
      />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "linear-gradient(105deg, rgba(0,16,34,0.82) 0%, rgba(0,26,51,0.55) 38%, rgba(0,26,51,0.28) 68%, rgba(0,26,51,0.18) 100%), radial-gradient(ellipse 65% 50% at 75% 48%, rgba(0,194,203,0.32), transparent 55%)",
        }}
      />

      {/* Connection network overlay — bridge/data links */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1400 700"
        fill="none"
        aria-hidden
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="conn" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00c2cb" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#00c2cb" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#00c2cb" stopOpacity="0.2" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Stylized bridge arcs */}
        <path
          d="M180 520 Q700 280 1220 520"
          stroke="url(#conn)"
          strokeWidth="2"
          fill="none"
          opacity="0.7"
          filter="url(#glow)"
        />
        <path
          d="M220 540 Q700 340 1180 540"
          stroke="#00c2cb"
          strokeWidth="1"
          fill="none"
          opacity="0.35"
        />
        <g stroke="#00c2cb" strokeWidth="1" opacity="0.45">
          <line x1="320" y1="470" x2="320" y2="560" />
          <line x1="480" y1="400" x2="480" y2="560" />
          <line x1="700" y1="300" x2="700" y2="560" />
          <line x1="920" y1="400" x2="920" y2="560" />
          <line x1="1080" y1="470" x2="1080" y2="560" />
        </g>
        {/* Network nodes */}
        <g stroke="#00c2cb" strokeWidth="1.2" opacity="0.65" filter="url(#glow)">
          <line x1="640" y1="160" x2="820" y2="240" />
          <line x1="820" y1="240" x2="980" y2="180" />
          <line x1="820" y1="240" x2="900" y2="360" />
          <line x1="900" y1="360" x2="1080" y2="320" />
          <line x1="900" y1="360" x2="1000" y2="460" />
          <line x1="640" y1="160" x2="740" y2="100" />
          <line x1="980" y1="180" x2="1120" y2="240" />
          <line x1="700" y1="300" x2="820" y2="240" />
        </g>
        <g fill="#00c2cb" filter="url(#glow)">
          <circle cx="640" cy="160" r="5" />
          <circle cx="820" cy="240" r="6.5" />
          <circle cx="980" cy="180" r="4" />
          <circle cx="900" cy="360" r="5" />
          <circle cx="1080" cy="320" r="4" />
          <circle cx="1000" cy="460" r="3.5" />
          <circle cx="740" cy="100" r="3.5" />
          <circle cx="1120" cy="240" r="3.5" />
          <circle cx="700" cy="300" r="4.5" />
        </g>
      </svg>

      <div className="relative mx-auto flex min-h-[min(68vh,560px)] max-w-[96rem] items-center px-3 py-14 md:px-4 lg:px-5 md:py-16">
        <div className="max-w-2xl">
          <p className="animate-fade-up text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-white/80">
            Strategy | Data | Technology | Resilience
          </p>

          <h1 className="animate-fade-up delay-1 mt-3 max-w-[22ch] text-[2.1rem] font-bold leading-[1.15] tracking-tight text-white sm:max-w-none sm:text-4xl md:text-[2.85rem]">
            <span className="block sm:whitespace-nowrap">
              Turn Complex Data Into
            </span>
            <span className="block text-teal sm:whitespace-nowrap">
              Clear Business Decisions.
            </span>
          </h1>

          <p className="animate-fade-up delay-2 mt-4 max-w-xl text-[0.95rem] leading-relaxed text-white/80 md:text-base">
            We help organizations connect systems, strengthen data foundations,
            modernize the cloud, and build resilient operations.
          </p>

          <div className="animate-fade-up delay-3 mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-teal px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-teal/20 transition hover:bg-teal-dark"
            >
              Discuss Your Project
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-md border border-white/55 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white hover:bg-white/10"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
