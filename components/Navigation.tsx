import {
  ChevronDown,
  Tag,
  Gift,
  Store,
  Headphones,
  Sparkles,
  Percent,
  Megaphone,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface NavigationProps {
  categories?: string[];
  selectedCategory?: string | null;
  onCategoryChange?: (category: string | null) => void;
}

const Navigation = ({
  categories = [],
  selectedCategory,
  onCategoryChange,
}: NavigationProps) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  const navItems = [
    { icon: Tag, label: "Today's Deals" },
    { icon: Sparkles, label: "New Arrivals" },
    { icon: Percent, label: "Clearance Deals" },
    { icon: Megaphone, label: "Promotions" },
    { icon: Gift, label: "Gift Cards" },
    { icon: Store, label: "Sell on BAZAR" },
    { icon: Headphones, label: "Customer Service" },
  ];

  // Use API categories if available, otherwise use empty array
  const displayCategories = categories.length > 0 ? categories : [];

  return (
    <nav className="bg-background">
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between gap-2 py-2 overflow-x-auto">
          <Sheet open={categoriesOpen} onOpenChange={setCategoriesOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="h-9 px-3 font-normal whitespace-nowrap"
              >
                <Menu className="h-4 w-4 mr-2" />
                <span>All Categories</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <SheetHeader>
                <SheetTitle>Categories</SheetTitle>
              </SheetHeader>
              <div className="mt-6">
                <div className="space-y-2">
                  <Button
                    variant={selectedCategory === null ? "secondary" : "ghost"}
                    className="w-full justify-start h-10 px-3"
                    onClick={() => {
                      if (onCategoryChange) onCategoryChange(null);
                      setCategoriesOpen(false);
                    }}
                  >
                    All Categories
                  </Button>
                  {displayCategories.map((category: string, index: number) => (
                    <Button
                      key={index}
                      variant={
                        selectedCategory === category ? "secondary" : "ghost"
                      }
                      className="w-full justify-start h-10 px-3 capitalize"
                      onClick={() => {
                        if (onCategoryChange) onCategoryChange(category);
                        setCategoriesOpen(false);
                      }}
                    >
                      {category.replace(/['"]+/g, "")}
                    </Button>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <div className="flex items-center gap-2">
            {navItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="h-9 px-3 font-normal whitespace-nowrap"
              >
                {item.icon && <item.icon className="h-4 w-4" />}
                <span>{item.label}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Mobile Navigation - Horizontal scroll */}
        <div className="md:hidden flex items-center gap-2 py-2 overflow-x-auto scrollbar-hide">
          {navItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="h-8 px-2 text-xs font-normal whitespace-nowrap flex-shrink-0"
            >
              {item.icon && <item.icon className="h-3 w-3 mr-1" />}
              <span>{item.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
