import { CritterAt } from "./Critter";

/** Иллюстрация на первом экране: показывается, если фото main-page ещё не добавлено. */
export function HeroScene({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 560" className={className} aria-hidden="true" focusable="false">
      <defs>
        <clipPath id="hero-blob">
          <path d="M300 18 C430 6 556 76 584 214 C610 346 548 486 410 530 C284 570 118 548 50 430 C-14 318 6 164 104 88 C160 44 226 24 300 18Z" />
        </clipPath>
      </defs>

      <g clipPath="url(#hero-blob)">
        <rect width="600" height="560" fill="#1EAA91" />
        <circle cx="470" cy="130" r="58" fill="#F8C65C" />
        <circle cx="470" cy="130" r="86" fill="#F8C65C" opacity=".28" />
        <g className="anim-drift" fill="#FFF8EC">
          <path d="M90 170 C70 170 62 152 74 142 C78 124 106 120 116 134 C132 126 152 136 150 152 C162 154 164 170 150 170Z" />
          <path d="M270 96 C256 96 250 84 258 76 C262 62 282 60 290 70 C302 64 316 72 314 84 C322 86 324 96 314 96Z" opacity=".9" />
        </g>

        <path d="M-10 400 C100 320 220 330 320 380 C430 436 520 410 620 350 V580 H-10Z" fill="#7BD8A0" />
        <path d="M-10 462 C120 410 250 424 360 462 C470 500 540 486 620 450 V580 H-10Z" fill="#F8C65C" />

        <g>
          <rect x="192" y="234" width="222" height="168" rx="20" fill="#FFF8EC" />
          <path d="M170 248 L303 148 L436 248 Q441 258 430 258 H176 Q165 258 170 248Z" fill="#FF8F78" />
          <circle cx="303" cy="214" r="23" fill="#F8C65C" />
          <path d="M303 196 V214 L316 222" fill="none" stroke="#364F49" strokeWidth="4" strokeLinecap="round" />
          <path d="M274 402 V336 C274 294 332 294 332 336 V402Z" fill="#1EAA91" />
          <circle cx="320" cy="360" r="4" fill="#F8C65C" />
          <rect x="212" y="284" width="44" height="44" rx="14" fill="#8FDCF0" stroke="#F8C65C" strokeWidth="5" />
          <rect x="350" y="284" width="44" height="44" rx="14" fill="#8FDCF0" stroke="#FFB5A2" strokeWidth="5" />
        </g>

        <g>
          <rect x="108" y="346" width="12" height="60" rx="6" fill="#A5704A" />
          <circle cx="114" cy="324" r="42" fill="#17917B" />
          <circle cx="92" cy="340" r="26" fill="#1EAA91" />
          <circle cx="102" cy="310" r="6" fill="#FFB5A2" />
          <circle cx="132" cy="334" r="6" fill="#F8C65C" />
          <rect x="482" y="348" width="12" height="58" rx="6" fill="#A5704A" />
          <circle cx="488" cy="330" r="36" fill="#17917B" />
          <circle cx="506" cy="344" r="22" fill="#1EAA91" />
        </g>
      </g>

      <g className="anim-float">
        <CritterAt kind="bunny" x={70} y={414} size={108} />
      </g>
      <g className="anim-float delay-2" style={{ animationDuration: "6s" }}>
        <CritterAt kind="bear" x={230} y={430} size={118} />
      </g>
      <g className="anim-float delay-1" style={{ animationDuration: "8s" }}>
        <CritterAt kind="chick" x={410} y={420} size={100} />
      </g>
    </svg>
  );
}

/** Сцена для раздела «Біз туралы», если main-page2 ещё не добавлен. */
export function AboutScene({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 500 400" className={className} aria-hidden="true" focusable="false">
      <defs>
        <clipPath id="about-blob">
          <path d="M78 74 C150 -8 340 -14 430 62 C520 138 506 300 400 356 C296 410 110 402 44 300 C2 234 26 132 78 74Z" />
        </clipPath>
      </defs>
      <g clipPath="url(#about-blob)">
        <rect width="500" height="400" fill="#FFB5A2" />
        <circle cx="388" cy="96" r="46" fill="#F8C65C" />
        <path d="M0 300 C100 250 200 260 280 290 C360 320 440 300 500 270 V400 H0Z" fill="#1EAA91" />
      </g>
      <g className="anim-float">
        <CritterAt kind="fox" x={70} y={170} size={130} />
      </g>
      <g className="anim-float delay-2" style={{ animationDuration: "6s" }}>
        <CritterAt kind="elephant" x={190} y={126} size={150} />
      </g>
      <g className="anim-float delay-1" style={{ animationDuration: "8s" }}>
        <CritterAt kind="frog" x={338} y={200} size={112} />
      </g>
    </svg>
  );
}
