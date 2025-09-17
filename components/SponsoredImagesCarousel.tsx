import React, { useState, useEffect } from "react";
import Image from "next/image";

interface SponsoredImagesCarouselProps {
  sponsoredImages: string[];
}

export default function SponsoredImagesCarousel({
  sponsoredImages,
}: SponsoredImagesCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [desktopCurrentSlide, setDesktopCurrentSlide] = useState(0);

  const desktopSlides = Math.ceil(sponsoredImages.length / 3);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToDesktopSlide = (index: number) => {
    setDesktopCurrentSlide(index);
  };

  useEffect(() => {
    const mobileInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sponsoredImages.length);
    }, 10000);

    return () => clearInterval(mobileInterval);
  }, [sponsoredImages.length]);

  useEffect(() => {
    const desktopInterval = setInterval(() => {
      setDesktopCurrentSlide((prevSlide) => (prevSlide + 1) % desktopSlides);
    }, 10000);

    return () => clearInterval(desktopInterval);
  }, [desktopSlides]);

  return (
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
                          alt={`Sponsored ${slideIndex * 3 + index + 1}`}
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
  );
}
