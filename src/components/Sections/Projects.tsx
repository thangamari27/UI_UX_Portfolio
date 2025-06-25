import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import ProjectCard from '../UI/ProjectCard';

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

const projects: Project[] = [
  {
    id: 1,
    title: "FinanceFlow Mobile App",
    category: "Mobile Design",
    description: "A comprehensive personal finance management app with intuitive budgeting tools.",
    longDescription: "FinanceFlow is a comprehensive personal finance management application designed to help users take control of their financial health. The app features intuitive budgeting tools, expense tracking, investment monitoring, and personalized financial insights. Through extensive user research and iterative design, we created an experience that makes complex financial data accessible and actionable for everyday users.",
    tools: ["Figma", "Principle", "Maze", "React Native"],
    image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800",
    liveUrl: "#",
    year: "2024"
  },
  {
    id: 2,
    title: "MedConnect Dashboard",
    category: "Web Design",
    description: "A healthcare platform connecting patients with medical professionals seamlessly.",
    longDescription: "MedConnect is a revolutionary healthcare platform that bridges the gap between patients and medical professionals. The dashboard provides a comprehensive view of patient health records, appointment scheduling, telemedicine capabilities, and real-time communication tools. The design prioritizes accessibility and ease of use, ensuring that users of all technical backgrounds can navigate the platform effectively.",
    tools: ["Sketch", "InVision", "Zeplin", "Vue.js"],
    image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
    githubUrl: "#",
    year: "2023"
  },
  {
    id: 3,
    title: "EcoShop E-commerce",
    category: "E-commerce",
    description: "Sustainable shopping platform with a focus on eco-friendly products.",
    longDescription: "EcoShop is an innovative e-commerce platform dedicated to sustainable and eco-friendly products. The design emphasizes the brand's commitment to environmental responsibility through thoughtful use of natural colors, sustainable imagery, and clear product sustainability ratings. The user experience focuses on education and transparency, helping customers make informed choices about their environmental impact.",
    tools: ["Adobe XD", "Photoshop", "Shopify", "React"],
    image: "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800",
    liveUrl: "#",
    githubUrl: "#",
    year: "2023"
  },
  {
    id: 4,
    title: "LearningHub Platform",
    category: "EdTech",
    description: "Online learning platform with interactive course management and progress tracking.",
    longDescription: "LearningHub is a comprehensive online learning platform designed to facilitate effective knowledge transfer and skill development. The platform features interactive course content, progress tracking, peer collaboration tools, and adaptive learning paths. The interface design prioritizes clarity and focus, reducing cognitive load to help learners concentrate on their educational goals.",
    tools: ["Figma", "Framer", "Google Analytics", "Next.js"],
    image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800",
    liveUrl: "#",
    year: "2022"
  }
];

const categories = ["All", "Mobile Design", "Web Design", "E-commerce", "EdTech"];

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 projects-header">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Explore my latest UI/UX design projects, showcasing user-centered solutions 
            across various industries and platforms.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 projects-filter">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-slate-100 transition-colors"
                >
                  <X size={20} />
                </button>

                {/* Project Image */}
                <div className="h-64 lg:h-80 overflow-hidden rounded-t-2xl">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                        {selectedProject.category}
                      </span>
                      <h3 className="text-3xl font-bold text-slate-900 mb-2">
                        {selectedProject.title}
                      </h3>
                      <p className="text-slate-600">{selectedProject.year}</p>
                    </div>
                  </div>

                  <p className="text-slate-700 leading-relaxed mb-6">
                    {selectedProject.longDescription}
                  </p>

                  {/* Tools Used */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3">Tools & Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tools.map((tool, index) => (
                        <span
                          key={index}
                          className="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg text-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span>View Live</span>
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        className="flex items-center space-x-2 border border-slate-300 hover:border-slate-400 text-slate-700 px-6 py-3 rounded-lg transition-colors"
                      >
                        <Github size={16} />
                        <span>View Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;