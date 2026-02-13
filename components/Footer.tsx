import React from 'react';
import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const LogoIcon = ({ color }: { color: string }) => (
  <svg width="56" height="56" viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
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

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Why AccFinSys?', href: '#why-accfinsys' },
    { name: 'Services', href: '#services' },
    { name: 'Industries', href: '#industries' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Check for Home link ('#')
    if (href === '#') {
       window.scrollTo({
         top: 0,
         behavior: 'smooth'
       });
       return;
    }

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
    } else {
        window.location.hash = href;
    }
  };

  return (
    <footer id="contact" className="bg-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          
          {/* Column 1: Company Info */}
          <div className="space-y-6 md:w-5/12">
            <div className="flex items-center gap-3">
                <LogoIcon color="white" />
               <div className="flex flex-col items-start justify-center">
                <span className="text-4xl font-serif font-bold leading-none tracking-tight text-white">
                    AccFinSys
                </span>
                <div className="relative mt-1">
                   {/* Curved Line */}
                   <svg width="100%" height="8" viewBox="0 0 120 10" preserveAspectRatio="none" className="absolute -top-1 left-0 w-full opacity-70">
                       <path d="M0 5 Q 60 0 120 5" fill="none" stroke="#3BCEAC" strokeWidth="1" />
                   </svg>
                   <span className="text-xs font-handwriting font-bold tracking-widest uppercase text-gray-300 whitespace-nowrap">
                   We are part of your journey
                   </span>
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-base mt-4">
              Your trusted partner for global accounting, strategic finance, and automated workflows.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-teal hover:text-navy transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:Sarvesh@AccFinSys.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-teal hover:text-navy transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:w-3/12 lg:w-2/12">
            <h3 className="text-xl font-bold mb-6 font-display">Quick Links</h3>
            <ul className="space-y-4 text-lg">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-gray-400 hover:text-teal transition-colors inline-block transform hover:translate-x-1 duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="md:w-4/12">
            <h3 className="text-xl font-bold mb-6 font-display">Contact</h3>
            <ul className="space-y-4 text-gray-400 text-lg">
              <li className="flex flex-col gap-1">
                 <span className="text-gray-400 font-bold text-lg whitespace-nowrap md:whitespace-normal xl:whitespace-nowrap">AccFinSys Consulting Services LLP</span>
                 <span className="text-white font-bold text-lg mt-1">Sarvesh KP</span>
                 <span className="text-sm uppercase tracking-wide text-teal">Founder & Advisor</span>
              </li>
              
              <li className="flex items-center gap-3 mt-4">
                <Mail className="w-6 h-6 text-teal shrink-0" />
                <a href="mailto:Sarvesh@AccFinSys.com" className="hover:text-white transition-colors">Sarvesh@AccFinSys.com</a>
              </li>
              
              <li className="flex items-center gap-3">
                 <Phone className="w-6 h-6 text-teal shrink-0" />
                 <a href="tel:+919108216069" className="hover:text-white transition-colors">+91 91082 16069</a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-teal shrink-0 mt-1" />
                <a 
                    href="https://www.google.com/maps/search/?api=1&query=No.+18,+4+Main,+Ramamohanpuram,+Malleshwaram,+Bengaluru+-+560021" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors leading-relaxed"
                >
                  No. 18, 4 Main, Ramamohanpuram,<br/>
                  Malleshwaram, Bengaluru - 560021
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-base text-gray-500">
          <p>&copy; {new Date().getFullYear()} AccFinSys Consulting Services LLP. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;