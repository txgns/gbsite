
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
    <section id="team" className="py-24 px-6 md:px-12 bg-robotics-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 stagger-animation">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Meet Our Engineers</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Our innovative team of robotics specialists building the future through technology
          </p>
        </div>

        {/* Team Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { icon: <Cpu size={24} />, title: 'Innovation', description: 'Creating new solutions to complex problems' },
            { icon: <Wrench size={24} />, title: 'Craftsmanship', description: 'Precision engineering and attention to detail' },
            { icon: <Zap size={24} />, title: 'Efficiency', description: 'Optimizing performance through smart design' },
            { icon: <CircuitBoard size={24} />, title: 'Technology', description: 'Leveraging cutting-edge tech for better results' },
          ].map((item, index) => (
            <div 
              key={index} 
              className={cn(
                "glass-card p-6 text-center transition-all duration-300 hover-scale",
                "opacity-0"
              )}
              style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-robotics-purple/20 flex items-center justify-center mx-auto mb-4 text-robotics-purple-light">
                {item.icon}
              </div>
              <h3 className="text-white text-lg font-medium mb-2">{item.title}</h3>
              <p className="text-white/70 text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <div className="relative h-72 overflow-hidden rounded-t-lg">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-robotics-black to-transparent"></div>
                </div>
                
                <div className="p-5">
                  <div className="mb-1 inline-block px-3 py-1 text-xs rounded-full bg-robotics-purple/20 text-robotics-purple-light">
                    {member.role}
                  </div>
                  <h3 className="text-white text-xl font-medium mb-2">{member.name}</h3>
                  <p className="text-white/70 text-sm mb-4">{member.description}</p>
                  
                  <div className="flex items-center space-x-3">
                    {member.social.twitter && (
                      <a href={member.social.twitter} className="text-white/60 hover:text-robotics-purple transition-colors" aria-label="Twitter">
                        <Twitter size={18} />
                      </a>
                    )}
                    {member.social.instagram && (
                      <a href={member.social.instagram} className="text-white/60 hover:text-robotics-purple transition-colors" aria-label="Instagram">
                        <Instagram size={18} />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="text-white/60 hover:text-robotics-purple transition-colors" aria-label="LinkedIn">
                        <Linkedin size={18} />
                      </a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} className="text-white/60 hover:text-robotics-purple transition-colors" aria-label="GitHub">
                        <Github size={18} />
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
