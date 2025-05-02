
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-haircare-beige py-20 md:py-24 lg:py-28">
      <div className="absolute inset-0 bg-texture opacity-50"></div>
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-haircare-dark-brown leading-tight">
              Experience <span className="text-haircare-gold">Luxury</span> Haircare
            </h1>
            <p className="text-lg text-haircare-brown max-w-lg">
              Discover premium products and expert salon services for your hair that revitalize, nourish, and transform.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-haircare-gold hover:bg-haircare-dark-gold text-white px-8 py-6">
                Shop Products
              </Button>
              <Button variant="outline" className="border-haircare-gold text-haircare-dark-brown hover:bg-haircare-gold hover:text-white px-8 py-6">
                Book Appointment
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden h-64 bg-haircare-cream shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1560707303-4e980ce876ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" 
                  alt="Luxury haircare products" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-44 bg-haircare-cream shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" 
                  alt="Hair styling" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="rounded-lg overflow-hidden h-44 bg-haircare-cream shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" 
                  alt="Hair salon" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-64 bg-haircare-cream shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" 
                  alt="Hair products" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Mobile Hero Image */}
          <div className="lg:hidden">
            <div className="rounded-lg overflow-hidden h-64 bg-haircare-cream shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1560707303-4e980ce876ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" 
                alt="Luxury haircare products" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
