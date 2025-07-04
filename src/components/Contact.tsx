import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const whatsappUrl = "https://wa.me/message/FTCFNEK3TNATJ1";

  const handleWhatsAppContact = (inquiry?: string) => {
    const message = inquiry
      ? `Hi! I'm interested in ${inquiry}. Can you provide more details?`
      : "Hi! I'd like to learn more about eService Solutions and your services.";

    const encodedMessage = encodeURIComponent(message);
    window.open(`${whatsappUrl}?text=${encodedMessage}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }

    // Create well-formatted WhatsApp message with form data
    const whatsappMessage = `🔥 *NEW CONTACT FORM SUBMISSION* 🔥

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
🏢 *Company:* ${formData.company || 'Not specified'}
🎯 *Service Interest:* ${formData.service}

💬 *Message:*
${formData.message}

---
📅 *Submitted:* ${new Date().toLocaleString()}
🌐 *Source:* eService Solutions Website

Looking forward to connecting! 🚀`;

    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Create the complete WhatsApp URL
    const completeWhatsAppUrl = `${whatsappUrl}&text=${encodedMessage}`;

    // Open WhatsApp with the pre-filled message
    window.open(completeWhatsAppUrl, '_blank');

    // Show success message
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000); // Extended to 5 seconds

    // Reset form after a slight delay to ensure user sees the success message
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp Chat',
      description: 'Get instant responses to your questions',
      contact: 'Chat Now',
      response: 'Usually within minutes',
      action: () => handleWhatsAppContact()
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Detailed inquiries and project discussions',
      contact: 'help.eservicesolution@gmail.com',
      response: 'Within 24 hours',
      action: () => window.location.href = 'mailto:help.eservicesolution@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Direct consultation and urgent matters',
      contact: '+234 802 129 5589',
      response: 'Business hours',
      action: () => window.location.href = 'tel:+2348021295589'
    }
  ];

  const quickStartOptions = [
    {
      title: "I'm a Business Owner or Entrepreneur",
      description: 'Schedule Free 30-Minute Discovery Call',
      timeline: 'Call within 3 business days, proposal within 48 hours',
      color: 'eservice-blue',
      action: () => handleWhatsAppContact('a business consultation and discovery call')
    },
    {
      title: 'I Want to Learn Digital Skills',
      description: 'Apply for Upcoming Bootcamp or Request Custom Training',
      timeline: 'Application review within 1 week, program start dates monthly',
      color: 'knowledge-teal',
      action: () => handleWhatsAppContact('training programs and bootcamp applications')
    },
    {
      title: 'I Want to Partner or Collaborate',
      description: 'Submit Partnership Inquiry or Schedule Strategic Discussion',
      timeline: 'Initial discussion within 1 week, partnership development 2-4 weeks',
      color: 'eservice-blue',
      action: () => handleWhatsAppContact('partnership and collaboration opportunities')
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-eservice-blue mb-6">
            We're Ready to Work With You
          </h2>
          <p className="text-lg text-professional-gray max-w-3xl mx-auto">
            Whether you're starting a project, launching a training program, exploring partnerships, or joining our mission—we'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <div className="bg-light-gray rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-eservice-blue mb-6">Get Started Today</h3>

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-success-green mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-success-green mb-2">Message Sent via WhatsApp!</h4>
                <p className="text-professional-gray mb-4">Your message has been sent through WhatsApp. We'll respond shortly!</p>
                <button
                  onClick={() => handleWhatsAppContact()}
                  className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-200"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Continue Chat
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-knowledge-teal focus:border-transparent transition-all duration-200"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-knowledge-teal focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-professional-gray mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-knowledge-teal focus:border-transparent transition-all duration-200"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-professional-gray mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-knowledge-teal focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select a service</option>
                    <option value="Technical Solutions">Technical Solutions</option>
                    <option value="Branding & Growth">Branding & Growth</option>
                    <option value="Training & Coaching">Training & Coaching</option>
                    <option value="Partnership Opportunities">Partnership Opportunities</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-professional-gray mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-knowledge-teal focus:border-transparent transition-all duration-200"
                    placeholder="Tell us about your project, goals, or questions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all duration-200 transform hover:scale-105"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Send via WhatsApp
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>

                <p className="text-xs text-professional-gray text-center">
                  This will send your message directly through WhatsApp for faster response
                </p>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-eservice-blue mb-6">Contact Methods</h3>
              <div className="space-y-6">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-light-gray rounded-xl hover:shadow-md transition-all duration-300 cursor-pointer" onClick={method.action}>
                      <div className="w-12 h-12 bg-knowledge-teal/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-knowledge-teal" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-eservice-blue mb-1">{method.title}</h4>
                        <p className="text-sm text-professional-gray mb-2">{method.description}</p>
                        <div className="text-sm font-medium text-knowledge-teal hover:text-knowledge-teal/80 transition-colors duration-200 mb-1">
                          {method.contact}
                        </div>
                        <p className="text-xs text-professional-gray">Response time: {method.response}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* WhatsApp QR Code */}
            <div className="bg-green-50 rounded-xl p-6">
              <div className="text-center">
                <h4 className="font-semibold text-green-800 mb-4">Scan to Chat on WhatsApp</h4>
                <div className="bg-white p-4 rounded-lg inline-block shadow-sm">
                  <img
                    src="/image.png"
                    alt="WhatsApp QR Code"
                    className="w-32 h-32 mx-auto"
                  />
                </div>
                <p className="text-sm text-green-700 mt-3">
                  Scan with your phone's camera to start chatting instantly
                </p>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-eservice-blue rounded-xl p-6 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6" />
                <h4 className="font-semibold">Office Hours & Availability</h4>
              </div>
              <div className="space-y-2 text-sm">
                <p><strong>Primary Time Zone:</strong> GMT (Greenwich Mean Time)</p>
                <p><strong>Working Hours:</strong> Monday–Friday, 9:00 AM – 5:00 PM GMT</p>
                <p><strong>WhatsApp Support:</strong> Available 24/7 for urgent matters</p>
                <p><strong>Weekend Support:</strong> Emergency project issues only</p>
              </div>
            </div>

            {/* Global Presence */}
            <div>
              <h4 className="font-semibold text-eservice-blue mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Global Presence
              </h4>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-white rounded-lg">
                  <p className="font-medium text-eservice-blue">Africa</p>
                  <p className="text-professional-gray">Rooted in Africa, connected globally — all services delivered remotely.</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="font-medium text-knowledge-teal">Europe</p>
                  <p className="text-professional-gray">Remote-first support for clients across European time zones.</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="font-medium text-eservice-blue">Wherever You Are</p>
                  <p className="text-professional-gray">Our fully remote team works across borders and time zones to serve you.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Start Options */}
        <div>
          <h3 className="text-2xl font-bold text-eservice-blue text-center mb-12">Quick Start Options</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {quickStartOptions.map((option, index) => (
              <div
                key={index}
                className={`bg-${option.color}/5 rounded-2xl p-6 border border-${option.color}/20 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-2`}
                onClick={option.action}
              >
                <h4 className={`font-bold text-${option.color} mb-3`}>{option.title}</h4>
                <p className="font-medium text-professional-gray mb-4">{option.description}</p>
                <p className="text-sm text-professional-gray mb-4">{option.timeline}</p>
                <button className={`inline-flex items-center text-${option.color} font-medium hover:text-${option.color}/80 transition-colors duration-200`}>
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Start WhatsApp Chat
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;