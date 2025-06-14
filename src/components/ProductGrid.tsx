import React, { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Filter, Grid, List, X } from 'lucide-react';
import { Box } from '@/components/ui/box';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  discount?: number;
  badge?: string;
}

interface ProductGridProps {
  onAddToCart?: (product: Product) => void;
  onToggleWishlist?: (productId: string) => void;
  wishlistItems?: string[];
}

const ProductGrid = ({ onAddToCart, onToggleWishlist, wishlistItems = [] }: ProductGridProps) => {
  const [sortBy, setSortBy] = useState('featured');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Sample products data
  const products: Product[] = [
    {
      id: '1',
      name: 'iPhone 15 Pro Max 256GB',
      price: 1099.99,
      originalPrice: 1199.99,
      rating: 4.8,
      reviews: 2341,
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop',
      category: 'Electronics',
      badge: 'Best Seller'
    },
    {
      id: '2',
      name: 'MacBook Pro 16" M3 Chip',
      price: 2399.99,
      originalPrice: 2599.99,
      rating: 4.9,
      reviews: 1856,
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop',
      category: 'Electronics',
      badge: 'New Arrival'
    },
    {
      id: '3',
      name: 'Premium Wireless Headphones',
      price: 299.99,
      originalPrice: 399.99,
      rating: 4.6,
      reviews: 892,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      category: 'Electronics',
      discount: 25
    },
    {
      id: '4',
      name: 'Designer Cotton T-Shirt',
      price: 49.99,
      originalPrice: 79.99,
      rating: 4.4,
      reviews: 567,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
      category: 'Fashion'
    },
    {
      id: '5',
      name: 'Smart Coffee Maker',
      price: 179.99,
      originalPrice: 229.99,
      rating: 4.5,
      reviews: 423,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop',
      category: 'Home & Kitchen',
      badge: 'Smart Home'
    },
    {
      id: '6',
      name: 'Premium Skincare Set',
      price: 89.99,
      originalPrice: 119.99,
      rating: 4.7,
      reviews: 734,
      image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop',
      category: 'Beauty'
    },
    {
      id: '7',
      name: 'Fitness Tracker Pro',
      price: 149.99,
      originalPrice: 199.99,
      rating: 4.3,
      reviews: 1205,
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop',
      category: 'Sports',
      badge: 'Health & Fitness'
    },
    {
      id: '8',
      name: 'Professional Camera Lens',
      price: 599.99,
      originalPrice: 799.99,
      rating: 4.8,
      reviews: 342,
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=400&fit=crop',
      category: 'Electronics',
      badge: 'Pro Grade'
    }
  ];

  const categories = ['all', 'Electronics', 'Fashion', 'Home & Kitchen', 'Beauty', 'Sports'];
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-50', label: 'Under $50' },
    { value: '50-200', label: '$50 - $200' },
    { value: '200-500', label: '$200 - $500' },
    { value: '500+', label: '$500+' }
  ];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by price range
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      if (max) {
        filtered = filtered.filter(product => product.price >= min && product.price <= max);
      } else {
        filtered = filtered.filter(product => product.price >= min);
      }
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'reviews':
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        // Keep original order for 'featured'
        break;
    }

    return filtered;
  }, [selectedCategory, priceRange, sortBy]);

  const clearFilters = () => {
    setSelectedCategory('all');
    setPriceRange('all');
    setSortBy('featured');
  };

  const hasActiveFilters = selectedCategory !== 'all' || priceRange !== 'all' || sortBy !== 'featured';

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar filters */}
          <div className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                {hasActiveFilters && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={clearFilters}
                    className="text-orange-600 hover:text-orange-700"
                  >
                    Clear All
                  </Button>
                )}
              </div>

              {/* Category filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Category</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={selectedCategory === category}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="text-orange-500 focus:ring-orange-500"
                      />
                      <span className="text-sm text-gray-700 capitalize">
                        {category === 'all' ? 'All Categories' : category}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price range filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <label key={range.value} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="priceRange"
                        value={range.value}
                        checked={priceRange === range.value}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="text-orange-500 focus:ring-orange-500"
                      />
                      <span className="text-sm text-gray-700">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1">
            {/* Header with sorting and view controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="lg:hidden"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">
                    {filteredAndSortedProducts.length} products
                  </span>
                  {hasActiveFilters && (
                    <Badge variant="secondary" className="text-xs">
                      Filtered
                    </Badge>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-4">
                {/* View mode toggle */}
                <div className="flex border rounded-lg">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="rounded-r-none"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="rounded-l-none"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>

                {/* Sort dropdown */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="reviews">Most Reviewed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Products grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredAndSortedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                  onToggleWishlist={onToggleWishlist}
                  isInWishlist={wishlistItems.includes(product.id)}
                />
              ))}
            </div>

            {filteredAndSortedProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-500 mb-4">
                  <Box className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                  <p className="text-sm">Try adjusting your filters to see more results.</p>
                </div>
                <Button onClick={clearFilters} className="mt-4">
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
