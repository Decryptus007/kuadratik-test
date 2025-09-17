import { Skeleton } from "@/components/ui/skeleton";

const ProductSkeleton = () => {
  return (
    <div className="bg-card rounded-lg p-3 md:p-4">
      <div className="aspect-square bg-background rounded-lg mb-2 md:mb-3 overflow-hidden">
        <Skeleton className="w-full h-full" />
      </div>

      <div className="flex items-center gap-1 mb-1 md:mb-2">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="h-2.5 w-2.5 md:h-3 md:w-3" />
        ))}
        <Skeleton className="h-3 w-8 ml-1" />
      </div>

      <Skeleton className="h-4 w-full mb-1 md:mb-2" />
      <Skeleton className="h-4 w-3/4 mb-1 md:mb-2" />

      <div className="flex items-center gap-1 md:gap-2">
        <Skeleton className="h-5 w-16" />
      </div>
    </div>
  );
};

export default ProductSkeleton;
