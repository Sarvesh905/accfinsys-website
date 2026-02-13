import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const LogoIcon = ({ color }: { color: string }) => (
  <svg width="50" height="50" viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
     {/* Pencil */}
     <path d="M12 25 V75 L18 85 L24 75 V25 Z" />
     {/* Back Paper */}
     <path d="M35 15 H85 V85 H75" opacity="0.6" />
     {/* Front Paper */}
     <rect x="28" y="20" width="55" height="70" rx="2" fill="none" />
     {/* Pie Chart */}
     <circle cx="55" cy="45" r="12" />
     <path d="M55 45 L55 33" />
     <path d="M55 45 L65 50" />
     {/* Lines */}
     <path d="M40 65 H55" />
     {/* Calculator */}
     <rect x="62" y="60" width="28" height="35" rx="4" fill="none" />
     <path d="M68 68 H84" />
     <circle cx="70" cy="78" r="2" fill={color} stroke="none" />
     <circle cx="76" cy="78" r="2" fill={color} stroke="none" />
     <circle cx="82" cy="78" r="2" fill={color} stroke="none" />
     <circle cx="70" cy="86" r="2" fill={color} stroke="none" />
     <circle cx="76" cy="86" r="2" fill={color} stroke="none" />
     <circle cx="82" cy="86" r="2" fill={color} stroke="none" />
  </svg>
);

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Why AccFinSys?', href: '#why-accfinsys' },
  { name: 'Industries', href: '#industries' },
  { name: 'About', href: '#about' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setIsMobileMenuOpen(false);
    } else {
        window.location.hash = href;
        setIsMobileMenuOpen(false);
    }
  };

  const navLinkColor = isScrolled ? 'text-navy hover:text-teal-600' : 'text-white/90 hover:text-teal-300';
  const ctaButtonClass = 'bg-teal hover:bg-teal/90 text-navy shadow-[0_0_10px_rgba(59,206,172,0.3)] hover:shadow-[0_0_20px_rgba(59,206,172,0.5)]';
  const mobileMenuButtonColor = isScrolled ? 'text-navy' : 'text-white';

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-4 bg-gray-100 px-5 py-3 rounded-xl shadow-sm border border-gray-200/50">
          <LogoIcon color="#0A2463" />
          <div className="flex flex-col items-start justify-center">
            <span className="text-3xl font-serif font-bold leading-none tracking-tight text-navy">
              AccFinSys
            </span>
            <div className="relative mt-1">
                <svg width="100%" height="8" viewBox="0 0 120 10" preserveAspectRatio="none" className="absolute -top-1 left-0 w-full opacity-70">
                   <path d="M0 5 Q 60 0 120 5" fill="none" stroke="#0A2463" strokeWidth="2" />
                </svg>
                <span className="text-xs font-handwriting font-bold tracking-widest uppercase text-emerald-600 whitespace-nowrap">
                We are part of your journey
                </span>
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-lg font-medium transition-colors cursor-pointer hover:font-bold ${navLinkColor}`}
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className={`${ctaButtonClass} px-7 py-3 text-lg rounded-full font-semibold transition-all duration-300 inline-block cursor-pointer hover:scale-105`}
          >
            Contact
          </a>
        </nav>

        <button
          className="md:hidden p-2 rounded-md"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={mobileMenuButtonColor} />
          ) : (
            <Menu className={mobileMenuButtonColor} />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-navy font-medium py-2 border-b border-gray-100 cursor-pointer text-lg"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="bg-teal text-navy px-6 py-3 rounded-lg font-semibold w-full text-center block cursor-pointer text-lg"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;