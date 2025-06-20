import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, MessageCircle } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const whatsappUrl = "https://wa.me/message/FTCFNEK3TNATJ1";

  const handleWhatsAppContact = () => {
    const message = "Hi! I'd like to learn more about eService Solutions and your services.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`${whatsappUrl}?text=${encodedMessage}`, '_blank');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'training', label: 'Training' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
    { id: 'coming-soon', label: 'Coming Soon', highlight: true },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('home')}>
            <img src="/logo.jpg" alt="eService Solutions" className="h-10 w-10 rounded-lg" />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-eservice-blue">eService Solutions</h1>
              <p className="text-xs text-professional-gray -mt-1">Excellence Delivered. Knowledge Empowered.</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-knowledge-teal relative ${
                  activeSection === item.id ? 'text-knowledge-teal' : 'text-professional-gray'
                } ${item.highlight ? 'bg-gradient-to-r from-eservice-blue to-knowledge-teal text-white px-3 py-1 rounded-full hover:shadow-lg' : ''}`}
              >
                {item.label}
                {item.highlight && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-alert-orange rounded-full animate-pulse"></span>
                )}
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button 
              onClick={handleWhatsAppContact}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors duration-200"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className="px-4 py-2 text-sm font-medium text-eservice-blue border border-eservice-blue rounded-lg hover:bg-eservice-blue hover:text-white transition-colors duration-200"
            >
              Get Consultation
            </button>
            <button 
              onClick={() => onNavigate('training-application')}
              className="px-4 py-2 text-sm font-medium text-white bg-knowledge-teal rounded-lg hover:bg-knowledge-teal/90 transition-colors duration-200"
            >
              Apply for Training
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-professional-gray hover:bg-light-gray transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left py-2 text-base font-medium transition-colors duration-200 ${
                    activeSection === item.id ? 'text-knowledge-teal' : 'text-professional-gray hover:text-knowledge-teal'
                  } ${item.highlight ? 'bg-gradient-to-r from-eservice-blue to-knowledge-teal text-white px-3 py-2 rounded-lg' : ''}`}
                >
                  {item.label}
                  {item.highlight && <span className="ml-2 text-xs">🚀</span>}
                </button>
              ))}
              <div className="pt-4 space-y-3">
                <button 
                  onClick={() => {
                    handleWhatsAppContact();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center w-full px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors duration-200"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Chat
                </button>
                <button 
                  onClick={() => {
                    onNavigate('contact');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full px-4 py-2 text-sm font-medium text-eservice-blue border border-eservice-blue rounded-lg hover:bg-eservice-blue hover:text-white transition-colors duration-200"
                >
                  Get Consultation
                </button>
                <button 
                  onClick={() => {
                    onNavigate('training-application');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full px-4 py-2 text-sm font-medium text-white bg-knowledge-teal rounded-lg hover:bg-knowledge-teal/90 transition-colors duration-200"
                >
                  Apply for Training
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;