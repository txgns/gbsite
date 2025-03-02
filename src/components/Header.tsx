
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, CircleDashed } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 w-full py-4 px-6 md:px-12 z-50 transition-all duration-300",
      isScrolled ? "bg-robotics-black/90 backdrop-blur-md shadow-md" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-robotics-purple mr-2">
            <path d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8M7 8C4.23858 8 2 10.2386 2 13C2 15.7614 4.23858 18 7 18M7 8C8.86384 8 10.4299 9.27477 10.874 11M17 8C19.7614 8 22 10.2386 22 13C22 15.7614 19.7614 18 17 18M17 8C15.1362 8 13.5701 9.27477 13.126 11M10.874 11C10.9573 11.3196 11 11.6539 11 12C11 14.7614 8.76142 17 6 17M10.874 11C11.1 10.4612 11.5 10 12 10C12.5 10 12.9 10.4612 13.126 11M13.126 11C13.0427 11.3196 13 11.6539 13 12C13 14.7614 15.2386 17 18 17" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h1 className="text-2xl font-bold text-gradient">GAMBIARRA ROBOTICS</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { name: 'Início', link: 'home' },
            { name: 'Equipe', link: 'team' },
            { name: 'Projetos', link: 'projects' },
            { name: 'Patrocinadores', link: 'sponsors' }
          ].map((item) => (
            <a 
              key={item.name} 
              href={`#${item.link}`} 
              className="nav-link text-white/90 hover:text-white text-sm font-medium tracking-wide transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-6 py-2 bg-robotics-purple text-white rounded-md hover:bg-robotics-purple-light transition-colors"
          >
            Contato
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden fixed inset-0 bg-robotics-black z-40 transition-transform duration-300 transform",
        mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
      )}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {[
            { name: 'Início', link: 'home' },
            { name: 'Equipe', link: 'team' },
            { name: 'Projetos', link: 'projects' },
            { name: 'Patrocinadores', link: 'sponsors' }
          ].map((item) => (
            <a 
              key={item.name} 
              href={`#${item.link}`} 
              className="text-white text-2xl font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-8 py-3 bg-robotics-purple text-white rounded-md text-xl mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contato
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
