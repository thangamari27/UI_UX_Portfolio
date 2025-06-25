import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, ExternalLink, Figma } from 'lucide-react';
import santhana_karuppasamy_resume from '../../public/pdf/santhana_karuppasamy_resume.pdf'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sivanmuthu04@gmail.com',
      href: 'mailto:sivanmuthu04@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '91+ 9361043172',
      href: 'tel:9361043172'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Junction, Tirunelveli',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/santhana-karuppasamy-9149b2315', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Figma, href: '#', label: 'Figma' }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 contact-header">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's discuss 
            how we can create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="contact-info">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Get in Touch</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-slate-50 transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-orange-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 font-medium">{info.label}</div>
                      <div className="text-slate-900 font-semibold">{info.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-slate-900 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-12 h-12 bg-slate-100 hover:bg-gradient-to-r hover:from-blue-600 hover:to-orange-600 text-slate-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Resume Download */}
            <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-6 border border-blue-100">
              <h4 className="text-lg font-semibold text-slate-900 mb-2">
                Interested in my work?
              </h4>
              <p className="text-slate-600 mb-4">
                Download my resume to learn more about my experience and skills.
              </p>
              <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                <ExternalLink size={16} />
                <span><a href={santhana_karuppasamy_resume} download>Download Resume</a></span>
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or question..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-orange-600 text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-slate-200">
          <p className="text-slate-600">
            © 2025 All rights reservered || Santhana Karuppasamy - Junior UI/UX Designer
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;