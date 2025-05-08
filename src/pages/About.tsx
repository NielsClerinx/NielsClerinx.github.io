
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-haircare-cream bg-texture py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-haircare-dark-brown mb-6">About Our Story</h1>
              <p className="text-lg md:text-xl text-haircare-brown mb-8">
                Unique Haircare was born from a passion for natural, effective hair treatments that 
                celebrate individuality and beauty in all its forms.
              </p>
              <Separator className="bg-haircare-gold h-0.5 w-24 mx-auto" />
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-display font-medium text-haircare-dark-brown mb-6">Our Journey</h2>
                <p className="text-haircare-brown mb-4">
                  Founded in 2015, Unique Haircare began with a simple mission: to create premium hair care products that 
                  nurture both hair and scalp using only the finest natural ingredients.
                </p>
                <p className="text-haircare-brown mb-4">
                  What started as a small boutique in a quaint neighborhood has grown into a beloved brand 
                  with a devoted following. Our growth has been organic, built on word-of-mouth recommendations 
                  from clients who experienced the transformative effects of our products and services.
                </p>
                <p className="text-haircare-brown">
                  Today, we continue to innovate and expand our offerings while staying true to our founding 
                  principles of quality, sustainability, and personalized care.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <div className="rounded-2xl overflow-hidden h-[400px] md:h-[500px] relative">
                  <img 
                    src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                    alt="Hair salon interior with elegant styling stations" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-20 bg-haircare-beige">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-medium text-haircare-dark-brown mb-4">Our Values</h2>
              <p className="text-haircare-brown max-w-2xl mx-auto">
                The principles that guide everything we do at Unique Haircare.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="bg-haircare-gold/10 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <span className="text-haircare-gold text-2xl">✦</span>
                </div>
                <h3 className="text-xl font-display font-medium text-haircare-dark-brown mb-3">Quality</h3>
                <p className="text-haircare-brown">
                  We never compromise on the quality of our ingredients or services. Every product is meticulously 
                  formulated and tested to ensure exceptional results.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="bg-haircare-gold/10 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <span className="text-haircare-gold text-2xl">✦</span>
                </div>
                <h3 className="text-xl font-display font-medium text-haircare-dark-brown mb-3">Sustainability</h3>
                <p className="text-haircare-brown">
                  From our eco-friendly packaging to our cruelty-free formulations, we're committed to minimizing 
                  our environmental impact and promoting ethical practices.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="bg-haircare-gold/10 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <span className="text-haircare-gold text-2xl">✦</span>
                </div>
                <h3 className="text-xl font-display font-medium text-haircare-dark-brown mb-3">Inclusivity</h3>
                <p className="text-haircare-brown">
                  We celebrate diversity in all forms and are dedicated to creating products that work for all hair types, 
                  textures, and concerns. Beauty should be accessible to everyone.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
