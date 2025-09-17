import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Range } from "react-range";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { SidebarProps } from "@/types";

const Sidebar = ({
  categories: apiCategories = [],
  selectedCategory: propSelectedCategory,
  onCategoryChange,
  priceRange: propPriceRange = [0, 10000],
  onPriceRangeChange,
  selectedBrands: propSelectedBrands = [],
  onBrandsChange,
  selectedTags: propSelectedTags = [],
  onTagsChange,
}: SidebarProps) => {
  const [selectedPriceFilter, setSelectedPriceFilter] = useState("");

  // Use prop values or defaults
  const currentSelectedCategory = propSelectedCategory || "";
  const priceRange = propPriceRange;
  const selectedTags = propSelectedTags;
  const selectedBrands = propSelectedBrands;

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    const clampedValue = Math.max(0, Math.min(value, priceRange[1] - 100));
    if (onPriceRangeChange) {
      onPriceRangeChange([clampedValue, priceRange[1]]);
    }
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 10000;
    const clampedValue = Math.max(priceRange[0] + 100, Math.min(value, 10000));
    if (onPriceRangeChange) {
      onPriceRangeChange([priceRange[0], clampedValue]);
    }
  };

  const toggleTag = (tag: string) => {
    if (onTagsChange) {
      const newTags = selectedTags.includes(tag)
        ? selectedTags.filter((t: string) => t !== tag)
        : [...selectedTags, tag];
      onTagsChange(newTags);
    }
  };

  // Combine API categories with "All" option
  const allCategories = ["All", ...apiCategories];

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
    "Game",
    "iPhone",
    "TV",
    "Asus Laptops",
    "Macbook",
    "SSD",
    "Graphics Card",
    "Power Bank",
    "Smart TV",
    "Speaker",
    "Tablet",
    "Microwave",
    "Samsung",
  ];

  return (
    <aside className="w-64 shrink-0">
      {/* Categories */}
      <div className="bg-card p-4 mb-4 border-b">
        <h3 className="font-semibold mb-6 text-sm uppercase text-muted-foreground">
          Category
        </h3>
        <RadioGroup
          value={currentSelectedCategory || "All"}
          onValueChange={(value) => {
            if (onCategoryChange) {
              onCategoryChange(value === "All" ? null : value);
            }
          }}
          className="space-y-2"
        >
          {allCategories.map((category: string, index: number) => (
            <div
              key={index}
              className="flex items-center gap-2 text-base text-foreground/80 py-1"
            >
              <RadioGroupItem value={category} id={`category-${index}`} />
              <Label
                htmlFor={`category-${index}`}
                className="cursor-pointer capitalize"
              >
                {category.replace(/['"]+/g, "")}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Price Range */}
      <div className="bg-card border-b p-4 mb-4">
        <h3 className="font-semibold mb-3 text-sm uppercase text-muted-foreground">
          Price Range
        </h3>
        <div className="mb-4">
          <Range
            step={100}
            min={0}
            max={10000}
            values={priceRange}
            onChange={(values) => {
              if (onPriceRangeChange) {
                onPriceRangeChange(values as [number, number]);
              }
            }}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                className="w-full h-1 bg-gray-200 rounded-lg relative"
                style={{
                  ...props.style,
                }}
              >
                <div
                  className="absolute h-1 bg-secondary rounded-lg"
                  style={{
                    left: `${((priceRange[0] - 0) / (10000 - 0)) * 100}%`,
                    width: `${
                      ((priceRange[1] - priceRange[0]) / (10000 - 0)) * 100
                    }%`,
                  }}
                />
                {children}
              </div>
            )}
            renderThumb={({ props, isDragged }) => {
              const { key, ...otherProps } = props;
              return (
                <div
                  key={key}
                  {...otherProps}
                  className={`w-4 h-4 bg-secondary rounded-full border-2 border-white shadow-md ${
                    isDragged ? "shadow-lg" : ""
                  }`}
                  style={{
                    ...otherProps.style,
                    outline: "none",
                  }}
                />
              );
            }}
          />
        </div>
        <div className="grid grid-cols-2 gap-2 mb-2">
          <div className="space-y-1">
            <Label
              htmlFor="min-price"
              className="text-xs text-muted-foreground"
            >
              Min Price
            </Label>
            <div className="relative">
              <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground text-sm">
                $
              </span>
              <Input
                id="min-price"
                type="number"
                value={priceRange[0]}
                onChange={handleMinPriceChange}
                className="pl-6 h-8 text-sm"
                min={0}
                max={priceRange[1] - 100}
                step={100}
              />
            </div>
          </div>
          <div className="space-y-1">
            <Label
              htmlFor="max-price"
              className="text-xs text-muted-foreground"
            >
              Max Price
            </Label>
            <div className="relative">
              <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground text-sm">
                $
              </span>
              <Input
                id="max-price"
                type="number"
                value={priceRange[1]}
                onChange={handleMaxPriceChange}
                className="pl-6 h-8 text-sm"
                min={priceRange[0] + 100}
                max={10000}
                step={100}
              />
            </div>
          </div>
        </div>
        <RadioGroup
          value={selectedPriceFilter}
          onValueChange={(value) => {
            setSelectedPriceFilter(value);
            // Set price range based on selected preset
            if (onPriceRangeChange) {
              switch (value) {
                case "under-20":
                  onPriceRangeChange([0, 20]);
                  break;
                case "25-100":
                  onPriceRangeChange([25, 100]);
                  break;
                case "100-300":
                  onPriceRangeChange([100, 300]);
                  break;
                case "300-500":
                  onPriceRangeChange([300, 500]);
                  break;
                case "500-1000":
                  onPriceRangeChange([500, 1000]);
                  break;
                case "1000-10000":
                  onPriceRangeChange([1000, 10000]);
                  break;
                case "all":
                default:
                  onPriceRangeChange([0, 10000]);
                  break;
              }
            }
          }}
          className="space-y-2 mt-4"
        >
          <div className="flex items-center gap-2 text-sm">
            <RadioGroupItem value="all" id="price-all" />
            <Label htmlFor="price-all" className="cursor-pointer">
              All Price
            </Label>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <RadioGroupItem value="under-20" id="price-under-20" />
            <Label htmlFor="price-under-20" className="cursor-pointer">
              Under $20
            </Label>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <RadioGroupItem value="25-100" id="price-25-100" />
            <Label htmlFor="price-25-100" className="cursor-pointer">
              $25 to $100
            </Label>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <RadioGroupItem value="100-300" id="price-100-300" />
            <Label htmlFor="price-100-300" className="cursor-pointer">
              $100 to $300
            </Label>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <RadioGroupItem value="300-500" id="price-300-500" />
            <Label htmlFor="price-300-500" className="cursor-pointer">
              $300 to $500
            </Label>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <RadioGroupItem value="500-1000" id="price-500-1000" />
            <Label htmlFor="price-500-1000" className="cursor-pointer">
              $500 to $1,000
            </Label>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <RadioGroupItem value="1000-10000" id="price-1000-10000" />
            <Label htmlFor="price-1000-10000" className="cursor-pointer">
              $1,000 to $10,000
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Popular Brands */}
      <div className="bg-card border-b p-4 mb-4">
        <h3 className="font-semibold mb-3 text-sm uppercase text-muted-foreground">
          Popular Brands
        </h3>
        <div className="grid gap-2 grid-cols-2">
          {brands.map((brand, index) => {
            const isSelected = selectedBrands?.includes(brand.name) || false;
            return (
              <label key={index} className="flex items-center gap-2 text-xs">
                <Checkbox
                  checked={isSelected}
                  onCheckedChange={(checked) => {
                    if (onBrandsChange) {
                      if (checked) {
                        onBrandsChange([...(selectedBrands || []), brand.name]);
                      } else {
                        onBrandsChange(
                          (selectedBrands || []).filter((b) => b !== brand.name)
                        );
                      }
                    }
                  }}
                />
                <span className="flex-1">{brand.name}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Popular Tags */}
      <div className="bg-card p-4 mb-4">
        <h3 className="font-semibold mb-3 text-sm uppercase text-muted-foreground">
          Popular Tag
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => {
            const isSelected = selectedTags.includes(tag);
            return (
              <button
                key={index}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1 text-xs rounded-lg transition-colors ${
                  isSelected
                    ? "bg-secondary/10 text-secondary border border-secondary hover:bg-secondary/80"
                    : "bg-white text-black border border-gray-300 hover:bg-gray-50"
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      {/* Promo Product */}
      <div className="bg-card flex items-center justify-center flex-col gap-4 p-4 md:p-6 border rounded-xl">
        <Image
          src="/assets/promo-side.png"
          alt="Promo Product"
          width={180}
          height={180}
        />
        <Image
          src="/assets/promo-side-desc.png"
          alt="Promo Product Description"
          width={132}
          height={51}
        />
        <p className="text-2xl text-center font-semibold">
          Heavy on Features.
          <br />
          Light on Price.
        </p>
        <div className="flex mx-auto items-center justify-center gap-2">
          <p className="text-xs text-muted-foreground">Only for:</p>
          <p className="text-base bg-[#CACACA] px-2 py-1 rounded-lg">
            $299 USD
          </p>
        </div>
        <div className="flex flex-col w-full gap-3">
          <Button variant="secondary" className="uppercase">
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </Button>
          <Button variant="outline" className="uppercase">
            View Details
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
