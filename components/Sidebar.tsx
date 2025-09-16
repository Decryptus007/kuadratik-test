import { Laptop, Smartphone, Headphones, Gamepad2, Camera, Tv, Wifi, Navigation } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const Sidebar = () => {
  const [priceRange, setPriceRange] = useState([0]);

  const categories = [
    { icon: Smartphone, label: "Electronics Devices" },
    { icon: Laptop, label: "Computer & Laptop" },
    { icon: Laptop, label: "Computer Accessories" },
    { icon: Smartphone, label: "SmartPhone" },
    { icon: Headphones, label: "Headphone" },
    { icon: Smartphone, label: "Mobile Accessories" },
    { icon: Gamepad2, label: "Gaming Console" },
    { icon: Camera, label: "Camera & Photo" },
    { icon: Tv, label: "TV & Home Appliances" },
    { icon: Wifi, label: "Watch & Accessories" },
    { icon: Navigation, label: "GPS & Navigation" },
    { icon: Laptop, label: "Wearable Technology" },
  ];

  const brands = [
    { name: "Apple", count: 2 },
    { name: "Microsoft", count: 1 },
    { name: "Dell", count: 3 },
    { name: "Symphony", count: 0 },
    { name: "Sony", count: 1 },
    { name: "LG", count: 0 },
    { name: "One Plus", count: 0 },
  ];

  const tags = [
    "Game", "iPhone", "TV", "Asus Laptops",
    "Macbook", "SSD", "Graphics Card",
    "Power Bank", "Smart TV", "Speaker",
    "Tablet", "Microwave", "Samsung"
  ];

  return (
    <aside className="w-64 shrink-0">
      {/* Categories */}
      <div className="bg-card rounded-lg p-4 mb-4">
        <h3 className="font-semibold mb-3 text-sm uppercase text-muted-foreground">
          Category
        </h3>
        <div className="space-y-2">
          {categories.map((category, index) => (
            <button
              key={index}
              className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors w-full text-left py-1"
            >
              <category.icon className="h-4 w-4" />
              <span>{category.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="bg-card rounded-lg p-4 mb-4">
        <h3 className="font-semibold mb-3 text-sm uppercase text-muted-foreground">
          Price Range
        </h3>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={100}
          step={1}
          className="mb-4"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Min price</span>
          <span>Max price</span>
        </div>
        <div className="flex gap-2 mt-2">
          <div className="flex items-center gap-1">
            <span className="text-xs text-muted-foreground">$</span>
            <input
              type="text"
              value="0"
              className="w-16 px-2 py-1 text-sm border rounded"
              readOnly
            />
          </div>
          <span className="text-muted-foreground">-</span>
          <div className="flex items-center gap-1">
            <span className="text-xs text-muted-foreground">$</span>
            <input
              type="text"
              value="10000"
              className="w-20 px-2 py-1 text-sm border rounded"
              readOnly
            />
          </div>
        </div>
        <div className="space-y-2 mt-4">
          <label className="flex items-center gap-2 text-sm">
            <Checkbox />
            <span>All Price</span>
          </label>
          <label className="flex items-center gap-2 text-sm">
            <Checkbox />
            <span>Under $20</span>
          </label>
          <label className="flex items-center gap-2 text-sm">
            <Checkbox />
            <span>$25 to $100</span>
          </label>
          <label className="flex items-center gap-2 text-sm">
            <Checkbox />
            <span>$100 to $300</span>
          </label>
          <label className="flex items-center gap-2 text-sm">
            <Checkbox />
            <span>$300 to $500</span>
          </label>
          <label className="flex items-center gap-2 text-sm">
            <Checkbox />
            <span>$500 to $1,000</span>
          </label>
          <label className="flex items-center gap-2 text-sm">
            <Checkbox />
            <span>$1,000 to $10,000</span>
          </label>
        </div>
      </div>

      {/* Popular Brands */}
      <div className="bg-card rounded-lg p-4 mb-4">
        <h3 className="font-semibold mb-3 text-sm uppercase text-muted-foreground">
          Popular Brands
        </h3>
        <div className="space-y-2">
          {brands.map((brand, index) => (
            <label key={index} className="flex items-center gap-2 text-sm">
              <Checkbox />
              <span className="flex-1">{brand.name}</span>
              {brand.count > 0 && (
                <span className="text-muted-foreground">({brand.count})</span>
              )}
            </label>
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      <div className="bg-card rounded-lg p-4">
        <h3 className="font-semibold mb-3 text-sm uppercase text-muted-foreground">
          Popular Tag
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <button
              key={index}
              className="px-3 py-1 text-xs bg-secondary hover:bg-secondary/80 rounded-full transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;