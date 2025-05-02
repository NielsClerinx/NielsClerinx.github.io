
import React from 'react';
import { Button } from "@/components/ui/button";

const Newsletter = () => {
  return (
    <section className="py-12 bg-haircare-cream border-t border-b border-haircare-beige">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-display font-medium text-haircare-dark-brown mb-4">
            Join Our Newsletter
          </h3>
          <p className="text-haircare-brown mb-6">
            Subscribe to receive updates on new products, special offers, and expert hair care tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-2 rounded-md border border-haircare-gold/30 focus:outline-none focus:ring-2 focus:ring-haircare-gold focus:border-transparent"
            />
            <Button className="bg-haircare-gold hover:bg-haircare-dark-gold text-white whitespace-nowrap">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
