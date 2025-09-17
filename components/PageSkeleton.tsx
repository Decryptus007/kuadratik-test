import Header from "./Header";
import Navigation from "./Navigation";
import HeroBanner from "./HeroBanner";
import Sidebar from "./Sidebar";
import MobileSidebar from "./MobileSidebar";
import SortBar from "./SortBar";
import ProductSkeleton from "./ProductSkeleton";
import Footer from "./Footer";
import { useState } from "react";

const PageSkeleton = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header onMenuClick={() => setMobileSidebarOpen(true)} />
      <Navigation />

      <main className="container mx-auto px-2 md:px-4">
        <HeroBanner />

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
            <SortBar
              setMobileSidebarOpen={setMobileSidebarOpen}
              totalProducts={50867}
            />

            {/* Product Grid - Responsive columns */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 mb-6 md:mb-8">
              {[...Array(20)].map((_, i) => (
                <ProductSkeleton key={i} />
              ))}
            </div>

            {/* Sponsored Images Skeleton */}
            <div className="relative py-4">
              <div className="block md:hidden overflow-hidden rounded-lg">
                <div className="w-full flex-shrink-0">
                  <div className="relative h-44 rounded-lg overflow-hidden">
                    <div className="w-full h-full bg-gray-200 animate-pulse rounded-lg" />
                  </div>
                </div>
              </div>

              <div className="hidden md:block relative">
                <div className="overflow-hidden rounded-lg">
                  <div className="grid grid-cols-3 gap-4">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="relative h-44 rounded-lg overflow-hidden"
                      >
                        <div className="w-full h-full bg-gray-200 animate-pulse rounded-lg" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* More Products Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
              {[...Array(10)].map((_, i) => (
                <ProductSkeleton key={i + 20} />
              ))}
            </div>

            {/* Pagination Skeleton */}
            <div className="mt-20 flex items-center justify-center gap-3">
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 bg-gray-200 animate-pulse rounded-full"
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PageSkeleton;
