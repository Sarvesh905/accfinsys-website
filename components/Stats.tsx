import React from 'react';
import { motion } from 'framer-motion';

const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-white border-t-4 border-teal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
        >
             <h2 className="text-6xl md:text-8xl font-handwriting text-navy leading-tight">
                "We are part of your journey"
             </h2>
             <div className="mt-4 w-24 h-1 bg-gradient-to-r from-teal to-purple mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="absolute top-1/2 left-10 -translate-y-1/2 w-32 h-32 bg-teal/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-32 h-32 bg-purple/5 rounded-full blur-2xl"></div>
      </div>
    </section>
  );
};

export default Stats;