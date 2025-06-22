import React from 'react';
import { ArrowRight,Users, Globe, Award, MessageCircle, Mail  } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const whatsappUrl = "https://wa.me/message/FTCFNEK3TNATJ1";

  const handleWhatsAppContact = () => {
    const message = "Hi! I'm interested in learning more about eService Solutions and how you can help my business grow.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`${whatsappUrl}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-eservice-blue/5 via-white to-knowledge-teal/5 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-knowledge-teal/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-eservice-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 bg-knowledge-teal/10 rounded-full text-knowledge-teal text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              We Don't Just Build. We Empower.
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-eservice-blue leading-tight mb-6">
              Digital Services That{' '}
              <span className="text-knowledge-teal">Deliver</span>.{' '}
              <br className="hidden sm:block" />
              Training That{' '}
              <span className="text-knowledge-teal">Transforms</span>.
            </h1>

            <p className="text-lg sm:text-xl text-professional-gray leading-relaxed mb-8 max-w-2xl">
              Transform your business with world-class digital solutions and comprehensive training. From custom websites to hands-on coaching, we ensure you don't just get results—you understand them, own them, and scale them.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={handleWhatsAppContact}
                className="group inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all duration-200 transform hover:scale-105"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Chat on WhatsApp
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              {/* <button
                onClick={() => onNavigate('contact')}
                className="group inline-flex items-center justify-center px-8 py-4 bg-eservice-blue text-white font-semibold rounded-lg hover:bg-eservice-blue/90 transition-all duration-200 transform hover:scale-105"
              >
                Get Your Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button> */}
              <button
                onClick={() =>
                  (window.location.href =
                    "mailto:hello@eservicesolutions.com?subject=Free Consultation Request&body=Hi eService Solutions Team,%0D%0A%0D%0AI would like to schedule a free consultation to discuss my project needs.%0D%0A%0D%0APlease let me know your availability.%0D%0A%0D%0AThank you!")
                }
                className="group inline-flex items-center justify-center px-8 py-4 bg-eservice-blue text-white font-semibold rounded-lg hover:bg-eservice-blue/90 transition-all duration-200 transform hover:scale-105"
              >
                <Mail className="mr-2 w-5 h-5" />
                Email for Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button
                onClick={() => onNavigate('training-application')}
                className="group inline-flex items-center justify-center px-8 py-4 bg-knowledge-teal text-white font-semibold rounded-lg hover:bg-knowledge-teal/90 transition-all duration-200 transform hover:scale-105"
              >
                Apply for Skills Training
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-eservice-blue">10+</div>
                <div className="text-sm text-professional-gray">Client Projects</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-knowledge-teal">50+</div>
                <div className="text-sm text-professional-gray">Learners Trained</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-eservice-blue">All</div>
                <div className="text-sm text-professional-gray">Continents</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration and digital innovation"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-eservice-blue/20 to-transparent rounded-2xl"></div>

              {/* Floating Stats Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-success-green/10 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-success-green" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-success-green">95%</div>
                    <div className="text-xs text-professional-gray">Success Rate</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-knowledge-teal/10 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-knowledge-teal" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-knowledge-teal">3</div>
                    <div className="text-xs text-professional-gray">Continents</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;