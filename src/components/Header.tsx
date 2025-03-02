
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

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
          {/* Polvo icon */}
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-robotics-purple mr-2">
            <path d="M12 5.5C12 5.22386 12.2239 5 12.5 5C12.7761 5 13 5.22386 13 5.5V6.5C13 6.77614 12.7761 7 12.5 7C12.2239 7 12 6.77614 12 6.5V5.5Z" fill="currentColor" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round"/>
            <path d="M15 8C15 8.55228 14.5523 9 14 9C13.4477 9 13 8.55228 13 8C13 7.44772 13.4477 7 14 7C14.5523 7 15 7.44772 15 8Z" fill="currentColor"/>
            <path d="M11 8C11 8.55228 10.5523 9 10 9C9.44772 9 9 8.55228 9 8C9 7.44772 9.44772 7 10 7C10.5523 7 11 7.44772 11 8Z" fill="currentColor"/>
            <path d="M5 19C5 19 3 16.5 3 14C3 12.5 4 11.5 5 11.5C6 11.5 6.5 12 6.5 12L7 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M19 19C19 19 21 16.5 21 14C21 12.5 20 11.5 19 11.5C18 11.5 17.5 12 17.5 12L17 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M7 19C7 19 6.5 14 5.5 12C4.5 10 6 8.5 7 8.5C8 8.5 8.5 10 8.5 10L7 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M17 19C17 19 17.5 14 18.5 12C19.5 10 18 8.5 17 8.5C16 8.5 15.5 10 15.5 10L17 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M12 19V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M12 14C12 14 10 13.3333 9 11C8 8.66667 9.6 7 12 7C14.4 7 16 8.66667 15 11C14 13.3333 12 14 12 14Z" stroke="currentColor" strokeWidth="1.5"/>
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
          aria-label="Alternar menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation - Corrigido */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-robotics-black/95 backdrop-blur-md z-40 flex flex-col items-center pt-12">
          <div className="flex flex-col items-center space-y-8">
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
      )}
    </header>
  );
};

export default Header;
