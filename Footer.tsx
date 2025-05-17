import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 text-white">
              <ShoppingBag className="w-8 h-8" />
              <span className="text-xl font-bold">FastBite</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Delicious food delivered fast to your door. Enjoy the best local restaurants from the comfort of your home.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-primary-400 transition-colors text-sm">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-primary-400 transition-colors text-sm">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-primary-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm">
                <Phone size={16} />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail size={16} />
                <span>support@fastbite.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>123 Delivery St, Food City, FC 12345</span>
              </li>
            </ul>
          </div>

          {/* Social Media & App Download */}
          <div>
            <h4 className="font-bold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
            <h4 className="font-bold text-white mb-2">Get the App</h4>
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors text-sm">
                iOS App
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors text-sm">
                Android App
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} FastBite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;