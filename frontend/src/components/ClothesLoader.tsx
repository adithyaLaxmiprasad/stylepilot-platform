"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ICONS = [
  // Shirt
  <svg key="shirt" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16">
    <path d="M20.38 6.46l-4.11-2.93a2 2 0 00-2.3 0L12 4.91 10.03 3.5a2 2 0 00-2.3 0L3.62 6.46C2.69 7.12 3.16 8.5 4.3 8.5h1.7v10.5c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V8.5h1.7c1.14 0 1.61-1.38.68-2.04z" />
  </svg>,
  // Pants
  <svg key="pants" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16">
    <path d="M19 4H5c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h4.5c.83 0 1.5-.67 1.5-1.5V14h2v5.5c0 .83.67 1.5 1.5 1.5H19c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" />
  </svg>,
  // Dress
  <svg key="dress" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16">
    <path d="M12 2l-3.5 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2h-3.5L12 2z" />
  </svg>,
  // Sparkle
  <svg key="sparkle" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16">
    <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z" />
  </svg>
];

export default function ClothesLoader() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ICONS.length);
    }, 700);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }} 
      animate={{ opacity: 1, scale: 1 }} 
      className="space-y-8 flex flex-col items-center"
    >
      <div className="relative w-24 h-24 flex items-center justify-center">
        <div className="absolute inset-0 bg-brand-gold/10 blur-xl rounded-full"></div>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -5 }}
            transition={{ duration: 0.2 }}
            className="text-brand-gold relative z-10"
          >
            {ICONS[index]}
          </motion.div>
        </AnimatePresence>
      </div>
      <p className="text-brand-gold/70 animate-pulse tracking-[0.1em] font-light uppercase text-sm">
        Curating your look...
      </p>
    </motion.div>
  );
}
