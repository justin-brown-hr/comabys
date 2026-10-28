import type { ReactNode } from "react";

export function SectionLabel({
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
