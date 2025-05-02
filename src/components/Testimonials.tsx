
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Elise Dubois",
    rating: 5,
    text: "I've been using products from Unique Haircare for years and my hair has never looked better. Their sulfate-free shampoos are gentle yet effective.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
  },
  {
    name: "Thomas Laurent",
    rating: 5,
    text: "The hair treatments at this salon are incredible. My damaged hair has completely transformed after just a few visits.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
  },
  {
    name: "Marie Lefèvre",
    rating: 5,
    text: "The staff is knowledgeable and takes the time to understand exactly what you want. I love the personalized approach!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-medium text-haircare-dark-brown mb-4">What Our Clients Say</h2>
          <p className="text-haircare-brown max-w-2xl mx-auto">Read testimonials from our satisfied customers who love our products and services</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="p-8 rounded-lg bg-haircare-cream border border-haircare-gold/20 shadow-sm flex flex-col"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-haircare-dark-brown">{testimonial.name}</h3>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-haircare-gold text-haircare-gold" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-haircare-brown text-sm italic flex-grow">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
