import {
  MapPin,
  Search,
  Globe,
  User,
  Heart,
  ShoppingCart,
  Menu,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { store } from "@/lib/store";
import { CartItem } from "@/lib/cartSlice";
import CartSidebar from "./CartSidebar";

type RootState = ReturnType<typeof store.getState>;

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const cartItems = useSelector((state: any) => state.cart.items);
  const cartCount = cartItems.reduce(
    (total: number, item: CartItem) => total + item.quantity,
    0
  );

  return (
    <header className="sticky top-0 bg-white z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2 md:py-3 gap-2 md:gap-4">
          {/* Mobile Menu & Logo */}
          <div className="flex items-center gap-2 md:gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={onMenuClick}
            >
              <Menu className="h-5 w-5" />
            </Button>

            <div className="flex items-center gap-1">
              <Image
                src="/assets/company-logo.png"
                alt="Logo"
                width={40}
                height={40}
                className="object-contain size-6 md:size-10"
              />
              <div className="flex flex-col">
                <span className="font-bold text-base md:text-xl truncate">
                  Company
                </span>
                <span className="text-[6px] md:text-[8px] truncate">
                  Your Trusted Partner
                </span>
              </div>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="hidden lg:flex items-center gap-1 pl-2 text-sm cursor-pointer">
                  <MapPin className="h-4 w-4" />
                  <span>61 Hooper Street...</span>
                  <ChevronDown className="h-4 w-4" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[200px]">
                <div className="p-2 border-b border-border">
                  <p className="text-sm font-medium">Address</p>
                </div>
                <div className="p-2">
                  <p className="text-xs">
                    61 Hooper Street, New York, NY 10002
                  </p>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-[600px]">
            <div className="relative w-full">
              <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2" />
              <Input
                type="search"
                placeholder="Search for products..."
                className="pl-10 bg-background"
              />
            </div>
          </div>

          {/* Mobile Search Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <Search className="h-5 w-5" />
          </Button>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <Select defaultValue="en">
              <SelectTrigger className="w-14 md:w-16 h-8 md:h-9 border-none text-xs md:text-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">EN</SelectItem>
                <SelectItem value="es">ES</SelectItem>
                <SelectItem value="fr">FR</SelectItem>
              </SelectContent>
            </Select>

            <Button
              variant="ghost"
              size="icon"
              className="relative h-8 w-8 md:h-9 md:w-9"
            >
              <User className="h-4 w-4 md:h-5 md:w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="relative h-8 w-8 md:h-9 md:w-9 hidden sm:flex"
            >
              <Heart className="h-4 w-4 md:h-5 md:w-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-primary rounded-full text-primary-foreground text-[10px] md:text-xs flex items-center justify-center">
                0
              </span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="relative h-8 w-8 md:h-9 md:w-9"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingCart className="h-4 w-4 md:h-5 md:w-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-primary rounded-full text-primary-foreground text-[10px] md:text-xs flex items-center justify-center">
                {cartCount}
              </span>
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {searchOpen && (
          <div className="md:hidden pb-3">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search for products..."
                className="pr-10 bg-card"
                autoFocus
              />
              <Button
                size="sm"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-7 px-3"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>

      <CartSidebar open={cartOpen} onOpenChange={setCartOpen} />
    </header>
  );
};

export default Header;
