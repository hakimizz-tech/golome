import { Link } from "react-router-dom";
import { Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Social Media */}
          <div>
            <h3 className="text-lg font-medium mb-6">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link to="/" className="hover:opacity-75 transition duration-300">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link to="/" className="hover:opacity-75 transition duration-300">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link to="/" className="hover:opacity-75 transition duration-300">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link to="/" className="hover:opacity-75 transition duration-300">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>
          
          {/* Column 2: Customer Service */}
          <div>
            <h3 className="text-lg font-medium mb-6">Customer Service</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:underline">Contact Us</Link></li>
              <li><Link to="/" className="hover:underline">FAQs</Link></li>
              <li><Link to="/" className="hover:underline">My Order</Link></li>
            </ul>
          </div>
          
          {/* Column 3: About */}
          <div>
            <h3 className="text-lg font-medium mb-6">About GOLOME</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:underline">About Us</Link></li>
              <li><Link to="/" className="hover:underline">Our Values</Link></li>
              <li><Link to="/" className="hover:underline">Careers</Link></li>
              <li><Link to="/" className="hover:underline">Our Team</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} GOLOME. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
