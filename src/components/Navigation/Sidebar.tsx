import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Home, User, Briefcase, Zap, MessageSquare, Star } from 'lucide-react';

const navItems = [
  { id: 'landing', icon: Home, label: 'Home' },
  { id: 'about', icon: User, label: 'About' },
  { id: 'projects', icon: Briefcase, label: 'Projects' },
  { id: 'skills', icon: Zap, label: 'Skills' },
  { id: 'testimonials', icon: Star, label: 'Testimonials' },
  { id: 'contact', icon: MessageSquare, label: 'Contact' },
];

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('landing');
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Track active scroll section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close on outside click (mobile & desktop)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Toggle Button - visible on all screens */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 bg-slate-900 text-white p-3 rounded-full shadow-lg hover:bg-slate-800 transition-colors"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Overlay - mobile only */}
      {isOpen && window.innerWidth < 768 && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <nav
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        md:w-20 md:translate-x-0 md:bg-slate-900/95 md:backdrop-blur-sm`}
      >
        <div className="flex flex-col items-center py-8 px-2 space-y-6 md:py-12 md:space-y-8">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 w-full md:w-12 md:h-12 md:justify-center md:px-0 ${
                  isActive
                    ? 'bg-blue-600 text-white md:bg-blue-600'
                    : 'text-slate-600 hover:bg-slate-100 md:text-slate-400 md:hover:bg-slate-800 md:hover:text-white'
                }`}
              >
                <Icon size={20} />
                <span className="md:hidden font-medium">{item.label}</span>

                {/* Tooltip */}
                <div className="hidden md:block absolute left-0 ml-16 px-2 py-1 bg-slate-900 text-white text-sm rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  {item.label}
                </div>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
