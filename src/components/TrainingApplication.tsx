import React, { useState } from 'react';
import { ArrowLeft, MessageCircle, CheckCircle, Clock, Users, Award, Star, Phone, Mail, Calendar, BookOpen, Code, Palette, TrendingUp, Globe, Smartphone } from 'lucide-react';

interface TrainingApplicationProps {
  onNavigate: (section: string) => void;
}

const TrainingApplication: React.FC<TrainingApplicationProps> = ({ onNavigate }) => {
  const [selectedProgram, setSelectedProgram] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    experience: '',
    program: '',
    goals: '',
    availability: '',
    scholarship: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const trainingPrograms = [
    {
      id: 'web-development',
      title: 'Web Development Bootcamp',
      duration: '12 weeks',
      format: 'Hybrid (Online + In-person)',
      level: 'Beginner to Intermediate',
      price: '₦150,000',
      scholarshipPrice: '₦75,000',
      icon: Code,
      color: 'eservice-blue',
      description: 'Master modern web development with HTML, CSS, JavaScript, React, and backend fundamentals.',
      curriculum: [
        'HTML5 & CSS3 Fundamentals',
        'JavaScript & ES6+',
        'React.js & Component Architecture',
        'Node.js & Express Basics',
        'Database Integration',
        'Deployment & Version Control',
        'Portfolio Project Development'
      ],
      outcomes: [
        'Build 5+ professional websites',
        'Create a complete web application',
        'Job placement assistance',
        'Industry-recognized certificate'
      ],
      nextStart: '2025-02-15',
      spots: 25
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing & Social Media',
      duration: '8 weeks',
      format: 'Online + Practical Workshops',
      level: 'All Levels',
      price: '₦80,000',
      scholarshipPrice: '₦40,000',
      icon: TrendingUp,
      color: 'knowledge-teal',
      description: 'Learn to grow businesses online with proven digital marketing strategies and tools.',
      curriculum: [
        'Social Media Strategy & Management',
        'Content Creation & Copywriting',
        'Facebook & Instagram Advertising',
        'Google Ads & SEO Basics',
        'Email Marketing & Automation',
        'Analytics & Performance Tracking',
        'Brand Building & Community Management'
      ],
      outcomes: [
        'Manage social media professionally',
        'Run profitable ad campaigns',
        'Build personal brand online',
        'Freelance or agency opportunities'
      ],
      nextStart: '2025-02-01',
      spots: 30
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design Fundamentals',
      duration: '10 weeks',
      format: 'Online with Design Labs',
      level: 'Beginner to Intermediate',
      price: '₦120,000',
      scholarshipPrice: '₦60,000',
      icon: Palette,
      color: 'eservice-blue',
      description: 'Design beautiful, user-friendly digital experiences using industry-standard tools.',
      curriculum: [
        'Design Thinking & User Research',
        'Wireframing & Prototyping',
        'Figma & Adobe Creative Suite',
        'Visual Design Principles',
        'Mobile & Web Design',
        'Usability Testing',
        'Portfolio Development'
      ],
      outcomes: [
        'Create professional design portfolio',
        'Master Figma and design tools',
        'Understand user experience principles',
        'Ready for design roles'
      ],
      nextStart: '2025-02-22',
      spots: 20
    },
    {
      id: 'whatsapp-business',
      title: 'WhatsApp Business Mastery',
      duration: '3 weeks',
      format: 'Online + Live Practice',
      level: 'All Levels',
      price: '₦25,000',
      scholarshipPrice: '₦15,000',
      icon: Smartphone,
      color: 'knowledge-teal',
      description: 'Transform your business with professional WhatsApp marketing and customer management.',
      curriculum: [
        'WhatsApp Business Setup & Optimization',
        'Catalog & Product Management',
        'Customer Communication Best Practices',
        'Automated Messages & Quick Replies',
        'WhatsApp Marketing Strategies',
        'Sales Funnel Creation',
        'Performance Tracking & Analytics'
      ],
      outcomes: [
        'Professional WhatsApp presence',
        'Increased customer engagement',
        'Streamlined sales process',
        'Higher conversion rates'
      ],
      nextStart: '2025-01-20',
      spots: 50
    },
    {
      id: 'data-analysis',
      title: 'Data Analysis with Excel & Power BI',
      duration: '6 weeks',
      format: 'Online + Project Work',
      level: 'Beginner to Intermediate',
      price: '₦90,000',
      scholarshipPrice: '₦45,000',
      icon: TrendingUp,
      color: 'eservice-blue',
      description: 'Turn data into insights with advanced Excel techniques and Power BI visualization.',
      curriculum: [
        'Advanced Excel Functions & Formulas',
        'Data Cleaning & Preparation',
        'Pivot Tables & Data Analysis',
        'Power BI Fundamentals',
        'Dashboard Creation',
        'Data Visualization Best Practices',
        'Business Intelligence Reporting'
      ],
      outcomes: [
        'Master advanced Excel skills',
        'Create professional dashboards',
        'Analyze business data effectively',
        'Qualify for analyst roles'
      ],
      nextStart: '2025-02-08',
      spots: 25
    },
    {
      id: 'freelancing-business',
      title: 'Freelancing & Online Business',
      duration: '4 weeks',
      format: 'Online Masterclass Series',
      level: 'All Levels',
      price: '₦40,000',
      scholarshipPrice: '₦25,000',
      icon: Globe,
      color: 'knowledge-teal',
      description: 'Build a successful freelancing career or online business with proven strategies.',
      curriculum: [
        'Freelancing Platforms & Profile Optimization',
        'Service Packaging & Pricing',
        'Client Acquisition & Retention',
        'Project Management & Delivery',
        'Online Business Models',
        'Payment Systems & Contracts',
        'Scaling & Team Building'
      ],
      outcomes: [
        'Launch freelancing career',
        'Secure first paying clients',
        'Build sustainable income',
        'Develop business mindset'
      ],
      nextStart: '2025-01-27',
      spots: 40
    }
  ];

  const whatsappUrl = "https://wa.me/message/FTCFNEK3TNATJ1";

  const handleWhatsAppContact = (program?: string) => {
    const message = program
      ? `Hi! I'm interested in the ${program} program. Can you provide more details about enrollment, schedule, and requirements?`
      : "Hi! I'd like to learn more about your training programs and application process.";

    const encodedMessage = encodeURIComponent(message);
    window.open(`${whatsappUrl}?text=${encodedMessage}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedProgramData = trainingPrograms.find(p => p.id === formData.program);
    const programTitle = selectedProgramData?.title || 'General Training Inquiry';

    const whatsappMessage = `
🎓 TRAINING APPLICATION

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Location: ${formData.location}

Program Interest: ${programTitle}
Experience Level: ${formData.experience}
Career Goals: ${formData.goals}
Availability: ${formData.availability}
Scholarship Interest: ${formData.scholarship ? 'Yes' : 'No'}

I'm ready to start my digital skills journey with eService Solutions!
    `.trim();

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`${whatsappUrl}?text=${encodedMessage}`, '_blank');

    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => onNavigate('training')}
              className="flex items-center text-eservice-blue hover:text-eservice-blue/80 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Training Overview
            </button>

            <button
              onClick={() => handleWhatsAppContact()}
              className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-eservice-blue mb-6">
            Transform Your Career with Digital Skills
          </h1>
          <p className="text-xl text-professional-gray max-w-3xl mx-auto mb-8">
            Join thousands of successful graduates who have built sustainable careers through our comprehensive, hands-on training programs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleWhatsAppContact()}
              className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-200"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Quick Chat on WhatsApp
            </button>
            <a
              href="mailto:help.eservicesolution@gmail.com"
              className="inline-flex items-center px-6 py-3 border-2 border-eservice-blue text-eservice-blue font-semibold rounded-lg hover:bg-eservice-blue hover:text-white transition-colors duration-200"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>

        {/* Training Programs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-eservice-blue text-center mb-12">Available Training Programs</h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {trainingPrograms.map((program) => {
              const IconComponent = program.icon;
              return (
                <div key={program.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className={`bg-gradient-to-r from-${program.color} to-${program.color}/80 p-6 text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <IconComponent className="w-8 h-8" />
                      <div className="text-right">
                        <div className="text-2xl font-bold">{program.price}</div>
                        <div className="text-sm opacity-90">Scholarship: {program.scholarshipPrice}</div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                    <p className="opacity-90">{program.description}</p>
                  </div>

                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center text-sm text-professional-gray">
                        <Clock className="w-4 h-4 mr-2 text-knowledge-teal" />
                        {program.duration}
                      </div>
                      <div className="flex items-center text-sm text-professional-gray">
                        <Users className="w-4 h-4 mr-2 text-knowledge-teal" />
                        {program.spots} spots
                      </div>
                      <div className="flex items-center text-sm text-professional-gray">
                        <Calendar className="w-4 h-4 mr-2 text-knowledge-teal" />
                        Starts {program.nextStart}
                      </div>
                      <div className="flex items-center text-sm text-professional-gray">
                        <BookOpen className="w-4 h-4 mr-2 text-knowledge-teal" />
                        {program.level}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-professional-gray mb-3">What You'll Learn:</h4>
                      <ul className="space-y-2">
                        {program.curriculum.slice(0, 4).map((item, index) => (
                          <li key={index} className="flex items-start text-sm text-professional-gray">
                            <CheckCircle className="w-4 h-4 mr-2 text-success-green mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                        {program.curriculum.length > 4 && (
                          <li className="text-sm text-knowledge-teal font-medium">
                            +{program.curriculum.length - 4} more topics
                          </li>
                        )}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-professional-gray mb-3">Program Outcomes:</h4>
                      <ul className="space-y-2">
                        {program.outcomes.map((outcome, index) => (
                          <li key={index} className="flex items-start text-sm text-professional-gray">
                            <Star className="w-4 h-4 mr-2 text-yellow-500 mt-0.5 flex-shrink-0" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => handleWhatsAppContact(program.title)}
                        className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-200"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Apply via WhatsApp
                      </button>
                      <button
                        onClick={() => {
                          setSelectedProgram(program.id);
                          setFormData({ ...formData, program: program.id });
                          document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className={`flex-1 px-4 py-3 border-2 border-${program.color} text-${program.color} font-semibold rounded-lg hover:bg-${program.color} hover:text-white transition-colors duration-200`}
                      >
                        Apply Online
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Application Form */}
        <div id="application-form" className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-eservice-blue mb-4">Apply for Training</h2>
            <p className="text-professional-gray">
              Complete this form to apply for any of our training programs. We'll contact you within 24 hours to discuss your application.
            </p>
          </div>

          {isSubmitted ? (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-success-green mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-success-green mb-4">Application Sent!</h3>
              <p className="text-professional-gray mb-6">
                Your application has been sent via WhatsApp. Our team will review it and get back to you within 24 hours.
              </p>
              <button
                onClick={() => handleWhatsAppContact()}
                className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-200"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Continue Chat on WhatsApp
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-professional-gray mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-knowledge-teal focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-professional-gray mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-knowledge-teal focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-professional-gray mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-knowledge-teal focus:border-transparent"
                    placeholder="+234 xxx xxx xxxx"
                  />
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-professional-gray mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-knowledge-teal focus:border-transparent"
                    placeholder="City, State, Country"
                  />
                </div>

                <div>
                  <label htmlFor="program" className="block text-sm font-medium text-professional-gray mb-2">
                    Preferred Program *
                  </label>
                  <select
                    id="program"
                    name="program"
                    required
                    value={formData.program}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-knowledge-teal focus:border-transparent"
                  >
                    <option value="">Select a program</option>
                    {trainingPrograms.map((program) => (
                      <option key={program.id} value={program.id}>
                        {program.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-professional-gray mb-2">
                    Experience Level *
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    required
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-knowledge-teal focus:border-transparent"
                  >
                    <option value="">Select your level</option>
                    <option value="complete-beginner">Complete Beginner</option>
                    <option value="some-knowledge">Some Knowledge</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="goals" className="block text-sm font-medium text-professional-gray mb-2">
                  Career Goals & Motivation *
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  required
                  rows={4}
                  value={formData.goals}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-knowledge-teal focus:border-transparent"
                  placeholder="Tell us about your career goals and why you want to join this program..."
                ></textarea>
              </div>

              <div>
                <label htmlFor="availability" className="block text-sm font-medium text-professional-gray mb-2">
                  Availability *
                </label>
                <select
                  id="availability"
                  name="availability"
                  required
                  value={formData.availability}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-knowledge-teal focus:border-transparent"
                >
                  <option value="">Select your availability</option>
                  <option value="full-time">Full-time (40+ hours/week)</option>
                  <option value="part-time-evenings">Part-time Evenings</option>
                  <option value="part-time-weekends">Part-time Weekends</option>
                  <option value="flexible">Flexible Schedule</option>
                </select>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="scholarship"
                  name="scholarship"
                  checked={formData.scholarship}
                  onChange={handleChange}
                  className="w-4 h-4 text-knowledge-teal border-gray-300 rounded focus:ring-knowledge-teal"
                />
                <label htmlFor="scholarship" className="ml-2 text-sm text-professional-gray">
                  I'm interested in scholarship opportunities (50% discount available for qualified candidates)
                </label>
              </div>

              <div className="bg-knowledge-teal/5 rounded-xl p-6">
                <h4 className="font-semibold text-knowledge-teal mb-3">What Happens Next?</h4>
                <ul className="space-y-2 text-sm text-professional-gray">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 text-knowledge-teal mt-0.5 flex-shrink-0" />
                    Your application will be sent directly to our WhatsApp for immediate review
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 text-knowledge-teal mt-0.5 flex-shrink-0" />
                    We'll contact you within 24 hours to discuss your application
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 text-knowledge-teal mt-0.5 flex-shrink-0" />
                    Schedule a brief interview to ensure program fit
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 text-knowledge-teal mt-0.5 flex-shrink-0" />
                    Receive enrollment details and payment options
                  </li>
                </ul>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-eservice-blue text-white font-semibold rounded-lg hover:bg-eservice-blue/90 transition-all duration-200 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Submit Application via WhatsApp
              </button>
            </form>
          )}
        </div>

        {/* Contact Options */}
        <div className="mt-16 bg-gradient-to-r from-eservice-blue to-knowledge-teal rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Need Help with Your Application?</h3>
          <p className="text-lg mb-8 opacity-90">
            Our team is here to help you choose the right program and guide you through the application process.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleWhatsAppContact()}
              className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-200"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </button>
            <a
              href="mailto:help.eservicesolution@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-white text-eservice-blue font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
            <a
              href="tel:+2348021295589"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-eservice-blue transition-colors duration-200"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingApplication;