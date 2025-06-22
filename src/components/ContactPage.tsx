"use client"

import type React from "react"
import { useState } from "react"
import { ArrowLeft, Mail, Phone, MessageCircle, MapPin, Clock, Send, CheckCircle } from "lucide-react"

interface ContactPageProps {
  onNavigate: (section: string) => void
}

const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [contactMethod, setContactMethod] = useState<"email" | "whatsapp">("email")

  const whatsappUrl = "https://wa.me/message/FTCFNEK3TNATJ1"

  const handleWhatsAppContact = (inquiry?: string) => {
    const message = inquiry
      ? `Hi! I'm interested in ${inquiry}. Can you provide more details?`
      : "Hi! I'd like to learn more about eService Solutions and your services."

    const encodedMessage = encodeURIComponent(message)
    window.open(`${whatsappUrl}?text=${encodedMessage}`, "_blank")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (contactMethod === "whatsapp") {
      // Create WhatsApp message with form data
      const whatsappMessage = `
📧 NEW CONTACT FORM SUBMISSION

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || "Not specified"}
Service Interest: ${formData.service || "Not specified"}

Message:
${formData.message}

Best regards,
${formData.name}
      `.trim()

      const encodedMessage = encodeURIComponent(whatsappMessage)
      window.open(`${whatsappUrl}?text=${encodedMessage}`, "_blank")
    } else {
      // Handle email submission (replace with your actual email sending logic)
      const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || "Not specified"}
Service Interest: ${formData.service || "Not specified"}

Message:
${formData.message}
      `.trim()

      window.location.href = `mailto:hello@eservicesolutions.com?subject=New Contact Form Submission&body=${encodeURIComponent(emailBody)}`
    }

    // Show success message
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message via email",
      contact: "hello@eservicesolutions.com",
      response: "Within 24 hours",
      action: () => (window.location.href = "mailto:hello@eservicesolutions.com"),
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Chat",
      description: "Get instant responses to your questions",
      contact: "Chat Now",
      response: "Usually within minutes",
      action: () => handleWhatsAppContact(),
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Direct consultation and urgent matters",
      contact: "+234 802 129 5589",
      response: "Business hours",
      action: () => (window.location.href = "tel:+2348021295589"),
    },
  ]

  const quickStartOptions = [
    {
      title: "I'm a Business Owner or Entrepreneur",
      description: "Schedule Free 30-Minute Discovery Call",
      timeline: "Call within 3 business days, proposal within 48 hours",
      color: "eservice-blue",
      action: () => handleWhatsAppContact("a business consultation and discovery call"),
    },
    {
      title: "I Want to Learn Digital Skills",
      description: "Apply for Upcoming Bootcamp or Request Custom Training",
      timeline: "Application review within 1 week, program start dates monthly",
      color: "knowledge-teal",
      action: () => handleWhatsAppContact("training programs and bootcamp applications"),
    },
    {
      title: "I Want to Partner or Collaborate",
      description: "Submit Partnership Inquiry or Schedule Strategic Discussion",
      timeline: "Initial discussion within 1 week, partnership development 2-4 weeks",
      color: "eservice-blue",
      action: () => handleWhatsAppContact("partnership and collaboration opportunities"),
    },
  ]

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => onNavigate("home")}
              className="flex items-center text-eservice-blue hover:text-eservice-blue/80 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
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
          <h1 className="text-4xl sm:text-5xl font-bold text-eservice-blue mb-6">We're Ready to Work With You</h1>
          <p className="text-xl text-professional-gray max-w-3xl mx-auto mb-8">
            Whether you're starting a project, launching a training program, exploring partnerships, or joining our
            mission—we'd love to hear from you.
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
              href="mailto:hello@eservicesolutions.com"
              className="inline-flex items-center px-6 py-3 border-2 border-eservice-blue text-eservice-blue font-semibold rounded-lg hover:bg-eservice-blue hover:text-white transition-colors duration-200"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-eservice-blue mb-6">Get Started Today</h3>

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-success-green mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-success-green mb-2">
                  Message Sent via {contactMethod === "whatsapp" ? "WhatsApp" : "Email"}!
                </h4>
                <p className="text-professional-gray mb-4">
                  Your message has been sent through {contactMethod === "whatsapp" ? "WhatsApp" : "Email"}. We'll
                  respond shortly!
                </p>
                <button
                  onClick={() =>
                    contactMethod === "whatsapp"
                      ? handleWhatsAppContact()
                      : (window.location.href = "mailto:hello@eservicesolutions.com")
                  }
                  className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-200"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Continue Chat
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex justify-around mb-4">
                  <button
                    type="button"
                    className={`px-4 py-2 rounded-lg ${contactMethod === "email" ? "bg-eservice-blue text-white" : "bg-gray-100 text-eservice-blue hover:bg-gray-200"} transition-colors duration-200`}
                    onClick={() => setContactMethod("email")}
                  >
                    Email
                  </button>
                  <button
                    type="button"
                    className={`px-4 py-2 rounded-lg ${contactMethod === "whatsapp" ? "bg-green-500 text-white" : "bg-gray-100 text-green-500 hover:bg-gray-200"} transition-colors duration-200`}
                    onClick={() => setContactMethod("whatsapp")}
                  >
                    WhatsApp
                  </button>
                </div>

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
                  Send via {contactMethod === "whatsapp" ? "WhatsApp" : "Email"}
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>

                <p className="text-xs text-professional-gray text-center">
                  This will send your message directly through {contactMethod === "whatsapp" ? "WhatsApp" : "Email"} for
                  faster response
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
                  const IconComponent = method.icon
                  return (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 bg-white rounded-xl hover:shadow-md transition-all duration-300 cursor-pointer"
                      onClick={method.action}
                    >
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
                  )
                })}
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-eservice-blue rounded-xl p-6 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6" />
                <h4 className="font-semibold">Office Hours & Availability</h4>
              </div>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Primary Time Zone:</strong> GMT (Greenwich Mean Time)
                </p>
                <p>
                  <strong>Working Hours:</strong> Monday–Friday, 9:00 AM – 5:00 PM GMT
                </p>
                <p>
                  <strong>WhatsApp Support:</strong> Available 24/7 for urgent matters
                </p>
                <p>
                  <strong>Weekend Support:</strong> Emergency project issues only
                </p>
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
                  <p className="font-medium text-eservice-blue">Nigeria (Primary Operations)</p>
                  <p className="text-professional-gray">Ibadan, Oyo State • All services available</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="font-medium text-knowledge-teal">United Kingdom</p>
                  <p className="text-professional-gray">Remote collaboration • European timezone projects</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="font-medium text-eservice-blue">United States</p>
                  <p className="text-professional-gray">Remote collaboration • Advanced technical integration</p>
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
                className={`${option.color === "eservice-blue" ? "bg-eservice-blue/5 border-eservice-blue/20" : "bg-knowledge-teal/5 border-knowledge-teal/20"} rounded-2xl p-6 border hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-2`}
                onClick={option.action}
              >
                <h4
                  className={`font-bold ${option.color === "eservice-blue" ? "text-eservice-blue" : "text-knowledge-teal"} mb-3`}
                >
                  {option.title}
                </h4>
                <p className="font-medium text-professional-gray mb-4">{option.description}</p>
                <p className="text-sm text-professional-gray mb-4">{option.timeline}</p>
                <button
                  className={`inline-flex items-center ${option.color === "eservice-blue" ? "text-eservice-blue hover:text-eservice-blue/80" : "text-knowledge-teal hover:text-knowledge-teal/80"} font-medium transition-colors duration-200`}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Start WhatsApp Chat
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-eservice-blue to-knowledge-teal rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-lg mb-8 opacity-90">
            Our team is available to help you understand our services and find the perfect solution for your needs.
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
              href="mailto:hello@eservicesolutions.com"
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
  )
}

export default ContactPage
