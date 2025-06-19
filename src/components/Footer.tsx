import React from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const footerSections = [
    {
      title: 'Services',
      links: [
        { label: 'Technical Solutions', action: () => onNavigate('services') },
        { label: 'Branding & Growth', action: () => onNavigate('services') },
        { label: 'Training & Coaching', action: () => onNavigate('training') },
        { label: 'Custom Learning Solutions', action: () => onNavigate('training') }
      ]
    },
    {
      title: 'Training',
      links: [
        { label: 'Community Bootcamps', action: () => onNavigate('training') },
        { label: 'Client Coaching', action: () => onNavigate('training') },
        { label: 'Partnership Programs', action: () => onNavigate('contact') },
        { label: 'Scholarship Opportunities', action: () => onNavigate('contact') }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', action: () => onNavigate('about') },
        { label: 'Our Mission', action: () => onNavigate('about') },
        { label: 'Impact Goals', action: () => onNavigate('about') },
        { label: 'Join Our Team', action: () => onNavigate('contact') }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Portfolio Examples', href: '#' },
        { label: 'Success Stories', action: () => onNavigate('training') },
        { label: 'Brand Guidelines', href: '#' },
        { label: 'Community Updates', href: '#' }
      ]
    }
  ];

  return (
    <footer className="bg-professional-gray text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src="/logo.jpg" alt="eService Solutions" className="h-12 w-12 rounded-lg" />
              <div>
                <h3 className="text-xl font-bold text-white">eService Solutions</h3>
                <p className="text-sm text-gray-300">Excellence Delivered. Knowledge Empowered.</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              We combine expert digital execution with hands-on training to help African businesses scale globally and individuals build sustainable digital careers.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-knowledge-teal" />
                <span className="text-gray-300">hello@eservicesolutions.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-knowledge-teal" />
                <span className="text-gray-300">+234 802 129 5589</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-knowledge-teal" />
                <span className="text-gray-300">Ibadan, Nigeria • UK • US</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.action ? (
                      <button
                        onClick={link.action}
                        className="text-gray-300 hover:text-knowledge-teal transition-colors duration-200 text-left"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-knowledge-teal transition-colors duration-200 flex items-center"
                      >
                        {link.label}
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Community Impact */}
        <div className="bg-eservice-blue/20 rounded-2xl p-8 mb-12">
          <div className="text-center">
            <h4 className="text-xl font-bold text-white mb-4">Community Impact Commitment</h4>
            <p className="text-gray-300 mb-6">
              10% of our profits are reinvested in community programs, scholarships, and free training for underserved groups.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-knowledge-teal">200+</div>
                <div className="text-sm text-gray-300">Free Workshops</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-knowledge-teal">50+</div>
                <div className="text-sm text-gray-300">Scholarships Awarded</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-knowledge-teal">85%</div>
                <div className="text-sm text-gray-300">Job Placement Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-knowledge-teal">10,000</div>
                <div className="text-sm text-gray-300">2035 Goal</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2025 eService Solutions. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <button className="text-gray-300 hover:text-knowledge-teal transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="text-gray-300 hover:text-knowledge-teal transition-colors duration-200">
                Terms of Service
              </button>
              <button className="text-gray-300 hover:text-knowledge-teal transition-colors duration-200">
                Brand Guidelines
              </button>
            </div>
          </div>
          
          <div className="text-center mt-6 pt-6 border-t border-gray-600">
            <p className="text-knowledge-teal font-medium italic">
              Building the future, one skill at a time.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;