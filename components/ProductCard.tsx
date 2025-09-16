import { Star } from "lucide-react";

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
    <div className="bg-card rounded-lg p-3 md:p-4 hover:shadow-md transition-shadow group cursor-pointer">
      {badge && (
        <div className="mb-2">
          <span className="bg-success text-success-foreground text-[10px] md:text-xs px-1.5 md:px-2 py-0.5 md:py-1 rounded">
            {badge}
          </span>
        </div>
      )}
      
      <div className="aspect-square bg-background rounded-lg mb-2 md:mb-3 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform"
        />
      </div>

      <div className="flex items-center gap-1 mb-1 md:mb-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-2.5 w-2.5 md:h-3 md:w-3 ${
              i < Math.floor(rating)
                ? "fill-warning text-warning"
                : "fill-muted text-muted"
            }`}
          />
        ))}
        <span className="text-[10px] md:text-xs text-muted-foreground ml-1">({reviews})</span>
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
        <span className="text-sm md:text-lg font-semibold text-primary">
          ${price.toFixed(2)}
        </span>
      </div>

      {discount && (
        <div className="mt-1 md:mt-2">
          <span className="text-[10px] md:text-xs bg-primary/10 text-primary px-1.5 md:px-2 py-0.5 md:py-1 rounded">
            {discount}% OFF
          </span>
        </div>
      )}
    </div>
  );
};

export default ProductCard;