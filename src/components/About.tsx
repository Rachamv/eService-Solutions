import React from 'react';
import { Target, Heart, Globe, TrendingUp, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence with Accessibility',
      description: 'World-class quality made understandable and manageable'
    },
    {
      icon: Target,
      title: 'Education First',
      description: 'Every project builds capability, not just deliverables'
    },
    {
      icon: Heart,
      title: 'Community Impact',
      description: 'Success measured by the lives and businesses we transform'
    },
    {
      icon: TrendingUp,
      title: 'Collaborative Growth',
      description: 'We succeed when our clients and communities succeed'
    }
  ];

  const metrics = [
    { label: 'Projects Delivered', value: '120+', description: 'with 95% client satisfaction' },
    { label: 'Individuals Trained', value: '1,000+', description: 'across all programs' },
    { label: 'Community Workshops', value: '200+', description: 'delivered for free' },
    { label: 'Job Placement Rate', value: '85%', description: 'for bootcamp graduates' }
  ];

  const timeline = [
    { year: '2025-2027', title: 'Scaling Impact', description: 'Launch certification programs and regional training centers' },
    { year: '2028-2030', title: 'Ecosystem Leadership', description: 'Train 5,000+ individuals and establish alumni network' },
    { year: '2031-2035', title: 'Continental Transformation', description: 'Achieve 10,000 individuals trained and transform 1,000+ businesses' }
  ];

  const communityMetrics = [
    { label: 'Free Workshops', value: '200+', description: 'delivered to communities' },
    { label: 'Scholarships Awarded', value: '50+', description: 'for underserved groups' },
    { label: 'Job Placement Rate', value: '85%', description: 'for bootcamp graduates' },
    { label: '2035 Goal', value: '10,000', description: 'individuals trained' }
  ];

  return (
    <section id="about" className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-eservice-blue mb-6">
            Our Vision, Story & Impact
          </h2>
          <p className="text-lg text-professional-gray max-w-3xl mx-auto">
            At eService Solutions, we're more than a digital agency—we're a mission-driven partner building capacity for Africa's digital future and beyond.
          </p>
        </div>

        {/* About Hero Image */}
        <div className="mb-20">
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="African digital transformation and innovation"
              className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-eservice-blue/80 to-knowledge-teal/80 rounded-2xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-3xl px-6">
                <h3 className="text-3xl font-bold mb-4">Building Africa's Digital Future</h3>
                <p className="text-xl opacity-90">
                  From Nigeria's emerging markets to international partnerships, we're creating lasting impact through digital excellence and education.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="w-16 h-16 bg-eservice-blue/10 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-eservice-blue" />
            </div>
            <h3 className="text-2xl font-bold text-eservice-blue mb-4">Our Mission</h3>
            <p className="text-professional-gray leading-relaxed">
              To empower businesses and individuals through expert-led digital execution and education—building sustainable impact in Africa and beyond.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="w-16 h-16 bg-knowledge-teal/10 rounded-2xl flex items-center justify-center mb-6">
              <Globe className="w-8 h-8 text-knowledge-teal" />
            </div>
            <h3 className="text-2xl font-bold text-knowledge-teal mb-4">Our Vision</h3>
            <p className="text-professional-gray leading-relaxed">
              To train <strong>10,000 individuals</strong> and transform <strong>1,000 businesses</strong> by 2035 through people-first innovation, comprehensive skills transfer, and collaborative growth partnerships.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-eservice-blue text-center mb-12">Our Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-12 h-12 bg-knowledge-teal/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-knowledge-teal" />
                  </div>
                  <h4 className="font-semibold text-eservice-blue mb-2">{value.title}</h4>
                  <p className="text-sm text-professional-gray">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Our Story */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 mb-20">
          <h3 className="text-2xl font-bold text-eservice-blue mb-8 text-center">Our Story</h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative mb-6">
                <img 
                  src="https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Digital challenges in Africa"
                  className="w-full h-48 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-alert-orange/80 rounded-xl flex items-center justify-center">
                  <Target className="w-12 h-12 text-white" />
                </div>
              </div>
              <h4 className="font-semibold text-alert-orange mb-3">The Challenge We Saw</h4>
              <p className="text-professional-gray text-sm">
                Too many businesses were getting beautiful websites and sophisticated systems they couldn't manage. The gap between delivery and capability was leaving people dependent rather than empowered.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <img 
                  src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Collaborative solution development"
                  className="w-full h-48 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-knowledge-teal/80 rounded-xl flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
              </div>
              <h4 className="font-semibold text-knowledge-teal mb-3">Our Solution</h4>
              <p className="text-professional-gray text-sm">
                We built eService Solutions on a simple but powerful principle: <em>Digital work should create lasting value and lasting capability.</em> Every project includes comprehensive training and knowledge transfer.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <img 
                  src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Global impact and growth"
                  className="w-full h-48 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-eservice-blue/80 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-12 h-12 text-white" />
                </div>
              </div>
              <h4 className="font-semibold text-eservice-blue mb-3">Today's Impact</h4>
              <p className="text-professional-gray text-sm">
                We've evolved into three specialized service areas working in harmony to deliver comprehensive solutions with built-in learning and capability transfer across three continents.
              </p>
            </div>
          </div>
        </div>

        {/* Track Record */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-eservice-blue text-center mb-12">Our Track Record</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="text-3xl font-bold text-knowledge-teal mb-2">{metric.value}</div>
                <div className="font-semibold text-eservice-blue mb-2">{metric.label}</div>
                <div className="text-sm text-professional-gray">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Looking Forward */}
        <div className="bg-gradient-to-r from-eservice-blue to-knowledge-teal rounded-2xl p-8 lg:p-12 text-white mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">Looking Forward</h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {timeline.map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="text-lg font-bold mb-2">{phase.year}</div>
                <h4 className="font-semibold mb-3">{phase.title}</h4>
                <p className="text-sm opacity-90">{phase.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-xl font-medium italic opacity-90">
              Building the future, one skill at a time.
            </p>
          </div>
        </div>

        {/* Community Impact Commitment */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-eservice-blue mb-4">Community Impact Commitment</h3>
            <p className="text-lg text-professional-gray max-w-3xl mx-auto">
              10% of our profits are reinvested in community programs, scholarships, and free training for underserved groups.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {communityMetrics.map((metric, index) => (
              <div key={index} className="text-center p-6 bg-light-gray rounded-xl hover:shadow-md transition-all duration-300">
                <div className="text-3xl font-bold text-knowledge-teal mb-2">{metric.value}</div>
                <div className="font-semibold text-eservice-blue mb-2">{metric.label}</div>
                <div className="text-sm text-professional-gray">{metric.description}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl font-medium italic text-knowledge-teal">
              Building the future, one skill at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;