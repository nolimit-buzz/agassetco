
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  ArrowRight,
  MapPin, 
  CheckCircle2, 
  Download, 
  Plus, 
  Minus,
  Building2, 
  Zap, 
  TrendingUp, 
  Activity, 
  ShieldCheck,
  ChevronRight,
  Home,
  Globe,
  LayoutGrid,
  Rows
} from 'lucide-react';
import SectionHeader from './SectionHeader';
import { NigeriaMap } from './MapSection';

interface PortfolioPageProps {
  onNavigate?: (page: any, id?: any) => void;
}

// --- DATA ---

const PROJECTS = [
  {
    id: "01",
    title: "Jigawa Agro-Processing Hub",
    category: "Agro-Processing",
    location: "Nigeria",
    year: "2024",
    problem: "Post-harvest loss exceeding 40% due to lack of local power, leading to reduced farmer income and food insecurity.",
    solution: "200kW Solar-powered industrial rice hullers and millers that process harvest at source, removing transportation waste.",
    impact: ["SME Revenue +30%", "Grid Revenue +40%", "Local Job Creation +12%"],
    status: "Active",
    type: "Lease-to-Own",
    images: [
      "https://images.unsplash.com/photo-1706770290344-b4a1ba7fc6b3?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1763800758293-40b0658f2141?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1686820740687-426a7b9b2043?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: "02",
    title: "Kaduna Cold Chain Facility",
    category: "Cold Chain",
    location: "Kaduna",
    year: "2023",
    problem: "Perishable produce spoiling within 48 hours of harvest due to high ambient temperatures and zero refrigeration.",
    solution: "Localized temperature-controlled modular storage units powered 100% by off-grid solar and battery storage.",
    impact: ["Spoilage Reduced to <5%", "21-Day Shelf Life Extension", "Market Price Stability +20%"],
    status: "Active",
    type: "PUE-as-a-Service",
    images: [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2874&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=2944&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2942&auto=format&fit=crop"
    ]
  },
  {
    id: "03",
    title: "Benue Irrigation Scheme",
    category: "Irrigation",
    location: "Benue",
    year: "2025",
    problem: "Rain-fed agriculture limiting farmers to one cycle per year, causing massive seasonal income fluctuations.",
    solution: "Solar-powered borehole systems with smart-metered pumps providing automated water distribution during dry seasons.",
    impact: ["2x Annual Harvest Cycles", "100% Diesel Displacement", "Household Income +65%"],
    status: "Active",
    type: "Lease-to-Own",
    images: [
      "https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=2787&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2940&auto=format&fit=crop"
    ]
  }
];

const CATEGORIES = ["All", "Agro-Processing", "Cold Chain", "Irrigation"];

const PortfolioPage: React.FC<PortfolioPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState("All");
  const [viewMode, setViewMode] = useState<'grid' | 'accordion'>('accordion');
  const [activeProjectId, setActiveProjectId] = useState<string | null>("01");

  const filteredProjects = activeTab === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeTab);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-ag-lime selection:text-white">
      
      {/* 01. INNER PAGE HERO */}
      <section className="pt-32 pb-24 bg-white overflow-hidden px-6">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* META HEADER: Repositioned breadcrumbs matching News page style */}
          <motion.div variants={fadeInUp} className="flex flex-row items-center justify-between mb-12 border-b border-gray-100 pb-8">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ag-green-950 bg-gray-50 px-4 py-2 rounded-full w-fit border border-gray-100">
              <Home className="w-2.5 h-2.5" />
              <span className="cursor-pointer hover:text-ag-lime transition-colors" onClick={() => onNavigate?.('home')}>Home</span>
              <ChevronRight className="w-2.5 h-2.5 opacity-50" />
              <span className="text-ag-green-950">Portfolio</span>
            </div>
            
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-ag-green-950">
              01 Track Record & Projects — 2025
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="relative w-full aspect-[21/9] md:aspect-[3/1] mb-16 group">
            <div className="absolute inset-0 rounded-[0.7rem] overflow-hidden bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2940&auto=format&fit=crop" 
                alt="Working Lands" 
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ag-green-950/10 group-hover:bg-transparent transition-colors duration-1000 mix-blend-multiply"></div>
            </div>
            
            <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 flex items-center justify-center z-10 pointer-events-none overflow-visible">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 0.8, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="rotate-90 whitespace-nowrap text-white text-5xl md:text-8xl font-bold tracking-tighter select-none origin-center"
              >
                PORTFOLIO
              </motion.div>
            </div>

            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full max-w-5xl px-6">
               <div className="bg-white shadow-2xl rounded-[0.7rem] p-6 md:p-8 flex flex-wrap justify-between items-center gap-6 border border-gray-100">
                  {[
                    { label: "Assets Deployed", val: "500+" },
                    { label: "Financed", val: "₦850M+" },
                    { label: "States Covered", val: "12" },
                    { label: "Tons Processed", val: "5k+" }
                  ].map((stat, i) => (
                    <div key={i} className="flex flex-col">
                       <span className="text-2xl md:text-3xl font-bold text-ag-green-950">{stat.val}</span>
                       <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</span>
                    </div>
                  ))}
               </div>
            </div>
          </motion.div>

          {/* SWAPPED LAYOUT: Title on the right, Description on the left to align with meta-breadcrumbs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-16 md:mt-24">
            <div className="lg:col-span-5 pt-2">
              <motion.p 
                variants={fadeInUp}
                className="text-sm md:text-lg text-gray-500 font-light leading-relaxed max-w-md mb-8"
              >
                Exploring our footprint of productive use deployments across Nigeria’s underserved rural markets. We turn energy into bankable economic growth through real, durable assets.
              </motion.p>
            </div>
            <div className="lg:col-span-7 lg:text-right">
              <motion.h1 
                variants={fadeInUp}
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-ag-green-950 leading-[0.95] tracking-tighter"
              >
                REAL ASSETS. <br/>
                <span className="text-ag-lime">REAL IMPACT.</span>
              </motion.h1>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 01. GEOGRAPHIC FOOTPRINT */}
      <section className="py-24 bg-gray-50 border-t border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <SectionHeader number="01" category="Reach" title="Geographic Footprint." />
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start min-h-[600px]">
            
            {/* COLUMN 1: State Selector (25%) */}
            <div className="lg:col-span-3 flex flex-col gap-2">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6 px-4">
                Select Location
              </h4>
              {[
                { id: 'imo', stateName: 'Imo State' },
                { id: 'niger', stateName: 'Niger State' },
                { id: 'ogun', stateName: 'Ogun State' },
                { id: 'kaduna', stateName: 'Kaduna State' },
                { id: 'kano', stateName: 'Kano State' }
              ].map((loc) => (
                <button
                  key={loc.id}
                  className="w-full text-left px-6 py-5 rounded-xl transition-all duration-300 font-medium text-sm flex items-center justify-between group bg-white border border-gray-100 text-gray-500 hover:bg-gray-100 hover:text-ag-green-950"
                >
                  <span>{loc.stateName}</span>
                  <ArrowRight className="w-4 h-4 transition-transform -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
                </button>
              ))}
            </div>

            {/* COLUMN 2: Map Visualization (50%) */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="relative w-full aspect-[5/4]">
                <NigeriaMap />
              </div>
            </div>

            {/* COLUMN 3: Project Detail Card (25%) */}
            <div className="lg:col-span-3 flex items-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-gray-100 p-8 rounded-[2.5rem] shadow-xl w-full"
              >
                <div className="mb-6">
                  <span className="bg-ag-lime/20 text-ag-green-950 text-xs font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full">
                    Renewable Energy
                  </span>
                </div>
                
                <div className="mb-1">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Imo State
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-ag-green-950 mb-4 leading-tight">
                  Solar Hybrid Mini Grid Solution
                </h3>
                
                <p className="text-sm text-gray-500 font-light leading-relaxed mb-10">
                  Providing constant power to a cluster of 15 SMEs, specializing in localized palm oil processing and packaging.
                </p>
                
                <div className="flex items-center justify-between pt-8 border-t border-gray-200">
                  <button className="w-12 h-12 rounded-full bg-ag-lime flex items-center justify-center text-ag-green-950 shadow-lg shadow-ag-lime/30 hover:scale-105 transition-transform">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  
                  <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-2xl shadow-sm border border-gray-100">
                    <div className="w-6 h-6 bg-ag-green-950 rounded flex items-center justify-center">
                      <Globe className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-xs font-bold text-ag-green-950 uppercase tracking-widest">
                      SDG 7
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 02. FEATURED PROJECTS */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <SectionHeader number="02" category="Case Studies" title="Proof of Concept." />
            
            <div className="flex items-center gap-2 bg-gray-50 p-1.5 rounded-full border border-gray-100 self-start md:self-auto md:mb-24">
              <button 
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${viewMode === 'grid' ? 'bg-ag-green-950 text-white shadow-lg' : 'text-gray-400 hover:text-ag-green-950'}`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                Option A
              </button>
              <button 
                onClick={() => setViewMode('accordion')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${viewMode === 'accordion' ? 'bg-ag-green-950 text-white shadow-lg' : 'text-gray-400 hover:text-ag-green-950'}`}
              >
                <Rows className="w-3.5 h-3.5" />
                Option B
              </button>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-16 border-b border-gray-100 pb-8">
             {CATEGORIES.map((cat) => (
               <button 
                 key={cat}
                 onClick={() => setActiveTab(cat)}
                 className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 border ${
                   activeTab === cat 
                     ? 'bg-ag-green-950 text-white border-ag-green-950 shadow-xl' 
                     : 'bg-white text-gray-400 border-gray-100 hover:border-ag-lime/50'
                 }`}
               >
                 {cat}
               </button>
             ))}
          </div>

          {viewMode === 'grid' && (
            <motion.div 
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode='popLayout'>
                {filteredProjects.map((project) => (
                  <motion.div 
                    layout
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="group bg-white rounded-[0.7rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                  >
                    <div className="aspect-[4/3] overflow-hidden relative">
                       <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                       <div className="absolute top-4 left-4 flex gap-2">
                          <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-ag-green-950">{project.type}</span>
                          <span className="bg-ag-lime px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-white shadow-sm">{project.status}</span>
                       </div>
                    </div>
                    <div className="p-8">
                       <span className="text-xs font-bold text-ag-lime uppercase tracking-widest block mb-2">{project.category}</span>
                       <h3 className="text-2xl font-bold text-ag-green-950 mb-6 leading-tight">{project.title}</h3>
                       
                       <div className="space-y-4 mb-8">
                          <div>
                             <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">The Problem</p>
                             <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{project.problem}</p>
                          </div>
                          <div>
                             <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">The Solution</p>
                             <p className="text-sm text-ag-green-950 font-medium leading-relaxed line-clamp-2">{project.solution}</p>
                          </div>
                       </div>

                       <div className="pt-6 border-t border-gray-100">
                          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Key Impact Metrics</p>
                          <ul className="space-y-2">
                             {project.impact.slice(0, 2).map((imp, idx) => (
                               <li key={idx} className="flex items-center gap-3 text-sm font-bold text-ag-green-950">
                                  <CheckCircle2 className="w-4 h-4 text-ag-lime" />
                                  {imp}
                               </li>
                             ))}
                          </ul>
                       </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          {viewMode === 'accordion' && (
            <div className="flex flex-col border-t border-gray-200">
              <AnimatePresence mode='popLayout'>
                {filteredProjects.map((project) => (
                  <ProjectAccordionRow 
                    key={project.id} 
                    project={project} 
                    isOpen={activeProjectId === project.id}
                    onClick={() => setActiveProjectId(activeProjectId === project.id ? null : project.id)}
                  />
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      {/* 03. VALIDATION / TESTIMONIALS */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-7xl mx-auto px-6"
        >
          <SectionHeader number="03" category="Validation" title="Validated by Industry Leaders." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <motion.div variants={fadeInUp} className="bg-white p-12 md:p-16 rounded-[3rem] shadow-xl border border-gray-100 relative group">
                <div className="absolute top-12 right-12 opacity-5 group-hover:opacity-10 transition-opacity">
                   <Zap className="w-24 h-24 text-ag-green-950" />
                </div>
                <p className="text-2xl md:text-3xl font-light text-ag-green-950 italic leading-relaxed mb-12 relative z-10">
                   "Partnering with AgAsset Co transformed our mini-grid economics. By clustering anchor loads, we saw 100% utilization targets met 18 months ahead of schedule."
                </p>
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-ag-green-100 flex items-center justify-center">
                      <Building2 className="text-ag-green-950 w-6 h-6" />
                   </div>
                   <div>
                      <h4 className="font-bold text-ag-green-950">Director of Infrastructure</h4>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Regional Energy Utility</p>
                   </div>
                </div>
             </motion.div>

             <motion.div variants={fadeInUp} className="bg-ag-green-950 p-12 md:p-16 rounded-[3rem] shadow-2xl relative group overflow-hidden">
                <div className="absolute -bottom-4 -right-4 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                   <ShieldCheck className="w-48 h-48 text-white" />
                </div>
                <p className="text-2xl md:text-3xl font-light text-white italic leading-relaxed mb-12 relative z-10">
                   "The Hub-and-Spoke model ensures assets are maintained. We don't see them as just finance providers, but as critical operational partners for our rural clusters."
                </p>
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <TrendingUp className="text-ag-lime w-6 h-6" />
                   </div>
                   <div>
                      <h4 className="font-bold text-white">Chief Investment Officer</h4>
                      <p className="text-xs font-bold text-ag-lime uppercase tracking-widest">Agronomie Group</p>
                   </div>
                </div>
             </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 04. IMPACT METHODOLOGY - Updated with premium 3-style cards */}
      <section className="py-24 bg-white border-t border-gray-100">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-7xl mx-auto px-6"
        >
          <SectionHeader number="04" category="ESG Framework" title="We Don't Guess. We Track." />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[420px]">
             {/* Card 1: Financial Performance (Deep Green style) */}
             <motion.div 
               variants={fadeInUp}
               className="bg-ag-green-950 rounded-[0.7rem] p-8 flex flex-col justify-between relative group hover:shadow-2xl hover:shadow-ag-green-900/20 transition-all duration-300 transform hover:-translate-y-1"
             >
                <div className="flex justify-between items-start">
                  <span className="text-white/70 text-xs font-bold uppercase tracking-widest">Financial Performance</span>
                  <motion.div 
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-colors"
                  >
                    <TrendingUp className="text-white w-5 h-5 stroke-[1.5]" />
                  </motion.div>
                </div>
                <div>
                  <div className="text-4xl font-medium text-white mb-4 leading-tight">
                    98% <span className="text-ag-lime">Repayment</span>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed font-light">
                    Rigorous digital vetting and collection via mobile payment rails ensure bankable stability.
                  </p>
                </div>
             </motion.div>

             {/* Card 2: Operational Health (Image Background style) */}
             <motion.div 
               variants={fadeInUp}
               className="relative rounded-[0.7rem] overflow-hidden p-8 flex flex-col justify-between group h-full min-h-[350px] transform hover:-translate-y-1 transition-transform duration-300"
             >
                <div className="absolute inset-0">
                  <img 
                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" 
                    alt="Operational Uptime" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale mix-blend-multiply opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ag-green-900/90 via-ag-green-900/40 to-ag-green-900/20"></div>
                </div>
                <div className="relative z-10 flex justify-end">
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-md hover:bg-white/20 transition-colors"
                  >
                    <Activity className="text-white w-5 h-5 stroke-[1.5]" />
                  </motion.div>
                </div>
                <div className="relative z-10">
                   <div className="text-white/70 text-xs font-bold uppercase tracking-widest mb-2">Operational Health</div>
                  <h3 className="text-3xl text-white font-medium mb-3">99.2% Uptime</h3>
                  <p className="text-white/80 leading-relaxed font-light text-sm max-w-[95%]">
                    Real-time telemetry prevents breakdowns before they occur, protecting productive hours.
                  </p>
                </div>
             </motion.div>

             {/* Card 3: Environmental Return (Light Gray style) */}
             <motion.div 
               variants={fadeInUp}
               className="bg-[#F3F4F6] rounded-[0.7rem] p-8 flex flex-col justify-between group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
             >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-ag-green-950/60 text-xs font-bold uppercase tracking-widest">Environmental Return</span>
                  <motion.div 
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 rounded-full border border-ag-green-950/10 flex items-center justify-center bg-white shadow-sm"
                  >
                    <CheckCircle2 className="text-ag-green-950 w-5 h-5 stroke-[1.5]" />
                  </motion.div>
                </div>
                <div className="flex flex-col h-full justify-end">
                  <div className="mb-6">
                     <h3 className="text-3xl text-ag-green-950 font-medium mb-3 leading-tight">1.2k Tons CO2</h3>
                     <p className="text-sm text-gray-500 font-light leading-relaxed">
                       Systemic displacement of diesel-powered machinery with clean solar energy across the footprint.
                     </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                     {["#ESG", "#CARBON", "#SOLAR"].map((tag) => (
                       <span key={tag} className="px-4 py-2 text-xs font-bold rounded-full bg-white text-ag-green-950 border border-gray-200 group-hover:border-ag-green-950 transition-colors">
                         {tag}
                       </span>
                     ))}
                  </div>
                </div>
             </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="relative bg-ag-green-950 py-32 overflow-hidden border-t border-white/5">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-7xl mx-auto px-6 relative z-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end">
            <div>
               <motion.h2 variants={fadeInUp} className="text-6xl md:text-8xl leading-[1.05] font-bold text-white tracking-tighter mb-10">
                 Have a <br /> Project in <br /> <span className="text-ag-lime">Mind?</span>
               </motion.h2>
               <motion.p variants={fadeInUp} className="text-lg text-gray-400 font-light leading-relaxed max-w-md mb-8">
                 We are actively seeking new mini-grid sites and agricultural clusters to expand our productive use footprint. Partner with us to de-risk your energy assets.
               </motion.p>
            </div>

            <motion.div variants={fadeInUp} className="bg-white rounded-[3rem] p-10 md:p-14 shadow-2xl relative overflow-hidden">
                <div className="mb-10">
                   <h3 className="text-3xl md:text-4xl font-medium text-ag-green-950 leading-tight mb-2">
                     Site Selection & <br/><span className="text-ag-lime">Cluster Inquiries.</span>
                   </h3>
                </div>

                <div className="space-y-4">
                   <motion.button whileHover={{ scale: 1.01 }} className="group flex items-center justify-between w-full bg-[#051b11] text-white p-1 pr-1 rounded-full hover:bg-ag-lime transition-all duration-500 shadow-xl">
                      <div className="flex items-center gap-4 pl-8">
                         <MapPin className="w-5 h-5 text-ag-lime group-hover:text-white transition-colors" />
                         <span className="font-bold text-xs tracking-[0.2em] uppercase">Submit a Project Site</span>
                      </div>
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-ag-green-950 transition-transform group-hover:rotate-45">
                         <ChevronRight className="w-5 h-5" />
                      </div>
                   </motion.button>

                   <motion.button whileHover={{ scale: 1.01 }} className="group flex items-center justify-between w-full bg-gray-50 border border-gray-100 text-ag-green-950 p-1 pr-1 rounded-full hover:bg-ag-green-950 hover:text-white transition-all duration-500">
                      <div className="flex items-center gap-4 pl-8">
                         <Download className="w-5 h-5 text-ag-lime" />
                         <span className="font-bold text-xs tracking-[0.2em] uppercase">Download Impact Report</span>
                      </div>
                      <div className="w-14 h-14 bg-white border border-gray-100 rounded-full flex items-center justify-center text-ag-green-950 transition-transform group-hover:rotate-45">
                         <ChevronRight className="w-5 h-5" />
                      </div>
                   </motion.button>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-100 text-center">
                   <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                      Interested in co-investment? <a href="#" className="text-ag-lime hover:underline underline-offset-4 ml-1">Contact CIO</a>
                   </p>
                </div>
            </motion.div>
          </div>
        </motion.div>
        
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-ag-lime/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-ag-green-900/40 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2" />
      </section>

    </div>
  );
};

// --- SUB-COMPONENTS ---

interface ProjectAccordionRowProps {
  project: typeof PROJECTS[0];
  isOpen: boolean;
  onClick: () => void;
}

const ProjectAccordionRow: React.FC<ProjectAccordionRowProps> = ({ project, isOpen, onClick }) => {
  const [activeDetailTab, setActiveDetailTab] = useState<'problem' | 'solution' | 'impact'>('problem');

  return (
    <div className="border-b border-gray-200 group">
      <button 
        onClick={onClick}
        className="w-full py-8 md:py-10 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left hover:bg-gray-50 transition-colors duration-300 px-4 rounded-[0.7rem] my-2"
      >
        <div className="flex items-baseline gap-6 md:gap-12">
          <span className="text-xs font-bold text-gray-300 uppercase tracking-widest hidden md:block">
            / {project.id}
          </span>
          <h3 className={`text-2xl md:text-4xl font-medium tracking-tight transition-colors duration-300 ${isOpen ? 'text-ag-lime' : 'text-ag-green-950 group-hover:text-ag-green-700'}`}>
            {project.title}
          </h3>
        </div>

        <div className="flex flex-wrap md:flex-nowrap items-center gap-4 md:gap-8">
          <div className="flex items-center gap-6 text-sm text-gray-500 font-medium tracking-wide">
            <span>{project.location}</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span>{project.year}</span>
          </div>
          
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-ag-green-950 text-white text-xs font-bold uppercase tracking-widest rounded-full">
              {project.category}
            </span>
            <span className="px-3 py-1 border border-ag-green-950/10 text-ag-green-950 text-xs font-bold uppercase tracking-widest rounded-full">
              {project.type}
            </span>
          </div>
          
          <div className="transition-transform duration-500">
             {isOpen ? <Minus className="w-5 h-5 text-ag-lime" /> : <Plus className="w-5 h-5 text-gray-400 group-hover:text-ag-green-950" />}
          </div>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-16 pt-4 px-4">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                <div className="lg:col-span-7 flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4 h-[220px]">
                    <motion.div 
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="relative rounded-[0.7rem] overflow-hidden shadow-lg h-full"
                    >
                      <img src={project.images[0]} alt="Detail 1" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                    </motion.div>
                    <motion.div 
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="relative rounded-[0.7rem] overflow-hidden shadow-lg h-full"
                    >
                      <img src={project.images[1]} alt="Detail 2" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                    </motion.div>
                  </div>
                  <motion.div 
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="relative rounded-[0.7rem] overflow-hidden shadow-xl h-[260px]"
                  >
                    <img src={project.images[2]} alt="Detail 3 Landscape" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                  </motion.div>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div className="flex gap-8 items-start h-full">
                    <div className="flex flex-col gap-6 border-r border-gray-100 pr-6 shrink-0 pt-2">
                       {[
                         { id: 'problem', label: 'Problem' },
                         { id: 'solution', label: 'Solution' },
                         { id: 'impact', label: 'Impact' }
                       ].map((tab) => (
                         <button
                           key={tab.id}
                           onMouseEnter={() => setActiveDetailTab(tab.id as any)}
                           onClick={() => setActiveDetailTab(tab.id as any)}
                           className={`text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 relative text-left py-2 ${
                             activeDetailTab === tab.id ? 'text-ag-lime' : 'text-gray-400 hover:text-ag-green-950'
                           }`}
                         >
                           {tab.label}
                           {activeDetailTab === tab.id && (
                             <motion.div layoutId="activeTabIndicator" className="absolute -right-[25px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-ag-lime" />
                           )}
                         </button>
                       ))}
                    </div>

                    <div className="flex-1 pt-2">
                      <AnimatePresence mode="wait">
                        {activeDetailTab === 'problem' && (
                          <motion.div key="p" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.3 }}>
                             <span className="text-xs font-bold text-gray-300 uppercase tracking-widest block mb-4">Challenge Analysis</span>
                             <p className="text-lg text-gray-500 font-normal leading-relaxed">{project.problem}</p>
                          </motion.div>
                        )}
                        {activeDetailTab === 'solution' && (
                          <motion.div key="s" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.3 }}>
                             <span className="text-xs font-bold text-gray-300 uppercase tracking-widest block mb-4">Strategic Intervention</span>
                             <p className="text-lg text-gray-500 font-normal leading-relaxed">{project.solution}</p>
                          </motion.div>
                        )}
                        {activeDetailTab === 'impact' && (
                          <motion.div key="i" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.3 }}>
                             <span className="text-xs font-bold text-gray-300 uppercase tracking-widest block mb-4">Performance Metrics</span>
                             <ul className="space-y-4">
                                {project.impact.map((metric, i) => (
                                  <li key={i} className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-ag-lime" />
                                    <span className="text-lg text-gray-500 font-normal">{metric}</span>
                                  </li>
                                ))}
                             </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="flex items-center gap-8 mt-12 pt-8 border-t border-gray-100">
                    <div className="flex gap-4">
                       <Tooltip label="Global Reach">
                         <div className="w-10 h-10 rounded-[0.7rem] bg-gray-50 flex items-center justify-center border border-gray-100 text-ag-green-950 hover:bg-ag-lime hover:text-white transition-all">
                            <Globe className="w-4 h-4" />
                         </div>
                       </Tooltip>
                       <Tooltip label="Smart Integration">
                         <div className="w-10 h-10 rounded-[0.7rem] bg-gray-50 flex items-center justify-center border border-gray-100 text-ag-green-950 hover:bg-ag-lime hover:text-white transition-all">
                            <Zap className="w-4 h-4" />
                         </div>
                       </Tooltip>
                    </div>

                    <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ag-green-950 hover:text-ag-lime transition-all group/btn ml-auto">
                      Learn More <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Tooltip: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}
      <AnimatePresence>
        {show && (
          <motion.div 
            initial={{ opacity: 0, y: 5, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.9 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 bg-ag-green-950 text-white text-xs font-bold uppercase tracking-widest rounded-lg shadow-xl whitespace-nowrap z-50 pointer-events-none"
          >
            {label}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-ag-green-950" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioPage;
