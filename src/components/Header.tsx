import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu, UserRound } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMenuStore } from "@/hooks/use-menu-store";
import GOLOME_NEW from "@/assets/GOLOME_NEW.png"; // Adjust the path as necessary

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  // const isMobile = useIsMobile();
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isMenuOpen, toggleMenu } = useMenuStore();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-40 transition-all duration-300",
      scrolled ? "bg-white/95 backdrop-blur-xl shadow-sm" : "bg-white",
      "border-b border-gray-100"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo Left */}
          <div className="flex items-center">
            <Link to='/' className="h-24 w-24 aspect-auto">
              <img src={GOLOME_NEW} alt="w-full" />
            </Link>
          </div>
          
          {/* Center Navigation - Desktop Only */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <nav className="flex space-x-8">
              <Link to="/" className="text-sm font-medium uppercase tracking-wide text-black transition-colors duration-300 relative group">
                Men
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6F00] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/" className="text-sm font-medium uppercase tracking-wide text-black transition-colors duration-300 relative group">
                Women
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6F00] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/" className="text-sm font-medium uppercase tracking-wide text-black transition-colors duration-300 relative group">
                Highlight
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6F00] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/" className="text-sm font-medium uppercase tracking-wide text-black transition-colors duration-300 relative group">
                Culture
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6F00] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/" className="text-sm font-medium uppercase tracking-wide text-black transition-colors duration-300 relative group">
                Fashion
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6F00] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </nav>
          </div>
          
          {/* Right Navigation */}
          <div className="flex items-center space-x-6">
            <Link to="/login" className="text-black hover:text-[#FF6F00] transition-colors duration-300">
              <UserRound className="h-6 w-6" />
            </Link>
            <Sheet open={isMenuOpen} onOpenChange={toggleMenu}>
              <SheetTrigger asChild>
                <button className="text-black hover:text-[#FF6F00] transition-colors duration-300 focus:outline-none flex items-center">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-black text-white w-full max-w-md p-8">
                <div className="flex justify-between items-center mb-10">
                  <h2 className="text-xl font-medium">Menu</h2>
                  <SheetClose className="text-white focus:outline-none" />
                </div>
                <div className="flex flex-col space-y-6">
                  <Link to="/" className="text-white text-lg font-medium sheet-link flex justify-between items-center">
                    Handbags <span className="transform rotate-0">→</span>
                  </Link>
                  <Link to="/" className="text-white text-lg font-medium sheet-link flex justify-between items-center">
                    Women <span className="transform rotate-0">→</span>
                  </Link>
                  <Link to="/" className="text-white text-lg font-medium sheet-link flex justify-between items-center">
                    Men <span className="transform rotate-0">→</span>
                  </Link>
                  <Link to="/" className="text-white text-lg font-medium sheet-link flex justify-between items-center">
                    Children <span className="transform rotate-0">→</span>
                  </Link>
                  <Link to="/" className="text-white text-lg font-medium sheet-link flex justify-between items-center">
                    Travel <span className="transform rotate-0">→</span>
                  </Link>
                  <Link to="/" className="text-white text-lg font-medium sheet-link flex justify-between items-center">
                    Jewelery <span className="transform rotate-0">→</span>
                  </Link>
                  <Link to="/" className="text-white text-lg font-medium sheet-link flex justify-between items-center">
                    Interior Design <span className="transform rotate-0">→</span>
                  </Link>
                  <Link to="/" className="text-white text-lg font-medium sheet-link flex justify-between items-center">
                    Lifestyle <span className="transform rotate-0">→</span>
                  </Link>
                  <Link to="/" className="text-white text-lg font-medium sheet-link flex justify-between items-center">
                    Fashion <span className="transform rotate-0">→</span>
                  </Link>
                  <Link to="/" className="text-white text-lg font-medium sheet-link flex justify-between items-center">
                    Runway <span className="transform rotate-0">→</span>
                  </Link>
                  <Link to="/" className="text-white text-lg font-medium sheet-link flex justify-between items-center">
                    Gifts <span className="transform rotate-0">→</span>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      
    </header>
  );
};

export default Header;