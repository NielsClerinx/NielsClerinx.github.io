
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-16 md:py-24 bg-haircare-beige">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-medium text-haircare-dark-brown mb-4">Visit Our Salon</h2>
            <p className="text-haircare-brown mb-8 max-w-lg">We'd love to welcome you to our salon. Stop by to shop our professional products or book a service with one of our expert stylists.</p>
            
            <div className="space-y-6">
              <div className="flex">
                <MapPin className="h-6 w-6 text-haircare-gold mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-haircare-dark-brown font-medium mb-1">Address</h3>
                  <p className="text-haircare-brown">Mechelsesteenweg 34, 2018 Antwerpen, Belgium</p>
                </div>
              </div>
              
              <div className="flex">
                <Phone className="h-6 w-6 text-haircare-gold mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-haircare-dark-brown font-medium mb-1">Phone</h3>
                  <p className="text-haircare-brown">+32 3 218 75 25</p>
                </div>
              </div>
              
              <div className="flex">
                <Mail className="h-6 w-6 text-haircare-gold mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-haircare-dark-brown font-medium mb-1">Email</h3>
                  <p className="text-haircare-brown">info@uniquehaircare.be</p>
                </div>
              </div>
              
              <div className="flex">
                <Clock className="h-6 w-6 text-haircare-gold mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-haircare-dark-brown font-medium mb-1">Hours</h3>
                  <p className="text-haircare-brown">Monday - Saturday: 9AM - 7PM<br />Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-80 md:h-full min-h-[400px] rounded-lg overflow-hidden shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.590969111893!2d4.40639!3d51.2041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f6e58bb9b643%3A0x2d5ef66100935a89!2sMechelsesteenweg%2034%2C%202018%20Antwerpen%2C%20Belgium!5e0!3m2!1sen!2sus!4v1682537642097!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Salon location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
