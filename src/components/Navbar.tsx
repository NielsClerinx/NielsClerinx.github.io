
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="py-4 bg-haircare-cream sticky top-0 z-50 shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-haircare-dark-brown font-serif text-2xl lg:text-3xl font-semibold">
              UNIQUE<span className="text-haircare-gold">HAIRCARE</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            <Link to="/products" className="text-haircare-dark-brown hover:text-haircare-gold transition-colors font-medium">
              Products
            </Link>
            <Link to="/services" className="text-haircare-dark-brown hover:text-haircare-gold transition-colors font-medium">
              Services
            </Link>
            <a href="#" className="text-haircare-dark-brown hover:text-haircare-gold transition-colors font-medium">
              About Us
            </a>
            <Link to="/contact" className="text-haircare-dark-brown hover:text-haircare-gold transition-colors font-medium">
              Contact
            </Link>
          </div>
          
          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button aria-label="Search" className="text-haircare-brown hover:text-haircare-gold transition-colors">
              <Search size={20} />
            </button>
            <button aria-label="Account" className="text-haircare-brown hover:text-haircare-gold transition-colors">
              <User size={20} />
            </button>
            <button aria-label="Shopping cart" className="text-haircare-brown hover:text-haircare-gold transition-colors">
              <ShoppingBag size={20} />
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-haircare-dark-brown p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-haircare-cream border-t border-haircare-beige py-4 shadow-md animate-fade-in">
            <div className="container-custom flex flex-col space-y-4">
              <Link to="/products" className="text-haircare-dark-brown hover:text-haircare-gold py-2 transition-colors">
                Products
              </Link>
              <Link to="/services" className="text-haircare-dark-brown hover:text-haircare-gold py-2 transition-colors">
                Services
              </Link>
              <a href="#" className="text-haircare-dark-brown hover:text-haircare-gold py-2 transition-colors">
                About Us
              </a>
              <Link to="/contact" className="text-haircare-dark-brown hover:text-haircare-gold py-2 transition-colors">
                Contact
              </Link>
              <div className="flex space-x-6 pt-2">
                <button aria-label="Search" className="text-haircare-brown hover:text-haircare-gold transition-colors">
                  <Search size={20} />
                </button>
                <button aria-label="Account" className="text-haircare-brown hover:text-haircare-gold transition-colors">
                  <User size={20} />
                </button>
                <button aria-label="Shopping cart" className="text-haircare-brown hover:text-haircare-gold transition-colors">
                  <ShoppingBag size={20} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
