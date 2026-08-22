"use client";

import React from "react";
import Image from "next/image";
import { STORE_INFO } from "@/app/data/products";
import { generateWhatsAppGeneralLink } from "@/app/utils/whatsapp";
import { ShieldCheck, Truck, Zap, Award, MessageCircle, Sparkles } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-12 px-4 sm:px-6 lg:px-8">
      {/* Background Radial Glows */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Main Banner Showcase */}
        <div className="relative rounded-3xl overflow-hidden glass-card p-2 sm:p-3 group border border-white/10 shadow-2xl">
          <div className="relative aspect-[21/9] sm:aspect-[24/9] w-full rounded-2xl overflow-hidden">
            <Image
              src="/banner.jpg"
              alt="Krish Online Shopping Official Banner"
              fill
              className="object-cover object-center group-hover:scale-102 transition-transform duration-700"
              priority
            />
            {/* Ambient Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070a12] via-[#070a12]/50 to-transparent"></div>
          </div>

          {/* Banner Floating Glass Badge Overlay */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div className="glass-card p-4 sm:p-5 rounded-2xl border border-white/10 shadow-2xl max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-amber-400 text-slate-950 font-black text-[10px] uppercase px-2.5 py-0.5 rounded-md tracking-wider">
                  OFFICIAL STORE
                </span>
                <span className="text-emerald-400 text-xs font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  Sri Lanka's Best Deals
                </span>
              </div>
              
              {/* Sinhala Tagline */}
              <h1 className="text-lg sm:text-2xl md:text-3xl font-black text-white leading-tight">
                {STORE_INFO.tagline}
              </h1>
              
              {/* English Slogan */}
              <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
                {STORE_INFO.sloganEnglish}
              </p>
            </div>

            {/* Quick Order CTA */}
            <a
              href={generateWhatsAppGeneralLink("I saw your banner and want to inquire about available electric items.")}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-black flex items-center gap-2.5 shadow-2xl hover:scale-105 transition-all shrink-0"
            >
              <MessageCircle className="w-5 h-5 fill-white animate-bounce" />
              <span>Fast WhatsApp Order (0704220000)</span>
            </a>
          </div>
        </div>

        {/* 4 Feature Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          
          <div className="glass-card p-4 rounded-2xl flex items-center gap-3.5 border border-white/10 hover:border-emerald-500/40 transition-colors">
            <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 border border-emerald-500/20 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">Genuine Warranty</h4>
              <p className="text-[11px] text-slate-400">Up to 10 Year Guarantee</p>
            </div>
          </div>

          <div className="glass-card p-4 rounded-2xl flex items-center gap-3.5 border border-white/10 hover:border-amber-500/40 transition-colors">
            <div className="p-3 bg-amber-500/10 rounded-xl text-amber-400 border border-amber-500/20 shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">Island-wide Delivery</h4>
              <p className="text-[11px] text-slate-400">Direct to your doorstep</p>
            </div>
          </div>

          <div className="glass-card p-4 rounded-2xl flex items-center gap-3.5 border border-white/10 hover:border-emerald-500/40 transition-colors">
            <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 border border-emerald-500/20 shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">24/7 Always Open</h4>
              <p className="text-[11px] text-slate-400">Instant WhatsApp replies</p>
            </div>
          </div>

          <div className="glass-card p-4 rounded-2xl flex items-center gap-3.5 border border-white/10 hover:border-indigo-500/40 transition-colors">
            <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400 border border-indigo-500/20 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">Top Brands</h4>
              <p className="text-[11px] text-slate-400">LG, Samsung, Sony, Abans</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

