
import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Link } from "wouter";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const placeholders = [
    "What's the latest Trend?",
    "Tote bags that are available?",
    "Events that are comming up?",
    "What are the best accessories?",
    "How to order?",
  ];

interface HeaderProps {
  onMenuClick?: () => void;
  classname?: string
}

export function Header({ onMenuClick, classname }: HeaderProps) {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  }

  return (
    <header className={`fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-30 ${classname}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-black">
          <Link href="/">
            GOLOME
          </Link>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex items-center space-x-8">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-gray-700 hover:text-[#ff6900] transition-colors font-medium bg-transparent hover:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                Women
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="p-4 w-48">
                  <p className="text-sm text-gray-600">
                    Discover our latest women's collection featuring handbags, accessories, and timeless pieces.
                  </p>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-gray-700 hover:text-[#ff6900] transition-colors font-medium bg-transparent hover:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                Men
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="p-4 w-48">
                  <p className="text-sm text-gray-600">
                    Explore our men's collection with sophisticated bags and accessories for the modern gentleman.
                  </p>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-gray-700 hover:text-[#ff6900] transition-colors font-medium bg-transparent hover:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                Handbags
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="p-4 w-48">
                  <p className="text-sm text-gray-600">
                    Premium handbags crafted with attention to detail and superior quality materials.
                  </p>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-gray-700 hover:text-[#ff6900] transition-colors font-medium bg-transparent hover:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                Highlight
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="p-4 w-48">
                  <p className="text-sm text-gray-600">
                    Featured collections and limited edition pieces you don't want to miss.
                  </p>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Search and Actions */}
        <div className="flex items-center space-x-4 relative">
          <Popover >
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-700 hover:text-[#ff6900] transition-colors">
                <Search className="w-6 h-6" />
              </Button>
            </PopoverTrigger>
            <div className="relative">
              {/* place the popover content at the middle of the page */}
            <PopoverContent className="w-lg p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-lg">
                <PlaceholdersAndVanishInput 
                  placeholders={placeholders} 
                  onChange={handleChange} 
                  onSubmit={onSubmit}
                />
            </PopoverContent>
            </div>
            
          </Popover>
          <Button className=" rounded-2xl block bg-[#ff6900] text-white hover:bg-[#e55a00] transition-colors font-medium">
            <Link to='/login'>Login/Signup</Link>
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className=" text-gray-700 hover:text-[#ff6900] transition-colors"
            onClick={onMenuClick}
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}
