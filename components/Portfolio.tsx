
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';
import SectionHeader from './SectionHeader';

// Data Configuration
const projects = [
  {
    id: '01',
    title: "Jigawa Agro-Processing Hub",
    location: "Nigeria",
    year: "2024",
    tags: ["Solar Milling", "PUE"],
    description: "A flagship deployment integrating 200kW solar capacity with industrial-grade rice hulling machinery. This project stabilizes the mini-grid by acting as a reliable anchor tenant while boosting local processing capacity by over 300%.",
    images: [
      "https://images.unsplash.com/photo-1600863073007-4228c2c842b0?q=80&w=2070&auto=format&fit=crop", // Rice/Grain
      "https://images.unsplash.com/photo-1625246333195-58197bd47f3b?q=80&w=2940&auto=format&fit=crop", // Farming
      "https://images.unsplash.com/photo-1595838788863-29a377d0a7d5?q=80&w=2874&auto=format&fit=crop"  // Processing
    ]
  },
  {
    id: '02',
    title: "Kaduna Cold Chain Facility",
    location: "Kaduna",
    year: "2023",
    tags: ["Storage", "Logistics"],
    description: "Solar-powered cold storage preservation units extending the shelf life of perishable tomatoes and peppers from 2 days to 21 days. This facility services over 500 local farmers, drastically reducing post-harvest losses.",
    images: [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2874&auto=format&fit=crop", // Produce
      "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2942&auto=format&fit=crop", // Farming 2
      "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e10?q=80&w=2071&auto=format&fit=crop"  // Warehouse
    ]
  },
  {
    id: '03',
    title: "Ogun Mini-Grid Integration",
    location: "Ogun",
    year: "2025",
    tags: ["Grid Stability", "Utility"],
    description: "Replacing diesel pumps with solar-powered irrigation systems, allowing farmers to cultivate three crop cycles per year instead of one. This integration provides predictable daytime loads for the local utility provider.",
    images: [
      "https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=2787&auto=format&fit=crop", // Field
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2940&auto=format&fit=crop", // Nature
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2940&auto=format&fit=crop"  // Panels
    ]
  }
];

const Portfolio: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>('01');

  return (
    <section id="portfolio" className="bg-white py-24 relative snap-start z-20">
      
      <div className="max-w-7xl mx-auto px-6">
        {/* 1. Standardized Header */}
        <SectionHeader 
            number="05" 
            category="Our Projects" 
            title={<>Deploying capital where <br /> it matters most.</>} 
        />

        {/* 2. The List */}
        <div className="flex flex-col border-t border-gray-200">
          {projects.map((project) => (
            <ProjectRow 
              key={project.id} 
              project={project} 
              isOpen={activeId === project.id}
              onClick={() => setActiveId(activeId === project.id ? null : project.id)}
            />
          ))}
        </div>
      </div>

      {/* Separator to next section */}
      <div className="absolute bottom-0 left-0 w-full flex items-center justify-center z-40">
        <div className="h-px w-full max-w-[95%] bg-gradient-to-r from-transparent via-ag-green-950/10 to-transparent" />
      </div>

    </section>
  );
};

interface ProjectRowProps {
  project: typeof projects[0];
  isOpen: boolean;
  onClick: () => void;
}

const ProjectRow: React.FC<ProjectRowProps> = ({ project, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 group">
      
      {/* Trigger Row */}
      <button 
        onClick={onClick}
        className="w-full py-8 md:py-10 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left group-hover:bg-gray-50/50 transition-colors duration-300"
      >
        {/* Left: ID & Title */}
        <div className="flex items-baseline gap-6 md:gap-12">
          <span className="text-sm font-bold text-gray-300 font-mono hidden md:block">
            / {project.id}
          </span>
          <h3 className={`text-2xl md:text-4xl font-medium tracking-tight transition-colors duration-300 ${isOpen ? 'text-ag-lime' : 'text-ag-green-950 group-hover:text-ag-green-700'}`}>
            {project.title}
          </h3>
        </div>

        {/* Right: Meta & Tags */}
        <div className="flex flex-wrap md:flex-nowrap items-center gap-4 md:gap-8 pl-0 md:pl-4">
          <div className="flex items-center gap-6 text-sm text-gray-500 font-medium tracking-wide">
            <span>{project.location}</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span>{project.year}</span>
          </div>
          
          <div className="hidden md:block w-px h-6 bg-gray-200 mx-2"></div>
          
          <div className="flex gap-2">
            {project.tags.map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-ag-green-950 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="md:ml-4 text-gray-400 group-hover:text-ag-green-950 transition-colors">
             {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
          </div>
        </div>
      </button>

      {/* Expanded Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-12 pt-2">
              
              {/* Image Grid - Updated border radius to 0.7rem */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 h-[300px] md:h-[240px]">
                {project.images.map((img, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + (idx * 0.1), duration: 0.5 }}
                    className="relative w-full h-full rounded-[0.7rem] overflow-hidden group/image"
                  >
                     <img 
                       src={img} 
                       alt={`Project Detail ${idx + 1}`} 
                       className="w-full h-full object-cover transition-transform duration-700 group/image:scale-110" 
                     />
                     <div className="absolute inset-0 bg-ag-green-950/10 group/image:bg-transparent transition-colors duration-300" />
                  </motion.div>
                ))}
              </div>

              {/* Description & Link */}
              <div className="flex flex-col md:flex-row justify-between items-end gap-8 pl-0 md:pl-16">
                 <motion.p 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 0.3 }}
                   className="text-lg text-gray-500 font-light leading-relaxed max-w-3xl"
                 >
                   {project.description}
                 </motion.p>
                 
                 <motion.button 
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ delay: 0.4 }}
                   className="shrink-0 text-sm font-bold text-ag-green-950 uppercase tracking-widest flex items-center gap-2 hover:text-ag-lime transition-all group/btn"
                 >
                    Learn More 
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                 </motion.button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Portfolio;
