
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Update cart count from localStorage when header mounts
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      const cartItems = JSON.parse(storedCart);
      setCartCount(cartItems.length);
    }

    // Listen for cart updates
    const handleCartUpdate = () => {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        const cartItems = JSON.parse(storedCart);
        setCartCount(cartItems.length);
      } else {
        setCartCount(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('cartUpdated', handleCartUpdate);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('cartUpdated', handleCartUpdate);
    };
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
          <Link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 32 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bot">
              <path d="M12 8V4H8"/>
              <rect width="16" height="12" x="4" y="8" rx="2"/>
              <path d="M2 14h2"/>
              <path d="M20 14h2"/>
              <path d="M15 13v2"/>
              <path d="M9 13v2"/>
            </svg>
          </Link>
          <h1 className="text-2xl font-bold text-gradient"> GAMBIARRA ROBOTICS</h1>
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
          <Link 
            to="/loja" 
            className="nav-link text-white/90 hover:text-white text-sm font-medium tracking-wide transition-colors"
          >
            Loja
          </Link>
          <a 
            href="#contact" 
            className="px-6 py-2 bg-robotics-purple text-white rounded-md hover:bg-robotics-purple-light transition-colors"
          >
            Contato
          </a>
          <Link to="/cart" className="relative">
            <ShoppingCart className="text-white hover:text-robotics-purple-light transition-colors" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-robotics-purple text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <Link to="/cart" className="relative">
            <ShoppingCart className="text-white hover:text-robotics-purple-light transition-colors" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-robotics-purple text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
          <button 
            className="text-white p-2" 
            onClick={toggleMobileMenu}
            aria-label="Alternar menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
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
            <Link 
              to="/loja" 
              className="text-white text-2xl font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Loja
            </Link>
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
