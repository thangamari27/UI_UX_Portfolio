import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Michael Chen",
    role: "Product Manager",
    company: "TechFlow Inc.",
    content: "Sarah's design work transformed our user experience completely. Her attention to detail and user-centered approach resulted in a 40% increase in user engagement. She's a true design strategist.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    id: 2,
    name: "Emily Rodriguez",
    role: "CEO",
    company: "StartupVibe",
    content: "Working with Sarah was incredible. She understood our vision and translated it into a beautiful, functional design that our users love. Her professionalism and creativity are unmatched.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    id: 3,
    name: "David Park",
    role: "CTO",
    company: "HealthTech Solutions",
    content: "Sarah's expertise in healthcare UX design helped us create an accessible platform that truly serves our patients. Her research-driven approach and design systems thinking are exceptional.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 testimonials-header">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What Clients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-orange-400 mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients and colleagues 
            have to say about working with me.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 testimonials-grid">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote size={32} className="text-blue-400" />
              </div>

              {/* Content */}
              <p className="text-slate-200 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-slate-300">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
            <div className="flex -space-x-2">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <span className="text-slate-200 ml-3">Join 50+ happy clients</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;