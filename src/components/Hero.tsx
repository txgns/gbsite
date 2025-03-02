
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, Cpu, Cog, Wrench } from 'lucide-react';

const Hero = () => {
  // Set competition date (3 months from now)
  const competitionDate = new Date();
  competitionDate.setMonth(competitionDate.getMonth() + 3);
  
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const difference = competitionDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        // Competition has started
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeRemaining({ days, hours, minutes, seconds });
    };
    
    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 1000);
    
    return () => clearInterval(interval);
  }, [competitionDate]);

  const scrollToTeam = () => {
    const teamSection = document.getElementById('team');
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #121212 0%, #5C1D91 100%)',
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-robotics-purple/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-robotics-purple/10 rounded-full filter blur-3xl"></div>

        {/* Circuit pattern overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000')] bg-no-repeat bg-cover opacity-5"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
        <span className="text-sm md:text-base uppercase tracking-widest text-robotics-purple-light animate-fade-in">
          Innovation Through Engineering
        </span>
        <h1 className="mt-4 text-4xl md:text-7xl font-bold stagger-animation">
          <span className="block">GAMBIARRA</span>
          <span className="block text-gradient mt-2">ROBOTICS</span>
        </h1>
        <p className="mt-6 max-w-lg text-base md:text-lg text-white/80 animate-fade-in">
          Building the future through creative engineering solutions.
          Join us as we push the boundaries of robotics and technology.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-6 md:gap-10">
          {[
            { icon: <Cpu size={24} />, title: "Innovative Designs" },
            { icon: <Cog size={24} />, title: "Engineering Excellence" },
            { icon: <Wrench size={24} />, title: "Problem Solving" },
          ].map((item, index) => (
            <div 
              key={index}
              className="glass-card p-4 rounded-lg flex items-center space-x-3 text-white/90 hover-scale"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="text-robotics-purple-light">
                {item.icon}
              </div>
              <span className="text-sm md:text-base">{item.title}</span>
            </div>
          ))}
        </div>

        {/* Countdown Timer */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 md:gap-8">
          {[
            { label: 'Days', value: timeRemaining.days },
            { label: 'Hours', value: timeRemaining.hours },
            { label: 'Minutes', value: timeRemaining.minutes },
            { label: 'Seconds', value: timeRemaining.seconds }
          ].map((item) => (
            <div key={item.label} className="countdown-item">
              <div className={cn(
                "flex flex-col items-center justify-center w-20 h-20 md:w-28 md:h-28",
                "glass-card rounded-xl text-white purple-glow"
              )}>
                <span className="text-2xl md:text-4xl font-bold">{item.value}</span>
                <span className="text-xs md:text-sm text-white/70">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
        
        <p className="mt-6 text-white/60 text-sm animate-fade-in">
          Until the next robotics competition
        </p>

        <button 
          onClick={scrollToTeam}
          className="mt-12 animate-pulse-subtle"
          aria-label="Scroll to team section"
        >
          <ChevronDown size={32} className="text-white/70" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
