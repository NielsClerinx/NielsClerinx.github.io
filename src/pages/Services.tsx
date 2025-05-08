
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scissors, Clock, Star, Calendar } from 'lucide-react';

const serviceCategories = [
  {
    title: "Hair Cuts & Styling",
    icon: <Scissors className="h-5 w-5" />,
    services: [
      {
        name: "Women's Haircut",
        description: "Professional cut and style tailored to your face shape and hair texture.",
        duration: "60 min",
        price: "€45-75",
        popular: true
      },
      {
        name: "Men's Haircut",
        description: "Precision cut and styling with attention to detail.",
        duration: "30 min",
        price: "€35-45"
      },
      {
        name: "Blow Dry & Styling",
        description: "Professional blow dry with styling for any occasion.",
        duration: "45 min",
        price: "€35-55"
      },
      {
        name: "Special Occasion Style",
        description: "Elegant updo or style for weddings, proms, or special events.",
        duration: "75 min",
        price: "€65-95"
      }
    ]
  },
  {
    title: "Color & Highlights",
    icon: <Star className="h-5 w-5" />,
    services: [
      {
        name: "Root Touch-up",
        description: "Color application to cover visible roots and maintain your look.",
        duration: "60 min",
        price: "€55-75"
      },
      {
        name: "Full Color",
        description: "All-over color application for a refreshed appearance.",
        duration: "90 min",
        price: "€75-95",
        popular: true
      },
      {
        name: "Highlights/Lowlights",
        description: "Dimensional color technique to add depth and contrast.",
        duration: "120 min",
        price: "€95-145"
      },
      {
        name: "Balayage/Ombre",
        description: "Hand-painted highlights for a natural, sun-kissed look.",
        duration: "150 min",
        price: "€125-185"
      }
    ]
  },
  {
    title: "Treatments & Therapies",
    icon: <Clock className="h-5 w-5" />,
    services: [
      {
        name: "Deep Conditioning",
        description: "Intensive moisture treatment for damaged or dry hair.",
        duration: "30 min",
        price: "€35-45"
      },
      {
        name: "Keratin Smoothing",
        description: "Long-lasting frizz reduction and manageability treatment.",
        duration: "120 min",
        price: "€150-250",
        popular: true
      },
      {
        name: "Scalp Treatment",
        description: "Therapeutic treatment to address scalp conditions and promote hair health.",
        duration: "45 min",
        price: "€45-65"
      },
      {
        name: "Hair & Scalp Detox",
        description: "Deep cleansing treatment to remove buildup and rejuvenate hair.",
        duration: "45 min",
        price: "€55-75"
      }
    ]
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-haircare-beige bg-texture relative">
          <div className="absolute inset-0 bg-gradient-to-r from-haircare-cream/50 to-transparent"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-display font-medium text-haircare-dark-brown mb-6">
                Our Salon Services
              </h1>
              <p className="text-lg text-haircare-brown mb-8 max-w-2xl">
                Our skilled professionals offer a comprehensive range of services to enhance your natural beauty and keep your hair healthy and vibrant. From cuts and styling to color and specialized treatments, we have everything you need.
              </p>
              <Button className="bg-haircare-gold hover:bg-haircare-dark-gold text-white">
                Book an Appointment
              </Button>
            </div>
          </div>
        </section>

        {/* Services List Section */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            {serviceCategories.map((category, index) => (
              <div key={index} className="mb-20">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-haircare-beige p-3 rounded-full">
                    {category.icon}
                  </div>
                  <h2 className="text-3xl font-display font-medium text-haircare-dark-brown">{category.title}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <Card key={serviceIndex} className="border-haircare-beige hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-display font-medium text-haircare-dark-brown">{service.name}</h3>
                          {service.popular && (
                            <Badge className="bg-haircare-gold text-white border-none">Popular</Badge>
                          )}
                        </div>
                        <p className="text-haircare-brown mb-4 text-sm">{service.description}</p>
                        <div className="flex items-center gap-2 text-haircare-brown text-sm mb-2">
                          <Clock className="h-4 w-4 text-haircare-gold" />
                          <span>{service.duration}</span>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <span className="text-haircare-gold font-medium text-lg">{service.price}</span>
                          <Button variant="outline" className="border-haircare-gold text-haircare-gold hover:bg-haircare-gold hover:text-white">
                            Book Now
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Booking CTA Section */}
        <section className="py-16 bg-haircare-cream">
          <div className="container-custom">
            <div className="bg-white rounded-lg shadow-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:max-w-xl">
                <h2 className="text-3xl font-display font-medium text-haircare-dark-brown mb-4">Ready to Schedule Your Appointment?</h2>
                <p className="text-haircare-brown mb-0">
                  Book an appointment with our expert stylists and experience the UNIQUE difference. 
                  We'll help you achieve the look you desire with our premium services.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-haircare-gold hover:bg-haircare-dark-gold text-white">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Online
                </Button>
                <Button variant="outline" className="border-haircare-gold text-haircare-gold hover:bg-haircare-gold hover:text-white">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
