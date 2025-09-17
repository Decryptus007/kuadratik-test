import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    title: "SMART WEARABLE.",
    subtitle: "Best Deal Online on smart watches",
    discount: "UP to 80% OFF",
    image: "/assets/smartwatch.png",
    alt: "Smart Watch",
  },
  {
    title: "PROFESSIONAL CAMERA.",
    subtitle: "Capture moments with precision",
    discount: "UP to 70% OFF",
    image: "/assets/camera.png",
    alt: "Camera",
  },
  {
    title: "ULTRA LAPTOP.",
    subtitle: "Power your productivity",
    discount: "UP to 60% OFF",
    image: "/assets/macbook.png",
    alt: "MacBook",
  },
  {
    title: "WIRELESS WEB CAM.",
    subtitle: "Stay connected effortlessly",
    discount: "UP to 50% OFF",
    image: "/assets/webcam.png",
    alt: "Web Cam",
  },
];

const HeroBanner = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 10000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="bg-gradient-hero rounded-lg mx-2 md:mx-4 mt-2 md:mt-4 p-6 md:p-8 lg:p-12 relative">
      <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="container mx-auto flex items-center justify-between">
                <div className="flex-1 max-w-xl">
                  <p className="text-hero-foreground/80 text-xs md:text-sm mb-2">
                    {slide.subtitle}
                  </p>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-hero-foreground mb-2 md:mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl text-hero-foreground mb-4 md:mb-8">
                    {slide.discount}
                  </p>
                </div>
                <div className="hidden sm:block relative w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64">
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 128px, (max-width: 1024px) 192px, 256px"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="size-12 md:size-20 md:p-2 absolute flex items-center justify-center bg-white/20 md:bg-white rounded-full -left-0 md:-left-10 top-1/2 -translate-y-1/2 ">
        <Button
          variant="outline"
          size="icon"
          className="size-12 md:size-16 text-6xl p-0 rounded-full bg-transparent md:bg-background border-none"
          onClick={() => api?.scrollPrev()}
          disabled={!api?.canScrollPrev()}
        >
          <ChevronLeft size={60} className="text-6xl" />
          <span className="sr-only">Previous slide</span>
        </Button>
      </div>
      <div className="size-12 md:size-20 md:p-2 absolute flex items-center justify-center bg-white/20 md:bg-white rounded-full -right-0 md:-right-10 top-1/2 -translate-y-1/2 ">
        <Button
          variant="outline"
          size="icon"
          className="size-12 md:size-16 text-6xl p-0 rounded-full bg-transparent md:bg-background border-none"
          onClick={() => api?.scrollNext()}
          disabled={!api?.canScrollNext()}
        >
          <ChevronRight size={60} className="text-6xl" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>
      <div className="container flex justify-center md:justify-start gap-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${
              index === current
                ? "bg-hero-foreground w-4.5 md:w-6"
                : "bg-hero-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
