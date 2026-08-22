"use client";

import React, { useState, useMemo } from "react";
import { Header } from "@/app/components/Header";
import { HeroSection } from "@/app/components/HeroSection";
import { BrandMarquee } from "@/app/components/BrandMarquee";
import { ProductCatalog } from "@/app/components/ProductCatalog";
import { ProductQuickViewModal } from "@/app/components/ProductQuickViewModal";
import { CartDrawer, CartItem } from "@/app/components/CartDrawer";
import { FloatingWhatsApp } from "@/app/components/FloatingWhatsApp";
import { Footer } from "@/app/components/Footer";
import { PRODUCTS, Product } from "@/app/data/products";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Category filter
      if (selectedCategory !== "all" && p.category !== selectedCategory) {
        return false;
      }
      // Brand filter
      if (selectedBrand && p.brand.toLowerCase() !== selectedBrand.toLowerCase()) {
        return false;
      }
      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const nameMatch = p.name.toLowerCase().includes(q);
        const brandMatch = p.brand.toLowerCase().includes(q);
        const descMatch = p.description.toLowerCase().includes(q);
        return nameMatch || brandMatch || descMatch;
      }
      return true;
    });
  }, [selectedCategory, selectedBrand, searchQuery]);

  // Cart operations
  const handleAddToCart = (product: Product, quantity: number = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartProductIds = cartItems.map((i) => i.product.id);

  return (
    <main className="min-h-screen flex flex-col bg-[#070a12] text-slate-100 selection:bg-emerald-400 selection:text-slate-950">
      {/* Navigation Header */}
      <Header
        cartCount={cartCount}
        onOpenCart={() => setCartDrawerOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Hero Showcase with Banner */}
      <HeroSection />

      {/* Brand Selector Marquee */}
      <BrandMarquee
        selectedBrand={selectedBrand}
        onSelectBrand={setSelectedBrand}
      />

      {/* Filterable Catalog Section */}
      <div className="flex-1">
        <ProductCatalog
          products={filteredProducts}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onQuickView={setQuickViewProduct}
          onAddToCart={(prod) => handleAddToCart(prod, 1)}
          cartProductIds={cartProductIds}
        />
      </div>

      {/* Footer with Store Details */}
      <Footer />

      {/* Quick View Modal */}
      <ProductQuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        isInCart={quickViewProduct ? cartProductIds.includes(quickViewProduct.id) : false}
      />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Floating 24/7 WhatsApp Widget */}
      <FloatingWhatsApp />
    </main>
  );
}
