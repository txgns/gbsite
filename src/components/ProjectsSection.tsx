import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { 
  Award, Calendar, ExternalLink, ChevronRight, 
  Cpu, Bot, Zap, CircuitBoard
} from 'lucide-react';

type Project = {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  description: string;
  achievements: string[];
  icon: React.ReactNode;
  link?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Autonomous Rover',
    category: 'Robotics',
    date: 'August 2023',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000',
    description: 'A terrain-adaptive rover with computer vision capabilities designed for autonomous navigation in difficult environments.',
    achievements: ['National Robotics Award', 'Terrain Navigation Challenge Winner', '95% Obstacle Avoidance Rate'],
    icon: <Bot size={20} />,
    link: '#',
  },
  {
    id: 2,
    title: 'Smart Prosthetic Hand',
    category: 'Medical Robotics',
    date: 'May 2023',
    image: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&q=80&w=1000',
    description: 'Affordable prosthetic hand with myoelectric sensors providing realistic movements and tactile feedback.',
    achievements: ['Innovation in Healthcare Award', 'Open Source Design', 'Low-cost Manufacturing Process'],
    icon: <Zap size={20} />,
    link: '#',
  },
  {
    id: 3,
    title: 'Robotics Academy',
    category: 'Education',
    date: 'Ongoing',
    image: 'https://images.unsplash.com/photo-1560253023-3ec5d502b22f?auto=format&fit=crop&q=80&w=1000',
    description: 'Weekly workshops teaching robotics, programming, and electronics to students from underrepresented communities.',
    achievements: ['150+ Students Trained', '15 School Partnerships', 'Community Impact Recognition'],
    icon: <CircuitBoard size={20} />,
    link: '#',
  },
  {
    id: 4,
    title: 'Agricultural Drone',
    category: 'Environmental',
    date: 'December 2023',
    image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&q=80&w=1000',
    description: 'A customized drone system designed for precision farming, crop monitoring, and automated seed planting.',
    achievements: ['Sustainable Tech Award', '30% Reduction in Water Usage', 'Implemented in 5 Farms'],
    icon: <Cpu size={20} />,
    link: '#',
  },
];

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section 
      id="projects" 
      className="py-24 px-6 md:px-12"
      style={{
        background: 'linear-gradient(135deg, #1A1A1A 0%, #5C1D91 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 stagger-animation">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Our Innovations</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Robotics solutions we've developed, competitions we've won, and communities we've impacted
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={cn(
                "glass-card rounded-xl overflow-hidden transition-all duration-300",
                "opacity-0 animate-fade-in hover-scale",
                activeProject === project.id ? "purple-glow" : ""
              )}
              style={{ animationDelay: `${index * 0.15 + 0.1}s` }}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                  style={{ 
                    transform: activeProject === project.id ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-robotics-black/90 to-transparent"></div>
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <span className="bg-robotics-purple/90 text-white text-xs px-3 py-1 rounded-full flex items-center">
                    {project.icon}
                    <span className="ml-1">{project.category}</span>
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white text-xl font-medium">{project.title}</h3>
                  <div className="flex items-center text-white/60 text-sm">
                    <Calendar size={14} className="mr-1" />
                    <span>{project.date}</span>
                  </div>
                </div>
                
                <p className="text-white/70 mb-4">{project.description}</p>
                
                <div className="mb-5">
                  <h4 className="text-white/90 text-sm font-medium mb-2 flex items-center">
                    <Award size={16} className="mr-2 text-robotics-purple-light" />
                    Achievements
                  </h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, i) => (
                      <li 
                        key={i} 
                        className="text-white/70 text-sm flex items-center"
                      >
                        <ChevronRight size={14} className="mr-1 text-robotics-purple-light" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {project.link && (
                  <a 
                    href={project.link} 
                    className="inline-flex items-center text-robotics-purple-light hover:text-white transition-colors text-sm font-medium"
                  >
                    View Details <ExternalLink size={14} className="ml-1" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
