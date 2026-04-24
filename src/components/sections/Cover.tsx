"use client";

import PageNumber from "../ui/PageNumber";

export default function Cover() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center relative overflow-hidden bg-bg">
      <div className="z-10 flex flex-col items-center text-center text-fg">
        <span className="text-sm label-caps tracking-[0.4em] mb-4">
          U N R E A L &nbsp; E N G I N E
        </span>
        <h1 className="font-display font-bold text-[clamp(4rem,12vw,10rem)] leading-[0.85] tracking-tight dark:text-gold-gradient">
          PORTFOLIO
        </h1>
      </div>

      {/* Static SVG drawing */}
      <div className="absolute right-[-10%] md:right-[5%] top-1/2 -translate-y-1/2 w-[80vw] md:w-[50vw] max-w-[800px] opacity-20 pointer-events-none">
        <svg viewBox="0 0 800 600" className="w-full h-full stroke-fg fill-none" strokeWidth="1">
          <g>
            <path d="M100 500 L700 500" />
            <path d="M200 500 L200 200 L400 150 L600 250 L600 500" />
            <path d="M250 500 L250 250 L350 220 L350 500" />
            <path d="M450 500 L450 250 L550 300 L550 500" />
            <path d="M150 500 L150 400 L200 400" />
            <path d="M600 350 L650 350 L650 500" />
            <path d="M200 300 L600 300" strokeDasharray="4 4" opacity="0.5" />
            <path d="M200 400 L600 400" strokeDasharray="4 4" opacity="0.5" />
          </g>
        </svg>
      </div>

      <div className="absolute bottom-6 right-6 md:right-12 text-xs label-caps text-fg-muted text-right">
        MOHIT.S | SELECTED WORKS | 2022–2026
      </div>

      <PageNumber number="01" position="left" />

      {/* Static scroll indicator (simpler) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-themeborder overflow-hidden">
        <div className="w-full h-full bg-fg opacity-20" />
      </div>
    </div>
  );
}
