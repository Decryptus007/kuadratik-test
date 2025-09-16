import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

const SortBar = ({
  totalProducts,
  setMobileSidebarOpen,
}: {
  totalProducts: number;
  setMobileSidebarOpen: (open: boolean) => void;
}) => {
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
          <Select defaultValue="popular">
            <SelectTrigger className="w-28 md:w-32 h-7 md:h-8 text-xs md:text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="p-4 rounded-xl bg-background flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs md:text-sm text-muted-foreground">
            Active Filters:
          </span>
          <button className="text-xs md:text-sm text-primary hover:underline">
            Electronics Devices x
          </button>
          <button className="text-xs md:text-sm text-primary hover:underline">
            5 Star Rating x
          </button>
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
