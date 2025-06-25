import React from 'react';
import { ExternalLink, Eye } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  tools: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  year: string;
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 lg:h-72 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center justify-between">
              <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                {project.category}
              </span>
              <div className="flex space-x-2">
                <button
                  onClick={onClick}
                  className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                >
                  <Eye size={16} />
                </button>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {project.category}
          </span>
          <span className="text-slate-500 text-sm">{project.year}</span>
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-600 mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tools.slice(0, 3).map((tool, index) => (
            <span
              key={index}
              className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs"
            >
              {tool}
            </span>
          ))}
          {project.tools.length > 3 && (
            <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs">
              +{project.tools.length - 3} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;