"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/app/data/products";
import { generateWhatsAppItemLink } from "@/app/utils/whatsapp";
import { 
  X, 
  Star, 
  ShieldCheck, 
  MessageCircle, 
  ShoppingBag, 
  Check, 
  Zap, 
  Truck,
  Plus,
  Minus
} from "lucide-react";

interface ProductQuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
  isInCart: boolean;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
  isInCart,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const currentImage = product.images[selectedImageIndex] || product.image;
  const waLink = generateWhatsAppItemLink(product, quantity);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-4xl glass-card border border-white/10 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between bg-slate-950/60 shrink-0">
          <div className="flex items-center gap-2">
            <span className="bg-amber-400 text-slate-950 font-black text-xs px-2.5 py-0.5 rounded-md uppercase tracking-wider">
              {product.brand}
            </span>
            <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              Verified Genuine Item
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-full bg-slate-900/60 hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Image Gallery Column */}
          <div className="space-y-4">
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#03060d] border border-white/10 shadow-lg">
              <Image
                src={currentImage}
                alt={product.name}
                fill
                className="object-contain p-1"
              />
              {product.isPopular && (
                <span className="absolute top-3 left-3 bg-amber-400 text-slate-950 font-black text-xs px-3 py-1 rounded-full shadow-lg">
                  POPULAR
                </span>
              )}
            </div>

            {/* Thumbnail Navigation */}
            {product.images.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                      selectedImageIndex === idx ? "border-emerald-400 scale-105" : "border-white/10 opacity-70"
                    }`}
                  >
                    <Image src={img} alt="Thumbnail" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details & Specs Column */}
          <div className="space-y-5">
            <div>
              <div className="flex items-center gap-2 mb-1 text-xs">
                <div className="flex items-center text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span className="ml-1 font-bold">{product.rating}</span>
                </div>
                <span className="text-slate-400">({product.reviewsCount} customer reviews)</span>
              </div>
              <h2 className="text-lg sm:text-xl font-black text-white leading-snug">
                {product.name}
              </h2>
            </div>

            {/* Quantity Selector Box */}
            <div className="p-4 rounded-2xl glass-card border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-slate-200">Select Quantity</span>
                <p className="text-[11px] text-slate-400">Specify order count</p>
              </div>

              {/* Quantity selector */}
              <div className="flex items-center gap-2 bg-slate-900/80 p-1.5 rounded-xl border border-white/10">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-extrabold text-sm text-white px-3">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {product.description}
            </p>

            {/* Warranty & Delivery Badges */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/10 flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-slate-300 font-semibold truncate">{product.warranty}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/10 flex items-center gap-2.5">
                <Truck className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-slate-300 font-semibold">1-3 Days Islandwide</span>
              </div>
            </div>

            {/* Technical Specifications Table */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                Technical Specifications
              </h4>
              <div className="rounded-2xl border border-white/10 divide-y divide-white/5 overflow-hidden text-xs">
                {Object.entries(product.specifications).map(([key, val]) => (
                  <div key={key} className="grid grid-cols-3 p-2.5 bg-slate-900/40">
                    <span className="text-slate-400 font-medium">{key}</span>
                    <span className="col-span-2 text-slate-200 font-semibold">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 space-y-2.5">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn w-full py-3.5 px-4 rounded-xl text-sm font-black flex items-center justify-center gap-2 shadow-2xl hover:scale-101 transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Order Now via WhatsApp (0704220000)</span>
              </a>

              <button
                onClick={() => {
                  onAddToCart(product, quantity);
                  onClose();
                }}
                className={`w-full py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-colors ${
                  isInCart 
                    ? "bg-emerald-600 text-white" 
                    : "bg-slate-800 hover:bg-slate-700 text-white border border-white/10"
                }`}
              >
                {isInCart ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
                {isInCart ? "Already in Cart - Update Quantity" : "Add to Cart Drawer"}
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

