import React from 'react';
import { Globe, Cpu, Clock, TrendingUp, Shield } from 'lucide-react';
import { BenefitItem } from '../types';
import { motion } from 'framer-motion';

const benefits: BenefitItem[] = [
  {
    title: "Dual-Market Mastery (India & US)",
    description: "Navigating the complexities of US GAAP and IndAS simultaneously is a challenge—we make it seamless. We ensure your books are audit-ready and compliant for both jurisdictions.",
    icon: Globe
  },
  {
    title: "Tech-Forward & AI-Integrated",
    description: "We don't just 'do' accounting; we bring process improvements & automation into it. By leveraging AI and top-tier ERPs, we eliminate manual errors and provide real-time financial visibility.",
    icon: Cpu
  },
  {
    title: "The 24/7 Advantage",
    description: "Our team works to leverage time zone differences to your advantage. While your US team sleeps, our Indian operations are processing transactions, ensuring your dashboards are ready by morning.",
    icon: Clock
  },
  {
    title: "From Seed to Scale",
    description: "We aren't just service providers; we are your strategic partners. From setting up your first Chart of Accounts to preparing investor-ready board decks, we provide C-suite guidance.",
    icon: TrendingUp
  },
  {
    title: "Uncompromising Data Security",
    description: "We treat your financial data like our own. With robust protocols and secured API integrations, we ensure that your sensitive information remains protected across all platforms and borders.",
    icon: Shield
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-accfinsys" className="py-24 bg-gradient-to-br from-navy via-[#0f2c73] to-purple text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-teal/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-purple/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center font-display mb-20"
        >
          Why Partner With Us?
        </motion.h2>

        <div className="space-y-12 md:space-y-24">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-1/2 flex justify-center"
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-teal/20 rounded-full blur-xl group-hover:bg-teal/30 transition-all duration-500"></div>
                  <div className="relative w-32 h-32 md:w-48 md:h-48 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-300">
                    <benefit.icon className="w-12 h-12 md:w-20 md:h-20 text-teal" />
                  </div>
                  <div className="absolute top-0 left-1/2 -ml-2 w-4 h-4 bg-electric rounded-full shadow-[0_0_10px_#00D4FF] animate-pulse"></div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-1/2 text-center md:text-left"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4 font-display text-white">{benefit.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {benefit.description}
                </p>
                <div className={`h-1 w-20 bg-teal mt-6 rounded-full ${index % 2 === 1 ? 'md:ml-auto md:mr-0' : ''} mx-auto md:mx-0`}></div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;