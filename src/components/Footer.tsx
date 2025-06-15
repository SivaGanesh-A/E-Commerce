
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const footerSections = [
    {
      title: 'Shop',
      links: [
        'Electronics',
        'Fashion',
        'Home & Kitchen',
        'Beauty',
        'Sports',
        'Books'
      ]
    },
    {
      title: 'Customer Service',
      links: [
        'Contact Us',
        'FAQ',
        'Shipping Info',
        'Returns',
        'Size Guide',
        'Track Order'
      ]
    },
    {
      title: 'About',
      links: [
        'Our Story',
        'Careers',
        'Press',
        'Sustainability',
        'Investors',
        'Affiliate Program'
      ]
    },
    {
      title: 'Legal',
      links: [
        'Privacy Policy',
        'Terms of Service',
        'Cookie Policy',
        'GDPR',
        'Accessibility',
        'Site Map'
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2">
              Stay Updated with Latest Deals
            </h3>
            <p className="text-orange-100 mb-6">
              Subscribe to our newsletter and get exclusive offers straight to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white text-gray-900 border-0"
              />
              <Button 
                className="bg-gray-900 hover:bg-gray-800 text-white px-8"
                size="lg"
              >
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-orange-100 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent mb-4">
                ShopVerse
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your ultimate destination for quality products at unbeatable prices. 
                We're committed to providing exceptional shopping experiences with 
                fast delivery and outstanding customer service.
              </p>
              
              {/* Contact info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-orange-400" />
                  <span className="text-sm text-gray-300">1-800-SHOPVERSE</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-orange-400" />
                  <span className="text-sm text-gray-300">support@shopverse.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-orange-400" />
                  <span className="text-sm text-gray-300">New York, India </span>
                </div>
              </div>
            </div>

            {/* Footer sections */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-lg font-semibold text-white mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-sm text-gray-400">
                © 2025 ShopVerse. All rights reserved.
              </p>
              <div className="flex items-center space-x-4">
                <img src="/placeholder.svg" alt="Visa" className="h-6 opacity-60" />
                <img src="/placeholder.svg" alt="Mastercard" className="h-6 opacity-60" />
                <img src="/placeholder.svg" alt="PayPal" className="h-6 opacity-60" />
                <img src="/placeholder.svg" alt="Apple Pay" className="h-6 opacity-60" />
              </div>
            </div>
            
            {/* Social media links */}
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
