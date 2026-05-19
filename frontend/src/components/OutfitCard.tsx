import React from "react";

export type Outfit = {
  title: string;
  description: string;
  vibe: string;
};

type OutfitCardProps = {
  outfit: Outfit;
  index: number;
};

export default function OutfitCard({ outfit, index }: OutfitCardProps) {
  return (
    <div className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-brand-gold/30 transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-brand-gold/5 overflow-hidden">
      {/* Decorative background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      <div className="flex items-start justify-between mb-6 relative z-10">
        <div>
          <span className="inline-block px-4 py-1.5 mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-brand-gold bg-brand-gold/10 rounded-full border border-brand-gold/20">
            {outfit.vibe}
          </span>
          <h3 className="text-2xl font-light tracking-wide text-white group-hover:text-brand-gold transition-colors duration-500">
            {outfit.title}
          </h3>
        </div>
        <span className="text-white/10 font-mono text-4xl font-light opacity-50 group-hover:opacity-100 group-hover:text-brand-gold/20 transition-all duration-500">
          0{index + 1}
        </span>
      </div>
      
      <p className="text-sm text-white/60 leading-relaxed relative z-10 group-hover:text-white/80 transition-colors duration-500 font-light line-clamp-3">
        {outfit.description}
      </p>
    </div>
  );
}
