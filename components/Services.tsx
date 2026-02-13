import React from 'react';
import { Calculator, Settings, TrendingUp, BarChart3, Briefcase, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '../types';
import { motion } from 'framer-motion';

const services: ServiceItem[] = [
  {
    title: "Modern Accounting & Bookkeeping",
    subtitle: "Go beyond the ledger. Get real-time financial clarity.",
    icon: Calculator,
    bullets: [
      "Full-Cycle Bookkeeping",
      "Transaction Excellence (Expense categorization & tracking)",
      "Managing Multi-Currency entities"
    ]
  },
  {
    title: "ERP & Process Automation",
    subtitle: "End the data debate—build once, believe in single source of truth",
    icon: Settings,
    bullets: [
      "ERP - Xero, QuickBooks, Zoho, etc.,",
      "AI-driven Workflows",
      "Seamless App Integrations"
    ]
  },
  {
    title: "Strategic FP&A",
    subtitle: "Predict the future by modelling it today.",
    icon: TrendingUp,
    bullets: [
      "Budgeting and tracking Burn rates",
      "Rolling Forecasts",
      "Strategic Analytics - ROI & new market expansion"
    ]
  },
  {
    title: "MIS Reporting & Dashboards",
    subtitle: "Data is useless without direction. We provide the compass.",
    icon: BarChart3,
    bullets: [
      "Investor-Ready Board decks",
      "Profitability Deep-Dives",
      "KPI & Scorecard for the teams"
    ]
  },
  {
    title: "Fractional CFO Services",
    subtitle: "C-Suite expertise without the full-time overhead.",
    icon: Briefcase,
    bullets: [
      "Board-Level Guidance",
      "Finance team restructure and succession planning",
      "Startup to IPO Scalability"
    ]
  },
  {
    title: "Audit & Assurance Services",
    subtitle: "Ensuring compliance, strengthening controls, and mitigating risk.",
    icon: ShieldCheck,
    bullets: [
      "Statutory & Internal Audit Management",
      "Due Diligence & Special Purpose Audits",
      "Controls Redesign & Policy Documentation"
    ]
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-navy font-display mb-4 relative inline-block"
          >
            Comprehensive Finance Solutions
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-teal rounded-full"></div>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mt-4"
          >
            We combine traditional financial expertise with modern technology to deliver results that matter.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-teal hover:border-teal relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy to-teal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal/10 transition-colors">
                <service.icon className="w-7 h-7 text-navy group-hover:text-teal transition-colors" />
              </div>
              
              <h3 className="text-3xl font-bold text-navy mb-3 font-display">{service.title}</h3>
              <p className="text-gray-500 mb-6 text-lg leading-relaxed">{service.subtitle}</p>
              
              <ul className="space-y-3">
                {service.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start text-lg text-gray-700">
                    <span className="w-1.5 h-1.5 bg-teal rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    {bullet}
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

export default Services;