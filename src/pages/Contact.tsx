
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from 'sonner';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success("Your message has been sent successfully!", {
      description: "We'll get back to you as soon as possible.",
    });
    form.reset();
    console.log(values);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-haircare-beige py-12 md:py-16">
          <div className="container-custom text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-haircare-dark-brown mb-4">
              Get in Touch
            </h1>
            <p className="text-haircare-brown max-w-2xl mx-auto">
              Have a question about our products or services? Get in touch with our friendly team and we'll get back to you as soon as possible.
            </p>
          </div>
        </section>
        
        {/* Contact Form and Info */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl md:text-3xl font-display font-medium text-haircare-dark-brown mb-6">
                  Send us a Message
                </h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="you@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="+1 (555) 000-0000" {...field} />
                          </FormControl>
                          <FormDescription>
                            We'll only call if we need to clarify something about your inquiry
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="How can we help you today?" 
                              className="min-h-[120px]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="bg-haircare-gold hover:bg-haircare-gold/90 text-haircare-dark-brown w-full md:w-auto">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </Form>
              </div>
              
              {/* Contact Info */}
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-medium text-haircare-dark-brown mb-6">
                  Visit Our Salon
                </h2>
                <p className="text-haircare-brown mb-8 max-w-lg">
                  We'd love to welcome you to our salon. Stop by to shop our professional products or book a service with one of our expert stylists.
                </p>
                
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
                
                <div className="mt-8 h-80 rounded-lg overflow-hidden shadow-md">
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
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
