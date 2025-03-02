
import React from 'react';
import { cn } from '@/lib/utils';
import { 
  Cpu, Wrench, Zap, CircuitBoard, 
  Twitter, Instagram, Linkedin, Github 
} from 'lucide-react';

type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
  social: {
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    github?: string;
  };
};

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Alex Silva',
    role: 'Lead Engineer',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=500',
    description: 'Specialized in mechanical design with 5 years of robotics experience and multiple awards.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    id: 2,
    name: 'Marina Chen',
    role: 'Electronics Specialist',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=500',
    description: 'Circuit design expert with a passion for developing innovative sensor systems.',
    social: {
      linkedin: '#',
      github: '#',
    },
  },
  {
    id: 3,
    name: 'Carlos Rodriguez',
    role: 'Software Developer',
    image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=500',
    description: 'Algorithm specialist focused on computer vision and machine learning for autonomous robots.',
    social: {
      twitter: '#',
      github: '#',
    },
  },
  {
    id: 4,
    name: 'Isabela Taylor',
    role: 'Project Manager',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=500',
    description: 'Coordinates team efforts and competition strategy with excellent leadership skills.',
    social: {
      twitter: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-robotics-black">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 stagger-animation">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">
            <span className="text-gradient">Meet Our Engineers</span>
          </h2>
          <p className="text-white/70 max-w-xs sm:max-w-md md:max-w-2xl mx-auto text-sm sm:text-base">
            Our innovative team of robotics specialists building the future through technology
          </p>
        </div>

        {/* Team Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-16 md:mb-20">
          {[
            { icon: <Cpu size={24} />, title: 'Innovation', description: 'Creating new solutions to complex problems' },
            { icon: <Wrench size={24} />, title: 'Craftsmanship', description: 'Precision engineering and attention to detail' },
            { icon: <Zap size={24} />, title: 'Efficiency', description: 'Optimizing performance through smart design' },
            { icon: <CircuitBoard size={24} />, title: 'Technology', description: 'Leveraging cutting-edge tech for better results' },
          ].map((item, index) => (
            <div 
              key={index} 
              className={cn(
                "glass-card p-4 sm:p-6 text-center transition-all duration-300 hover-scale",
                "opacity-0"
              )}
              style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-robotics-purple/20 flex items-center justify-center mx-auto mb-3 sm:mb-4 text-robotics-purple-light">
                {item.icon}
              </div>
              <h3 className="text-white text-base sm:text-lg font-medium mb-1 sm:mb-2">{item.title}</h3>
              <p className="text-white/70 text-xs sm:text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id} 
              className={cn(
                "relative overflow-hidden rounded-xl hover-scale",
                "opacity-0 animate-fade-in"
              )}
              style={{ animationDelay: `${index * 0.15 + 0.3}s` }}
            >
              <div className="glass-card h-full">
                <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden rounded-t-lg">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-robotics-black to-transparent"></div>
                </div>
                
                <div className="p-3 sm:p-4 md:p-5">
                  <div className="mb-1 inline-block px-2 sm:px-3 py-1 text-xs rounded-full bg-robotics-purple/20 text-robotics-purple-light">
                    {member.role}
                  </div>
                  <h3 className="text-white text-lg sm:text-xl font-medium mb-1 sm:mb-2">{member.name}</h3>
                  <p className="text-white/70 text-xs sm:text-sm mb-3 sm:mb-4">{member.description}</p>
                  
                  <div className="flex items-center space-x-3">
                    {member.social.twitter && (
                      <a href={member.social.twitter} className="text-white/60 hover:text-robotics-purple transition-colors" aria-label="Twitter">
                        <Twitter size={16} className="sm:w-[18px] sm:h-[18px]" />
                      </a>
                    )}
                    {member.social.instagram && (
                      <a href={member.social.instagram} className="text-white/60 hover:text-robotics-purple transition-colors" aria-label="Instagram">
                        <Instagram size={16} className="sm:w-[18px] sm:h-[18px]" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="text-white/60 hover:text-robotics-purple transition-colors" aria-label="LinkedIn">
                        <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
                      </a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} className="text-white/60 hover:text-robotics-purple transition-colors" aria-label="GitHub">
                        <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
