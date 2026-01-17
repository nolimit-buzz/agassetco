
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Coins, Settings, BarChart3, Plus, Minus } from 'lucide-react';
import SectionHeader from './SectionHeader';

const services = [
  {
    id: 0,
    icon: Coins,
    title: "Lease-to-Own",
    desc: "Removing CapEx barriers for farmers. We provide high-yield machinery with zero upfront cost, amortized over harvest cycles."
  },
  {
    id: 1,
    icon: Zap,
    title: "Smart Deployment",
    desc: "High-yield assets for grid stability. Anchoring demand for mini-grids to ensure financial sustainability."
  },
  {
    id: 2,
    icon: BarChart3,
    title: "Tech-Enabled",
    desc: "IoT tracking for bankable data. Real-time monitoring ensures asset performance and credit risk mitigation."
  },
  {
    id: 3,
    icon: Settings,
    title: "Asset Management",
    desc: "Full lifecycle O&M support. Our teams ensure maximum uptime and operational efficiency in rural contexts."
  }
];

const Introduction: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <section id="introduction" className="bg-white py-24 md:py-32 relative snap-start">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. Standardized Header (Maintained as requested) */}
        <SectionHeader 
          number="01" 
          category="Introduction" 
          title={<>Pioneering Productive Use <br /> of Energy in Agriculture.</>} 
        />

        {/* 2. Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Cinematic Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[400px] lg:h-[650px] rounded-[2rem] overflow-hidden shadow-2xl order-1"
          >
            <img 
              src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2944&auto=format&fit=crop" 
              alt="Solar Field" 
              className="w-full h-full object-cover"
            />
            {/* Minimal Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-ag-green-950/40 to-transparent opacity-60" />
            
            {/* Minimal Overlay Badge */}
             <div className="absolute top-8 left-8">
               <span className="text-[10px] font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white border border-white/20">Solar Assets</span>
            </div>
          </motion.div>

          {/* Right: Content & Accordion */}
          <div className="order-2 flex flex-col justify-center">
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-[2.5rem] font-bold text-ag-green-950 tracking-tight leading-[1.1] mb-6"
            >
              Innovating productive energy for a <span className="text-ag-lime">sustainable future.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-500 font-light leading-relaxed mb-10 max-w-lg"
            >
              We are a modern renewable-energy asset company dedicated to transforming natural sunshine into clean, affordable, and reliable economic power. Our team works with advanced agri-tech to help farmers switch to sustainable energy with confidence.
            </motion.p>

            {/* Accordion List (Replacing Buttons) */}
            <div className="border-t border-gray-100">
              {services.map((service, index) => (
                <div key={index} className="border-b border-gray-100">
                  <button 
                    onClick={() => toggleAccordion(index)}
                    className="w-full py-5 flex items-center justify-between text-left group focus:outline-none"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`
                        w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                        ${activeAccordion === index ? 'bg-ag-lime text-white' : 'bg-gray-50 text-ag-green-950 group-hover:bg-ag-green-950 group-hover:text-white'}
                      `}>
                        <service.icon className="w-5 h-5 stroke-[1.5]" />
                      </div>
                      <span className={`text-lg font-bold transition-colors duration-300 ${activeAccordion === index ? 'text-ag-green-950' : 'text-gray-400 group-hover:text-ag-green-950'}`}>
                        {service.title}
                      </span>
                    </div>
                    <div className={`transition-transform duration-300 ${activeAccordion === index ? 'rotate-180' : ''} text-gray-300 group-hover:text-ag-lime`}>
                       {activeAccordion === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {activeAccordion === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pl-[3.5rem] text-gray-500 font-light leading-relaxed text-sm pr-4 max-w-md">
                          {service.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Introduction;
