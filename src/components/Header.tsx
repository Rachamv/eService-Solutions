import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, MessageCircle } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    { id: 'coming-soon', label: 'Portfolio', comingSoon: true },
    { id: 'coming-soon', label: 'Blog', comingSoon: true },
    { id: 'coming-soon', label: 'Resources', comingSoon: true },
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
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <button
                key={`${item.id}-${index}`}
                onClick={() => onNavigate(item.comingSoon ? 'coming-soon' : item.id)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-knowledge-teal relative ${
                  activeSection === item.id ? 'text-knowledge-teal' : 'text-professional-gray'
                } ${item.comingSoon ? 'opacity-75' : ''}`}
              >
                {item.label}
                {item.comingSoon && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-alert-orange rounded-full animate-pulse"></span>
                )}
              </button>
            ))}
          </nav>

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
              {navItems.map((item, index) => (
                <button
                  key={`${item.id}-${index}`}
                  onClick={() => {
                    onNavigate(item.comingSoon ? 'coming-soon' : item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left py-2 text-base font-medium transition-colors duration-200 ${
                    activeSection === item.id ? 'text-knowledge-teal' : 'text-professional-gray hover:text-knowledge-teal'
                  } ${item.comingSoon ? 'opacity-75' : ''}`}
                >
                  {item.label}
                  {item.comingSoon && <span className="ml-2 text-xs text-alert-orange">Coming Soon</span>}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;