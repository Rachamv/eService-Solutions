import React from 'react';
import { Users, BookOpen, Building, ArrowRight, Star, TrendingUp, MessageCircle } from 'lucide-react';

interface TrainingProps {
  onNavigate: (section: string) => void;
}

const Training: React.FC<TrainingProps> = ({ onNavigate }) => {
  const whatsappUrl = "https://wa.me/message/FTCFNEK3TNATJ1";

  const handleWhatsAppContact = (program?: string) => {
    const message = program 
      ? `Hi! I'm interested in the ${program} training program. Can you provide more details?`
      : "Hi! I'd like to learn more about your training programs.";
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`${whatsappUrl}?text=${encodedMessage}`, '_blank');
  };

  const trainingStreams = [
    {
      icon: Users,
      title: 'Client Coaching & Onboarding',
      subtitle: 'Included with Every Project',
      description: 'We ensure you and your team can confidently use, update, and scale everything we build together.',
      features: [
        'Personalized onboarding sessions',
        'Recorded video walkthroughs',
        'Custom training playbooks',
        'Direct support channel access'
      ],
      color: 'eservice-blue',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: BookOpen,
      title: 'Community Bootcamps & Workshops',
      subtitle: 'Practical Skills for Real-World Impact',
      description: 'We deliver localized digital skills programs focused on immediate application—especially for youth, women, and underserved communities.',
      features: [
        'Virtual, in-person, and hybrid formats',
        'Certificates of completion',
        'Post-training resource libraries',
        'Scholarship opportunities'
      ],
      color: 'knowledge-teal',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Building,
      title: 'Custom Learning Solutions',
      subtitle: 'Enterprise Training & Institutional Partnerships',
      description: 'For organizations looking to build digital capabilities at scale, we design complete learning ecosystems.',
      features: [
        'LMS setup and customization',
        'Multi-week curriculum development',
        'Progress tracking and certification',
        'Job placement support'
      ],
      color: 'eservice-blue',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const successStories = [
    {
      quote: "The WhatsApp Business training helped me increase my sales by 60% in just two months. I now manage 50+ customers efficiently and professionally.",
      author: "Kemi Adebayo",
      role: "Fashion Designer, Lagos",
      rating: 5,
      image: 'https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      quote: "eService's LMS setup transformed how we deliver training to our 200+ scholarship recipients. The impact tracking alone saved us 10 hours per week.",
      author: "Dr. Sarah Johnson",
      role: "Education Director, TechBridge Foundation",
      rating: 5,
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const impactGoals = [
    { timeline: '2024-2025', target: '500+ learners', focus: 'Youth bootcamps, client coaching, community workshops' },
    { timeline: 'By 2030', target: '5,000+ learners', focus: 'Regional partnerships, certification programs' },
    { timeline: 'By 2035', target: '10,000+ learners', focus: 'Pan-African impact, international collaboration' }
  ];

  return (
    <section id="training" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-eservice-blue mb-6">
            Learn, Apply, Empower
          </h2>
          <p className="text-lg text-professional-gray max-w-3xl mx-auto">
            Learning isn't a side offering at eService Solutions—it's central to everything we do. Whether you're a client, student, or community partner, we provide structured, practical training that creates lasting digital capabilities.
          </p>
        </div>

        {/* Training Hero Image */}
        <div className="mb-20">
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Digital skills training and education"
              className="w-full h-[300px] object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-eservice-blue/70 to-knowledge-teal/70 rounded-2xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl font-bold mb-2">Transforming Lives Through Digital Education</h3>
                <p className="text-xl opacity-90">1,000+ individuals trained • 85% job placement rate</p>
              </div>
            </div>
          </div>
        </div>

        {/* Training Streams */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {trainingStreams.map((stream, index) => {
            const IconComponent = stream.icon;
            return (
              <div key={index} className="bg-light-gray rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48">
                  <img 
                    src={stream.image}
                    alt={stream.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-${stream.color}/80`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <IconComponent className="w-12 h-12 text-white" />
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className={`text-xl font-bold text-${stream.color} mb-2`}>{stream.title}</h3>
                    <p className="text-sm font-medium text-professional-gray mb-3">{stream.subtitle}</p>
                    <p className="text-professional-gray mb-6">{stream.description}</p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {stream.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <div className={`w-2 h-2 bg-${stream.color} rounded-full mt-2 flex-shrink-0`}></div>
                        <span className="text-sm text-professional-gray">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Impact Goals */}
        <div className="bg-gradient-to-r from-eservice-blue/5 to-knowledge-teal/5 rounded-2xl p-8 mb-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-eservice-blue mb-4">Learning Impact Goals</h3>
            <p className="text-professional-gray">Our commitment to transforming lives through digital education</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {impactGoals.map((goal, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-knowledge-teal mb-2">{goal.target}</div>
                <div className="text-sm font-semibold text-eservice-blue mb-3">{goal.timeline}</div>
                <div className="text-sm text-professional-gray">{goal.focus}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-eservice-blue text-center mb-12">Success Stories</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-professional-gray mb-6 italic">
                  "{story.quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <img 
                    src={story.image}
                    alt={story.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-eservice-blue">{story.author}</div>
                    <div className="text-sm text-professional-gray">{story.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-eservice-blue rounded-2xl p-12 text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Skills?</h3>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of learners who have built sustainable digital careers through our programs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate('training-application')}
              className="group inline-flex items-center justify-center px-8 py-4 bg-knowledge-teal text-white font-semibold rounded-lg hover:bg-knowledge-teal/90 transition-all duration-200"
            >
              Apply for Training Programs
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button 
              onClick={() => handleWhatsAppContact()}
              className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-eservice-blue transition-all duration-200"
            >
              Request Scholarship Information
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;