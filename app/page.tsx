"use client";

import { useState } from "react";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import HeroBanner from "@/components/HeroBanner";
import Sidebar from "@/components/Sidebar";
import MobileSidebar from "@/components/MobileSidebar";
import SortBar from "@/components/SortBar";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { products, promoProducts } from "@/constants/data";

export default function Home() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header onMenuClick={() => setMobileSidebarOpen(true)} />
      <Navigation />

      <main className="container mx-auto px-2 md:px-4">
        <HeroBanner />

        {/* Mobile Filter Button */}
        <div className="lg:hidden flex items-center justify-between mt-4 mb-2 px-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setMobileSidebarOpen(true)}
            className="flex items-center gap-2"
          >
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </div>

        <div className="flex gap-4 md:gap-6 mt-4 md:mt-6">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block">
            <Sidebar />
          </div>

          {/* Mobile Sidebar */}
          <MobileSidebar
            open={mobileSidebarOpen}
            onOpenChange={setMobileSidebarOpen}
          />

          <div className="flex-1">
            <SortBar totalProducts={50867} />

            {/* Product Grid - Responsive columns */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 mb-6 md:mb-8">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Promotional Banners - Responsive */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
              {promoProducts.map((promo, index) => (
                <div
                  key={index}
                  className={`${promo.bgColor} rounded-lg p-4 md:p-6 relative overflow-hidden`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      {promo.title && (
                        <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-2">
                          {promo.title}
                        </h3>
                      )}
                      {promo.subtitle && (
                        <p className="text-xs md:text-sm mb-1 md:mb-2 whitespace-pre-line">
                          {promo.subtitle}
                        </p>
                      )}
                      {promo.price && (
                        <p className="text-sm md:text-lg font-semibold mb-1 md:mb-2">
                          {promo.price}
                        </p>
                      )}
                      <div className="inline-block bg-background/90 px-2 md:px-3 py-0.5 md:py-1 rounded text-xs md:text-sm font-medium">
                        {promo.discount}
                      </div>
                    </div>
                    <img
                      src={promo.image}
                      alt={promo.title}
                      className="w-20 h-20 md:w-32 md:h-32 object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* More Products Grid - Responsive */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
              {products.slice(10, 20).map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
