import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { 
  ShieldCheck, 
  Globe, 
  Smartphone, 
  Award, 
  Cloud, 
  BarChart, 
  FileCode,
  Sparkles,
  Terminal, // Fallback para cosas de código
} from 'lucide-react';

// ─── MAPA DE LOGOS (Para Education Tags) ───
const techLogos: Record<string, string> = {
  "Next.js 15": "https://cdn.simpleicons.org/nextdotjs/white",
  "TypeScript": "https://cdn.simpleicons.org/typescript/3178C6",
  "Docker": "https://cdn.simpleicons.org/docker/2496ED",
  "Java": "https://cdn.simpleicons.org/openjdk/white",
  "C++": "https://cdn.simpleicons.org/cplusplus/00599C",
  "SQL Avanzado": "https://cdn.simpleicons.org/postgresql/4169E1", // Usamos Postgres como representación
  "Ethical Hacking": "https://cdn.simpleicons.org/kalilinux/557C94",
  "Cloud Security": "https://cdn.simpleicons.org/cloudflare/F38020", // O AWS
  "SIEM/SOAR": "https://cdn.simpleicons.org/splunk/000000/white", // Splunk es representativo
};

// ─── DATOS ───
const educationData = [
  {
    period: "2026 - Actualidad",
    title: "Especialidad en Ciberseguridad",
    institution: "IES ZAIDÍN VERGELES",
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
    description: "Fundamentos sólidos de ingeniería de software, algoritmos complejos y gestión eficiente de bases de datos.",
    tags: ["Java", "C++", "SQL Avanzado"],
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
    color: "hover:shadow-yellow-500/20 hover:border-yellow-500/30"
  },
  {
    year: "2023",
    title: "Google Data Analytics",
    issuer: "Google Professional",
    icon: <BarChart className="w-5 h-5 text-blue-400" />,
    color: "hover:shadow-blue-500/20 hover:border-blue-500/30"
  },
  {
    year: "2022",
    title: "Meta Front-End Dev",
    issuer: "Meta (Coursera)",
    icon: <FileCode className="w-5 h-5 text-cyan-400" />,
    color: "hover:shadow-cyan-500/20 hover:border-cyan-500/30"
  }
];

