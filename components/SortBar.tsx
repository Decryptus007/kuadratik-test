import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SortBar = ({ totalProducts }: { totalProducts: number }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs md:text-sm text-muted-foreground">Active Filters:</span>
        <button className="text-xs md:text-sm text-primary hover:underline">
          Electronics Devices ×
        </button>
        <button className="text-xs md:text-sm text-primary hover:underline hidden sm:inline">
          5 Star Rating ×
        </button>
      </div>
      
      <div className="flex items-center gap-2 md:gap-4">
        <span className="text-xs md:text-sm text-muted-foreground whitespace-nowrap">
          {totalProducts.toLocaleString()} Products
        </span>
        <div className="flex items-center gap-2">
          <span className="text-xs md:text-sm text-muted-foreground hidden sm:inline">Sort by:</span>
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
    </div>
  );
};

export default SortBar;