import React from 'react';
import { Lightbulb, Users, Target, Globe2 } from 'lucide-react';

const WhoWeAre: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-eservice-blue mb-6">
            Execution + Education. Our Model is Different.
          </h2>
          <p className="text-lg text-professional-gray max-w-4xl mx-auto leading-relaxed">
            We're a global team of designers, developers, marketers, and strategists working together to help you launch faster, grow smarter, and build lasting impact. From Africa's emerging markets to clients in the UK and US—we bring world-class digital solutions and transformative skill-building under one roof.
          </p>
          <div className="mt-8 p-6 bg-knowledge-teal/5 rounded-2xl inline-block">
            <p className="text-knowledge-teal font-medium italic">
              Because the best projects don't just work—they teach you how to make them work even better.
            </p>
          </div>
        </div>

        {/* Team Image Section */}
        <div className="mb-16">
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Diverse team collaborating on digital solutions"
              className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-eservice-blue/30 to-knowledge-teal/30 rounded-2xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-2">Global Team, Local Impact</h3>
                <p className="text-lg opacity-90">Nigeria • United Kingdom • United States</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="group text-center p-6 rounded-2xl hover:bg-light-gray transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-eservice-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-eservice-blue group-hover:text-white transition-all duration-300">
              <Lightbulb className="w-8 h-8 text-eservice-blue group-hover:text-white" />
            </div>
            <h3 className="text-xl font-semibold text-eservice-blue mb-3">Innovation-Driven</h3>
            <p className="text-professional-gray">
              Cutting-edge solutions with practical, results-focused approaches that deliver real value.
            </p>
          </div>

          <div className="group text-center p-6 rounded-2xl hover:bg-light-gray transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-knowledge-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-knowledge-teal group-hover:text-white transition-all duration-300">
              <Users className="w-8 h-8 text-knowledge-teal group-hover:text-white" />
            </div>
            <h3 className="text-xl font-semibold text-knowledge-teal mb-3">Collaborative</h3>
            <p className="text-professional-gray">
              We position ourselves as partners, not vendors, working together for your success.
            </p>
          </div>

          <div className="group text-center p-6 rounded-2xl hover:bg-light-gray transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-eservice-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-eservice-blue group-hover:text-white transition-all duration-300">
              <Target className="w-8 h-8 text-eservice-blue group-hover:text-white" />
            </div>
            <h3 className="text-xl font-semibold text-eservice-blue mb-3">Knowledge-Centric</h3>
            <p className="text-professional-gray">
              Every project includes comprehensive training and knowledge transfer for lasting impact.
            </p>
          </div>

          <div className="group text-center p-6 rounded-2xl hover:bg-light-gray transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-knowledge-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-knowledge-teal group-hover:text-white transition-all duration-300">
              <Globe2 className="w-8 h-8 text-knowledge-teal group-hover:text-white" />
            </div>
            <h3 className="text-xl font-semibold text-knowledge-teal mb-3">Global Impact</h3>
            <p className="text-professional-gray">
              From Africa's emerging markets to international clients, we deliver world-class solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;