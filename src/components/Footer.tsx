import React from 'react';
import { Link } from 'react-scroll';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Pamomo</h3>
            <p className="text-gray-400">Your secure digital wallet solution for all financial needs.</p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="features" 
                  smooth={true} 
                  duration={500} 
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link 
                  to="how-it-works" 
                  smooth={true} 
                  duration={500} 
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link 
                  to="pricing" 
                  smooth={true} 
                  duration={500} 
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link 
                  to="merchant" 
                  smooth={true} 
                  duration={500} 
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  For Merchants
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://pamomo-wallet.netlify.app" className="text-gray-400 hover:text-white">
                  Pamomo Wallet
                </a>
              </li>
              <li>
                <a href="https://pamomo-agent.netlify.app" className="text-gray-400 hover:text-white">
                  Pamomo Merchant
                </a>
              </li>
              <li>
                <a 
                  href="http://localhost:5173/developer-api" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  Developer API
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="mr-2 text-gray-400" size={16} />
                <a href="mailto:innowaluza@gmail.com" className="text-gray-400 hover:text-white">
                  innowaluza@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-gray-400" size={16} />
                <a href="tel:+2650994921108" className="text-gray-400 hover:text-white">
                  0994921108
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2 text-gray-400" size={16} />
                <span className="text-gray-400">University Of Malawi, Zomba</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">© 2025 Pamomo Wallet. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;