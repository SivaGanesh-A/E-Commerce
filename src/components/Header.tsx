
import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, User, Heart, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface HeaderProps {
  cartItemsCount?: number;
  onCartClick?: () => void;
}

const Header = ({ cartItemsCount = 0, onCartClick }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'Electronics', 'Fashion', 'Home & Kitchen', 'Beauty', 'Sports', 'Books'
  ];

  return (
    <header className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white shadow-xl">
      {/* Top bar */}
      <div className="bg-slate-800 py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <span>Free shipping on orders over $50</span>
          <div className="flex items-center space-x-4">
            <span>Customer Service</span>
            <span>Track Order</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-white hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              ShopVerse
            </h1>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-8 hidden md:block">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search for products, brands and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-12 py-3 rounded-full border-0 bg-white text-gray-900 shadow-lg focus:ring-2 focus:ring-orange-400"
              />
              <Button 
                size="sm" 
                className="absolute right-1 top-1 rounded-full bg-orange-500 hover:bg-orange-600 px-4"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex text-white hover:bg-white/10">
              <User className="h-5 w-5 mr-2" />
              Login
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
              <Heart className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="relative text-white hover:bg-white/10"
              onClick={onCartClick}
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {cartItemsCount}
                </span>
              )}
            </Button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-12 py-3 rounded-full border-0 bg-white text-gray-900"
            />
            <Button size="sm" className="absolute right-1 top-1 rounded-full bg-orange-500 hover:bg-orange-600">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <nav className="hidden md:block bg-slate-800/50 border-t border-slate-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-8 py-3">
            {categories.map((category) => (
              <a
                key={category}
                href="#"
                className="text-sm hover:text-orange-400 transition-colors duration-200 relative group"
              >
                {category}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/50">
          <div className="bg-slate-900 w-80 h-full shadow-xl animate-slide-in-right">
            <div className="p-4 border-b border-slate-700 flex justify-between items-center">
              <h2 className="text-lg font-semibold">Menu</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                <Button variant="ghost" className="w-full justify-start text-left">
                  <User className="h-5 w-5 mr-3" />
                  Login / Register
                </Button>
                {categories.map((category) => (
                  <a
                    key={category}
                    href="#"
                    className="block py-2 px-4 hover:bg-slate-800 rounded transition-colors"
                  >
                    {category}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
