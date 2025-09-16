import { Star, Heart, ShoppingCart, Eye } from "lucide-react";

interface ProductCardProps {
  image: string;
  title: string;
  originalPrice?: number;
  price: number;
  rating: number;
  reviews: number;
  badge?: string;
  discount?: number;
}

const ProductCard = ({
  image,
  title,
  originalPrice,
  price,
  rating,
  reviews,
  badge,
  discount,
}: ProductCardProps) => {
  return (
    <div className="bg-card rounded-lg p-3 md:p-4 hover:border hover:border-secondary transition-shadow group cursor-pointer">
      <div className="aspect-square bg-background rounded-lg mb-2 md:mb-3 overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform"
        />

        {/* Badge */}
        {badge && (
          <div className="absolute top-2 left-2 z-10">
            <span className="bg-success text-success-foreground text-[10px] md:text-xs px-1.5 md:px-2 py-0.5 md:py-1 rounded shadow-sm">
              {badge}
            </span>
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="flex gap-2">
            <button className="size-8 md:size-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-colors shadow-md">
              <Heart className="w-4 h-4" />
            </button>
            <button className="size-8 md:size-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-colors shadow-md">
              <ShoppingCart className="w-4 h-4" />
            </button>
            <button className="size-8 md:size-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-colors shadow-md">
              <Eye className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1 mb-1 md:mb-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-2.5 w-2.5 md:h-3 md:w-3 ${
              i < Math.floor(rating)
                ? "fill-secondary text-secondary"
                : "fill-muted text-muted"
            }`}
          />
        ))}
        <span className="text-[10px] md:text-xs text-muted-foreground ml-1">
          ({reviews})
        </span>
      </div>

      <h3 className="text-xs md:text-sm font-medium mb-1 md:mb-2 line-clamp-2 min-h-[2rem] md:min-h-[2.5rem]">
        {title}
      </h3>

      <div className="flex items-center gap-1 md:gap-2">
        {originalPrice && (
          <span className="text-[10px] md:text-sm text-muted-foreground line-through">
            ${originalPrice.toFixed(2)}
          </span>
        )}
        <span className="text-sm md:text-lg font-semibold text-secondary">
          ${price.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