export function Educacion() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section id="educacion" ref={containerRef} className="relative pt-20 pb-32 overflow-hidden bg-[#0b1220]">
      
      {/* ─── FONDO MÁGICO ─── */}
      <div className="absolute inset-0 pointer-events-none">
         {/* Grid base */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
         
         {/* Partículas flotantes (Parallax simple) */}
         <motion.div style={{ y: yBg }} className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-[10%] w-72 h-72 bg-blue-600/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-40 right-[10%] w-96 h-96 bg-emerald-600/10 rounded-full blur-[100px]" />
         </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        
        {/* ─── TÍTULO ─── */}
        <div className="text-center mb-24 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-700/50 backdrop-blur-md mb-6 shadow-xl"
          >
            <Sparkles size={16} className="text-yellow-400" />
            <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Trayectoria Académica</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight"
          >
            Nivel <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 animate-gradient-x">Desbloqueado</span>
          </motion.h2>
          
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
             Evolución constante a través de instituciones líderes y certificaciones globales.
          </p>
        </div>

        {/* ─── TIMELINE 3D ─── */}
        <div className="relative max-w-5xl mx-auto mb-32">
          
          {/* Línea Central "Fibra Óptica" */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-800 md:-translate-x-1/2 overflow-hidden rounded-full">
             <motion.div 
               style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
               className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 shadow-[0_0_20px_rgba(59,130,246,0.5)]"
             />
          </div>

          {educationData.map((item, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row gap-8 mb-24 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}>
              
              {/* TARJETA TILT 3D */}
              <div className="md:w-1/2 ml-12 md:ml-0 perspective-1000">
                <TiltCard gradient={item.gradient}>
                  <div className="relative p-6 md:p-8 h-full flex flex-col justify-between">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-xl bg-slate-950/50 border border-slate-700/50 shadow-inner">
                        {item.icon}
                      </div>
                      <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-400">
                        {item.period}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                      <div className="text-sm font-medium text-slate-400 mb-4 flex items-center gap-2">
                         <span className={`w-1.5 h-1.5 rounded-full bg-${item.color}-500 shadow-[0_0_10px_currentColor]`}/>
                         {item.institution}
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed mb-6">
                        {item.description}
                      </p>
                    </div>

                    {/* Tags Glass CON LOGOS */}
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map(tag => {
                        const logoUrl = techLogos[tag];
                        return (
                          <span 
                            key={tag} 
                            className="
                              flex items-center gap-1.5 px-3 py-1.5 rounded-lg 
                              bg-slate-900/40 border border-slate-700/50 
                              text-[11px] font-semibold text-slate-300 uppercase tracking-wide
                              hover:bg-slate-800/60 hover:border-slate-600 transition-colors cursor-default
                            "
                          >
                            {/* Renderizado condicional: Logo o Icono Fallback */}
                            {logoUrl ? (
                              <img src={logoUrl} alt={tag} className="w-3.5 h-3.5 opacity-80" />
                            ) : (
                              <Terminal size={12} className="opacity-80" />
                            )}
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </TiltCard>
              </div>

              {/* PUNTO CENTRAL (NODO) */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 flex items-center justify-center z-10">
                 <div className="w-4 h-4 rounded-full bg-[#0b1220] border-2 border-slate-600 relative">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1.5, opacity: 0 }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className={`absolute inset-0 rounded-full bg-${item.color}-500`}
                    />
                    <div className={`absolute inset-0 rounded-full bg-${item.color}-500 shadow-[0_0_15px_currentColor]`} />
                 </div>
              </div>

              {/* ESPACIO VACÍO (EQUILIBRIO) */}
              <div className="md:w-1/2 hidden md:block" />
            </div>
          ))}
        </div>

        {/* ─── CERTIFICACIONES (GRID DE LOGROS) ─── */}
        <div className="max-w-6xl mx-auto relative">
           <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl -z-10" />
           
           <div className="bg-[#0e1625]/80 border border-slate-800 backdrop-blur-xl rounded-3xl p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                 <Award className="text-yellow-400" />
                 <h3 className="text-2xl font-bold text-white">Certificaciones & Credenciales</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {certificationsData.map((cert, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className={`group relative p-5 rounded-xl bg-slate-900/50 border border-slate-800 transition-all duration-300 ${cert.color} cursor-default overflow-hidden`}
                  >
                    {/* Brillo al pasar el ratón */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-4">
                        <div className="p-2 rounded-lg bg-[#0b1220] border border-slate-700 group-hover:border-slate-500 transition-colors">
                           {cert.icon}
                        </div>
                        <span className="text-xs font-mono text-slate-500">{cert.year}</span>
                      </div>
                      <h4 className="text-white font-bold text-lg mb-1">{cert.title}</h4>
                      <p className="text-xs text-slate-400 uppercase tracking-wide">{cert.issuer}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}

// ─── COMPONENTE TILT CARD (Efecto 3D en tarjetas) ───
function TiltCard({ children, gradient }: { children: React.ReactNode, gradient: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);

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
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: useTransform(y, [-0.5, 0.5], [5, -5]), // Ajusta la intensidad de rotación
        rotateY: useTransform(x, [-0.5, 0.5], [-5, 5]),
        transformStyle: "preserve-3d",
      }}
      className="relative h-full transition-all duration-200 ease-out"
    >
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-50 blur-xl -z-10 group-hover:opacity-100 transition-opacity duration-500`} />
      
      <div 
        style={{ transform: "translateZ(20px)" }}
        className="relative h-full rounded-2xl bg-[#0e1625]/90 border border-slate-700/50 backdrop-blur-xl shadow-2xl overflow-hidden group"
      >
        {/* Efecto de brillo (Sheen) */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        
        {children}
      </div>
    </motion.div>
  );
}