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

const Navigation = () => {
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

  const categories = [
    "Electronics",
    "Clothing & Fashion",
    "Home & Garden",
    "Sports & Outdoors",
    "Books & Media",
    "Health & Beauty",
    "Automotive",
    "Toys & Games",
    "Food & Beverages",
    "Office Supplies",
  ];

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
                  {categories.map((category, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className="w-full justify-start h-10 px-3"
                      onClick={() => setCategoriesOpen(false)}
                    >
                      {category}
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
                {item.icon && <item.icon className="h-4 w-4 mr-2" />}
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
