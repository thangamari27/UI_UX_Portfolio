import React from 'react';
import { ArrowDown, Download, MessageCircle } from 'lucide-react';
import santhana_karuppasamy_resume from '../../public/pdf/santhana_karuppasamy_resume.pdf'

const Landing: React.FC = () => {
  return (
    <section id="landing" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="floating-shape absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="floating-shape absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="floating-shape absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <div className="hero-content">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-orange-200 bg-clip-text text-transparent">
                Santhana Karuppasamy
              </h1>
              <p className="text-xl lg:text-2xl text-slate-300 mb-4 font-light">
                Junior UI/UX Designer
              </p>
              <p className="text-lg text-slate-400 mb-8 max-w-md mx-auto lg:mx-0">
                Crafting digital experiences that delight users and drive business growth through thoughtful design and research.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105">
                  <MessageCircle size={20} />
                  <span>Let's Work Together</span>
                </button>
                <button className="group border-2 border-slate-400 hover:border-white text-slate-300 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 hover:bg-white/10">
                  <Download size={20} />
                  <span><a href={santhana_karuppasamy_resume} download>Download Resume</a></span>
                </button>
              </div>
            </div>
          </div>

          {/* Right - 3D Character Area */}
          <div className="lg:w-1/2 flex justify-center items-center">
            <div className="w-full max-w-[500px] aspect-square relative">
              <iframe
                src="https://my.spline.design/roomrelaxingcopy-giodga52jPPUDwfkHxvwokSc/"
                className="absolute top-0 left-0 w-full h-full border-none rounded-2xl"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={24} className="text-slate-400" />
        </div>
      </div>
    </section>
  );
};

export default Landing;
