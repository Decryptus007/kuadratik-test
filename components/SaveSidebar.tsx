import { useDispatch, useSelector } from "react-redux";
import { X, Heart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { SavedItem } from "@/lib/saveSlice";
import { removeFromSave, clearSave } from "@/lib/saveSlice";
import { addToCart } from "@/lib/cartSlice";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";

interface SaveSidebarProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SaveSidebar = ({ open, onOpenChange }: SaveSidebarProps) => {
  const dispatch = useDispatch();
  const savedItems = useSelector((state: any) => state.save.items);
  const { toast } = useToast();

  const handleRemove = (id: number) => {
    dispatch(removeFromSave(id));
  };

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
    dispatch(removeFromSave(product.id));
    toast({
      title: "Added to cart",
      description: `${product.title} has been added to your cart.`,
    });
  };

  const handleClearAll = () => {
    dispatch(clearSave());
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-red-500" />
            Saved Items ({savedItems.length})
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full pb-4">
          <div className="flex-1 overflow-y-auto py-4">
            {savedItems.length === 0 ? (
              <div className="text-center py-8">
                <Heart className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-muted-foreground">No saved items yet</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Click the heart icon on products to save them for later
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {savedItems.map((item: SavedItem) => (
                  <div
                    key={item.product.id}
                    className="flex flex-col sm:flex-row flex-wrap gap-4 p-4 border rounded-lg"
                  >
                    <Image
                      src={item.product.image}
                      alt={item.product.title}
                      width={80}
                      height={80}
                      className="w-20 h-20 sm:w-16 sm:h-16 object-contain rounded self-center sm:self-start"
                    />
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="font-medium text-sm sm:text-base line-clamp-2">
                        {item.product.title}
                      </h3>
                      <p className="text-secondary font-semibold text-sm sm:text-base">
                        ${item.product.price.toFixed(2)}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Saved on {new Date(item.savedAt).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex flex-row gap-2 justify-center sm:flex-col sm:gap-2 sm:justify-start w-full sm:w-auto">
                      <Button
                        size="sm"
                        onClick={() => handleAddToCart(item.product)}
                        className="text-xs flex-1 sm:flex-none"
                      >
                        Add to Cart
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleRemove(item.product.id)}
                        className="text-xs flex-1 sm:flex-none"
                      >
                        <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {savedItems.length > 0 && (
            <div className="border-t pt-4">
              <Button
                variant="outline"
                onClick={handleClearAll}
                className="w-full"
              >
                Clear All Saved Items
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SaveSidebar;
