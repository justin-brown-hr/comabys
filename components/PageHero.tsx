import type { ReactNode } from "react";
import { SectionLabel } from "./SectionLabel";

export function PageHero({
  label,
  title,
  description,
  children,
}: {
  label: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-line bg-navy">
      <div className="mx-auto max-w-[96rem] px-3 py-10 md:px-4 md:py-12 lg:px-5">
        <SectionLabel className="[&_p]:text-teal [&_span]:bg-teal">
          {label}
        </SectionLabel>
        <h1 className="mt-3 max-w-3xl text-2xl font-bold tracking-tight text-white md:text-3xl">
          {title}
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">
          {description}
        </p>
        {children}
      </div>
    </section>
  );
}
