import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import type { Variants } from "framer-motion";
import { 
  ShieldCheck, Globe, Smartphone, Award, Cloud, BarChart, 
  FileCode, Sparkles, Terminal, ExternalLink 
} from 'lucide-react';

// ─── MAPA DE LOGOS ───
const techLogos: Record<string, string> = {
  "Next.js 15": "https://cdn.simpleicons.org/nextdotjs/white",
  "TypeScript": "https://cdn.simpleicons.org/typescript/3178C6",
  "Docker": "https://cdn.simpleicons.org/docker/2496ED",
  "Java": "https://cdn.simpleicons.org/openjdk/white",
  "Java Multihilo": "https://cdn.simpleicons.org/openjdk/white",
  "C++": "https://cdn.simpleicons.org/cplusplus/00599C",
  "SQL Avanzado": "https://cdn.simpleicons.org/postgresql/4169E1",
  "Ethical Hacking": "https://cdn.simpleicons.org/kalilinux/557C94",
  "Cloud Security": "https://cdn.simpleicons.org/cloudflare/F38020",
  "SIEM/SOAR": "https://cdn.simpleicons.org/splunk/000000/white",
  "BBDD Avanzado": "https://cdn.simpleicons.org/postgresql/4169E1",
};

// ─── DATOS ───
const educationData = [
  {
    period: "2026 - Actualidad",
    title: "Especialidad en Ciberseguridad",
    institution: "IES Zaidin Vergeles",
    link: "https://www.ieszaidinvergeles.org/",
    description: "Formación de élite en seguridad ofensiva (Red Team) y defensiva (Blue Team). Auditoría de sistemas y análisis forense.",
    tags: ["Ethical Hacking", "SIEM/SOAR", "Cloud Security"],
    icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
    color: "emerald",
    gradient: "from-emerald-500/20 to-teal-500/5"
  },
  {
    period: "2024 - 2026",
    title: "Desarrollo de Aplicaciones Web",
    institution: "IES Alonso Cano",
    link: "https://iesalonsocano.es/",
    description: "Arquitectura de software moderna. Construcción de sistemas escalables utilizando el ecosistema JavaScript/TypeScript.",
    tags: ["Next.js 15", "TypeScript", "Docker"],
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    color: "blue",
    gradient: "from-blue-500/20 to-indigo-500/5"
  },
  {
    period: "2022 - 2024",
    title: "Desarrollo Multiplataforma",
    institution: "CES Cristo Rey",
    link: "https://cescristorey.com/",
    description: "Inicié mi camino dominando la gestión de memoria con C++, para luego especializarme en arquitecturas robustas y programación concurrente con Java.",
    tags: ["C++", "Java Multihilo", "BBDD Avanzado"],
    icon: <Smartphone className="w-6 h-6 text-purple-400" />,
    color: "purple",
    gradient: "from-purple-500/20 to-pink-500/5"
  }
];

const certificationsData = [
  {
    year: "2024",
    title: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    icon: <Cloud className="w-5 h-5 text-yellow-400" />,
    color: "group-hover:shadow-yellow-500/20 group-hover:border-yellow-500/30"
  },
  {
    year: "2023",
    title: "Google Data Analytics",
    issuer: "Google Professional",
    icon: <BarChart className="w-5 h-5 text-blue-400" />,
    color: "group-hover:shadow-blue-500/20 group-hover:border-blue-500/30"
  },
  {
    year: "2022",
    title: "Meta Front-End Dev",
    issuer: "Meta (Coursera)",
    icon: <FileCode className="w-5 h-5 text-cyan-400" />,
    color: "group-hover:shadow-cyan-500/20 group-hover:border-cyan-500/30"
  }
];

