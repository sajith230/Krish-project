"use client";

import React from "react";
import { BRANDS } from "@/app/data/products";
import { Award, Sparkles } from "lucide-react";

interface BrandMarqueeProps {
  selectedBrand: string;
  onSelectBrand: (brand: string) => void;
}

export const BrandMarquee: React.FC<BrandMarqueeProps> = ({
  selectedBrand,
  onSelectBrand,
}) => {
  return (
    <section className="py-6 border-y border-white/5 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <h3 className="text-xs sm:text-sm font-black text-slate-200 tracking-wider uppercase flex items-center gap-1.5">
              Authorized Agent Brands
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            </h3>
          </div>
          {selectedBrand && (
            <button
              onClick={() => onSelectBrand("")}
              className="text-xs text-amber-400 hover:underline font-semibold"
            >
              Clear Filter ({selectedBrand})
            </button>
          )}
        </div>

        {/* Brand Badges Bar */}
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => onSelectBrand("")}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 border ${
              selectedBrand === ""
                ? "bg-emerald-500 text-slate-950 border-emerald-400 shadow-lg shadow-emerald-500/20"
                : "bg-slate-900/60 text-slate-300 border-white/10 hover:bg-slate-800/80 hover:text-white"
            }`}
          >
            All Brands
          </button>

          {BRANDS.map((b) => {
            const isSelected = selectedBrand === b.name;
            return (
              <button
                key={b.name}
                onClick={() => onSelectBrand(isSelected ? "" : b.name)}
                className={`px-5 py-2.5 rounded-xl font-black text-xs tracking-wider transition-all shrink-0 border flex items-center gap-2.5 ${
                  isSelected
                    ? "bg-slate-800 text-white border-emerald-400 shadow-lg shadow-emerald-500/20 scale-105"
                    : "bg-slate-900/60 text-slate-300 border-white/10 hover:border-emerald-500/30 hover:bg-slate-800/60"
                }`}
              >
                <span 
                  className="w-2.5 h-2.5 rounded-full inline-block shadow-sm" 
                  style={{ backgroundColor: b.color }} 
                />
                {b.logoText}
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};

