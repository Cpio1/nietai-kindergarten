type DecorProps = { className?: string; style?: React.CSSProperties };

/** Волна между разделами. Цвет задаётся через text-*. */
export function Wave({
  className,
  variant = "a",
  flip = false,
}: DecorProps & { variant?: "a" | "b" | "c"; flip?: boolean }) {
  const paths = {
    a: "M0 48 C180 96 360 96 560 58 C760 20 900 4 1100 34 C1250 56 1360 66 1440 48 V120 H0Z",
    b: "M0 72 C160 24 320 12 520 48 C720 84 860 104 1060 70 C1220 42 1340 30 1440 62 V120 H0Z",
    c: "M0 34 C240 90 420 104 720 66 C980 34 1200 18 1440 74 V120 H0Z",
  };
  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
      className={`pointer-events-none block w-full ${flip ? "rotate-180" : ""} ${className ?? ""}`}
    >
      <path d={paths[variant]} fill="currentColor" />
    </svg>
  );
}

export function Sun({ className, style }: DecorProps) {
  const rays = Array.from({ length: 12 }, (_, i) => i * 30);
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} aria-hidden="true" focusable="false">
      <g className="anim-spin" style={{ transformOrigin: "50px 50px" }}>
        {rays.map((angle) => (
          <rect key={angle} x="47" y="3" width="6" height="15" rx="3" fill="#F8C65C" transform={`rotate(${angle} 50 50)`} />
        ))}
      </g>
      <circle cx="50" cy="50" r="27" fill="#F8C65C" />
      <circle cx="41" cy="46" r="3" fill="#364F49" />
      <circle cx="59" cy="46" r="3" fill="#364F49" />
      <path d="M42 57 Q50 65 58 57" fill="none" stroke="#364F49" strokeWidth="2.6" strokeLinecap="round" />
      <circle cx="34" cy="55" r="4" fill="#FF8F78" opacity=".55" />
      <circle cx="66" cy="55" r="4" fill="#FF8F78" opacity=".55" />
    </svg>
  );
}

export function Cloud({ className, style }: DecorProps) {
  return (
    <svg viewBox="0 0 120 60" className={className} style={style} aria-hidden="true" focusable="false">
      <path d="M24 56 C8 56 2 44 8 34 C12 26 22 24 28 28 C32 12 56 6 68 20 C78 12 96 18 96 32 C110 30 118 44 110 52 C107 55 104 56 100 56Z" fill="#fff" />
    </svg>
  );
}

export function Flower({ className, style, color = "#FFB5A2" }: DecorProps & { color?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} style={style} aria-hidden="true" focusable="false">
      {[0, 72, 144, 216, 288].map((angle) => (
        <ellipse key={angle} cx="30" cy="14" rx="10" ry="13" fill={color} transform={`rotate(${angle} 30 30)`} />
      ))}
      <circle cx="30" cy="30" r="8" fill="#F8C65C" />
    </svg>
  );
}

export function Squiggle({ className, style, color = "#1EAA91" }: DecorProps & { color?: string }) {
  return (
    <svg viewBox="0 0 120 30" className={className} style={style} aria-hidden="true" focusable="false">
      <path d="M4 15 Q19 -5 34 15 T64 15 T94 15 T116 15" fill="none" stroke={color} strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

export function Star({ className, style, color = "#F8C65C" }: DecorProps & { color?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} style={style} aria-hidden="true" focusable="false">
      <path d="M20 3 C22 14 26 18 37 20 C26 22 22 26 20 37 C18 26 14 22 3 20 C14 18 18 14 20 3Z" fill={color} />
    </svg>
  );
}

/** Подпись над заголовком раздела. */
export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`mb-3 inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.14em] ${className ?? "text-accent"}`}>
      <Star className="h-4 w-4" color="currentColor" />
      {children}
    </p>
  );
}
