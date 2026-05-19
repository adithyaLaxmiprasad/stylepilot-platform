"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function InteractiveBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-40">
      <div className="absolute -top-[30%] -left-[10%] w-[80vw] h-[80vw] rounded-[100%] bg-brand-gold/15 blur-[120px] mix-blend-screen animate-aurora-1"></div>
      <div className="absolute top-[20%] -right-[20%] w-[70vw] h-[90vw] rounded-[100%] bg-white/5 blur-[150px] mix-blend-screen animate-aurora-2"></div>
      <div className="absolute -bottom-[40%] left-[20%] w-[90vw] h-[60vw] rounded-[100%] bg-brand-gold/10 blur-[130px] mix-blend-screen animate-aurora-3"></div>
      
      {/* Interactive cursor glow */}
      {isClient && (
        <motion.div
          className="absolute rounded-full bg-brand-gold/15 blur-[140px] mix-blend-screen"
          style={{ width: '40vw', height: '40vw', left: 0, top: 0 }}
          animate={{
            x: mousePosition.x - (window.innerWidth * 0.2),
            y: mousePosition.y - (window.innerWidth * 0.2),
          }}
          transition={{ type: "tween", ease: "easeOut", duration: 1.5 }}
        />
      )}
    </div>
  );
}
