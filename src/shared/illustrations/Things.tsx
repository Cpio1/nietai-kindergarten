import { CritterAt, type CritterKind } from "./Critter";

type MealId = "breakfast" | "lunch" | "snack" | "dinner";

const Steam = ({ x, y }: { x: number; y: number }) => (
  <g fill="none" stroke="#364F49" strokeOpacity=".55" strokeWidth="3" strokeLinecap="round">
    <path className="anim-steam" d={`M${x - 11} ${y} q-5 -7 0 -13 q5 -6 0 -13`} />
    <path className="anim-steam delay-2" d={`M${x} ${y - 3} q-5 -7 0 -13 q5 -6 0 -13`} />
    <path className="anim-steam delay-3" d={`M${x + 11} ${y} q-5 -7 0 -13 q5 -6 0 -13`} />
  </g>
);

const meals: Record<MealId, React.ReactNode> = {
  breakfast: (
    <>
      <Steam x={50} y={36} />
      <ellipse cx="50" cy="44" rx="33" ry="9" fill="#FFE29A" />
      <circle cx="40" cy="43" r="4" fill="#FF8F78" />
      <circle cx="58" cy="42" r="3.4" fill="#1EAA91" />
      <path d="M17 45 H83 C83 66 70 80 50 80 C30 80 17 66 17 45Z" fill="#1EAA91" />
      <path d="M26 56 Q50 64 74 56" fill="none" stroke="#fff" strokeOpacity=".55" strokeWidth="3" strokeLinecap="round" />
      <rect x="37" y="79" width="26" height="6" rx="3" fill="#17917B" />
    </>
  ),
  lunch: (
    <>
      <Steam x={50} y={34} />
      <rect x="24" y="35" width="52" height="8" rx="4" fill="#E57C63" />
      <rect x="45" y="29" width="10" height="7" rx="3" fill="#E57C63" />
      <path d="M20 44 H80 V66 C80 76 72 82 62 82 H38 C28 82 20 76 20 66Z" fill="#FF9B82" />
      <rect x="10" y="50" width="11" height="8" rx="4" fill="#E57C63" />
      <rect x="79" y="50" width="11" height="8" rx="4" fill="#E57C63" />
      <circle cx="38" cy="62" r="4" fill="#FFF8EC" />
      <circle cx="50" cy="66" r="4" fill="#F8C65C" />
      <circle cx="62" cy="61" r="4" fill="#FFF8EC" />
    </>
  ),
  snack: (
    <>
      <path d="M52 30 C52 22 58 16 66 16 C66 24 60 30 52 30Z" fill="#1EAA91" />
      <path d="M50 34 C38 24 18 30 18 52 C18 72 32 86 42 86 C46 86 48 84 50 84 C52 84 54 86 58 86 C68 86 82 72 82 52 C82 30 62 24 50 34Z" fill="#FF8F78" />
      <path d="M50 34 Q48 28 49 22" fill="none" stroke="#A5704A" strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="33" cy="50" rx="5" ry="9" fill="#fff" opacity=".5" transform="rotate(16 33 50)" />
      <circle cx="42" cy="62" r="3" fill="#364F49" />
      <circle cx="58" cy="62" r="3" fill="#364F49" />
      <path d="M45 69 Q50 74 55 69" fill="none" stroke="#364F49" strokeWidth="2.4" strokeLinecap="round" />
    </>
  ),
  dinner: (
    <>
      <ellipse cx="50" cy="56" rx="40" ry="30" fill="#F8C65C" />
      <ellipse cx="50" cy="54" rx="29" ry="20" fill="#FFF8EC" />
      <path d="M58 44 L38 64 C34 68 30 62 33 58 L52 40 C55 37 61 41 58 44Z" fill="#FF9D4D" />
      <path d="M57 42 C60 34 66 32 70 34 C68 38 66 40 62 42 M58 44 C64 42 70 44 72 48" fill="none" stroke="#1EAA91" strokeWidth="4" strokeLinecap="round" />
      <circle cx="62" cy="60" r="6.5" fill="#6AD67C" />
      <circle cx="42" cy="46" r="4.5" fill="#FF8F78" />
    </>
  ),
};

export function MealIcon({ meal, className }: { meal: MealId; className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" focusable="false">
      {meals[meal]}
    </svg>
  );
}

