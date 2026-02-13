import React from 'react';
import { ArrowRight, DollarSign, Users, Globe2, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Modern financial district skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#051025]/70 via-[#0A2463]/60 to-black/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-navy/20"></div>
      </div>

      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
            animate={{ y: [0, -20, 0], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500 blur-[100px] rounded-full mix-blend-screen opacity-20"
        />
         <motion.div
            animate={{ y: [0, 20, 0], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple blur-[120px] rounded-full mix-blend-screen opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-bold font-display leading-tight mb-6 tracking-tight">
            <span className="block text-2xl md:text-4xl lg:text-5xl text-white mb-3 drop-shadow-lg">
              Global Financial Excellence:
            </span>
            <span className="block text-xl md:text-3xl lg:text-4xl text-emerald-400 font-semibold leading-normal drop-shadow-md">
              Empowering Business growth from Inception to Success with <br /> Automation & AI
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-blue-50 max-w-5xl mx-auto mb-10 font-medium leading-relaxed drop-shadow-sm"
        >
          Your Global Partner for Seamless Accounting, Automation, and Strategic CFO Leadership.
          Bridging the gap between current to future growth aspirations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a 
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className="group bg-teal hover:bg-teal/90 text-navy font-bold text-xl px-9 py-5 rounded-full shadow-[0_0_20px_rgba(59,206,172,0.3)] hover:shadow-[0_0_30px_rgba(59,206,172,0.5)] transition-all duration-300 transform hover:scale-105 flex items-center gap-2 cursor-pointer"
          >
            Schedule Free Consultation
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#services"
            onClick={(e) => scrollToSection(e, 'services')}
            className="group bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xl px-9 py-5 rounded-full transition-all duration-300 shadow-lg inline-block cursor-pointer backdrop-blur-sm"
          >
            Explore Our Services
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 md:gap-8 text-base md:text-lg text-white font-medium"
        >
          <div className="flex items-center gap-2 px-5 py-3 bg-white/10 rounded-full backdrop-blur-md border border-white/10 shadow-sm hover:bg-white/20 transition-colors">
            <Globe2 className="w-5 h-5 text-emerald-400" />
            Global Support
          </div>
          <div className="flex items-center gap-2 px-5 py-3 bg-white/10 rounded-full backdrop-blur-md border border-white/10 shadow-sm hover:bg-white/20 transition-colors">
            <Zap className="w-5 h-5 text-emerald-400" />
            Flexibility
          </div>
          <div className="flex items-center gap-2 px-5 py-3 bg-white/10 rounded-full backdrop-blur-md border border-white/10 shadow-sm hover:bg-white/20 transition-colors">
            <DollarSign className="w-5 h-5 text-emerald-400" />
            Cost Effective
          </div>
          <div className="flex items-center gap-2 px-5 py-3 bg-white/10 rounded-full backdrop-blur-md border border-white/10 shadow-sm hover:bg-white/20 transition-colors">
            <Users className="w-5 h-5 text-emerald-400" />
            10+ Clients in &lt; 1 Year
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;