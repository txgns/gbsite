
import React from 'react';
import { Twitter, Instagram, Twitch, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-esports-black-light px-6 md:px-12 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand Column */}
          <div>
            <h2 className="text-2xl font-bold text-gradient mb-4">NEXUS</h2>
            <p className="text-white/70 mb-6 max-w-xs">
              Elevating esports through skill, strategy, and relentless dedication to excellence.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Twitter size={18} />, href: '#', label: 'Twitter' },
                { icon: <Instagram size={18} />, href: '#', label: 'Instagram' },
                { icon: <Twitch size={18} />, href: '#', label: 'Twitch' },
                { icon: <Youtube size={18} />, href: '#', label: 'YouTube' },
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href}
                  className="w-9 h-9 rounded-full bg-esports-black flex items-center justify-center text-white/70 hover:text-esports-purple-light hover:bg-esports-black-lighter transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Team', href: '#team' },
                { label: 'Projects', href: '#projects' },
                { label: 'Sponsors', href: '#sponsors' },
                { label: 'Join Us', href: '#contact' },
              ].map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-esports-purple-light transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-4">
              {[
                { icon: <Mail size={18} />, text: 'contact@nexusesports.com' },
                { icon: <MapPin size={18} />, text: 'Los Angeles, CA, USA' },
                { icon: <Phone size={18} />, text: '+1 (555) 123-4567' },
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-esports-purple-light mr-3 mt-0.5">
                    {item.icon}
                  </span>
                  <span className="text-white/70 text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © {currentYear} NEXUS Esports. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, i) => (
              <a 
                key={i}
                href="#"
                className="text-white/50 hover:text-white text-sm transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
