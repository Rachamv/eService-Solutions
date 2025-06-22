import React, { useState } from 'react';
import { Code, Palette, GraduationCap, ArrowRight, CheckCircle, Clock, Users } from 'lucide-react';

interface ServicesProps {
  onNavigate: (section: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Code,
      title: 'Technical Solutions',
      subtitle: 'Custom Development with Knowledge Transfer',
      description: 'We build robust digital systems and ensure you can confidently manage them long-term.',
      features: [
        'Website & Web App Development',
        'Backend Systems & Integration',
        'Infrastructure & Deployment',
        'Technical Documentation & Training'
      ],
      timeline: '2-8 weeks',
      training: '2-4 hours of personalized onboarding',
      color: 'eservice-blue',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Palette,
      title: 'Branding & Growth',
      subtitle: 'Visual Identity with Strategic Impact',
      description: 'We create compelling brand experiences and equip your team to maintain consistency across all touchpoints.',
      features: [
        'Brand Strategy & Identity',
        'UI/UX Design',
        'Marketing Content & Campaigns',
        'Brand Guidelines & Templates'
      ],
      timeline: '1-6 weeks',
      training: 'Brand management workshops',
      color: 'knowledge-teal',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: GraduationCap,
      title: 'Training & Coaching',
      subtitle: 'Learning Experiences That Create Independence',
      description: 'We design and deliver practical skill-building programs that transform how individuals and teams approach digital work.',
      features: [
        'Client Onboarding & Coaching',
        'Community Bootcamps & Workshops',
        'Custom Learning Solutions',
        'Certification Programs'
      ],
      timeline: '1 day to 12 weeks',
      training: 'Complete learning infrastructure',
      color: 'eservice-blue',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section id="services" className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-eservice-blue mb-6">
            Digital Services That Build Capabilities
          </h2>
          <p className="text-lg text-professional-gray max-w-3xl mx-auto">
            We don't just complete projects—we create systems you can understand, manage, and scale. Our specialized approach combines technical excellence with comprehensive training to ensure lasting success.
          </p>
        </div>

        {/* Service Tabs */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tab Navigation */}
          <div className="lg:w-1/3">
            <div className="space-y-4">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveService(index)}
                    className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                      activeService === index
                        ? `bg-white shadow-lg border-l-4 border-${service.color}`
                        : 'bg-white/50 hover:bg-white hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        activeService === index
                          ? `bg-${service.color} text-white`
                          : `bg-${service.color}/10 text-${service.color}`
                      }`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-semibold mb-1 ${
                          activeService === index ? `text-${service.color}` : 'text-professional-gray'
                        }`}>
                          {service.title}
                        </h3>
                        <p className="text-sm text-professional-gray">{service.subtitle}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Service Image */}
              <div className="relative h-64">
                <img
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-r from-${services[activeService].color}/80 to-${services[activeService].color}/60`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-white text-center">
                    {services[activeService].title}
                  </h3>
                </div>
              </div>

              <div className="p-8">
                <p className="text-lg text-professional-gray mb-6">
                  {services[activeService].description}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-semibold text-professional-gray mb-4">Core Services:</h4>
                    <ul className="space-y-3">
                      {services[activeService].features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className={`w-5 h-5 text-${services[activeService].color} mt-0.5 flex-shrink-0`} />
                          <span className="text-professional-gray">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-6">
                    <div className={`p-4 bg-${services[activeService].color}/5 rounded-xl`}>
                      <div className="flex items-center space-x-3 mb-2">
                        <Clock className={`w-5 h-5 text-${services[activeService].color}`} />
                        <span className="font-medium text-professional-gray">Timeline</span>
                      </div>
                      <p className="text-professional-gray">{services[activeService].timeline}</p>
                    </div>

                    <div className={`p-4 bg-${services[activeService].color}/5 rounded-xl`}>
                      <div className="flex items-center space-x-3 mb-2">
                        <Users className={`w-5 h-5 text-${services[activeService].color}`} />
                        <span className="font-medium text-professional-gray">Training Included</span>
                      </div>
                      <p className="text-professional-gray">{services[activeService].training}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => onNavigate('contact')}
                    className={`group inline-flex items-center justify-center px-6 py-3 bg-${services[activeService].color} text-white font-semibold rounded-lg hover:bg-${services[activeService].color}/90 transition-all duration-200`}
                  >
                    Get Free Consultation
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                  <button onClick={() => onNavigate('coming-soon')} className="px-6 py-3 border border-professional-gray text-professional-gray font-semibold rounded-lg hover:bg-professional-gray hover:text-white transition-all duration-200">
                    View Portfolio Examples
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;