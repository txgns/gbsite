
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

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
        background: 'linear-gradient(135deg, #121212 0%, #2D1B69 100%)',
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-esports-purple/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-esports-purple/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
        <span className="text-sm md:text-base uppercase tracking-widest text-esports-purple-light animate-fade-in">
          Next Level Gaming
        </span>
        <h1 className="mt-4 text-4xl md:text-7xl font-bold stagger-animation">
          <span className="block">NEXUS</span>
          <span className="block text-gradient mt-2">ESPORTS</span>
        </h1>
        <p className="mt-6 max-w-lg text-base md:text-lg text-white/80 animate-fade-in">
          Dominating the competitive scene with strategy, skill, and teamwork.
          Join us on our journey to the top.
        </p>

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
          Until the next championship
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
