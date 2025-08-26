import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Star,
  Heart
} from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Our Story', href: '/story' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
    { name: 'Blog', href: '/blog' }
  ];

  const customerService = [
    { name: 'Help Center', href: '/help' },
    { name: 'Size Guide', href: '/size-guide' },
    { name: 'Track Your Order', href: '/track-order' },
    { name: 'Shipping Info', href: '/shipping' },
    { name: 'Gift Cards', href: '/gift-cards' },
    { name: 'Customer Reviews', href: '/reviews' }
  ];

  const policies = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Return Policy', href: '/returns' },
    { name: 'Refund Policy', href: '/refunds' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Warranty', href: '/warranty' }
  ];

  const categories = [
    { name: 'Jewelry', href: '/jewelry' },
    { name: 'Watches', href: '/watches' },
    { name: 'Accessories', href: '/accessories' },
    { name: 'Gift Sets', href: '/gift-sets' },
    { name: 'New Arrivals', href: '/new-arrivals' },
    { name: 'Sale Items', href: '/sale' }
  ];

  const socialMediaLinks = [
    { 
      name: 'Facebook', 
      icon: Facebook, 
      href: 'https://facebook.com',
      color: 'hover:text-blue-500' 
    },
    { 
      name: 'Twitter', 
      icon: Twitter, 
      href: 'https://twitter.com',
      color: 'hover:text-sky-500' 
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      href: 'https://instagram.com',
      color: 'hover:text-pink-500' 
    },
    { 
      name: 'YouTube', 
      icon: Youtube, 
      href: 'https://youtube.com',
      color: 'hover:text-red-500' 
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      href: 'https://linkedin.com',
      color: 'hover:text-blue-700' 
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            
            {/* Left Side - Company Info */}
            <div className="lg:col-span-2">
              {/* Company Logo */}
              <div className="mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-white fill-current" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Gold Collection</h2>
                    <p className="text-gray-400 text-sm">Premium Quality</p>
                  </div>
                </div>
              </div>

              {/* Company Description */}
              <p className="text-gray-400 mb-6 leading-relaxed">
                Discover elegance in every piece. We curate the finest collection of jewelry, watches, and accessories to make every moment special. Quality you can trust, designs you'll love.
              </p>

              {/* Contact Information */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span>123 Fashion Street, New York, NY 10001</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>info@goldcollection.com</span>
                </div>
              </div>

              {/* Social Media Icons */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  {socialMediaLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 ${social.color} hover:bg-gray-700 transition-all duration-200 transform hover:scale-110`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Side - Links */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* Quick Links */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
                  <ul className="space-y-3">
                    {quickLinks.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-white transition-colors duration-200 hover:underline"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Customer Service */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-white">Customer Service</h4>
                  <ul className="space-y-3">
                    {customerService.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-white transition-colors duration-200 hover:underline"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Policies */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-white">Policies</h4>
                  <ul className="space-y-3">
                    {policies.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-white transition-colors duration-200 hover:underline"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Categories - Only visible on larger screens in this layout */}
                <div className="sm:col-span-2 lg:col-span-3 lg:hidden">
                  <h4 className="text-lg font-semibold mb-4 text-white">Categories</h4>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                    {categories.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-200 hover:underline"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Categories for larger screens */}
              <div className="hidden lg:block mt-8">
                <h4 className="text-lg font-semibold mb-4 text-white">Shop Categories</h4>
                <div className="grid grid-cols-3 gap-x-8 gap-y-3">
                  {categories.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 hover:underline"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center sm:text-left">
              © 2024 Gold Collection. All rights reserved. 
              <span className="hidden sm:inline"> | </span>
              <br className="sm:hidden" />
              <span className="inline-flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> in New York
              </span>
            </div>
            
           
          </div>
        </div>
      </div>
    </footer>
  );
}