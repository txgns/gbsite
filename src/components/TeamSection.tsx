
import React from 'react';
import { cn } from '@/lib/utils';
import { Trophy, Target, Zap, Gamepad, Twitter, Instagram, Twitch } from 'lucide-react';

type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
  social: {
    twitter?: string;
    instagram?: string;
    twitch?: string;
  };
};

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Alex "Striker" Kim',
    role: 'Team Captain',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=500',
    description: 'Pro FPS player with 5 years of competitive experience and multiple championships.',
    social: {
      twitter: '#',
      instagram: '#',
      twitch: '#',
    },
  },
  {
    id: 2,
    name: 'Jordan "Phantom" Chen',
    role: 'Support',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=500',
    description: 'Strategic mastermind with unparalleled map awareness and team coordination.',
    social: {
      twitter: '#',
      instagram: '#',
    },
  },
  {
    id: 3,
    name: 'Sam "Vortex" Rodriguez',
    role: 'Fragger',
    image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=500',
    description: 'Known for lightning-fast reflexes and aggressive playstyle that dominates the competition.',
    social: {
      twitter: '#',
      twitch: '#',
    },
  },
  {
    id: 4,
    name: 'Morgan "Eclipse" Taylor',
    role: 'Strategist',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=500',
    description: 'Analyzes opponent patterns and develops counter-strategies for the team.',
    social: {
      twitter: '#',
      instagram: '#',
      twitch: '#',
    },
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-24 px-6 md:px-12 bg-esports-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 stagger-animation">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Meet The Squad</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Our elite team of professional gamers pushing the boundaries of what's possible
          </p>
        </div>

        {/* Team Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { icon: <Trophy size={24} />, title: 'Excellence', description: 'Striving to be the best in every competition' },
            { icon: <Target size={24} />, title: 'Precision', description: 'Perfecting every move with practice and dedication' },
            { icon: <Zap size={24} />, title: 'Innovation', description: 'Creating new strategies that redefine the meta' },
            { icon: <Gamepad size={24} />, title: 'Passion', description: 'Fueled by our love for gaming and competition' },
          ].map((item, index) => (
            <div 
              key={index} 
              className={cn(
                "glass-card p-6 text-center transition-all duration-300 hover-scale",
                "opacity-0"
              )}
              style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-esports-purple/20 flex items-center justify-center mx-auto mb-4 text-esports-purple-light">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-esports-black to-transparent"></div>
                </div>
                
                <div className="p-5">
                  <div className="mb-1 inline-block px-3 py-1 text-xs rounded-full bg-esports-purple/20 text-esports-purple-light">
                    {member.role}
                  </div>
                  <h3 className="text-white text-xl font-medium mb-2">{member.name}</h3>
                  <p className="text-white/70 text-sm mb-4">{member.description}</p>
                  
                  <div className="flex items-center space-x-3">
                    {member.social.twitter && (
                      <a href={member.social.twitter} className="text-white/60 hover:text-esports-purple transition-colors" aria-label="Twitter">
                        <Twitter size={18} />
                      </a>
                    )}
                    {member.social.instagram && (
                      <a href={member.social.instagram} className="text-white/60 hover:text-esports-purple transition-colors" aria-label="Instagram">
                        <Instagram size={18} />
                      </a>
                    )}
                    {member.social.twitch && (
                      <a href={member.social.twitch} className="text-white/60 hover:text-esports-purple transition-colors" aria-label="Twitch">
                        <Twitch size={18} />
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
