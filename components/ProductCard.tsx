import { Star, Heart, ShoppingCart, Eye } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/lib/cartSlice";
import { addToSave, removeFromSave } from "@/lib/saveSlice";
import { Product } from "@/lib/apiSlice";
import ProductDetailsModal from "./ProductDetailsModal";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { store } from "@/lib/store";
import Image from "next/image";

type RootState = ReturnType<typeof store.getState>;

interface ProductCardProps extends Product {}

const ProductCard = (product: ProductCardProps) => {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const { toast } = useToast();

  // Get cart items to show quantity badge
  const cartItems = useSelector((state: any) => state.cart.items);
  const productQuantity =
    cartItems.find((item: any) => item.product.id === product.id)?.quantity ||
    0;

  // Get saved items to check if product is saved
  const savedItems = useSelector((state: any) => state.save.items);
  const isSaved = savedItems.some(
    (item: any) => item.product.id === product.id
  );

  const handleAddToCart = () => {
    const existingItem = cartItems.find(
      (item: any) => item.product.id === product.id
    );
    const isNewItem = !existingItem;

    dispatch(addToCart(product));

    // Only show toast for newly added items
    if (isNewItem) {
      toast({
        title: "Added to cart",
        description: `${product.title} has been added to your cart.`,
      });
    }
  };

  const handleToggleSave = () => {
    if (isSaved) {
      dispatch(removeFromSave(product.id));
      toast({
        title: "Removed from saved",
        description: `${product.title} has been removed from your saved items.`,
      });
    } else {
      dispatch(addToSave(product));
      toast({
        title: "Added to saved",
        description: `${product.title} has been saved to your favorites.`,
      });
    }
  };

  const handleViewDetails = () => {
    setModalOpen(true);
  };

  return (
    <div className="bg-card rounded-lg p-3 md:p-4 hover:border hover:border-secondary transition-shadow group cursor-pointer">
      <div className="aspect-square bg-background rounded-lg mb-2 md:mb-3 overflow-hidden relative">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain group-hover:scale-105 transition-transform"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="flex gap-2">
            <Button
              size="icon"
              variant="secondary"
              onClick={handleToggleSave}
              className={`size-8 md:size-12 bg-white text-black rounded-full hover:bg-secondary hover:text-white transition-colors shadow-md ${
                isSaved ? "text-red-500" : ""
              }`}
            >
              <Heart className={`w-4 h-4 ${isSaved ? "fill-current" : ""}`} />
            </Button>
            <div className="relative">
              <Button
                size="icon"
                variant="secondary"
                onClick={handleAddToCart}
                className="size-8 md:size-12 bg-white text-black rounded-full hover:bg-secondary hover:text-white transition-colors shadow-md"
              >
                <ShoppingCart className="w-4 h-4" />
              </Button>
              {productQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {productQuantity}
                </span>
              )}
            </div>
            <Button
              size="icon"
              variant="secondary"
              onClick={handleViewDetails}
              className="size-8 md:size-12 bg-white text-black rounded-full hover:bg-secondary hover:text-white transition-colors shadow-md"
            >
              <Eye className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1 mb-1 md:mb-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-2.5 w-2.5 md:h-3 md:w-3 ${
              i < Math.floor(product.rating.rate)
                ? "fill-secondary text-secondary"
                : "fill-muted text-muted"
            }`}
          />
        ))}
        <span className="text-[10px] md:text-xs text-muted-foreground ml-1">
          ({product.rating.count})
        </span>
      </div>

      <h3 className="text-xs md:text-sm font-medium mb-1 md:mb-2 line-clamp-2 min-h-[2rem] md:min-h-[2.5rem]">
        {product.title}
      </h3>

      <div className="flex items-center gap-1 md:gap-2">
        <span className="text-sm md:text-lg font-semibold text-secondary">
          ${product.price.toFixed(2)}
        </span>
      </div>

      <ProductDetailsModal
        product={product}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </div>
  );
};

export default ProductCard;
