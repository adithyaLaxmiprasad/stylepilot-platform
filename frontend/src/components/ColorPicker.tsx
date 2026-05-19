"use client";

import React from "react";

type ColorPickerProps = {
  selectedColor: string;
  onChange: (color: string) => void;
};

const LUXURY_COLORS = [
  { name: "Midnight Black", hex: "#000000" },
  { name: "Slate Grey", hex: "#4a4a4a" },
  { name: "Cream White", hex: "#f5f5f0" },
  { name: "Olive Drab", hex: "#4b5320" },
  { name: "Navy Blue", hex: "#0a1f3f" },
  { name: "Burgundy Wine", hex: "#5a0f1c" },
  { name: "Camel Brown", hex: "#c19a6b" },
];

export default function ColorPicker({ selectedColor, onChange }: ColorPickerProps) {
  return (
    <div className="space-y-4">
      <label className="block text-[10px] uppercase tracking-[0.2em] text-white/70 font-medium">
        Preferred Palette
      </label>
      <div className="flex flex-wrap gap-4">
        {LUXURY_COLORS.map((color) => {
          const isSelected = selectedColor === color.hex;
          return (
            <button
              key={color.hex}
              onClick={() => onChange(color.hex)}
              type="button"
              className={`group relative h-10 w-10 rounded-full transition-all duration-300 ease-out flex items-center justify-center ${
                isSelected ? "ring-1 ring-brand-gold ring-offset-4 ring-offset-brand-black scale-110 shadow-[0_0_15px_rgba(193,166,123,0.3)]" : "hover:scale-105 hover:ring-1 hover:ring-white/20"
              }`}
              style={{ backgroundColor: color.hex }}
              title={color.name}
            >
              <span className="sr-only">{color.name}</span>
              {isSelected && (
                <span className="absolute inset-0 m-auto h-1.5 w-1.5 rounded-full bg-brand-gold mix-blend-difference" />
              )}
            </button>
          );
        })}
      </div>
      <div className="flex items-center gap-4 mt-6">
        <span className="text-[10px] text-white/30 uppercase tracking-[0.2em]">Custom Hex</span>
        <input
          type="color"
          value={selectedColor}
          onChange={(e) => onChange(e.target.value)}
          className="h-8 w-12 cursor-pointer rounded-full bg-transparent border border-white/10"
        />
      </div>
    </div>
  );
}
