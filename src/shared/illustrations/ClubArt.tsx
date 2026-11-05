import { CritterAt } from "./Critter";

export type ClubId = "dance" | "taekwondo";

const Note = ({ x, y, color, className }: { x: number; y: number; color: string; className: string }) => (
  <g className={className} fill={color}>
    <ellipse cx={x} cy={y} rx="7" ry="5.4" transform={`rotate(-18 ${x} ${y})`} />
    <path d={`M${x + 5.5} ${y - 1} V${y - 25} Q${x + 12} ${y - 18} ${x + 18} ${y - 18}`} fill="none" stroke={color} strokeWidth="3.4" strokeLinecap="round" />
  </g>
);

/** Зайчик в пачке с нотами. */
function DanceArt() {
  return (
    <>
      <Note x={30} y={72} color="#0F2B25" className="anim-steam" />
      <Note x={184} y={52} color="#0F2B25" className="anim-steam delay-2" />
      <Note x={190} y={132} color="#FF8F78" className="anim-steam delay-3" />
      <g className="anim-sway" style={{ animationDuration: "5s" }}>
        <path d="M84 116 C66 104 52 92 44 74 M136 116 C154 104 168 92 176 74" fill="none" stroke="#FFF8EC" strokeWidth="10" strokeLinecap="round" />
        <path d="M94 158 L88 204 M126 158 L132 204" stroke="#FFF8EC" strokeWidth="10" strokeLinecap="round" />
        <path d="M80 206 H96 M124 206 H140" stroke="#FF8F78" strokeWidth="9" strokeLinecap="round" />
        <path d="M86 108 H134 L130 150 H90Z" fill="#FF8F78" />
        <path d="M56 158 C70 142 150 142 164 158 C170 170 156 170 150 165 C144 174 132 174 126 167 C120 175 100 175 94 167 C88 174 76 174 70 165 C64 170 50 170 56 158Z" fill="#FFB5A2" stroke="#FF8F78" strokeWidth="2.5" />
        <CritterAt kind="bunny" x={58} y={8} size={104} />
      </g>
    </>
  );
}

/** Мишка в добоке с чёрным поясом. */
function TaekwondoArt() {
  return (
    <>
      <g className="anim-float" style={{ animationDuration: "4s" }}>
        <path d="M188 76 C190 88 194 92 206 94 C194 96 190 100 188 112 C186 100 182 96 170 94 C182 92 186 88 188 76Z" fill="#F8C65C" />
        <path d="M24 38 C25 45 28 48 35 49 C28 50 25 53 24 60 C23 53 20 50 13 49 C20 48 23 45 24 38Z" fill="#FFF8EC" />
      </g>
      <g className="anim-sway" style={{ animationDuration: "6s" }}>
        <path d="M90 170 L82 204 M130 170 L138 204" stroke="#FFFFFF" strokeWidth="20" strokeLinecap="round" />
        <path d="M78 206 H92 M128 206 H142" stroke="#D89C6B" strokeWidth="9" strokeLinecap="round" />
        <path d="M82 118 C70 122 58 126 46 130" fill="none" stroke="#FFFFFF" strokeWidth="18" strokeLinecap="round" />
        <path d="M138 118 C154 118 168 110 178 94" fill="none" stroke="#FFFFFF" strokeWidth="18" strokeLinecap="round" />
        <circle cx="42" cy="132" r="10" fill="#D89C6B" />
        <circle cx="180" cy="90" r="10" fill="#D89C6B" />
        <path d="M78 106 H142 L136 176 H84Z" fill="#FFFFFF" />
        <path d="M94 104 L110 138 L126 104" fill="none" stroke="#0F2B25" strokeWidth="5" strokeLinejoin="round" />
        <rect x="80" y="144" width="60" height="11" rx="4" fill="#0F2B25" />
        <path d="M110 150 L96 176 L104 178 L110 160 L116 178 L124 176Z" fill="#0F2B25" />
        <circle cx="110" cy="150" r="6.5" fill="#0F2B25" />
        <CritterAt kind="bear" x={60} y={6} size={100} />
      </g>
    </>
  );
}

export function ClubArt({ club, className }: { club: ClubId; className?: string }) {
  return (
    <svg viewBox="0 0 220 220" className={className} aria-hidden="true" focusable="false">
      {club === "dance" ? <DanceArt /> : <TaekwondoArt />}
    </svg>
  );
}
