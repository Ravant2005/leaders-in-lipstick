import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  yOffset?: number;
}

export function ScrollReveal({ children, className = "" }: ScrollRevealProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
