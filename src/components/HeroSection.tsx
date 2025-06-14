
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Summer Sale Extravaganza",
      subtitle: "Up to 70% Off on Electronics",
      description: "Discover amazing deals on smartphones, laptops, and gadgets",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&h=600&fit=crop",
      cta: "Shop Electronics",
      gradient: "from-blue-600 via-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "Fashion Forward",
      subtitle: "New Collection Arriving",
      description: "Step into style with our latest fashion trends and exclusive designs",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop",
      cta: "Explore Fashion",
      gradient: "from-orange-500 via-red-500 to-pink-500"
    },
    {
      id: 3,
      title: "Smart Home Revolution",
      subtitle: "Transform Your Living Space",
      description: "Create the perfect smart home with our cutting-edge technology",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=1200&h=600&fit=crop",
      cta: "Shop Home & Kitchen",
      gradient: "from-green-500 via-teal-500 to-blue-500"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[70vh] overflow-hidden">
      {/* Background slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} opacity-30 z-20`}></div>
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-30 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
                {slides[currentSlide].title}
              </h1>
              <h2 className="text-2xl md:text-3xl text-orange-300 mb-4 font-semibold">
                {slides[currentSlide].subtitle}
              </h2>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                {slides[currentSlide].description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-xl">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  {slides[currentSlide].cta}
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300">
                  View All Deals
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <Button
        variant="ghost"
        size="lg"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-40 text-white hover:bg-white/20 rounded-full"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="lg"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-40 text-white hover:bg-white/20 rounded-full"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-40 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-orange-500 w-8' : 'bg-white/50 hover:bg-white/80'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
