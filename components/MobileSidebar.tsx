import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Sidebar from "./Sidebar";

interface MobileSidebarProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  categories?: string[];
  selectedCategory?: string | null;
  onCategoryChange?: (category: string | null) => void;
  priceRange?: [number, number];
  onPriceRangeChange?: (range: [number, number]) => void;
  selectedBrands?: string[];
  onBrandsChange?: (brands: string[]) => void;
  selectedTags?: string[];
  onTagsChange?: (tags: string[]) => void;
}

const MobileSidebar = ({
  open,
  onOpenChange,
  categories,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  selectedBrands,
  onBrandsChange,
  selectedTags,
  onTagsChange,
}: MobileSidebarProps) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-[300px] p-0">
        <SheetHeader className="p-4 border-b">
          <SheetTitle>Filters & Categories</SheetTitle>
        </SheetHeader>
        <div className="overflow-y-auto h-[calc(100vh-80px)]">
          <Sidebar
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={onCategoryChange}
            priceRange={priceRange}
            onPriceRangeChange={onPriceRangeChange}
            selectedBrands={selectedBrands}
            onBrandsChange={onBrandsChange}
            selectedTags={selectedTags}
            onTagsChange={onTagsChange}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
