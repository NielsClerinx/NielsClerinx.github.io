
import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-haircare-dark-brown text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-display text-haircare-gold mb-4">UNIQUE HAIRCARE</h3>
            <p className="text-sm text-gray-300 mb-4">Premium hair products and services for those who desire the best for their hair.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-haircare-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-haircare-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-haircare-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-haircare-gold transition-colors">Shampoos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-haircare-gold transition-colors">Conditioners</a></li>
              <li><a href="#" className="text-gray-300 hover:text-haircare-gold transition-colors">Treatments</a></li>
              <li><a href="#" className="text-gray-300 hover:text-haircare-gold transition-colors">Styling</a></li>
              <li><a href="#" className="text-gray-300 hover:text-haircare-gold transition-colors">Tools</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-haircare-gold transition-colors">Hair Cuts</a></li>
              <li><a href="#" className="text-gray-300 hover:text-haircare-gold transition-colors">Coloring</a></li>
              <li><a href="#" className="text-gray-300 hover:text-haircare-gold transition-colors">Treatments</a></li>
              <li><a href="#" className="text-gray-300 hover:text-haircare-gold transition-colors">Styling</a></li>
              <li><a href="#" className="text-gray-300 hover:text-haircare-gold transition-colors">Consultations</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-4">Information</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-haircare-gold transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-haircare-gold transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-haircare-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-haircare-gold transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-haircare-gold transition-colors">Shipping & Returns</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Unique Haircare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
