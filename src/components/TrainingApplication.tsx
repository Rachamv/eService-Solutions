import React, { useState } from 'react';
import { ArrowLeft, MessageCircle, CheckCircle, Phone, Mail } from 'lucide-react';

interface TrainingApplicationProps {
  onNavigate: (section: string) => void;
}

const TrainingApplication: React.FC<TrainingApplicationProps> = ({ onNavigate }) => {
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
      price: '₦150,000',
      scholarshipPrice: '₦75,000',
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing & Social Media',
      duration: '8 weeks',
      price: '₦80,000',
      scholarshipPrice: '₦40,000',
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design Fundamentals',
      duration: '10 weeks',
      price: '₦120,000',
      scholarshipPrice: '₦60,000',
    },
    {
      id: 'whatsapp-business',
      title: 'WhatsApp Business Mastery',
      duration: '3 weeks',
      price: '₦25,000',
      scholarshipPrice: '₦15,000',
    },
    {
      id: 'data-analysis',
      title: 'Data Analysis with Excel & Power BI',
      duration: '6 weeks',
      price: '₦90,000',
      scholarshipPrice: '₦45,000',
    },
    {
      id: 'freelancing-business',
      title: 'Freelancing & Online Business',
      duration: '4 weeks',
      price: '₦40,000',
      scholarshipPrice: '₦25,000',
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => onNavigate('training')}
              className="flex items-center text-blue-600 hover:text-blue-500 transition-colors duration-200"
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-6">
            Transform Your Career with Digital Skills
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
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
              className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>

        {/* Quick Program Overview */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Training Programs</h2>
            <p className="text-gray-600">
              We offer comprehensive training programs designed to equip you with in-demand digital skills. Choose from our range of programs below.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {trainingPrograms.map((program) => (
              <div key={program.id} className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6 border border-blue-100">
                <h3 className="font-bold text-gray-800 mb-4 text-center">{program.title}</h3>

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
                      setFormData({ ...formData, program: program.id });
                      document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex-1 px-4 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200"
                  >
                    Apply Online
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => handleWhatsAppContact()}
              className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-200"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Get Detailed Program Information
            </button>
          </div>
        </div>

        {/* Application Form */}
        <div id="application-form" className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Apply for Training</h2>
            <p className="text-gray-600">
              Complete this form to apply for any of our training programs. We'll contact you within 24 hours to discuss your application and provide detailed program information.
            </p>
          </div>

          {isSubmitted ? (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-500 mb-4">Application Sent!</h3>
              <p className="text-gray-600 mb-6">
                Your application has been sent via WhatsApp. Our team will review it and get back to you within 24 hours with detailed program information.
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
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="+234 xxx xxx xxxx"
                  />
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="City, State, Country"
                  />
                </div>

                <div>
                  <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Program *
                  </label>
                  <select
                    id="program"
                    name="program"
                    required
                    value={formData.program}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
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
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    Experience Level *
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    required
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
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
                <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-2">
                  Career Goals & Motivation *
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  required
                  rows={4}
                  value={formData.goals}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Tell us about your career goals and why you want to join this program..."
                ></textarea>
              </div>

              <div>
                <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                  Availability *
                </label>
                <select
                  id="availability"
                  name="availability"
                  required
                  value={formData.availability}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
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
                  className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                />
                <label htmlFor="scholarship" className="ml-2 text-sm text-gray-600">
                  I'm interested in scholarship opportunities (50% discount available for qualified candidates)
                </label>
              </div>

              <div className="bg-teal-50 rounded-xl p-6">
                <h4 className="font-semibold text-teal-700 mb-3">What Happens Next?</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 text-teal-600 mt-0.5 flex-shrink-0" />
                    Your application will be sent directly to our WhatsApp for immediate review
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 text-teal-600 mt-0.5 flex-shrink-0" />
                    We'll contact you within 24 hours with detailed program information
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 text-teal-600 mt-0.5 flex-shrink-0" />
                    Schedule a brief interview to ensure program fit
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 text-teal-600 mt-0.5 flex-shrink-0" />
                    Receive enrollment details and payment options
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Submit Application via WhatsApp
              </button>
            </form>
          )}
        </div>

        {/* Contact Options */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white text-center">
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
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
            <a
              href="tel:+2348021295589"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
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