
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
    title: 'Hastur',
    category: 'Combate',
    date: 'Projeto em Andamento',
    image: '',
    description: 'Beetle Vertical Spinner',
    achievements: ['', '', ''],
    icon: <Bot size={20} />,
    link: '#',
  },
  {
    id: 2,
    title: 'Cavaleiros da Gambiarra Micro',
    category: 'Hockey',
    date: 'Projeto em Andamento',
    image: '',
    description: 'Time de Hockey Micro',
    achievements: ['', '', ''],
    icon: <Bot size={20} />,
    link: '#',
  },
  {
    id: 3,
    title: 'Conceito',
    category: 'Sumô Mini',
    date: 'Projeto em Andamento',
    image: '',
    description: 'Mini Sumo de 500g',
    achievements: ['', '', ''],
    icon: <Bot size={20} />,
    link: '#',
  },
  {
    id: 4,
    title: 'Mitsu',
    category: 'Sumô Lego',
    date: 'Projeto em Andamento',
    image: '',
    description: 'Sumo lego Pro de 1kg',
    achievements: ['', '', ''],
    icon: <Bot size={20} />,
    link: '#',
  },
];

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section 
      id="projects" 
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12"
      style={{
        background: 'linear-gradient(135deg, #1A1A1A 0%, #5C1D91 100%)',
      }}
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 stagger-animation">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">
            <span className="text-gradient">Nossos Projetos</span>
          </h2>
          <p className="text-white/70 max-w-xs sm:max-w-md md:max-w-2xl mx-auto text-sm sm:text-base">
            Projetos que ja desenvolvemos e projetos que vamos desenvolver
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
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
              <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                  style={{ 
                    transform: activeProject === project.id ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-robotics-black/90 to-transparent"></div>
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex items-center space-x-2">
                  <span className="bg-robotics-purple/90 text-white text-xs px-2 sm:px-3 py-1 rounded-full flex items-center">
                    {project.icon}
                    <span className="ml-1 text-[10px] sm:text-xs">{project.category}</span>
                  </span>
                </div>
              </div>
              
              <div className="p-3 sm:p-4 md:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-3">
                  <h3 className="text-white text-lg sm:text-xl font-medium mb-1 sm:mb-0">{project.title}</h3>
                  <div className="flex items-center text-white/60 text-xs sm:text-sm">
                    <Calendar size={12} className="mr-1 sm:w-4 sm:h-4" />
                    <span>{project.date}</span>
                  </div>
                </div>
                
                <p className="text-white/70 text-xs sm:text-sm mb-3 sm:mb-4">{project.description}</p>
                
                <div className="mb-3 sm:mb-5">
                  <h4 className="text-white/90 text-xs sm:text-sm font-medium mb-1 sm:mb-2 flex items-center">
                    <Award size={14} className="mr-1 sm:mr-2 text-robotics-purple-light sm:w-4 sm:h-4" />
                    Conquistas
                  </h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, i) => (
                      <li 
                        key={i} 
                        className="text-white/70 text-xs sm:text-sm flex items-center"
                      >
                        <ChevronRight size={12} className="mr-1 text-robotics-purple-light sm:w-4 sm:h-4" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {project.link && (
                  <a 
                    href={project.link} 
                    className="inline-flex items-center text-robotics-purple-light hover:text-white transition-colors text-xs sm:text-sm font-medium"
                  >
                    Ver Detalhes <ExternalLink size={12} className="ml-1 sm:w-4 sm:h-4" />
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
