
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-techblue-dark border-t border-teal/20 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-teal font-mono text-xl font-bold">
                <span className="text-teal">&lt;</span>Project<span className="text-teal">Wala</span><span className="text-teal">/&gt;</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Helping students get high-quality, ready-to-submit academic projects in tech and non-tech domains.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal transition-colors duration-300" aria-label="Github">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal transition-colors duration-300" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal transition-colors duration-300" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-mono text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Projects', 'FAQs', 'Contact'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-teal transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-mono text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'Final Year Projects',
                'Mobile App Development',
                'Web Development',
                'AI/ML Projects',
                'Documentation',
                'Viva Support'
              ].map(item => (
                <li key={item}>
                  <a href="#services" className="text-gray-400 hover:text-teal transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-mono text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={18} className="text-teal mt-1 mr-3" />
                <span className="text-gray-400">info@projectwala.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="text-teal mt-1 mr-3" />
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-teal mt-1 mr-3" />
                <span className="text-gray-400">
                  123 Tech Lane, Innovation Hub, 
                  Bangalore, India 560001
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Project Wala. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            <a href="#" className="hover:text-teal transition-colors duration-300">Privacy Policy</a> · 
            <a href="#" className="hover:text-teal transition-colors duration-300 ml-4">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
