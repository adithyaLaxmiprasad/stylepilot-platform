import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-16 mt-20 border-t border-white/5 relative z-10 bg-brand-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-[10px] tracking-[0.3em] text-white/50 uppercase font-light">
            Created by <span className="text-brand-gold font-medium">ADITHYA L</span>
          </p>
          <a 
            href="mailto:adithya.l386@gmail.com" 
            className="text-[10px] tracking-[0.2em] text-white/30 hover:text-brand-gold transition-colors mt-3 uppercase inline-block border-b border-transparent hover:border-brand-gold pb-1"
          >
            adithya.l386@gmail.com
          </a>
        </div>
        
        <div className="flex items-center gap-4 opacity-50">
           <span className="text-[9px] tracking-[0.3em] text-white/40 uppercase">StylePilot AI &copy; {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
