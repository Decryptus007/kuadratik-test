"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import HeroBanner from "@/components/HeroBanner";
import Sidebar from "@/components/Sidebar";
import MobileSidebar from "@/components/MobileSidebar";
import SortBar from "@/components/SortBar";
import ProductCard from "@/components/ProductCard";
import SponsoredImagesCarousel from "@/components/SponsoredImagesCarousel";
import Footer from "@/components/Footer";
import {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useGetProductsByCategoryQuery,
} from "@/lib/apiSlice";
import PageSkeleton from "@/components/PageSkeleton";
import EmptyState from "@/components/EmptyState";

export default function Home() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>("");

  const { data: categories } = useGetCategoriesQuery();
  const {
    data: allProducts,
    isLoading: isLoadingAll,
    error: errorAll,
  } = useGetProductsQuery({ sort: sortBy });
  const {
    data: categoryProducts,
    isLoading: isLoadingCategory,
    error: errorCategory,
  } = useGetProductsByCategoryQuery(selectedCategory || "", {
    skip: !selectedCategory,
  });

  const products = selectedCategory ? categoryProducts : allProducts;

  // Filter products based on search query, price, brands, and tags
  const filteredProducts = products?.filter((product) => {
    // Search filter
    const matchesSearch = searchQuery
      ? product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    // Price filter
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];

    // Brand filter (if any brands are selected)
    const matchesBrand =
      selectedBrands.length === 0 ||
      selectedBrands.some(
        (brand) =>
          product.title.toLowerCase().includes(brand.toLowerCase()) ||
          product.description.toLowerCase().includes(brand.toLowerCase())
      );

    // Tag filter (if any tags are selected)
    const matchesTag =
      selectedTags.length === 0 ||
      selectedTags.some(
        (tag) =>
          product.title.toLowerCase().includes(tag.toLowerCase()) ||
          product.description.toLowerCase().includes(tag.toLowerCase()) ||
          product.category.toLowerCase().includes(tag.toLowerCase())
      );

    return matchesSearch && matchesPrice && matchesBrand && matchesTag;
  });

  const isLoading = selectedCategory ? isLoadingCategory : isLoadingAll;
  const error = selectedCategory ? errorCategory : errorAll;

  const sponsoredImages = [
    "/assets/sponsored-1.png",
    "/assets/sponsored-2.png",
    "/assets/sponsored-3.png",
    "/assets/sponsored-2.png",
  ];

  // Clear filter functions
  const clearSearch = () => setSearchQuery("");
  const clearCategory = () => setSelectedCategory(null);
  const clearPriceRange = () => setPriceRange([0, 10000]);
  const clearBrand = (brand: string) => {
    setSelectedBrands((prev) => prev.filter((b) => b !== brand));
  };
  const clearTag = (tag: string) => {
    setSelectedTags((prev) => prev.filter((t) => t !== tag));
  };
  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedCategory(null);
    setPriceRange([0, 10000]);
    setSelectedBrands([]);
    setSelectedTags([]);
    setSortBy("");
  };

  // Check if there are active filters
  const hasActiveFilters = Boolean(
    searchQuery ||
      selectedCategory ||
      priceRange[0] > 0 ||
      priceRange[1] < 10000 ||
      selectedBrands.length > 0 ||
      selectedTags.length > 0
  );

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
      <Header
        onMenuClick={() => setMobileSidebarOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
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
              priceRange={priceRange}
              onPriceRangeChange={setPriceRange}
              selectedBrands={selectedBrands}
              onBrandsChange={setSelectedBrands}
              selectedTags={selectedTags}
              onTagsChange={setSelectedTags}
            />
          </div>

          {/* Mobile Sidebar */}
          <MobileSidebar
            open={mobileSidebarOpen}
            onOpenChange={setMobileSidebarOpen}
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            priceRange={priceRange}
            onPriceRangeChange={setPriceRange}
            selectedBrands={selectedBrands}
            onBrandsChange={setSelectedBrands}
            selectedTags={selectedTags}
            onTagsChange={setSelectedTags}
          />

          <div className="flex-1">
            <SortBar
              setMobileSidebarOpen={setMobileSidebarOpen}
              totalProducts={filteredProducts?.length || 0}
              searchQuery={searchQuery}
              selectedCategory={selectedCategory}
              priceRange={priceRange}
              selectedBrands={selectedBrands}
              selectedTags={selectedTags}
              sortBy={sortBy}
              onSortChange={setSortBy}
              onClearSearch={clearSearch}
              onClearCategory={clearCategory}
              onClearPriceRange={clearPriceRange}
              onClearBrand={clearBrand}
              onClearTag={clearTag}
              onClearAllFilters={clearAllFilters}
            />

            {/* Product Grid - Responsive columns */}
            {filteredProducts && filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 mb-6 md:mb-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <EmptyState
                searchQuery={searchQuery}
                hasActiveFilters={hasActiveFilters}
                onClearFilters={clearAllFilters}
                onClearSearch={clearSearch}
              />
            )}

            {/* Sponsored Images Carousel */}
            <SponsoredImagesCarousel sponsoredImages={sponsoredImages} />

            {/* More Products Grid - Responsive */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
              {filteredProducts?.slice(10, 20).map((product) => (
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
