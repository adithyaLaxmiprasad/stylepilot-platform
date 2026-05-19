"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InputSelect({
  label,
  options,
  onChange,
}: {
  label: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (val: string) => {
    setSelected(val);
    onChange(val);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <label className="block text-[10px] uppercase tracking-[0.2em] text-white/70 mb-3 font-medium">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-white/[0.03] border ${isOpen ? "border-brand-gold/50 shadow-[0_0_15px_rgba(193,166,123,0.1)]" : "border-white/10"} rounded-[1.25rem] px-6 py-4 flex items-center justify-between outline-none transition-all duration-300 hover:bg-white/[0.06]`}
      >
        <span className={`text-sm tracking-[0.1em] ${selected ? "text-white" : "text-white/60 font-light"}`}>
          {selected || "Select an option"}
        </span>
        <svg
          className={`w-4 h-4 text-brand-gold transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -5, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute z-50 w-full mt-2 bg-[#161616] border border-white/10 rounded-[1.25rem] shadow-2xl shadow-black overflow-hidden"
          >
            <div className="max-h-60 overflow-y-auto py-2">
              {options.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => handleSelect(opt)}
                  className={`w-full text-left px-6 py-3 text-sm tracking-[0.1em] transition-colors ${
                    selected === opt ? "bg-brand-gold/10 text-brand-gold font-medium" : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
