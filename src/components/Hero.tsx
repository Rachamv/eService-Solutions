import React from 'react';
import { ArrowRight, Play, Users, Globe, Award } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
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
              Excellence Delivered. Knowledge Empowered.
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-eservice-blue leading-tight mb-6">
              Digital Services That{' '}
              <span className="text-knowledge-teal">Deliver</span>.{' '}
              <br className="hidden sm:block" />
              Training That{' '}
              <span className="text-knowledge-teal">Transforms</span>.
            </h1>
            
            <p className="text-lg sm:text-xl text-professional-gray leading-relaxed mb-8 max-w-2xl">
              We combine expert digital execution with hands-on training to help African businesses scale globally and individuals build sustainable digital careers. From concept to completion, we don't just deliver—we empower.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => onNavigate('contact')}
                className="group inline-flex items-center justify-center px-8 py-4 bg-eservice-blue text-white font-semibold rounded-lg hover:bg-eservice-blue/90 transition-all duration-200 transform hover:scale-105"
              >
                Get Your Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button 
                onClick={() => onNavigate('training')}
                className="group inline-flex items-center justify-center px-8 py-4 bg-knowledge-teal text-white font-semibold rounded-lg hover:bg-knowledge-teal/90 transition-all duration-200 transform hover:scale-105"
              >
                Apply for Skills Training
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-eservice-blue">120+</div>
                <div className="text-sm text-professional-gray">Client Projects</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-knowledge-teal">1,000+</div>
                <div className="text-sm text-professional-gray">Learners Trained</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-eservice-blue">3</div>
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