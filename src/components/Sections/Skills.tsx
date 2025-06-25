import React from 'react';
import { Palette, Code, Smartphone, Search, Users, BarChart3 } from 'lucide-react';
import SkillCard from '../UI/SkillCard';

const skillCategories = [
  {
    title: "Design Tools",
    icon: Palette,
    skills: [
      { name: "Figma", level: "Intermediate", color: "from-purple-500 to-pink-500" },
      { name: "Adobe Creative Suite", level: "Basic", color: " from-green-500 to-teal-500" },
      { name: "Sketch", level: "Basic", color: "from-orange-500 to-red-500" },
      { name: "Photo Shop", level: "Intermediate", color: "from-blue-500 to-cyan-500" }
    ]
  },
  {
    title: "Prototyping",
    icon: Smartphone,
    skills: [
      { name: "Framer", level: "Intermediate", color: "from-indigo-500 to-purple-500" },
      { name: "InVision", level: "Basic", color: "from-pink-500 to-rose-500" },
      { name: "Marvel", level: "Basic", color: "from-yellow-500 to-orange-500" },
      { name: "Adobe XD", level: "Intermediate", color: "from-violet-500 to-purple-500" }
    ]
  },
  {
    title: "Development",
    icon: Code,
    skills: [
      { name: "HTML/CSS", level: "Intermediate", color: "from-blue-500 to-indigo-500" },
      { name: "JavaScript", level: "Basic", color: "from-yellow-500 to-amber-500" },
      { name: "React", level: "Basic", color: "from-cyan-500 to-blue-500" },
      { name: "Tailwind CSS", level: "Intermediate", color: "from-teal-500 to-cyan-500" }
    ]
  },
  {
    title: "Research & Testing",
    icon: Search,
    skills: [
      { name: "User Research", level: "Expert", color: "from-emerald-500 to-teal-500" },
      { name: "A/B Testing", level: "Advanced", color: "from-red-500 to-pink-500" },
      { name: "Usability Testing", level: "Expert", color: "from-purple-500 to-indigo-500" },
      { name: "Analytics", level: "Intermediate", color: "from-orange-500 to-red-500" }
    ]
  },
  {
    title: "Collaboration",
    icon: Users,
    skills: [
      { name: "Design Systems", level: "Expert", color: "from-blue-500 to-purple-500" },
      { name: "Agile/Scrum", level: "Advanced", color: "from-green-500 to-emerald-500" },
      { name: "Stakeholder Management", level: "Advanced", color: "from-pink-500 to-rose-500" },
      { name: "Team Leadership", level: "Intermediate", color: "from-indigo-500 to-blue-500" }
    ]
  },
  {
    title: "Strategy",
    icon: BarChart3,
    skills: [
      { name: "Design Strategy", level: "Expert", color: "from-violet-500 to-purple-500" },
      { name: "Product Strategy", level: "Advanced", color: "from-amber-500 to-orange-500" },
      { name: "Brand Design", level: "Advanced", color: "from-rose-500 to-pink-500" },
      { name: "Design Thinking", level: "Expert", color: "from-teal-500 to-green-500" }
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 skills-header">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A comprehensive skill set spanning design, development, research, and strategy 
            to deliver exceptional user experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 skills-grid">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-slate-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Continuous Learning
            </h3>
            <p className="text-slate-600 leading-relaxed">
              I believe in staying current with the latest design trends, tools, and methodologies. 
              I regularly attend design conferences, participate in online courses, and contribute 
              to the design community through workshops and mentoring.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;