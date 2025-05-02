
import React from 'react';
import { Button } from "@/components/ui/button";

const serviceItems = [
  {
    title: "Hair Cuts & Styling",
    description: "From classic cuts to trendy styles, our expert stylists create the perfect look to match your personality.",
    price: "Starting at €45",
  },
  {
    title: "Color & Highlights",
    description: "Express yourself with vibrant colors or natural highlights applied with precision and care.",
    price: "Starting at €75",
  },
  {
    title: "Treatments & Therapies",
    description: "Revitalize your hair with our nourishing treatments designed for damaged, dry, or stressed hair.",
    price: "Starting at €35",
  },
];

const Services = () => {
  return (
    <section className="py-16 md:py-24 bg-haircare-beige bg-texture">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-display font-medium text-haircare-dark-brown mb-4">Salon Services</h2>
              <p className="text-haircare-brown max-w-xl">Our skilled professionals offer a comprehensive range of services to enhance your natural beauty and keep your hair healthy and vibrant.</p>
            </div>
            
            <div className="space-y-8">
              {serviceItems.map((service, index) => (
                <div key={index} className="flex flex-col p-6 rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-display font-medium text-haircare-dark-brown">{service.title}</h3>
                    <span className="text-haircare-gold font-medium">{service.price}</span>
                  </div>
                  <p className="text-haircare-brown mt-2 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <Button className="bg-haircare-gold hover:bg-haircare-dark-gold text-white">
                Book an Appointment
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden aspect-[3/4] shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" 
                  alt="Hair styling" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 mt-12">
              <div className="rounded-lg overflow-hidden aspect-[3/4] shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80" 
                  alt="Hair coloring" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
