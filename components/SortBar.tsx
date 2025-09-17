import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Filter, X } from "lucide-react";

interface SortBarProps {
  totalProducts: number;
  setMobileSidebarOpen: (open: boolean) => void;
  searchQuery?: string;
  selectedCategory?: string | null;
  priceRange?: [number, number];
  selectedBrands?: string[];
  selectedTags?: string[];
  sortBy?: string;
  onSortChange?: (value: string) => void;
  onClearSearch?: () => void;
  onClearCategory?: () => void;
  onClearPriceRange?: () => void;
  onClearBrand?: (brand: string) => void;
  onClearTag?: (tag: string) => void;
  onClearAllFilters?: () => void;
}

const SortBar = ({
  totalProducts,
  setMobileSidebarOpen,
  searchQuery = "",
  selectedCategory,
  priceRange = [0, 10000],
  selectedBrands = [],
  selectedTags = [],
  sortBy = "",
  onSortChange,
  onClearSearch,
  onClearCategory,
  onClearPriceRange,
  onClearBrand,
  onClearTag,
  onClearAllFilters,
}: SortBarProps) => {
  return (
    <div className="flex flex-col gap-4 mb-4">
      <div className="flex justify-between">
        {/* Mobile Filter Button */}
        <div className="lg:hidden flex items-center justify-between px-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setMobileSidebarOpen(true)}
            className="flex items-center gap-2"
          >
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs md:text-sm text-muted-foreground">
            Sort by:
          </span>
          <Select
            value={
              sortBy === "asc" ? "asc" : sortBy === "desc" ? "desc" : "default"
            }
            onValueChange={(value) => {
              let sortParam = "";
              if (value === "asc") sortParam = "asc";
              else if (value === "desc") sortParam = "desc";
              onSortChange?.(sortParam);
            }}
          >
            <SelectTrigger className="w-28 md:w-32 h-7 md:h-8 text-xs md:text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Default</SelectItem>
              <SelectItem value="asc">Ascending</SelectItem>
              <SelectItem value="desc">Descending</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="p-4 rounded-xl bg-background flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs md:text-sm text-muted-foreground">
            Active Filters:
          </span>

          {/* Search Query Filter */}
          {searchQuery && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearSearch}
              className="h-6 px-2 text-xs text-primary hover:text-primary/80"
            >
              Search: "{searchQuery}" <X className="h-3 w-3 ml-1" />
            </Button>
          )}

          {/* Category Filter */}
          {selectedCategory && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearCategory}
              className="h-6 px-2 text-xs text-primary hover:text-primary/80 capitalize"
            >
              {selectedCategory.replace(/['"]+/g, "")}{" "}
              <X className="h-3 w-3 ml-1" />
            </Button>
          )}

          {/* Price Range Filter */}
          {(priceRange[0] > 0 || priceRange[1] < 10000) && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearPriceRange}
              className="h-6 px-2 text-xs text-primary hover:text-primary/80"
            >
              ${priceRange[0]} - ${priceRange[1]} <X className="h-3 w-3 ml-1" />
            </Button>
          )}

          {/* Brand Filters */}
          {selectedBrands.map((brand) => (
            <Button
              key={brand}
              variant="ghost"
              size="sm"
              onClick={() => onClearBrand?.(brand)}
              className="h-6 px-2 text-xs text-primary hover:text-primary/80"
            >
              {brand} <X className="h-3 w-3 ml-1" />
            </Button>
          ))}

          {/* Tag Filters */}
          {selectedTags.map((tag) => (
            <Button
              key={tag}
              variant="ghost"
              size="sm"
              onClick={() => onClearTag?.(tag)}
              className="h-6 px-2 text-xs text-primary hover:text-primary/80"
            >
              {tag} <X className="h-3 w-3 ml-1" />
            </Button>
          ))}

          {/* Clear All Button */}
          {(searchQuery ||
            selectedCategory ||
            priceRange[0] > 0 ||
            priceRange[1] < 10000 ||
            selectedBrands.length > 0 ||
            selectedTags.length > 0) && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearAllFilters}
              className="h-6 px-2 text-xs text-destructive hover:text-destructive/80"
            >
              Clear All <X className="h-3 w-3 ml-1" />
            </Button>
          )}

          {/* No active filters message */}
          {!searchQuery &&
            !selectedCategory &&
            priceRange[0] === 0 &&
            priceRange[1] === 10000 &&
            selectedBrands.length === 0 &&
            selectedTags.length === 0 && (
              <span className="text-xs md:text-sm text-muted-foreground">
                None
              </span>
            )}
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <span className="text-xs md:text-sm text-muted-foreground whitespace-nowrap">
            <b>{totalProducts.toLocaleString()}</b> Products found.
          </span>
        </div>
      </div>
    </div>
  );
};

export default SortBar;