/** Воздушный шар со зверёнком: одна группа на иллюстрации раздела «Топтар». */
export function Balloon({
  critter,
  stripe,
  number,
  className,
}: {
  critter: CritterKind;
  stripe: string;
  number: number;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 160 276" className={className} aria-hidden="true" focusable="false">
      <path d="M80 6 C36 6 10 40 10 78 C10 118 52 146 66 170 H94 C108 146 150 118 150 78 C150 40 124 6 80 6Z" fill={stripe} />
      <path d="M80 6 C60 6 44 40 44 78 C44 118 62 146 72 170 H88 C98 146 116 118 116 78 C116 40 100 6 80 6Z" fill="#fff" fillOpacity=".62" />
      <ellipse cx="46" cy="50" rx="8" ry="16" fill="#fff" opacity=".55" transform="rotate(24 46 50)" />
      <text
        x="80"
        y="98"
        textAnchor="middle"
        fontSize="46"
        fontWeight="800"
        fill="#0F2B25"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {number}
      </text>
      <path d="M68 170 L46 232 M92 170 L114 232" stroke="#0F2B25" strokeWidth="2.5" />
      <CritterAt kind={critter} x={43} y={170} size={74} />
      <path d="M44 232 H116 L110 264 C109 270 105 272 100 272 H60 C55 272 51 270 50 264Z" fill="#A5704A" />
      <path d="M42 232 H118" stroke="#7E5234" strokeWidth="7" strokeLinecap="round" />
    </svg>
  );
}

/** Папка с листами для раздела «Құжаттар». */
export function FolderArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 280" className={className} aria-hidden="true" focusable="false">
      <g className="anim-float" style={{ transformOrigin: "160px 120px" }}>
        <g transform="rotate(-11 110 90)">
          <rect x="62" y="24" width="112" height="150" rx="14" fill="#FFB5A2" />
          <rect x="78" y="48" width="74" height="9" rx="4.5" fill="#fff" />
          <rect x="78" y="68" width="56" height="9" rx="4.5" fill="#fff" fillOpacity=".75" />
        </g>
      </g>
      <g className="anim-float delay-2" style={{ animationDuration: "6s" }}>
        <g transform="rotate(8 200 90)">
          <rect x="146" y="14" width="118" height="160" rx="14" fill="#FFF8EC" />
          <circle cx="178" cy="50" r="15" fill="#1EAA91" />
          <path d="M171 50 L176 56 L186 44" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="164" y="80" width="82" height="9" rx="4.5" fill="#364F49" fillOpacity=".3" />
          <rect x="164" y="100" width="66" height="9" rx="4.5" fill="#364F49" fillOpacity=".3" />
        </g>
      </g>
      <path d="M30 96 C30 84 38 76 50 76 H112 C120 76 125 80 130 87 L139 100 H270 C282 100 290 108 290 120 V240 C290 256 280 266 264 266 H56 C40 266 30 256 30 240Z" fill="#17917B" />
      <path d="M22 142 C20 128 30 120 42 120 H278 C290 120 300 128 298 142 L288 244 C286 258 278 266 264 266 H56 C42 266 34 258 32 244Z" fill="#1EAA91" />
      <circle cx="134" cy="184" r="5" fill="#0F2B25" />
      <circle cx="186" cy="184" r="5" fill="#0F2B25" />
      <path d="M144 202 Q160 216 176 202" fill="none" stroke="#0F2B25" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

export function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false" fill="currentColor">
      <path d="M6.6 2.9c.6-.5 1.5-.4 2 .2l2.1 2.6c.4.5.5 1.2.1 1.8L9.6 9.4a.9.9 0 0 0 0 .9 15 15 0 0 0 4.1 4.1c.3.2.6.2.9 0l1.9-1.2c.6-.4 1.3-.3 1.8.1l2.6 2.1c.6.5.7 1.4.2 2l-1.3 1.7c-.7.9-1.9 1.4-3 1.1C10.300 19.100 4.900 13.700 3.800 7.200c-.2-1.100.2-2.300 1.100-3z" />
    </svg>
  );
}

export function PinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false" fill="currentColor">
      <path d="M12 2a8 8 0 0 0-8 8c0 5.400 6.500 11.100 7.300 11.800.4.300 1 .3 1.400 0C13.500 21.100 20 15.400 20 10a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
    </svg>
  );
}

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
