"use client";

import React from "react";
import Image from "next/image";
import { STORE_INFO } from "@/app/data/products";
import { generateWhatsAppGeneralLink } from "@/app/utils/whatsapp";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Zap, 
  ShieldCheck, 
  Truck, 
  CreditCard,
  Heart,
  Sparkles
} from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#04060d] border-t border-white/10 pt-16 pb-8 px-4 sm:px-6 lg:px-8 text-slate-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        
        {/* Col 1: Store Branding & Tagline */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-amber-400/60 shadow-lg">
              <Image src="/logo.jpg" alt="Krish Logo" fill className="object-cover" />
            </div>
            <div>
              <h3 className="font-black text-xl text-white tracking-tight">KRISH</h3>
              <p className="text-[10px] tracking-widest uppercase font-bold text-amber-400">
                Online Shopping
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            {STORE_INFO.tagline}
          </p>
          <p className="text-xs text-slate-400">
            {STORE_INFO.sloganEnglish}
          </p>
          <div className="pt-2">
            <a
              href={generateWhatsAppGeneralLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold shadow-lg"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp: 0704220000</span>
            </a>
          </div>
        </div>

        {/* Col 2: Store Information */}
        <div className="space-y-4">
          <h4 className="text-xs font-black text-white uppercase tracking-wider flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
            Store Location & Contact
          </h4>
          <ul className="space-y-3 text-xs">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white">Address:</span>
                <p className="text-slate-300">{STORE_INFO.address}</p>
              </div>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <span className="font-semibold text-white">Hotline / WhatsApp:</span>
                <a href={`tel:${STORE_INFO.phone}`} className="block text-amber-400 font-bold hover:underline">
                  {STORE_INFO.phone} (+94 70 422 0000)
                </a>
              </div>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
              <div>
                <span className="font-semibold text-white">Email:</span>
                <a href={`mailto:${STORE_INFO.email}`} className="block text-slate-300 hover:text-amber-400">
                  {STORE_INFO.email}
                </a>
              </div>
            </li>
            <li className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <span className="font-semibold text-white">Operating Hours:</span>
                <p className="text-emerald-400 font-bold">{STORE_INFO.hours}</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Col 3: Product Categories */}
        <div className="space-y-4">
          <h4 className="text-xs font-black text-white uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            Popular Categories
          </h4>
          <ul className="space-y-2 text-xs text-slate-400">
            <li>
              <a href="#catalog" className="hover:text-emerald-400 transition-colors">
                Smart TVs & Google TVs (Sony, LG, Hisense)
              </a>
            </li>
            <li>
              <a href="#catalog" className="hover:text-emerald-400 transition-colors">
                Washing Machines (LG Inverter, Samsung, Abans)
              </a>
            </li>
            <li>
              <a href="#catalog" className="hover:text-emerald-400 transition-colors">
                Refrigerators & Freezers
              </a>
            </li>
            <li>
              <a href="#catalog" className="hover:text-emerald-400 transition-colors">
                Gas Stoves & Ovens
              </a>
            </li>
            <li>
              <a href="#catalog" className="hover:text-emerald-400 transition-colors">
                Digital Air Fryers & Mixers
              </a>
            </li>
            <li>
              <a href="#catalog" className="hover:text-emerald-400 transition-colors">
                Instant Shower Water Heaters
              </a>
            </li>
            <li>
              <a href="#catalog" className="hover:text-emerald-400 transition-colors">
                Air Conditioners & Cooling Fans
              </a>
            </li>
          </ul>
        </div>

        {/* Col 4: Trust & Guarantees */}
        <div className="space-y-4">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">
            Why Shop With Us
          </h4>
          <div className="space-y-3 text-xs">
            <div className="p-3 rounded-2xl glass-card border border-white/10 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <span className="font-bold text-white">Genuine Company Warranty</span>
                <p className="text-[11px] text-slate-400">1 to 10 year official agent warranty</p>
              </div>
            </div>

            <div className="p-3 rounded-2xl glass-card border border-white/10 flex items-center gap-3">
              <Truck className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <span className="font-bold text-white">Fast Doorstep Delivery</span>
                <p className="text-[11px] text-slate-400">Safe islandwide courier dispatch</p>
              </div>
            </div>

            <div className="p-3 rounded-2xl glass-card border border-white/10 flex items-center gap-3">
              <CreditCard className="w-5 h-5 text-indigo-400 shrink-0" />
              <div>
                <span className="font-bold text-white">Cash on Delivery & Transfer</span>
                <p className="text-[11px] text-slate-400">Flexible payment choices</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Legal & Credit */}
      <div className="max-w-7xl mx-auto pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <p>© {new Date().getFullYear()} Krish Online Shopping. All Rights Reserved. 19/10, Delkanda, Nugegoda, Sri Lanka.</p>
        <p className="flex items-center gap-1">
          Crafted for excellence <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" /> in Sri Lanka.
        </p>
      </div>
    </footer>
  );
};

