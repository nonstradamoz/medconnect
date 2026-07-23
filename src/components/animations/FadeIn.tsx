"use client";

export function FadeIn({ children, delay = 0, className = "", style = {} }: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
