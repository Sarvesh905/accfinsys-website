import React from 'react';
import { motion } from 'framer-motion';

const CTASection: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
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
    <section className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-teal/20 rounded-full mix-blend-screen blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple/20 rounded-full mix-blend-screen blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white mb-6 font-display"
        >
          Ready to Transform Your Finance Function?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-2xl text-white/90 mb-10 leading-relaxed"
        >
          The Bottom Line: We bridge the gap between Finance Execution and Boardroom Strategy, allowing you to Focus on what you do best—Growing your Business.
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.4 }}
        >
          <a 
            href="#contact"
            onClick={scrollToContact}
            className="bg-teal hover:bg-teal/90 text-navy font-bold text-xl px-10 py-5 rounded-full shadow-[0_0_20px_rgba(59,206,172,0.3)] hover:shadow-[0_0_30px_rgba(59,206,172,0.5)] hover:scale-105 transition-all duration-300 inline-block cursor-pointer"
          >
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;