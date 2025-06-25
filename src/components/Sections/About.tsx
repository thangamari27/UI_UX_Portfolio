import React from 'react';
import { Award, Users, Coffee, Lightbulb } from 'lucide-react';

const stats = [
  { icon: Award, value: '1+', label: 'Years Experience' },
  { icon: Users, value: '5+', label: 'Happy Clients' },
  { icon: Coffee, value: '20+', label: 'Projects Completed' },
  { icon: Lightbulb, value: '2', label: 'Certificates' },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 about-header">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 leading-relaxed">
              I am a dedicated UI/UX designer focused on creating enjoyable digital experiences that address real problems for users.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left - Image Area */}
            <div className="about-image">
  <div className="relative">
    {/* Replacing Profile Box with Spline 3D */}
    <div className="w-full h-96 bg-white rounded-2xl shadow-2xl overflow-hidden">
      <iframe
        src="https://my.spline.design/roomrelaxingcopy-giodga52jPPUDwfkHxvwokSc/"
        title="3D Developer Character"
        className="w-full h-full border-none"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>

    {/* Floating Card stays the same */}
    <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-xl p-4 border w-[240px] sm:w-[280px]">
      <div className="flex items-center space-x-3">
        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        <span className="text-sm font-medium text-slate-700">Available for work</span>
      </div>
    </div>
  </div>
</div>


            {/* Right - Content */}
            <div className="about-content space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Designing with Purpose & Passion
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
               I am a recent graduate in UI/UX design, excited about creating easy-to-use digital experiences for websites and mobile apps. 
               I focus on combining creative ideas with practical solutions to make designs that look good and work well.
              </p>
              
              <p className="text-slate-600 leading-relaxed">
                I believe great design starts with understanding users. 
                By doing user research, making prototypes, and testing my designs, I strive to create experiences that are simple and meaningful.
                My school projects have helped me learn about different fields, like finance, healthcare, and online shopping, giving me a broad view of design challenges.
              </p>

              <div className="bg-slate-50 rounded-lg p-6 border-l-4 border-blue-600">
                <p className="text-slate-700 italic">
                  "Design is not just what it looks like and feels like. Design is how it works."
                </p>
                <p className="text-sm text-slate-500 mt-2">— Steve Jobs</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 about-stats">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className="text-center p-6 rounded-lg hover:bg-slate-50 transition-colors duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-orange-600 text-white rounded-full mb-4">
                    <Icon size={24} />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;