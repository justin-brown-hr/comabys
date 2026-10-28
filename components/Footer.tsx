import Link from "next/link";
import { Logo } from "./Logo";

const servicesLeft = [
  { href: "/services#data-centralization", label: "Data Centralization" },
  { href: "/services#data-integration", label: "Data Integration" },
  { href: "/services#analytics-intelligence", label: "Analytics & Intelligence" },
  { href: "/services#cloud-migration", label: "Cloud Migration" },
];

const servicesRight = [
  { href: "/services#automation", label: "Automation" },
  {
    href: "/services#business-systems-analysis",
    label: "Business Systems Analysis",
  },
  {
    href: "/services#business-continuity-disaster-recovery",
    label: "Business Continuity & Disaster Recovery",
  },
];

const aboutLinks = [
  { href: "/about", label: "About Us" },
  { href: "/industries", label: "Industries" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto grid max-w-[96rem] gap-8 px-3 py-8 md:grid-cols-2 md:px-4 lg:px-5 lg:grid-cols-[1.1fr_1.6fr_0.7fr_1.1fr] lg:gap-0">
        <div className="lg:pr-8">
          <Logo variant="light" />
        </div>

        <div className="lg:border-l lg:border-white/10 lg:px-8">
          <h3 className="text-sm font-bold text-white">Services</h3>
          <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2">
            <ul className="space-y-1.5">
              {servicesLeft.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.8rem] text-white/65 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-1.5">
              {servicesRight.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.8rem] text-white/65 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:border-l lg:border-white/10 lg:px-8">
          <h3 className="text-sm font-bold text-white">About</h3>
          <ul className="mt-3 space-y-1.5">
            {aboutLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[0.8rem] text-white/65 transition hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:border-l lg:border-white/10 lg:pl-8">
          <h3 className="text-sm font-bold text-white">Connect</h3>
          <ul className="mt-3 space-y-2.5 text-[0.8rem] text-white/65">
            <li className="flex items-start gap-2">
              <svg
                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal"
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
                className="transition hover:text-white"
              >
                info@comabys.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <svg
                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal"
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
                  className="mt-1 block transition hover:text-white"
                >
                  240 507 0369
                </a>
              </address>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[96rem] flex-col gap-2 px-3 py-3.5 text-[0.7rem] text-white/45 md:flex-row md:items-center md:justify-between md:px-4 lg:px-5">
          <p>© 2026 Comabys Consulting. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <Link href="/contact" className="hover:text-white/80">
              Privacy
            </Link>
            <span aria-hidden>|</span>
            <Link href="/contact" className="hover:text-white/80">
              Terms of Use
            </Link>
            <span aria-hidden>|</span>
            <Link href="/" className="hover:text-white/80">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
