import React from 'react';

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-6 ${className}`}>
      {/* Icon Mark */}
      <div className="relative w-16 h-16 shrink-0 text-white">
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Outer Circle */}
          <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1.5" />
          
          {/* Ticks */}
          <line x1="50" y1="2" x2="50" y2="12" stroke="currentColor" strokeWidth="1.5" />
          <line x1="50" y1="88" x2="50" y2="98" stroke="currentColor" strokeWidth="1.5" />
          <line x1="2" y1="50" x2="12" y2="50" stroke="currentColor" strokeWidth="1.5" />
          <line x1="88" y1="50" x2="98" y2="50" stroke="currentColor" strokeWidth="1.5" />

          {/* Diagonal Ticks (Optional, from logo reference) */}
          <line x1="16" y1="16" x2="22" y2="22" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
          <line x1="84" y1="16" x2="78" y2="22" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
          <line x1="16" y1="84" x2="22" y2="78" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
          <line x1="84" y1="84" x2="78" y2="78" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />

          {/* S-Curve */}
          <path d="M 50 25 C 80 25, 80 50, 50 50 C 20 50, 20 75, 50 75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          
          {/* Gold Dots */}
          <circle cx="50" cy="25" r="4" className="fill-brand-gold" />
          <circle cx="50" cy="75" r="4" className="fill-brand-gold" />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col justify-center translate-y-1">
        <div className="flex items-start gap-3">
          <h1 className="text-[2.2rem] tracking-[0.25em] font-light text-white leading-none">
            STYLEPILOT
          </h1>
          <span className="text-brand-gold text-[10px] tracking-widest font-medium mt-1">AI</span>
        </div>
        
        {/* Separator Line */}
        <div className="w-full h-[1px] bg-brand-gold/40 my-[0.4rem]"></div>
        
        <p className="text-brand-gold text-[0.65rem] tracking-[0.4em] font-medium uppercase opacity-90">
          Personal Stylist
        </p>
      </div>
    </div>
  );
}
