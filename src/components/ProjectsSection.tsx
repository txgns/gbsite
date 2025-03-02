
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Monitor, Award, Calendar, ExternalLink, ChevronRight } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  description: string;
  achievements: string[];
  link?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Global Championship',
    category: 'Tournament',
    date: 'August 2023',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1000',
    description: 'Our team secured 2nd place in the prestigious Global Championship Series, competing against the best teams worldwide.',
    achievements: ['2nd Place Finish', '$50,000 Prize', 'MVP Award - Alex "Striker" Kim'],
    link: '#',
  },
  {
    id: 2,
    title: 'Regional Masters',
    category: 'Tournament',
    date: 'May 2023',
    image: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&q=80&w=1000',
    description: 'Dominated the Regional Masters tournament with an undefeated run, showcasing our strategic superiority.',
    achievements: ['1st Place', 'Undefeated Run', 'Best Team Strategy Award'],
    link: '#',
  },
  {
    id: 3,
    title: 'Nexus Academy',
    category: 'Community',
    date: 'Ongoing',
    image: 'https://images.unsplash.com/photo-1560253023-3ec5d502b22f?auto=format&fit=crop&q=80&w=1000',
    description: 'Our initiative to nurture emerging talent through coaching, workshops, and competitive opportunities.',
    achievements: ['50+ Students', '5 Professional Graduates', 'Community Partnership Program'],
    link: '#',
  },
  {
    id: 4,
    title: 'Charity Stream Marathon',
    category: 'Community',
    date: 'December 2023',
    image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&q=80&w=1000',
    description: 'A 24-hour livestream event raising funds for gaming accessibility initiatives and supporting inclusive gaming.',
    achievements: ['$75,000 Raised', '100k+ Viewers', 'Corporate Sponsor Matching'],
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
        background: 'linear-gradient(135deg, #1A1A1A 0%, #2D1B69 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 stagger-animation">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Our Achievements</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Tournaments won, records broken, and communities built
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
                <div className="absolute inset-0 bg-gradient-to-t from-esports-black-dark/90 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-esports-purple/90 text-white text-xs px-3 py-1 rounded-full">
                    {project.category}
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
                    <Award size={16} className="mr-2 text-esports-purple-light" />
                    Achievements
                  </h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, i) => (
                      <li 
                        key={i} 
                        className="text-white/70 text-sm flex items-center"
                      >
                        <ChevronRight size={14} className="mr-1 text-esports-purple-light" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {project.link && (
                  <a 
                    href={project.link} 
                    className="inline-flex items-center text-esports-purple-light hover:text-white transition-colors text-sm font-medium"
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
