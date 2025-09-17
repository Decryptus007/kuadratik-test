import { useDispatch, useSelector } from "react-redux";
import { X, Heart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { store } from "@/lib/store";
import { SavedItem } from "@/lib/saveSlice";
import { removeFromSave, clearSave } from "@/lib/saveSlice";
import { addToCart } from "@/lib/cartSlice";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";

type RootState = ReturnType<typeof store.getState>;

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
                    className="flex items-center gap-4 p-4 border rounded-lg"
                  >
                    <Image
                      src={item.product.image}
                      alt={item.product.title}
                      width={64}
                      height={64}
                      className="object-contain rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-sm line-clamp-2">
                        {item.product.title}
                      </h3>
                      <p className="text-secondary font-semibold">
                        ${item.product.price.toFixed(2)}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Saved on {new Date(item.savedAt).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button
                        size="sm"
                        onClick={() => handleAddToCart(item.product)}
                        className="text-xs"
                      >
                        Add to Cart
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleRemove(item.product.id)}
                        className="text-xs"
                      >
                        <Trash2 className="w-4 h-4" />
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
