
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from 'lucide-react';

// Product type definition
type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
};

const Products = () => {
  // Product categories
  const categories = ["All", "Shampoos", "Conditioners", "Treatments", "Styling", "Tools"];
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Sample product data
  const products: Product[] = [
    {
      id: 1,
      name: "Moisturizing Shampoo",
      category: "Shampoos",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Hydrating formula for dry and damaged hair."
    },
    {
      id: 2,
      name: "Volume Conditioner",
      category: "Conditioners",
      price: 22.99,
      image: "https://images.unsplash.com/photo-1619451683694-4882905a6f97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Lightweight conditioner that adds body and shine."
    },
    {
      id: 3,
      name: "Repair Hair Mask",
      category: "Treatments",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70e818?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Intensive weekly treatment for damaged hair."
    },
    {
      id: 4,
      name: "Styling Cream",
      category: "Styling",
      price: 18.99,
      image: "https://images.unsplash.com/photo-1631730458434-b77ab468378b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Medium-hold styling cream for natural-looking styles."
    },
    {
      id: 5,
      name: "Ceramic Hair Dryer",
      category: "Tools",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1522338140262-f46f5913618a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Professional-grade dryer with multiple heat settings."
    },
    {
      id: 6,
      name: "Clarifying Shampoo",
      category: "Shampoos",
      price: 26.99,
      image: "https://images.unsplash.com/photo-1631730356003-5cc80c80a456?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Deep cleansing formula that removes product buildup."
    },
    {
      id: 7,
      name: "Leave-in Conditioner",
      category: "Conditioners",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1621797064712-2f1b3a5db45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Lightweight formula that detangles and protects."
    },
    {
      id: 8,
      name: "Hair Oil Serum",
      category: "Treatments",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1598452963314-b09f397a5c48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Nourishing oil blend that tames frizz and adds shine."
    }
  ];

  // Filter products based on active category
  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-haircare-cream py-16 border-b border-haircare-beige">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-display font-medium text-haircare-dark-brown mb-4">
                Our Products
              </h1>
              <p className="text-haircare-brown text-lg mb-0">
                Premium hair care products formulated with natural ingredients for healthy, beautiful hair.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-haircare-beige">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    activeCategory === category
                      ? "bg-haircare-gold text-white" 
                      : "bg-white text-haircare-dark-brown hover:bg-haircare-gold/10"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 bg-white">
          <div className="container-custom">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-haircare-brown text-lg">No products found in this category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="border border-haircare-beige hover:shadow-md transition-shadow overflow-hidden">
                    <div className="aspect-square overflow-hidden bg-haircare-cream">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-5">
                      <div className="mb-2 text-sm text-haircare-gold font-medium">{product.category}</div>
                      <h3 className="font-display text-xl mb-2 text-haircare-dark-brown">{product.name}</h3>
                      <p className="text-haircare-brown text-sm mb-4 line-clamp-2">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-haircare-dark-brown font-medium">${product.price.toFixed(2)}</span>
                        <Button size="sm" className="bg-haircare-gold hover:bg-haircare-dark-gold text-white">
                          <ShoppingBag className="mr-1 h-4 w-4" /> Add to Cart
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-haircare-beige">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-2xl md:text-4xl font-display font-medium text-haircare-dark-brown mb-4">
                Why Choose Our Products?
              </h2>
              <p className="text-haircare-brown">
                Our products are formulated with care to provide the best results for your hair.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-haircare-cream rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-haircare-gold">🌿</span>
                </div>
                <h3 className="font-display text-xl mb-2 text-haircare-dark-brown">Natural Ingredients</h3>
                <p className="text-haircare-brown">Made with natural ingredients that nourish and protect your hair.</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-haircare-cream rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-haircare-gold">🧪</span>
                </div>
                <h3 className="font-display text-xl mb-2 text-haircare-dark-brown">Cruelty-Free</h3>
                <p className="text-haircare-brown">All our products are cruelty-free and never tested on animals.</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-haircare-cream rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-haircare-gold">♻️</span>
                </div>
                <h3 className="font-display text-xl mb-2 text-haircare-dark-brown">Sustainable Packaging</h3>
                <p className="text-haircare-brown">Eco-friendly packaging that minimizes environmental impact.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
