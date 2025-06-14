
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const CategoryShowcase = () => {
  const categories = [
    {
      id: 1,
      name: 'Electronics',
      description: 'Latest gadgets and tech',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop',
      itemCount: '2,500+ items',
      gradient: 'from-blue-500 to-cyan-500',
      offer: 'Up to 60% OFF'
    },
    {
      id: 2,
      name: 'Fashion',
      description: 'Trendy clothing & accessories',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop',
      itemCount: '5,000+ items',
      gradient: 'from-pink-500 to-rose-500',
      offer: 'Buy 2 Get 1 Free'
    },
    {
      id: 3,
      name: 'Home & Kitchen',
      description: 'Make your house a home',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=300&fit=crop',
      itemCount: '1,200+ items',
      gradient: 'from-green-500 to-emerald-500',
      offer: 'New Arrivals'
    },
    {
      id: 4,
      name: 'Beauty',
      description: 'Skincare & cosmetics',
      image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&h=300&fit=crop',
      itemCount: '800+ items',
      gradient: 'from-purple-500 to-indigo-500',
      offer: 'Premium Brands'
    },
    {
      id: 5,
      name: 'Sports',
      description: 'Fitness & outdoor gear',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop',
      itemCount: '1,500+ items',
      gradient: 'from-orange-500 to-red-500',
      offer: 'Sports Week Sale'
    },
    {
      id: 6,
      name: 'Books',
      description: 'Knowledge at your fingertips',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=300&fit=crop',
      itemCount: '10,000+ items',
      gradient: 'from-amber-500 to-yellow-500',
      offer: 'Best Sellers'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover amazing products across all categories with exclusive deals and offers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              {/* Background image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-70`}></div>
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                {/* Offer badge */}
                <div className="self-start">
                  <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                    {category.offer}
                  </Badge>
                </div>

                {/* Category info */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{category.name}</h3>
                  <p className="text-sm opacity-90">{category.description}</p>
                  <p className="text-xs opacity-75">{category.itemCount}</p>
                  
                  <Button 
                    variant="secondary" 
                    className="mt-4 bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-gray-900 transition-all duration-300"
                  >
                    Shop Now
                  </Button>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* View all categories button */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-xl">
            View All Categories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
