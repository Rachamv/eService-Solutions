import { Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';

interface FooterProps {
    onNavigate: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    const footerSections = [
        {
            title: 'Services',
            links: [
                { label: 'Technical Solutions', action: () => onNavigate('services') },
                { label: 'Branding & Growth', action: () => onNavigate('services') },
                { label: 'Training & Coaching', action: () => onNavigate('training') },
                { label: 'Custom Learning Solutions', action: () => onNavigate('training') }
            ]
        },
        {
            title: 'Training',
            links: [
                { label: 'Community Bootcamps', action: () => onNavigate('training') },
                { label: 'Client Coaching', action: () => onNavigate('training') },
                { label: 'Partnership Programs', action: () => onNavigate('contact') },
                { label: 'Scholarship Opportunities', action: () => onNavigate('contact') }
            ]
        },
        {
            title: 'Company',
            links: [
                { label: 'About Us', action: () => onNavigate('about') },
                { label: 'Our Mission', action: () => onNavigate('about') },
                { label: 'Impact Goals', action: () => onNavigate('about') },
                { label: 'Join Our Team', action: () => onNavigate('contact') }
            ]
        },
    ];

    return (
        <footer className="bg-gradient-to-r from-eservice-blue to-knowledge-teal rounded-2xl p-8 lg:p-12 text-white mb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-5 gap-8 mb-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-3 mb-6">
                            <img src="/logo.jpg" alt="eService Solutions" className="h-12 w-12 rounded-lg" />
                            <div>
                                <h3 className="text-xl font-bold text-white">eService Solutions</h3>
                                <p className="text-sm text-gray-300">Excellence Delivered. Knowledge Empowered.</p>
                            </div>
                        </div>

                        <p className="text-gray-300 mb-6 leading-relaxed">
                            We combine expert digital execution with hands-on training to help businesses scale globally and individuals build sustainable digital careers.
                        </p>

                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-knowledge-teal" />
                                <span className="text-gray-300">help.eservicesolution@gmail.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-knowledge-teal" />
                                <span className="text-gray-300">+234 802 129 5589</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <MapPin className="w-5 h-5 text-knowledge-teal" />
                                <span className="text-gray-300">Lagos, Nigeria</span>
                            </div>
                        </div>
                    </div>

                    {/* Footer Links */}
                    {footerSections.map((section, index) => (
                        <div key={index}>
                            <h4 className="font-semibold text-white mb-4">{section.title}</h4>
                            <ul className="space-y-3">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <button
                                            onClick={link.action}
                                            className="text-gray-300 hover:text-knowledge-teal transition-colors duration-200 text-left"
                                        >
                                            {link.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-600 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-gray-300 text-sm mb-4 md:mb-0">
                            © {new Date().getFullYear()} eService Solutions. All rights reserved.
                        </div>

                        <div className="flex items-center space-x-6 text-sm">
                            <button className="text-gray-300 hover:text-knowledge-teal transition-colors duration-200">
                                Privacy Policy
                            </button>
                            <button className="text-gray-300 hover:text-knowledge-teal transition-colors duration-200">
                                Terms of Service
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;