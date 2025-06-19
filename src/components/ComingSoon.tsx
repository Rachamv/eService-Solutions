import React, { useState, useEffect } from 'react';
import { Clock, Mail, Bell, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

interface ComingSoonProps {
  title?: string;
  subtitle?: string;
  description?: string;
  launchDate?: string;
  onNavigate?: (section: string) => void;
}

const ComingSoon: React.FC<ComingSoonProps> = ({
  title = "Something Amazing is Coming",
  subtitle = "New Digital Solutions & Training Programs",
  description = "We're crafting innovative digital experiences and comprehensive training programs that will transform how you build and scale your business. Get ready for our most impactful offerings yet.",
  launchDate = "2025-06-01",
  onNavigate
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(launchDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail('');
    }
  };

  const features = [
    {
      icon: Sparkles,
      title: 'Advanced Digital Solutions',
      description: 'Next-generation web applications with AI integration'
    },
    {
      icon: Bell,
      title: 'Comprehensive Training Hub',
      description: 'Interactive learning platform with certification programs'
    },
    {
      icon: Clock,
      title: 'Real-time Collaboration Tools',
      description: 'Enhanced project management and client communication'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-eservice-blue/5 via-white to-knowledge-teal/5 flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-knowledge-teal/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-eservice-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-knowledge-teal/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          {/* Logo */}
          <div className="flex items-center justify-center space-x-3 mb-8">
            <img src="/logo.jpg" alt="eService Solutions" className="h-16 w-16 rounded-xl shadow-lg" />
            <div>
              <h1 className="text-2xl font-bold text-eservice-blue">eService Solutions</h1>
              <p className="text-sm text-professional-gray">Excellence Delivered. Knowledge Empowered.</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="animate-slide-up">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-eservice-blue leading-tight mb-6">
              {title}
            </h2>
            <h3 className="text-2xl sm:text-3xl font-semibold text-knowledge-teal mb-8">
              {subtitle}
            </h3>
            <p className="text-lg text-professional-gray max-w-3xl mx-auto leading-relaxed mb-12">
              {description}
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-xl font-semibold text-eservice-blue mb-6">Launch Countdown</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="bg-gradient-to-br from-eservice-blue to-knowledge-teal text-white rounded-xl p-4 mb-2">
                    <div className="text-3xl font-bold">{value}</div>
                  </div>
                  <div className="text-sm font-medium text-professional-gray capitalize">{unit}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Email Subscription */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h4 className="text-xl font-semibold text-eservice-blue mb-4">Be the First to Know</h4>
            <p className="text-professional-gray mb-6">
              Get exclusive early access and special launch offers delivered to your inbox.
            </p>
            
            {isSubscribed ? (
              <div className="text-center py-4">
                <CheckCircle className="w-12 h-12 text-success-green mx-auto mb-3" />
                <p className="text-success-green font-semibold">Thank you for subscribing!</p>
                <p className="text-professional-gray text-sm">We'll keep you updated on our launch progress.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-knowledge-teal focus:border-transparent"
                />
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center px-6 py-3 bg-eservice-blue text-white font-semibold rounded-lg hover:bg-eservice-blue/90 transition-all duration-200"
                >
                  Notify Me
                  <Bell className="ml-2 w-4 h-4 group-hover:animate-pulse" />
                </button>
              </form>
            )}
          </div>

          {/* Features Preview */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl p-6 hover:bg-white/80 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-12 h-12 bg-knowledge-teal/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-knowledge-teal" />
                  </div>
                  <h5 className="font-semibold text-eservice-blue mb-2">{feature.title}</h5>
                  <p className="text-sm text-professional-gray">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          {onNavigate && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '1.2s' }}>
              <button 
                onClick={() => onNavigate('services')}
                className="group inline-flex items-center justify-center px-8 py-4 bg-knowledge-teal text-white font-semibold rounded-lg hover:bg-knowledge-teal/90 transition-all duration-200"
              >
                Explore Current Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button 
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 border-2 border-eservice-blue text-eservice-blue font-semibold rounded-lg hover:bg-eservice-blue hover:text-white transition-all duration-200"
              >
                Contact Us Today
              </button>
            </div>
          )}
        </div>

        {/* Progress Bar */}
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between text-sm text-professional-gray mb-2">
            <span>Development Progress</span>
            <span>75%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-gradient-to-r from-eservice-blue to-knowledge-teal h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: '75%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;