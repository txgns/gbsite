
import React from 'react';
import { cn } from '@/lib/utils';
import { Monitor, Headphones, Cpu, Mouse, Shirt, Coffee } from 'lucide-react';

type Sponsor = {
  id: number;
  name: string;
  description: string;
  category: string;
  icon: React.ReactNode;
};

const sponsors: Sponsor[] = [
  {
    id: 1,
    name: 'TechPulse',
    description: 'Premium gaming monitors with ultra-fast refresh rates',
    category: 'Hardware',
    icon: <Monitor size={32} />,
  },
  {
    id: 2,
    name: 'SonicWave',
    description: 'Professional-grade audio equipment for crystal clear communication',
    category: 'Audio',
    icon: <Headphones size={32} />,
  },
  {
    id: 3,
    name: 'CoreTech',
    description: 'High-performance processors designed for maximum gaming efficiency',
    category: 'Hardware',
    icon: <Cpu size={32} />,
  },
  {
    id: 4,
    name: 'PrecisionGear',
    description: 'Gaming peripherals engineered for competitive play',
    category: 'Accessories',
    icon: <Mouse size={32} />,
  },
  {
    id: 5,
    name: 'EliteWear',
    description: 'Premium gaming apparel designed for comfort during long sessions',
    category: 'Apparel',
    icon: <Shirt size={32} />,
  },
  {
    id: 6,
    name: 'FuelUp',
    description: 'Energy drinks formulated to enhance focus and reaction time',
    category: 'Nutrition',
    icon: <Coffee size={32} />,
  },
];

const SponsorsSection = () => {
  return (
    <section id="sponsors" className="py-24 px-6 md:px-12 bg-esports-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 stagger-animation">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Our Partners</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Teaming up with industry leaders to elevate our performance and reach
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sponsors.map((sponsor, index) => (
            <div 
              key={sponsor.id} 
              className={cn(
                "glass-card p-6 transition-all duration-300 hover-scale",
                "opacity-0 animate-fade-in"
              )}
              style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-esports-purple/20 flex items-center justify-center text-esports-purple-light mr-4">
                  {sponsor.icon}
                </div>
                <div>
                  <span className="text-xs text-esports-purple-light">{sponsor.category}</span>
                  <h3 className="text-white text-lg font-medium">{sponsor.name}</h3>
                </div>
              </div>
              
              <p className="text-white/70 text-sm">{sponsor.description}</p>
            </div>
          ))}
        </div>

        {/* Sponsor Call to Action */}
        <div className="mt-16 text-center">
          <div className="glass-card max-w-3xl mx-auto p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-4">Become Our Partner</h3>
            <p className="text-white/70 mb-6 max-w-xl mx-auto">
              Join our roster of premium partners and connect your brand with our passionate gaming community
            </p>
            <a 
              href="#contact" 
              className="inline-block px-8 py-3 bg-esports-purple text-white rounded-md hover:bg-esports-purple-light transition-colors"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
