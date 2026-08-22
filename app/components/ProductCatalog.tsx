"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product, CATEGORIES } from "@/app/data/products";
import { generateWhatsAppItemLink } from "@/app/utils/whatsapp";
import { 
  Star, 
  ShieldCheck, 
  MessageCircle, 
  Eye, 
  ShoppingBag, 
  Zap, 
  Check,
  Tv,
  WashingMachine,
  Refrigerator,
  ChefHat,
  Flame,
  ShowerHead,
  Wind
} from "lucide-react";

interface ProductCatalogProps {
  products: Product[];
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  cartProductIds: string[];
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  onQuickView,
  onAddToCart,
  cartProductIds,
}) => {
  const [sortBy, setSortBy] = useState<"featured" | "rating">("featured");

  // Helper icon mapper for categories
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Tv": return <Tv className="w-4 h-4" />;
      case "WashingMachine": return <WashingMachine className="w-4 h-4" />;
      case "Refrigerator": return <Refrigerator className="w-4 h-4" />;
      case "ChefHat": return <ChefHat className="w-4 h-4" />;
      case "Flame": return <Flame className="w-4 h-4" />;
      case "ShowerHead": return <ShowerHead className="w-4 h-4" />;
      case "Wind": return <Wind className="w-4 h-4" />;
      default: return <Zap className="w-4 h-4" />;
    }
  };

  // Sort logic
  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <section id="catalog" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      
      {/* Header & Filter Controls */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2.5">
              <Zap className="w-7 h-7 text-amber-400 fill-amber-400" />
              Electrical Appliances Catalog
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Select any item to order or inquire directly via WhatsApp (+94 70 422 0000)
            </p>
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-semibold">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-slate-900 text-white text-xs font-semibold px-3.5 py-2 rounded-xl border border-white/10 focus:outline-none focus:border-emerald-500"
            >
              <option value="featured">Featured & Popular</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Category Pills Bar */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shrink-0 border ${
                  isActive
                    ? "bg-emerald-500 text-slate-950 border-emerald-400 shadow-lg shadow-emerald-500/25 scale-105"
                    : "bg-slate-900/60 text-slate-300 border-white/10 hover:bg-slate-800/80 hover:text-white"
                }`}
              >
                {getCategoryIcon(cat.icon)}
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Product Cards Grid */}
      {sortedProducts.length === 0 ? (
        <div className="text-center py-20 glass-card rounded-3xl p-8 border border-white/10">
          <Zap className="w-12 h-12 text-slate-600 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-slate-300">No products found</h3>
          <p className="text-xs text-slate-400 mt-1">Try selecting another category or clear your search query.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product) => {
            const isInCart = cartProductIds.includes(product.id);
            const waLink = generateWhatsAppItemLink(product);

            return (
              <div
                key={product.id}
                className="glass-card rounded-3xl p-4 flex flex-col justify-between group relative border border-white/10 hover:border-emerald-500/40 transition-all duration-300"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="bg-slate-900 text-emerald-400 font-extrabold text-[10px] px-2.5 py-1 rounded-full border border-emerald-500/30">
                      {product.brand}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {product.isPopular && (
                        <span className="bg-amber-400 text-slate-950 font-black text-[10px] px-2 py-0.5 rounded-full">
                          POPULAR
                        </span>
                      )}
                      {product.isNew && (
                        <span className="bg-emerald-500 text-slate-950 font-black text-[10px] px-2 py-0.5 rounded-full">
                          NEW
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Product Image Frame */}
                  <div 
                    onClick={() => onQuickView(product)}
                    className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#03060d] mb-4 cursor-pointer border border-white/10 group-hover:scale-102 transition-transform duration-300"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-1"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    
                    {/* Hover Quick View Trigger Overlay */}
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-slate-900/90 text-white text-xs font-bold px-3.5 py-2 rounded-full flex items-center gap-1.5 shadow-2xl border border-white/20">
                        <Eye className="w-3.5 h-3.5 text-amber-400" />
                        Quick View
                      </span>
                    </div>
                  </div>

                  {/* Rating & Product Title */}
                  <div className="flex items-center gap-1 mb-1 text-xs">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span className="font-bold text-slate-200">{product.rating}</span>
                    <span className="text-slate-400 text-[11px]">({product.reviewsCount} reviews)</span>
                  </div>

                  <h3 
                    onClick={() => onQuickView(product)}
                    className="font-bold text-sm text-slate-100 line-clamp-2 hover:text-emerald-400 transition-colors cursor-pointer mb-2 min-h-[2.5rem]"
                  >
                    {product.name}
                  </h3>

                  {/* Warranty info */}
                  <p className="text-[11px] text-slate-400 flex items-center gap-1.5 mb-3">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{product.warranty}</span>
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="pt-3 border-t border-white/10 space-y-2.5">

                  {/* WhatsApp Direct Order Button */}
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-btn w-full py-2.5 px-3 rounded-xl text-xs font-black flex items-center justify-center gap-2 shadow-lg group/wa"
                  >
                    <MessageCircle className="w-4 h-4 fill-white group-hover/wa:rotate-12 transition-transform" />
                    <span>⚡ Order on WhatsApp</span>
                  </a>

                  {/* Details & Cart Drawer row */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onQuickView(product)}
                      className="flex-1 py-2 px-2 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-xl text-[11px] font-bold border border-white/10 flex items-center justify-center gap-1 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 text-amber-400" />
                      Details
                    </button>

                    <button
                      onClick={() => onAddToCart(product)}
                      className={`flex-1 py-2 px-2 rounded-xl text-[11px] font-bold flex items-center justify-center gap-1 transition-all ${
                        isInCart
                          ? "bg-emerald-600 text-white border border-emerald-500"
                          : "bg-slate-800 hover:bg-slate-700 text-white border border-white/10"
                      }`}
                    >
                      {isInCart ? (
                        <>
                          <Check className="w-3.5 h-3.5" /> Added
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5" /> + Cart
                        </>
                      )}
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      )}

    </section>
  );
};

