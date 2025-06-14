
import React, { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategoryShowcase from '@/components/CategoryShowcase';
import ProductGrid from '@/components/ProductGrid';
import Cart from '@/components/Cart';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

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

interface CartItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  quantity: number;
  category: string;
}

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistItems, setWishlistItems] = useState<string[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { toast } = useToast();

  const handleAddToCart = (product: Product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
      toast({
        title: "Cart Updated",
        description: `${product.name} quantity increased`,
      });
    } else {
      const newItem: CartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.image,
        quantity: 1,
        category: product.category
      };
      setCartItems([...cartItems, newItem]);
      toast({
        title: "Added to Cart",
        description: `${product.name} has been added to your cart`,
      });
    }
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      handleRemoveItem(id);
      return;
    }
    
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const handleRemoveItem = (id: string) => {
    const item = cartItems.find(item => item.id === id);
    setCartItems(cartItems.filter(item => item.id !== id));
    
    if (item) {
      toast({
        title: "Removed from Cart",
        description: `${item.name} has been removed from your cart`,
      });
    }
  };

  const handleToggleWishlist = (productId: string) => {
    if (wishlistItems.includes(productId)) {
      setWishlistItems(wishlistItems.filter(id => id !== productId));
      toast({
        title: "Removed from Wishlist",
        description: "Product removed from your wishlist",
      });
    } else {
      setWishlistItems([...wishlistItems, productId]);
      toast({
        title: "Added to Wishlist",
        description: "Product added to your wishlist",
      });
    }
  };

  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        cartItemsCount={cartItemsCount}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <main>
        <HeroSection />
        <CategoryShowcase />
        <ProductGrid 
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          wishlistItems={wishlistItems}
        />
      </main>

      <Footer />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
};

export default Index;
