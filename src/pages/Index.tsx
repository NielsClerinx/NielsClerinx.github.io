
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Categories />
        <Services />
        <Testimonials />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
