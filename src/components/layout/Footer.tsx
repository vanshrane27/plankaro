
import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-purple-600 rounded-full p-2">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">PlanKaro</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Discover and promote exciting events in your area with our 
              location-based platform. Connect with local experiences and communities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/explore" className="text-gray-400 hover:text-white transition-colors">
                  Explore Events
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-purple-400 mt-0.5" />
                <span className="text-gray-400">
                  123 Event Street, San Francisco, CA 94105
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-purple-400" />
                <span className="text-gray-400">(123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-400" />
                <span className="text-gray-400">contact@plankaro.com</span>
              </li>
            </ul>
          </div>

          {/* Social Links & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-purple-600 transition-colors">
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-purple-600 transition-colors">
                <Twitter className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-purple-600 transition-colors">
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-purple-600 transition-colors">
                <Linkedin className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} PlanKaro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
