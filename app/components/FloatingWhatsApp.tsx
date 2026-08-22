"use client";

import React, { useState } from "react";
import { STORE_INFO } from "@/app/data/products";
import { generateWhatsAppGeneralLink } from "@/app/utils/whatsapp";
import { MessageCircle, X, Zap } from "lucide-react";

export const FloatingWhatsApp: React.FC = () => {
  const [tooltipOpen, setTooltipOpen] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 group">
      
      {/* Interactive Tooltip Card */}
      {tooltipOpen && (
        <div className="glass-card border border-emerald-500/40 p-4 rounded-2xl shadow-2xl max-w-xs text-xs text-slate-100 relative animate-float">
          <button 
            onClick={() => setTooltipOpen(false)}
            className="absolute top-2.5 right-2.5 text-slate-400 hover:text-white p-0.5"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-extrabold text-amber-400 flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              {STORE_INFO.hours}
            </span>
          </div>
          <p className="font-medium text-[11px] text-slate-300">
            Need help selecting an electric item? Order direct on WhatsApp!
          </p>
          <span className="text-[11px] text-emerald-400 font-bold block mt-1.5">
            📞 070 422 0000 (Instant Reply)
          </span>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={generateWhatsAppGeneralLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn p-4 rounded-full shadow-2xl flex items-center justify-center relative hover:scale-110 transition-transform duration-300 border-2 border-emerald-300/40"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#070a12]" />
      </a>

    </div>
  );
};

