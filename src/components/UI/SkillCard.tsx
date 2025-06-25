import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface Skill {
  name: string;
  level: string;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

interface SkillCardProps {
  category: SkillCategory;
}

const SkillCard: React.FC<SkillCardProps> = ({ category }) => {
  const Icon = category.icon;

  const getLevelWidth = (level: string) => {
    switch (level) {
      case 'Expert': return 'w-full';
      case 'Advanced': return 'w-4/5';
      case 'Intermediate': return 'w-3/5';
      default: return 'w-2/5';
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
      </div>

      {/* Skills */}
      <div className="space-y-4">
        {category.skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-slate-700">{skill.name}</span>
              <span className="text-sm text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                {skill.level}
              </span>
            </div>
            
            {/* Skill Level Indicator */}
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div 
                className={`h-2 bg-gradient-to-r ${skill.color} rounded-full ${getLevelWidth(skill.level)} transition-all duration-1000 ease-out`}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Hover Effect */}
      <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
      </div>
    </div>
  );
};

export default SkillCard;