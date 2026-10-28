import Link from "next/link";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const word = variant === "light" ? "text-white" : "text-navy";
  const sub = variant === "light" ? "text-white/70" : "text-muted";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label="Comabys Consulting home"
    >
      <span className="relative flex h-8 w-8 shrink-0 items-center justify-center" aria-hidden>
        <span className="absolute left-0 top-1 h-6 w-3 rounded-[3px] bg-navy" />
        <span className="absolute left-2 top-0 h-6 w-3 rounded-[3px] bg-teal" />
      </span>
      <span className="leading-none">
        <span className={`block text-[1.05rem] font-bold tracking-tight ${word}`}>
          Comabys
        </span>
        <span
          className={`mt-0.5 block text-[0.6rem] font-semibold uppercase tracking-[0.18em] ${sub}`}
        >
          Consulting
        </span>
      </span>
    </Link>
  );
}
