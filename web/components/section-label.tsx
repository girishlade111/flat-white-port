import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export function SectionLabel({ children, className, light }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.05em]",
        light ? "text-flatwhite-accent" : "text-text-muted",
        className
      )}
    >
      {!light && <span className="text-text-secondary">/</span>}
      {children}
    </span>
  );
}
