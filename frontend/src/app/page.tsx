"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SkinToneGuide from "../components/SkinToneGuide";
import ImageUpload from "../components/ImageUpload";
import InputSelect from "../components/InputSelect";
import TextArea from "../components/TextArea";
import PrimaryButton from "../components/PrimaryButton";
import ColorPicker from "../components/ColorPicker";
import OutfitCard, { Outfit } from "../components/OutfitCard";
import Logo from "../components/Logo";
import ClothesLoader from "../components/ClothesLoader";
import Footer from "../components/Footer";
import { generateOutfit } from "../lib/api";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

export default function Home() {
  const [images, setImages] = useState<File[]>([]);
  const [skinTone, setSkinTone] = useState("Medium");
  const [occasion, setOccasion] = useState("Casual");
  const [preferredColor, setPreferredColor] = useState("#000000");
  const [aiPrompt, setAiPrompt] = useState("");
  const [result, setResult] = useState<Outfit[]>([]);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<Outfit[]>([]);

  const handleGenerate = async () => {
    if (images.length === 0) {
      alert("Please upload at least one image of your clothing.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      images.forEach((img) => formData.append("images", img));
      formData.append("skinTone", skinTone);
      formData.append("occasion", occasion);
      formData.append("preferredColor", preferredColor);
      formData.append("aiPrompt", aiPrompt);

      const data = await generateOutfit(formData);
      if (data.success && data.outfits) {
        setResult(data.outfits);
        
        // Add the first outfit of this generation to history
        setHistory(prev => {
          const newHistory = [data.outfits[0], ...prev];
          // FIFO: keep only the last 5
          if (newHistory.length > 5) {
            newHistory.pop();
          }
          return newHistory;
        });

      } else {
        alert(data.error || "Failed to generate outfits");
      }
    } catch (error) {
      alert("Something went wrong. Check backend.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen">
      {/* HEADER SECTION */}
      <motion.header 
        initial="hidden" animate="visible" variants={fadeUp}
        className="pt-16 pb-12 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center justify-center border-b border-white/5 relative z-10"
      >
        <Logo className="scale-75 md:scale-100" />
      </motion.header>

      {/* MAIN CONTENT GRID */}
      <motion.div 
        initial="hidden" animate="visible" variants={staggerContainer}
        className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10"
      >
        
        {/* LEFT COLUMN: CONTROLS */}
        <motion.div variants={fadeUp} className="lg:col-span-5 space-y-12">
          
          <section>
            <ImageUpload onSelect={setImages} />
          </section>

          <section className="space-y-10 bg-white/[0.02] p-10 rounded-[2rem] border border-white/5 backdrop-blur-md shadow-2xl">
            <div>
              <SkinToneGuide selectedTone={skinTone} onChange={setSkinTone} />
            </div>

            <div className="h-px w-full bg-white/5"></div>

            <InputSelect
              label="Occasion"
              options={[
                "Casual",
                "Formal",
                "Streetwear",
                "Night Out",
                "Office",
                "Travel",
                "Avant-Garde",
                "Date Night",
              ]}
              onChange={setOccasion}
            />

            <div className="h-px w-full bg-white/5"></div>

            <ColorPicker selectedColor={preferredColor} onChange={setPreferredColor} />

            <div className="h-px w-full bg-white/5"></div>

            <TextArea
              label="Style Vision"
              placeholder="Minimalist, tech-wear, vintage aesthetics, strictly monochromatic..."
              onChange={setAiPrompt}
            />
          </section>

          <div className="sticky bottom-8 z-50 pt-4">
             <PrimaryButton
              text={loading ? "Curating Outfits..." : "Generate Looks"}
              onClick={handleGenerate}
              disabled={loading || images.length === 0}
            />
          </div>
        </motion.div>

        {/* RIGHT COLUMN: RESULTS */}
        <motion.div variants={fadeUp} className="lg:col-span-7">
          <div className="h-full rounded-[2rem] bg-white/[0.01] border border-white/5 p-8 md:p-12 relative overflow-hidden">
            <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold mb-10 flex items-center gap-4">
              Curated Selection
              <span className="flex-1 h-px bg-brand-gold/20"></span>
            </h2>
            
            {result.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-[600px] text-center">
                {loading ? (
                  <ClothesLoader />
                ) : (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 0.5 }} className="max-w-sm">
                    <svg className="w-20 h-20 mx-auto mb-8 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    <p className="text-white/60 font-light leading-relaxed text-lg">
                      Your personalized outfit recommendations will appear here. Upload items and set your preferences to begin.
                    </p>
                  </motion.div>
                )}
              </div>
            ) : (
              <motion.div 
                initial="hidden" animate="visible" variants={staggerContainer}
                className="space-y-8"
              >
                {result.map((outfit, index) => (
                  <motion.div key={index} variants={fadeUp}>
                    <OutfitCard outfit={outfit} index={index} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>

      {/* STYLE ARCHIVE (HISTORY) */}
      <AnimatePresence>
        {history.length > 0 && (
          <motion.section 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-white/5 mt-12 relative z-10"
          >
            <h2 className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white/50 mb-10 flex items-center gap-4">
              Style Archive
              <span className="flex-1 h-px bg-white/5"></span>
            </h2>
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar">
              {history.map((outfit, index) => (
                <div key={index} className="snap-start shrink-0 w-[85vw] md:w-[400px] lg:w-[350px] opacity-80 hover:opacity-100 transition-opacity">
                  <OutfitCard outfit={outfit} index={index} />
                </div>
              ))}
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}


