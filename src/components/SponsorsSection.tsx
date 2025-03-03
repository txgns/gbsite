
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
    <section id="sponsors" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-robotics-black">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 stagger-animation">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">
            <span className="text-gradient">Nossos Parceiros</span>
          </h2>
          <p className="text-white/70 max-w-xs sm:max-w-md md:max-w-2xl mx-auto text-sm sm:text-base">
            Aqui estão nossos parceiros, são eles que nos ajudam a manter esse equipe de pé!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {sponsors.map((sponsor, index) => (
            <div 
              key={sponsor.id} 
              className={cn(
                "glass-card p-4 sm:p-6 transition-all duration-300 hover-scale",
                "opacity-0 animate-fade-in"
              )}
              style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-robotics-purple/20 flex items-center justify-center text-robotics-purple-light mr-3 sm:mr-4">
                  {sponsor.icon}
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs text-robotics-purple-light">{sponsor.category}</span>
                  <h3 className="text-white text-base sm:text-lg font-medium">{sponsor.name}</h3>
                </div>
              </div>
              
              <p className="text-white/70 text-xs sm:text-sm">{sponsor.description}</p>
            </div>
          ))}
        </div>

        {/* Sponsor Call to Action */}
        <div className="mt-8 sm:mt-12 md:mt-16 text-center">
          <div className="glass-card max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto p-5 sm:p-8 rounded-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">Become Our Partner</h3>
            <p className="text-white/70 mb-4 sm:mb-6 max-w-sm sm:max-w-md md:max-w-xl mx-auto text-xs sm:text-sm md:text-base">
              Join our roster of premium partners and connect your brand with our passionate gaming community
            </p>
            <a 
              href="#contact" 
              className="inline-block px-5 sm:px-8 py-2 sm:py-3 bg-robotics-purple text-white text-sm sm:text-base rounded-md hover:bg-robotics-purple-light transition-colors"
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
