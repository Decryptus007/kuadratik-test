"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Filter } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import HeroBanner from "@/components/HeroBanner";
import Sidebar from "@/components/Sidebar";
import MobileSidebar from "@/components/MobileSidebar";
import SortBar from "@/components/SortBar";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useGetProductsByCategoryQuery,
} from "@/lib/apiSlice";
import PageSkeleton from "@/components/PageSkeleton";

export default function Home() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [desktopCurrentSlide, setDesktopCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { data: categories } = useGetCategoriesQuery();
  const {
    data: allProducts,
    isLoading: isLoadingAll,
    error: errorAll,
  } = useGetProductsQuery();
  const {
    data: categoryProducts,
    isLoading: isLoadingCategory,
    error: errorCategory,
  } = useGetProductsByCategoryQuery(selectedCategory || "", {
    skip: !selectedCategory,
  });

  const products = selectedCategory ? categoryProducts : allProducts;
  const isLoading = selectedCategory ? isLoadingCategory : isLoadingAll;
  const error = selectedCategory ? errorCategory : errorAll;

  const sponsoredImages = [
    "/assets/sponsored-1.png",
    "/assets/sponsored-2.png",
    "/assets/sponsored-3.png",
    "/assets/sponsored-2.png",
  ];

  const desktopSlides = Math.ceil(sponsoredImages.length / 3);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToDesktopSlide = (index: number) => {
    setDesktopCurrentSlide(index);
  };

  if (isLoading) {
    return <PageSkeleton />;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div>Error loading products</div>
      </div>
    );
  }

  if (!products) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div>No products available</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onMenuClick={() => setMobileSidebarOpen(true)} />
      <Navigation
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <main className="container mx-auto px-2 md:px-4">
        <HeroBanner />

        <div className="flex gap-4 md:gap-6 mt-4 md:mt-6">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block">
            <Sidebar
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>

          {/* Mobile Sidebar */}
          <MobileSidebar
            open={mobileSidebarOpen}
            onOpenChange={setMobileSidebarOpen}
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <div className="flex-1">
            <SortBar
              setMobileSidebarOpen={setMobileSidebarOpen}
              totalProducts={products.length}
            />

            {/* Product Grid - Responsive columns */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 mb-6 md:mb-8">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Sponsored Images Carousel */}
            <div className="relative py-4">
              {/* Mobile: Single image per slide */}
              <div className="block md:hidden overflow-hidden rounded-lg">
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {sponsoredImages.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="relative h-44 rounded-lg overflow-hidden">
                        <Image
                          src={image}
                          alt={`Sponsored ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="100vw"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop: Carousel with 3 images per slide */}
              <div className="hidden md:block relative">
                <div className="overflow-hidden rounded-lg">
                  <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{
                      transform: `translateX(-${desktopCurrentSlide * 100}%)`,
                    }}
                  >
                    {Array.from({ length: desktopSlides }, (_, slideIndex) => (
                      <div key={slideIndex} className="w-full flex-shrink-0">
                        <div className="grid grid-cols-3 gap-4">
                          {sponsoredImages
                            .slice(slideIndex * 3, (slideIndex + 1) * 3)
                            .map((image, index) => (
                              <div
                                key={slideIndex * 3 + index}
                                className="relative h-44 rounded-lg overflow-hidden"
                              >
                                <Image
                                  src={image}
                                  alt={`Sponsored ${
                                    slideIndex * 3 + index + 1
                                  }`}
                                  fill
                                  className="object-cover"
                                  sizes="33vw"
                                />
                              </div>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Desktop Indicators */}
                <div className="flex justify-center gap-2 mt-4">
                  {Array.from({ length: desktopSlides }, (_, index) => (
                    <button
                      key={index}
                      onClick={() => goToDesktopSlide(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === desktopCurrentSlide
                          ? "bg-secondary"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Mobile Indicators */}
              <div className="flex justify-center gap-2 mt-4 md:hidden">
                {sponsoredImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide
                        ? "bg-secondary"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* More Products Grid - Responsive */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
              {products.slice(10, 20).map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
            <div className="mt-20 flex items-center justify-center gap-3">
              <Button
                size={"icon"}
                variant={"outline"}
                disabled
                className="px-4 py-2 rounded-full"
              >
                <ArrowLeft />
              </Button>
              {[...Array(1)].map((_, i) => (
                <Button
                  key={i}
                  size={"icon"}
                  variant={"secondary"}
                  className="px-4 py-2 rounded-full"
                >
                  {i + 1}
                </Button>
              ))}
              <Button
                size={"icon"}
                variant={"outline"}
                disabled
                className="px-4 py-2 rounded-full"
              >
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
