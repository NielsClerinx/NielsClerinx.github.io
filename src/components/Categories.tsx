
import React from 'react';
import { ArrowRight } from 'lucide-react';

const categoryItems = [
  {
    title: "Shampoos & Conditioners",
    description: "Cleanse and nourish with premium formulations",
    image: "https://images.unsplash.com/photo-1610705267928-1b9f2fa7f1c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    link: "#"
  },
  {
    title: "Treatments & Masks",
    description: "Intensive care for damaged or stressed hair",
    image: "https://images.unsplash.com/photo-1614859275667-b161d979f626?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    link: "#"
  },
  {
    title: "Styling Products",
    description: "Create and maintain perfect styles with ease",
    image: "https://images.unsplash.com/photo-1596178060810-72f53ce9a65c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    link: "#"
  },
  {
    title: "Tools & Accessories",
    description: "Professional quality implements for home use",
    image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80",
    link: "#"
  }
];

const Categories = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-medium text-haircare-dark-brown mb-4">Our Product Categories</h2>
          <p className="text-haircare-brown max-w-2xl mx-auto">Discover our professionally curated product ranges to address every hair concern and style need</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categoryItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-md bg-haircare-cream transition-all duration-300 hover:shadow-xl">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-medium text-haircare-dark-brown mb-2">{item.title}</h3>
                <p className="text-haircare-brown text-sm mb-4">{item.description}</p>
                <a 
                  href={item.link} 
                  className="inline-flex items-center text-haircare-gold font-medium hover:text-haircare-dark-gold transition-colors"
                >
                  Explore <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
