import { useState } from "react";
import { Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCartStore } from "@/store/cartStore";
import { cn } from "@/lib/utils";
import { CartProducts } from "./CartProducts";

const placeholders = [
    "What's the latest Trend?",
    "Tote bags that are available?",
    "Events that are comming up?",
    "What are the best accessories?",
    "How to order?",
  ];

interface ProductHeaderProps {
  backgroundColor?: string;
  textcolor?:string
}

function ProductHeader({backgroundColor = "bg-white", textcolor='text-black' }: ProductHeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const cartItems = useCartStore((state) => state.cartItems);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // when user clicks enter to search for an item
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted: ", searchQuery);
  };

  return (
    <header className={cn(`w-full h-16 py-4 ${backgroundColor}`)}>
      <div className={`container mx-auto px-4 flex items-center justify-between`}>
        {/* Left side - Shop and Contact links (hidden on mobile) */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link href="/products" className={`${textcolor} hover:text-[#ff6900] transition-colors font-medium`}>Shop</Link>
          <Link href="#" className={`${textcolor} hover:text-[#ff6900] transition-colors font-medium`}>Contact</Link>
        </div>

        {/* Mobile left side - GOLOME logo */}
        <div className={cn("lg:hidden text-2xl font-bold logo-font", textcolor)}>
          <Link href="/">
            GOLOME
          </Link>
        </div>

        {/* Desktop center - GOLOME logo */}
        <div className={cn("hidden lg:block text-2xl font-bold logo-font", textcolor)}>
          <Link href="/">
            GOLOME
          </Link>
        </div>

        {/* Right side - Search button and cart icon */}
        <div className="flex items-center space-x-4">
          
          {/* search button */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon" className={`${textcolor} hover:text-[#ff6900] transition-colors hover:bg-transparent`}>
                <Search className="w-6 h-6" />
              </Button>
            </DialogTrigger>
            <DialogContent className="p-4 sm:max-w-2xl top-20 translate-y-0 data-[state=open]:slide-in-from-top-4">
              <div className="flex flex-col space-y-4">
                <PlaceholdersAndVanishInput 
                  placeholders={placeholders} 
                  onChange={handleChange} 
                  onSubmit={onSubmit}
                />
                {searchQuery && (
                  <div className="mt-4 border-t pt-4">
                    <p className="text-center text-gray-500">No product available</p>
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>

          {/* shopping cart button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn("relative hover:text-[#ff6900] transition-colors hover:bg-transparent", textcolor)}>
                <ShoppingCart className="w-6 h-6" />
                {cartItems.length > 0 && (
                  <span className="absolute top-0 right-0 block h-4 w-4 rounded-full bg-[#ff6900] text-white text-[10px] text-center">
                    {cartItems.length}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full md:w-2/5">
              <CartProducts />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default ProductHeader;
