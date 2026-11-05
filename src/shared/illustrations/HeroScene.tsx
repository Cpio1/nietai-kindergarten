import { CritterAt } from "./Critter";

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
