export type CritterKind = "bear" | "bunny" | "chick" | "cat" | "frog" | "fox" | "elephant";

const INK = "#364F49";

function Face({ cx = 50, cy = 56, gap = 13, smile = true }: { cx?: number; cy?: number; gap?: number; smile?: boolean }) {
  return (
    <g>
      <circle cx={cx - gap} cy={cy} r="4.4" fill={INK} />
      <circle cx={cx + gap} cy={cy} r="4.4" fill={INK} />
      <circle cx={cx - gap + 1.4} cy={cy - 1.5} r="1.3" fill="#fff" />
      <circle cx={cx + gap + 1.4} cy={cy - 1.5} r="1.3" fill="#fff" />
      <circle cx={cx - gap - 7} cy={cy + 9} r="5" fill="#FF8F78" opacity=".55" />
      <circle cx={cx + gap + 7} cy={cy + 9} r="5" fill="#FF8F78" opacity=".55" />
      {smile && (
        <path d={`M${cx - 6} ${cy + 9} Q${cx} ${cy + 16} ${cx + 6} ${cy + 9}`} fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      )}
    </g>
  );
}

const bodies: Record<CritterKind, React.ReactNode> = {
  bear: (
    <>
      <circle cx="24" cy="28" r="14" fill="#C98B5B" />
      <circle cx="76" cy="28" r="14" fill="#C98B5B" />
      <circle cx="24" cy="28" r="7" fill="#FFB5A2" />
      <circle cx="76" cy="28" r="7" fill="#FFB5A2" />
      <circle cx="50" cy="56" r="36" fill="#D89C6B" />
      <ellipse cx="50" cy="68" rx="15" ry="12" fill="#FFF8EC" />
      <ellipse cx="50" cy="62" rx="5" ry="3.6" fill={INK} />
      <circle cx="36" cy="50" r="4.4" fill={INK} />
      <circle cx="64" cy="50" r="4.4" fill={INK} />
      <path d="M44 70 Q50 76 56 70" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />
    </>
  ),
  bunny: (
    <>
      <ellipse cx="34" cy="24" rx="10" ry="24" fill="#fff" stroke="#FFD9CE" strokeWidth="2" />
      <ellipse cx="66" cy="24" rx="10" ry="24" fill="#fff" stroke="#FFD9CE" strokeWidth="2" />
      <ellipse cx="34" cy="26" rx="4.6" ry="15" fill="#FFB5A2" />
      <ellipse cx="66" cy="26" rx="4.6" ry="15" fill="#FFB5A2" />
      <circle cx="50" cy="60" r="33" fill="#fff" stroke="#FFD9CE" strokeWidth="2" />
      <Face cy={58} />
      <path d="M46 62 L50 65 L54 62Z" fill="#FF8F78" />
    </>
  ),
  chick: (
    <>
      <path d="M44 22 Q46 10 50 20 Q54 8 56 22" fill="none" stroke="#F4A93A" strokeWidth="4" strokeLinecap="round" />
      <circle cx="50" cy="56" r="36" fill="#FFD76E" />
      <circle cx="37" cy="50" r="4.6" fill={INK} />
      <circle cx="63" cy="50" r="4.6" fill={INK} />
      <path d="M41 60 L50 72 L59 60 Q50 55 41 60Z" fill="#FF9D4D" />
      <circle cx="26" cy="62" r="5.5" fill="#FF8F78" opacity=".5" />
      <circle cx="74" cy="62" r="5.5" fill="#FF8F78" opacity=".5" />
    </>
  ),
  cat: (
    <>
      <path d="M20 44 L22 12 L46 28Z" fill="#8FA7B8" />
      <path d="M80 44 L78 12 L54 28Z" fill="#8FA7B8" />
      <path d="M26 34 L27 20 L38 28Z" fill="#FFB5A2" />
      <path d="M74 34 L73 20 L62 28Z" fill="#FFB5A2" />
      <circle cx="50" cy="56" r="35" fill="#A3BBCB" />
      <Face cy={54} />
      <path d="M47 58 L50 61 L53 58Z" fill="#FF8F78" />
      <path d="M14 58 L28 60 M14 68 L28 66 M86 58 L72 60 M86 68 L72 66" stroke={INK} strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  frog: (
    <>
      <circle cx="30" cy="30" r="15" fill="#58C96B" />
      <circle cx="70" cy="30" r="15" fill="#58C96B" />
      <circle cx="30" cy="28" r="9" fill="#fff" />
      <circle cx="70" cy="28" r="9" fill="#fff" />
      <circle cx="31" cy="29" r="4.8" fill={INK} />
      <circle cx="71" cy="29" r="4.8" fill={INK} />
      <ellipse cx="50" cy="60" rx="38" ry="31" fill="#6AD67C" />
      <path d="M30 62 Q50 82 70 62" fill="none" stroke={INK} strokeWidth="3.2" strokeLinecap="round" />
      <circle cx="22" cy="64" r="5" fill="#FF8F78" opacity=".6" />
      <circle cx="78" cy="64" r="5" fill="#FF8F78" opacity=".6" />
    </>
  ),
  fox: (
    <>
      <path d="M14 46 L18 10 L44 30Z" fill="#F08A4B" />
      <path d="M86 46 L82 10 L56 30Z" fill="#F08A4B" />
      <path d="M50 92 C22 88 12 64 14 42 C26 30 74 30 86 42 C88 64 78 88 50 92Z" fill="#F59A5B" />
      <path d="M50 92 C38 88 24 74 18 58 C30 56 42 62 50 72 C58 62 70 56 82 58 C76 74 62 88 50 92Z" fill="#FFF8EC" />
      <circle cx="36" cy="50" r="4.4" fill={INK} />
      <circle cx="64" cy="50" r="4.4" fill={INK} />
      <ellipse cx="50" cy="74" rx="5" ry="3.8" fill={INK} />
    </>
  ),
  elephant: (
    <>
      <ellipse cx="17" cy="50" rx="16" ry="23" fill="#8DB4D6" />
      <ellipse cx="83" cy="50" rx="16" ry="23" fill="#8DB4D6" />
      <ellipse cx="17" cy="50" rx="9" ry="15" fill="#FFB5A2" />
      <ellipse cx="83" cy="50" rx="9" ry="15" fill="#FFB5A2" />
      <circle cx="50" cy="50" r="31" fill="#A4C6E3" />
      <path d="M41 62 C41 76 44 92 55 94 C62 95 65 88 60 85 C55 85 53 80 59 62Z" fill="#A4C6E3" stroke="#8DB4D6" strokeWidth="1.5" />
      <circle cx="37" cy="46" r="4.4" fill={INK} />
      <circle cx="63" cy="46" r="4.4" fill={INK} />
      <circle cx="31" cy="58" r="5" fill="#FF8F78" opacity=".5" />
      <circle cx="69" cy="58" r="5" fill="#FF8F78" opacity=".5" />
    </>
  ),
};

export function Critter({ kind, className }: { kind: CritterKind; className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" focusable="false">
      {bodies[kind]}
    </svg>
  );
}

/** Вложенный вариант для составных SVG-сцен. */
export function CritterAt({ kind, x, y, size }: { kind: CritterKind; x: number; y: number; size: number }) {
  return (
    <svg x={x} y={y} width={size} height={size} viewBox="0 0 100 100" aria-hidden="true" overflow="visible">
      {bodies[kind]}
    </svg>
  );
}
