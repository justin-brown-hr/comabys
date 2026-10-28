"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./Logo";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services", hasMenu: true },
  { href: "/about", label: "About Us" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="animate-fade-in sticky top-0 z-50 border-b border-line/70 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[96rem] items-center justify-between gap-4 px-3 md:px-4 lg:px-5">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : item.href.startsWith("/#")
                  ? false
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group inline-flex items-center gap-1 text-[0.95rem] font-medium transition-colors ${
                  active ? "text-navy" : "text-muted hover:text-navy"
                }`}
              >
                <span
                  className={`border-b-2 pb-0.5 ${
                    active
                      ? "border-teal"
                      : "border-transparent group-hover:border-teal/40"
                  }`}
                >
                  {item.label}
                </span>
                {item.hasMenu ? (
                  <svg
                    className="h-3.5 w-3.5 text-muted"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hidden h-10 w-10 items-center justify-center rounded-full text-muted transition hover:bg-surface hover:text-navy md:inline-flex"
            aria-label="Search"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" />
            </svg>
          </button>

          <Link
            href="/contact"
            className="hidden items-center gap-1.5 rounded-md bg-teal px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-dark sm:inline-flex"
          >
            Book a Consultation
            <span aria-hidden>→</span>
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-navy lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-line bg-white px-5 py-4 lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2.5 text-base font-medium text-navy hover:bg-surface"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-md bg-teal px-4 py-3 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Book a Consultation →
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
