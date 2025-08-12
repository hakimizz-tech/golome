import { useState } from "react";
import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { AnimatedLink } from "@/components/AnimatedLink";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const placeholders = [
  "What's the latest Trend?",
  "Tote bags that are available?",
  "Events that are coming up?",
  "What are the best accessories?",
  "How to order?",
];

interface HeaderProps {
  onMenuClick?: () => void;
  classname?: string;
}

export function Header({ onMenuClick, classname }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted: ", searchQuery);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-30 ${classname}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-3xl font-bold text-black logo-font">
          <Link href="/">GOLOME</Link>
        </div>

        {/* Desktop Nav with Animated Links - hidden on small and medium screens */}
        <nav className="hidden lg:flex">
          <ul className="flex items-center space-x-10">
            <li>
              <AnimatedLink href="#" text="Women" />
            </li>
            <li>
              <AnimatedLink href="#" text="Men" />
            </li>
            <li>
              <AnimatedLink href="/bags" text="Bags" />
            </li>
            <li>
              <AnimatedLink href="#" text="Blog" />
            </li>
            <li>
              <AnimatedLink href="/our-story" text="Our Story" />
            </li>
          </ul>
        </nav>

        {/* Search + Actions */}
        <div className="flex items-center space-x-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-700 hover:text-[#ff6900] transition-colors">
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

          <Button className="rounded-2xl bg-[#ff6900] text-white hover:bg-[#e55a00] transition-colors font-medium">
            <Link to="/login">Login/Signup</Link>
          </Button>

            {/* Mobile menu trigger */}
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-700 hover:text-[#ff6900] transition-colors block lg:hidden"
            onClick={onMenuClick}
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}
