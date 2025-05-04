
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
                  <p className="text-haircare-brown">Gorsemweg 18, 3800 Sint-Truiden, Belgium</p>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.6314107290978!2d5.178265819261301!3d50.81946745760553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c117833457a5f7%3A0x674b9585db0e0b2c!2sUnique%20Haircare!5e0!3m2!1snl!2sbe!4v1746368836903!5m2!1snl!2sbe"
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
