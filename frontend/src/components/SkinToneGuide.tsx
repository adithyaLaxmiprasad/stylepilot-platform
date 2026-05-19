"use client";

import React from "react";

type SkinToneSelectorProps = {
  selectedTone: string;
  onChange: (tone: string) => void;
};

export default function SkinToneGuide({ selectedTone, onChange }: SkinToneSelectorProps) {
  const tones = [
    { label: "Fair", color: "#f1d5c9" },
    { label: "Light", color: "#e0ac8f" },
    { label: "Medium", color: "#c68642" },
    { label: "Dusky", color: "#8d5524" },
    { label: "DarkBrown", color: "#4D2A22" },
  ];

  return (
    <div className="space-y-5">
      <label className="block text-[10px] uppercase tracking-[0.2em] text-white/70 font-medium">
        Skin Tone Match
      </label>
      <div className="flex flex-wrap gap-6">
        {tones.map((tone) => {
          const isSelected = selectedTone === tone.label;
          return (
            <button
              key={tone.label}
              onClick={() => onChange(tone.label)}
              type="button"
              className={`group flex flex-col items-center gap-3 transition-all duration-300 ease-out`}
            >
              <div
                className={`relative h-12 w-12 rounded-full transition-all duration-300 flex items-center justify-center ${
                  isSelected ? "ring-1 ring-brand-gold ring-offset-4 ring-offset-brand-black scale-110 shadow-[0_0_15px_rgba(193,166,123,0.3)]" : "hover:scale-105 hover:ring-1 hover:ring-white/20"
                }`}
                style={{ backgroundColor: tone.color }}
              >
                {isSelected && (
                  <span className="absolute inset-0 m-auto h-2 w-2 rounded-full bg-brand-gold mix-blend-overlay opacity-80" />
                )}
              </div>
              <span className={`text-[9px] tracking-[0.2em] uppercase transition-colors ${isSelected ? "text-brand-gold font-medium" : "text-white/30 group-hover:text-white/60"}`}>
                {tone.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

