import {
  Search,
  Filter,
  ShoppingBag,
  Lightbulb,
  Settings,
  Compass,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  searchQuery?: string;
  hasActiveFilters?: boolean;
  onClearFilters?: () => void;
  onClearSearch?: () => void;
}

const EmptyState = ({
  searchQuery,
  hasActiveFilters,
  onClearFilters,
  onClearSearch,
}: EmptyStateProps) => {
  const isSearchEmpty = searchQuery && searchQuery.trim() !== "";
  const isFilterEmpty = hasActiveFilters;

  let title = "No products found";
  let description = "We couldn't find any products matching your criteria.";
  let icon = <Search className="h-16 w-16 text-muted-foreground" />;
  let actionButton = null;

  if (isSearchEmpty && !isFilterEmpty) {
    title = "No search results";
    description = `We couldn't find any products matching "${searchQuery}". Try adjusting your search terms.`;
    icon = <Search className="h-16 w-16 text-muted-foreground" />;
    actionButton = (
      <Button onClick={onClearSearch} variant="outline">
        Clear Search
      </Button>
    );
  } else if (!isSearchEmpty && isFilterEmpty) {
    title = "No products match your filters";
    description = "Try adjusting your filters to see more products.";
    icon = <Filter className="h-16 w-16 text-muted-foreground" />;
    actionButton = (
      <Button onClick={onClearFilters} variant="outline">
        Clear All Filters
      </Button>
    );
  } else if (isSearchEmpty && isFilterEmpty) {
    title = "No products found";
    description = `We couldn't find any products matching "${searchQuery}" with your current filters.`;
    icon = <Filter className="h-16 w-16 text-muted-foreground" />;
    actionButton = (
      <div className="flex gap-2">
        <Button onClick={onClearSearch} variant="outline">
          Clear Search
        </Button>
        <Button onClick={onClearFilters} variant="outline">
          Clear Filters
        </Button>
      </div>
    );
  } else {
    title = "No products available";
    description = "We're working on adding more products. Check back soon!";
    icon = <ShoppingBag className="h-16 w-16 text-muted-foreground" />;
  }

  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="mb-6">{icon}</div>

      <h2 className="text-2xl font-semibold text-foreground mb-3">{title}</h2>

      <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">
        {description}
      </p>

      {actionButton && <div className="mb-8">{actionButton}</div>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl w-full">
        <div className="p-4 rounded-lg border bg-card">
          <Lightbulb className="h-8 w-8 text-primary mb-3 mx-auto" />
          <h3 className="font-medium mb-1">Try Different Search</h3>
          <p className="text-sm text-muted-foreground">
            Use broader keywords or check spelling
          </p>
        </div>

        <div className="p-4 rounded-lg border bg-card">
          <Settings className="h-8 w-8 text-primary mb-3 mx-auto" />
          <h3 className="font-medium mb-1">Adjust Filters</h3>
          <p className="text-sm text-muted-foreground">
            Remove some filters to see more results
          </p>
        </div>

        <div className="p-4 rounded-lg border bg-card">
          <Compass className="h-8 w-8 text-primary mb-3 mx-auto" />
          <h3 className="font-medium mb-1">Browse Categories</h3>
          <p className="text-sm text-muted-foreground">
            Explore different product categories
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmptyState;