// ─── CONFIGURACIÓN DE ANIMACIONES ───
const cardVariants: Variants = {
  offscreen: (isEven) => ({
    y: 50,
    opacity: 0,
    // En PC entra de lado, en móvil solo sube para no romper el ancho
    x: typeof window !== 'undefined' && window.innerWidth > 768 ? (isEven ? -50 : 50) : 0,
    filter: "blur(10px)",
    scale: 0.9,
  }),
  onscreen: {
    y: 0,
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const textRevealVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export function Educacion() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  // Suavizamos el progreso de la línea central
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="educacion" ref={containerRef} className="relative pt-24 pb-40 overflow-hidden bg-[#0b1220]">
      
      {/* ─── FONDO ANIMADO SUTIL ─── */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
         
         <motion.div style={{ y: yBg }} className="absolute inset-0 opacity-30">
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 left-[10%] w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" 
            />
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-40 right-[10%] w-[30rem] h-[30rem] bg-emerald-600/10 rounded-full blur-[120px]" 
            />
         </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        
        {/* ─── TÍTULO ─── */}
        <div className="text-center mb-28 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-700/50 backdrop-blur-md mb-6 shadow-xl hover:border-slate-500/50 transition-colors"
          >
            <Sparkles size={16} className="text-yellow-400" />
            <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Trayectoria Académica</span>
          </motion.div>
          
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textRevealVariants}
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight"
          >
            En continuo <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 animate-gradient-x bg-[length:200%_auto]">Aprendizaje</span>
          </motion.h2>
        </div>

        {/* ─── TIMELINE ─── */}
        <div className="relative max-w-5xl mx-auto mb-40">
          
          {/* LÍNEA CENTRAL */}
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-800/50 md:-translate-x-1/2 rounded-full overflow-hidden">
             <motion.div 
               style={{ scaleY }}
               className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 shadow-[0_0_20px_rgba(59,130,246,0.6)] origin-top"
             />
          </div>

          {educationData.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={index}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, margin: "-100px" }}
                custom={isEven}
                className={`relative flex flex-col md:flex-row gap-8 mb-24 ${isEven ? "md:flex-row-reverse" : ""}`}
              >
                
                {/* TARJETA */}
                <motion.div variants={cardVariants} className="md:w-1/2 ml-12 md:ml-0 perspective-1000">
                  <TiltCard gradient={item.gradient} color={item.color}>
                    <div className="relative p-6 md:p-8 h-full flex flex-col justify-between z-20">
                      {/* Header Card */}
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-xl bg-slate-950/50 border border-slate-800 shadow-inner group-hover:border-${item.color}-500/30 transition-colors duration-500`}>
                          {item.icon}
                        </div>
                        <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-400 group-hover:text-white transition-colors">
                          {item.period}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-200 transition-colors">{item.title}</h3>
                        
                        <div className="text-sm font-medium text-slate-400 mb-4 flex items-center gap-2">
                           <span className={`w-1.5 h-1.5 rounded-full bg-${item.color}-500 shadow-[0_0_10px_currentColor] animate-pulse`}/>
                           {item.link ? (
                             <a 
                               href={item.link} 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="hover:text-white transition-colors flex items-center gap-1 group/link relative"
                             >
                               <span className="relative z-10">{item.institution}</span>
                               <ExternalLink size={12} className="opacity-50 group-hover/link:opacity-100 transition-opacity" />
                               <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white group-hover/link:w-full transition-all duration-300" />
                             </a>
                           ) : (
                             <span>{item.institution}</span>
                           )}
                        </div>

                        <p className="text-slate-400 text-sm leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                          {item.description}
                        </p>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map(tag => (
                          <span 
                            key={tag} 
                            className="
                              flex items-center gap-1.5 px-3 py-1.5 rounded-lg 
                              bg-slate-900/60 border border-slate-700/50 
                              text-[11px] font-semibold text-slate-300 uppercase tracking-wide
                              hover:bg-slate-800 hover:border-slate-500 transition-all cursor-default
                              hover:scale-105
                            "
                          >
                            {techLogos[tag] ? (
                              <img src={techLogos[tag]} alt={tag} className="w-3.5 h-3.5 opacity-80" />
                            ) : (
                              <Terminal size={12} className="opacity-80" />
                            )}
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>

                {/* PUNTO CENTRAL (NODO) */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 flex items-center justify-center z-10">
                   <motion.div 
                     initial={{ scale: 0, opacity: 0 }}
                     whileInView={{ scale: 1, opacity: 1 }}
                     transition={{ delay: 0.2, type: "spring" }}
                     className="w-4 h-4 rounded-full bg-[#0b1220] border-2 border-slate-600 relative group-hover:border-white transition-colors"
                   >
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1.5, opacity: 0 }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                        className={`absolute inset-0 rounded-full bg-${item.color}-500`}
                      />
                      <div className={`absolute inset-0 rounded-full bg-${item.color}-500 shadow-[0_0_15px_currentColor]`} />
                   </motion.div>
                </div>

                <div className="md:w-1/2 hidden md:block" />
              </motion.div>
            );
          })}
        </div>

        {/* ─── CERTIFICACIONES ─── */}
        <div className="max-w-6xl mx-auto relative">
           <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl -z-10" />
           
           <motion.div 
             variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, margin: "-50px" }}
             className="bg-[#0e1625]/80 border border-slate-800/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl"
           >
              <div className="flex items-center gap-3 mb-8">
                 <div className="p-2 bg-yellow-500/10 rounded-lg">
                    <Award className="text-yellow-400 w-6 h-6" />
                 </div>
                 <h3 className="text-2xl font-bold text-white">Certificaciones & Credenciales</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {certificationsData.map((cert, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
                    }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className={`group relative p-5 rounded-xl bg-slate-900/50 border border-slate-800 transition-all duration-300 ${cert.color} cursor-default overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-4">
                        <div className="p-2 rounded-lg bg-[#0b1220] border border-slate-700 group-hover:border-slate-500 transition-colors">
                           {cert.icon}
                        </div>
                        <span className="text-xs font-mono text-slate-500 bg-slate-800/50 px-2 py-1 rounded">{cert.year}</span>
                      </div>
                      <h4 className="text-white font-bold text-lg mb-1 group-hover:text-blue-300 transition-colors">{cert.title}</h4>
                      <p className="text-xs text-slate-400 uppercase tracking-wide">{cert.issuer}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
           </motion.div>
        </div>

      </div>
    </section>
  );
}

// ─── COMPONENTE TILT CARD OPTIMIZADO ───
function TiltCard({ children, gradient, color }: { children: React.ReactNode, gradient: string, color: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Transformaciones suaves de Framer Motion
  const rotateX = useTransform(y, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-5, 5]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX, 
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative h-full group"
    >
      {/* Glow de fondo */}
      <div 
        className={`
          absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} 
          opacity-30 blur-2xl -z-10 group-hover:opacity-60 transition-opacity duration-500
          translate-y-4 group-hover:translate-y-2
        `} 
      />
      
      {/* Contenido principal */}
      <div 
        style={{ transform: "translateZ(20px)" }}
        className={`
          relative h-full rounded-2xl bg-[#0e1625] border border-slate-800 
          backdrop-blur-xl overflow-hidden shadow-xl
          group-hover:border-${color}-500/50 transition-colors duration-500
        `}
      >
        {/* Shine effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        {children}
      </div>
    </motion.div>
  );
}