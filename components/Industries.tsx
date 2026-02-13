import React from 'react';
import { Rocket, ShoppingCart, Factory, Laptop } from 'lucide-react';
import { IndustryItem } from '../types';
import { motion } from 'framer-motion';

const industries: IndustryItem[] = [
  {
    name: "Startups & MSMEs",
    icon: Rocket,
    services: ["Founder-friendly setups", "Burn-rate management", "Investor readiness"]
  },
  {
    name: "E-Commerce & FMCG",
    icon: ShoppingCart,
    services: ["Product wise COGS Tracking", "Multi-channel reconciliation", "Inventory Management"]
  },
  {
    name: "Manufacturing",
    icon: Factory,
    services: ["BOM Costing", "OH Allocation", "Inventory Valuation"]
  },
  {
    name: "IT Industry - Products, Services, BPO, GCC",
    icon: Laptop,
    services: ["Project Profitability", "Utilization & Cost Tracking", "Revenue Management"]
  }
];

const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-navy font-display mb-2"
          >
            Industry-Specific Expertise
          </motion.h2>
          <div className="w-20 h-1 bg-teal mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {industries.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-teal hover:border-teal relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy to-teal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal/10 transition-colors">
                <item.icon className="w-7 h-7 text-navy group-hover:text-teal transition-colors" />
              </div>
              
              <h3 className="text-3xl font-bold text-navy mb-3 font-display">{item.name}</h3>
              
              <ul className="space-y-3">
                {item.services.map((service, idx) => (
                  <li key={idx} className="flex items-start text-lg text-gray-700">
                    <span className="w-1.5 h-1.5 bg-teal rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;