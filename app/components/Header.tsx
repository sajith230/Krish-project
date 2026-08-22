"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { STORE_INFO } from "@/app/data/products";
import { generateWhatsAppGeneralLink } from "@/app/utils/whatsapp";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Search, 
  ShoppingBag, 
  Zap, 
  MessageCircle,
  Menu,
  X,
  Sparkles
} from "lucide-react";

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  searchQuery,
  onSearchChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 glass-nav transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-slate-950 via-emerald-950/40 to-slate-950 text-xs py-2 px-4 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-slate-300">
          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
            <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 px-2.5 py-0.5 rounded-full font-semibold text-[11px] border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              {STORE_INFO.hours}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 hover:text-amber-400 transition-colors text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              {STORE_INFO.address}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <a 
              href={`mailto:${STORE_INFO.email}`} 
              className="hidden sm:flex items-center gap-1.5 hover:text-emerald-400 transition-colors text-slate-300"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              {STORE_INFO.email}
            </a>
            <a 
              href={`tel:${STORE_INFO.phone}`}
              className="flex items-center gap-1.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 px-3 py-0.5 rounded-full transition-all border border-emerald-500/30 font-bold"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              {STORE_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo & Brand Name */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-amber-400/60 shadow-lg shadow-amber-400/10 group-hover:scale-105 transition-transform duration-300">
              <Image 
                src="/logo.jpg" 
                alt="Krish Online Shopping Logo" 
                fill 
                className="object-cover" 
                priority
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-black text-xl tracking-tight text-white group-hover:text-amber-400 transition-colors">
                  KRISH
                </span>
                <span className="bg-amber-400/10 text-amber-400 text-[10px] font-bold px-1.5 py-0.5 rounded border border-amber-400/30">
                  STORE
                </span>
              </div>
              <p className="text-[10px] tracking-widest uppercase font-bold text-slate-400 flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 text-emerald-400" />
                Online Shopping
              </p>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-6">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search TV, Washing Machine, Fridge, Air Fryer, Water Heater..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full glass-input text-white placeholder-slate-400 text-xs sm:text-sm rounded-full pl-11 pr-10 py-2.5 focus:outline-none transition-all"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button 
                  onClick={() => onSearchChange("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            
            {/* WhatsApp Quick Order Header Button */}
            <a
              href={generateWhatsAppGeneralLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-lg"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Order</span>
            </a>

            {/* Cart Drawer Trigger */}
            <button
              onClick={onOpenCart}
              className="relative bg-slate-900/80 hover:bg-slate-800 text-white p-2.5 sm:px-4 sm:py-2 rounded-full border border-white/10 flex items-center gap-2 transition-all shadow-md active:scale-95 group"
              aria-label="View Shopping Cart"
            >
              <ShoppingBag className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline text-xs font-bold">Cart</span>
              {cartCount > 0 && (
                <span className="bg-emerald-500 text-slate-950 text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-white rounded-xl bg-slate-900/80 border border-white/10"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="mt-3 md:hidden">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search electric appliances..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full glass-input text-white placeholder-slate-400 text-xs rounded-full pl-10 pr-10 py-2 focus:outline-none"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="mt-3 py-4 px-4 glass-card rounded-2xl md:hidden space-y-4 shadow-2xl border border-white/10">
            <div className="text-xs text-amber-400 font-semibold flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
              {STORE_INFO.tagline}
            </div>
            <div className="pt-2 border-t border-white/10 flex flex-col gap-2.5">
              <a
                href={generateWhatsAppGeneralLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp (0704220000)
              </a>
              <div className="text-xs text-slate-300 space-y-2 pt-2">
                <p className="flex items-center gap-2 text-slate-300">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" /> {STORE_INFO.address}
                </p>
                <p className="flex items-center gap-2 text-slate-300">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" /> {STORE_INFO.email}
                </p>
                <p className="flex items-center gap-2 text-slate-300">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" /> {STORE_INFO.hours}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

