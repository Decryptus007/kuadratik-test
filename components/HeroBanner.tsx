import { Button } from "@/components/ui/button";
const smartwatch = "/assets/smartwatch.png";

const HeroBanner = () => {
  return (
    <div className="bg-gradient-hero rounded-lg mx-2 md:mx-4 mt-2 md:mt-4 p-6 md:p-8 lg:p-12 relative overflow-hidden">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-1 max-w-xl">
          <p className="text-hero-foreground/80 text-xs md:text-sm mb-2">
            Best Deal Online on smart watches
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-hero-foreground mb-2 md:mb-4">
            SMART WEARABLE.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-hero-foreground mb-4 md:mb-8">
            UP to 80% OFF
          </p>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${
                  i === 1 ? "bg-hero-foreground" : "bg-hero-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
        <div className="hidden sm:block">
          <img
            src={smartwatch}
            alt="Smart Watch"
            className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
