"use client";

import React, { useState, useEffect } from "react";

type ImageUploadProps = {
  onSelect: React.Dispatch<React.SetStateAction<File[]>>;
};

export default function ImageUpload({ onSelect }: ImageUploadProps) {
  const [previews, setPreviews] = useState<{ url: string; name: string }[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      onSelect(filesArray);
      
      const newPreviews = filesArray.map(file => ({
        url: URL.createObjectURL(file),
        name: file.name
      }));
      setPreviews(newPreviews);
    } else {
      onSelect([]);
      setPreviews([]);
    }
  };

  useEffect(() => {
    return () => {
      previews.forEach(p => URL.revokeObjectURL(p.url));
    };
  }, [previews]);

  return (
    <div>
      <label className="block text-[10px] uppercase tracking-[0.2em] text-white/70 mb-4 font-medium">
        Upload Wardrobe
      </label>

      {previews.length > 0 ? (
        <div className="mb-2">
          <div className="grid grid-cols-4 gap-4 mb-4">
            {previews.map((preview, idx) => (
              <div key={idx} className="relative aspect-square rounded-[1rem] overflow-hidden border border-white/10 group bg-brand-black shadow-lg">
                <img src={preview.url} alt={preview.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
            <label htmlFor="upload-more" className="aspect-square rounded-[1rem] border border-dashed border-white/20 flex flex-col items-center justify-center cursor-pointer hover:border-brand-gold hover:bg-brand-gold/5 transition-all duration-300 group">
              <span className="text-2xl text-white/40 group-hover:text-brand-gold mb-1 font-light transition-colors">+</span>
              <input type="file" id="upload-more" multiple className="hidden" accept="image/*" onChange={(e) => {
                 if(e.target.files) {
                   const newFiles = Array.from(e.target.files);
                   onSelect(prev => [...prev, ...newFiles]);
                   const newPreviews = newFiles.map(file => ({
                     url: URL.createObjectURL(file),
                     name: file.name
                   }));
                   setPreviews(prev => [...prev, ...newPreviews]);
                 }
              }} />
            </label>
          </div>
          <button type="button" onClick={() => { setPreviews([]); onSelect([]); }} className="text-[10px] text-white/30 hover:text-brand-gold transition-colors uppercase tracking-[0.2em] font-medium border-b border-transparent hover:border-brand-gold pb-0.5">
             Clear Selection
          </button>
        </div>
      ) : (
        <div className="border border-dashed border-white/10 rounded-[2rem] p-12 text-center hover:border-brand-gold/50 hover:bg-white/[0.02] transition-all duration-500 group">
          <input
            type="file"
            className="hidden"
            id="upload"
            accept="image/*"
            multiple
            onChange={handleChange}
          />
          <label htmlFor="upload" className="cursor-pointer block w-full h-full">
            <div className="mx-auto h-16 w-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:border-brand-gold/30 transition-all duration-500">
              <svg className="w-6 h-6 text-white/40 group-hover:text-brand-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v16m8-8H4"></path></svg>
            </div>
            <p className="text-white/80 text-sm font-light tracking-wide group-hover:text-white transition-colors">
              Add your clothing items
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mt-3 group-hover:text-white/40 transition-colors">
              Select multiple images (JPG/PNG)
            </p>
          </label>
        </div>
      )}
    </div>
  );
}