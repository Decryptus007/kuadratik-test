import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import FilterButton from "./FilterButton";
import { SortBarProps } from "@/types";

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
            <FilterButton
              label={`Search: "${searchQuery}"`}
              onClick={onClearSearch}
            />
          )}

          {/* Category Filter */}
          {selectedCategory && (
            <FilterButton
              label={selectedCategory.replace(/['"]+/g, "")}
              onClick={onClearCategory}
            />
          )}

          {/* Price Range Filter */}
          {(priceRange[0] > 0 || priceRange[1] < 10000) && (
            <FilterButton
              label={`$${priceRange[0]} - $${priceRange[1]}`}
              onClick={onClearPriceRange}
            />
          )}

          {/* Brand Filters */}
          {selectedBrands.map((brand) => (
            <FilterButton
              key={brand}
              label={brand}
              onClick={() => onClearBrand?.(brand)}
            />
          ))}

          {/* Tag Filters */}
          {selectedTags.map((tag) => (
            <FilterButton
              key={tag}
              label={tag}
              onClick={() => onClearTag?.(tag)}
            />
          ))}

          {/* Clear All Button */}
          {(searchQuery ||
            selectedCategory ||
            priceRange[0] > 0 ||
            priceRange[1] < 10000 ||
            selectedBrands.length > 0 ||
            selectedTags.length > 0) && (
            <FilterButton label="Clear All" onClick={onClearAllFilters} />
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
