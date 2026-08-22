"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product, STORE_INFO } from "@/app/data/products";
import { generateWhatsAppCartLink } from "@/app/utils/whatsapp";
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag, Truck } from "lucide-react";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

const SRI_LANKA_DISTRICTS = [
  "Colombo / Nugegoda (Fast Delivery)",
  "Gampaha",
  "Kalutara",
  "Kandy",
  "Galle",
  "Matara",
  "Kurunegala",
  "Ratnapura",
  "Anuradhapura",
  "Jaffna",
  "Other Sri Lanka District"
];

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [deliveryCity, setDeliveryCity] = useState(SRI_LANKA_DISTRICTS[0]);

  if (!isOpen) return null;

  const totalAmount = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const waCartLink = generateWhatsAppCartLink(items, deliveryCity);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop overlay */}
      <div 
        onClick={onClose} 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#070a14] border-l border-white/10 shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-4 sm:p-6 bg-slate-950/90 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-amber-400" />
              <h2 className="text-base font-black text-white">Your Shopping Cart</h2>
              <span className="bg-emerald-500 text-slate-950 font-black text-xs px-2.5 py-0.5 rounded-full">
                {items.length}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-full bg-slate-900/60 hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-20 space-y-3">
                <ShoppingBag className="w-12 h-12 text-slate-600 mx-auto" />
                <h3 className="text-sm font-bold text-slate-300">Your cart is currently empty</h3>
                <p className="text-xs text-slate-400 max-w-xs mx-auto">
                  Browse our electric appliances catalog and click "+ Cart" or "Order on WhatsApp"!
                </p>
              </div>
            ) : (
              items.map(({ product, quantity }) => (
                <div 
                  key={product.id}
                  className="p-3.5 glass-card rounded-2xl border border-white/10 flex gap-3.5 items-center"
                >
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-slate-950 border border-white/5 shrink-0">
                    <Image src={product.image} alt={product.name} fill className="object-cover" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-white truncate">{product.name}</h4>
                    <p className="text-[11px] text-emerald-400 font-semibold mt-0.5">
                      {product.warranty}
                    </p>

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center gap-1 bg-slate-900/80 p-1 rounded-lg border border-white/10">
                        <button
                          onClick={() => onUpdateQuantity(product.id, quantity - 1)}
                          className="p-0.5 text-slate-300 hover:text-white"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-white px-2">{quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(product.id, quantity + 1)}
                          className="p-0.5 text-slate-300 hover:text-white"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(product.id)}
                        className="text-slate-400 hover:text-red-400 p-1 transition-colors ml-auto"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cart Footer */}
          {items.length > 0 && (
            <div className="p-4 sm:p-6 bg-slate-950/95 border-t border-white/10 space-y-4">
              
              {/* Delivery District Selector */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-300 flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-emerald-400" />
                  Select Delivery Location:
                </label>
                <select
                  value={deliveryCity}
                  onChange={(e) => setDeliveryCity(e.target.value)}
                  className="w-full bg-slate-900 text-white text-xs font-semibold p-2.5 rounded-xl border border-white/10 focus:outline-none focus:border-emerald-500"
                >
                  {SRI_LANKA_DISTRICTS.map((dist) => (
                    <option key={dist} value={dist}>{dist}</option>
                  ))}
                </select>
              </div>

              {/* Delivery Details */}
              <div className="space-y-1.5 pt-2 border-t border-white/10">
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Selected Items ({items.reduce((a, b) => a + b.quantity, 0)})</span>
                  <span className="text-amber-400 font-semibold">Ready to Order</span>
                </div>
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Islandwide Delivery</span>
                  <span className="text-emerald-400 font-semibold">Fast Courier</span>
                </div>
              </div>

              {/* Order via WhatsApp Action */}
              <a
                href={waCartLink}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn w-full py-3.5 rounded-2xl text-xs font-black flex items-center justify-center gap-2 shadow-2xl hover:scale-101 transition-transform"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Complete Order on WhatsApp ({STORE_INFO.phone})</span>
              </a>

              <button
                onClick={onClearCart}
                className="w-full text-center text-[11px] text-slate-400 hover:text-red-400 transition-colors"
              >
                Clear Cart
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

