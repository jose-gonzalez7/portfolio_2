import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ShieldCheck, 
  Globe, 
  Smartphone, 
  Award, 
  Cloud, 
  BarChart, 
  FileCode 
} from 'lucide-react';

// ─── DATOS ACTUALIZADOS CON ICONOS REALES ───
const educationData = [
  {
    period: "2026 - Actualidad",
    title: "Especialidad en Ciberseguridad",
    institution: "IES ZAIDÍN VERGELES (Granada)",
    description: "Enfoque en seguridad defensiva y ofensiva, auditorías de sistemas, análisis forense y securización de infraestructuras críticas.",
    tags: ["Ethical Hacking", "SIEM/SOAR", "Cloud Security", "Pentesting"],
    icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
    color: "emerald"
  },
  {
    period: "2024 - 2026",
    title: "Desarrollo de Aplicaciones Web (DAW)",
    institution: "IES Alonso Cano (Granada)",
    description: "Dominio del ecosistema web moderno. Creación de aplicaciones escalables, interactivas y optimizadas para el rendimiento.",
    tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "Docker"],
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    color: "blue"
  },
  {
    period: "2022 - 2024",
    title: "Desarrollo de Aplicaciones Multiplataforma (DAM)",
    institution: "CES Cristo Rey (Granada)",
    description: "Base sólida en lógica de programación, gestión de bases de datos relacionales y desarrollo de interfaces multiplataforma.",
    tags: ["C++ Fundamentals", "Java Server Side", "BBDD", "Multihilo"],
    icon: <Smartphone className="w-6 h-6 text-indigo-400" />,
    color: "indigo"
  }
];

const certificationsData = [
  {
    year: "2024",
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    icon: <Cloud className="w-5 h-5 text-yellow-400" />,
    border: "group-hover:border-yellow-500/50",
    bg: "group-hover:bg-yellow-500/10"
  },
  {
    year: "2023",
    title: "Google Data Analytics",
    issuer: "Google Professional Cert",
    icon: <BarChart className="w-5 h-5 text-blue-400" />,
    border: "group-hover:border-blue-500/50",
    bg: "group-hover:bg-blue-500/10"
  },
  {
    year: "2022",
    title: "Meta Front-End Developer",
    issuer: "Meta (Coursera)",
    icon: <FileCode className="w-5 h-5 text-cyan-400" />,
    border: "group-hover:border-cyan-500/50",
    bg: "group-hover:bg-cyan-500/10"
  }
];

export function Educacion() {
  return (
    <section id="educacion" className="relative pt-0 pb-20 md:pb-32 overflow-hidden bg-[#0b1220]">
      
      {/* ─── FONDO: Grid Sutil (Cohesión con Hero) ─── */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      {/* Glow decorativo central */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        
        {/* ─── TÍTULO ─── */}
        <div className="text-center mb-20 md:mb-32 mt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
          >
            <Award size={14} className="text-blue-400" />
            <span className="text-xs font-semibold text-blue-300 uppercase tracking-wider">Formación Académica</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Forjando el futuro a través <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 animate-gradient-x">
              del conocimiento continuo.
            </span>
          </motion.h2>
        </div>

        {/* ─── TIMELINE INTERACTIVA ─── */}
        <div className="relative max-w-5xl mx-auto mb-32">
          
          {/* Línea Central con Degradado */}
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-800 md:-translate-x-1/2 overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500 via-emerald-500 to-transparent opacity-40 animate-pulse"></div>
          </div>

          {educationData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-20 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              
              {/* ─── TARJETA CON EFECTO SPOTLIGHT ─── */}
              <div className="md:w-1/2 ml-12 md:ml-0">
                <SpotlightCard>
                  <div className={`p-6 md:p-8 rounded-2xl bg-[#0e1625]/80 backdrop-blur-sm border border-slate-800/50 h-full ${
                     index % 2 === 0 ? "md:text-left" : "md:text-right"
                  }`}>
                    {/* Header Tarjeta */}
                    <div className={`flex items-center gap-3 mb-4 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}>
                      <div className="p-2 rounded-lg bg-slate-800/50 border border-slate-700/50">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                        <div className="text-sm text-blue-400 font-medium">{item.institution}</div>
                      </div>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className={`flex flex-wrap gap-2 ${
                       index % 2 === 0 ? "justify-start" : "md:justify-end justify-start"
                    }`}>
                      {item.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 text-xs text-slate-300 hover:text-white hover:border-slate-600 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </div>

              {/* ─── PUNTO CENTRAL ─── */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-[#0b1220] border-4 border-[#0b1220] z-10 flex items-center justify-center">
                <div className={`w-full h-full rounded-full border-2 ${
                  index === 0 ? "border-emerald-500 bg-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.5)]" : "border-slate-600 bg-slate-800"
                } flex items-center justify-center`}>
                   {index === 0 && <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />}
                </div>
              </div>

              {/* ─── FECHA ─── */}
              <div className={`md:w-1/2 flex items-center ${
                 index % 2 === 0 ? "md:justify-end" : "md:justify-start"
              } ml-12 md:ml-0`}>
                <div className={`px-4 py-1.5 rounded-full border text-sm font-semibold tracking-wide ${
                  index === 0 
                    ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" 
                    : "bg-slate-800/50 border-slate-700/50 text-slate-400"
                }`}>
                  {item.period}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* ─── SECCIÓN DE CERTIFICACIONES ─── */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8 px-2 border-b border-slate-800 pb-4">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <Award className="text-yellow-500" /> Certificaciones
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificationsData.map((cert, i) => (
              <motion.a
                href="#"
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="group relative p-6 rounded-2xl bg-[#0e1625] border border-slate-800 hover:border-slate-600 transition-all hover:-translate-y-1 overflow-hidden"
              >
                {/* Fondo Glow Hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${cert.bg}`} />
                
                <div className="relative z-10 flex justify-between items-start mb-4">
                  <div className={`p-2.5 rounded-xl bg-slate-900 border border-slate-800 ${cert.border} transition-colors`}>
                    {cert.icon}
                  </div>
                  <span className="text-xs font-mono text-slate-500 px-2 py-1 rounded bg-slate-900 border border-slate-800">{cert.year}</span>
                </div>
                
                <h4 className="relative z-10 text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h4>
                <p className="relative z-10 text-sm text-slate-400 group-hover:text-slate-300">{cert.issuer}</p>
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// ─── COMPONENTE HELPER: SPOTLIGHT CARD ───
// Este componente añade el efecto de "linterna" al borde
function SpotlightCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-2xl overflow-hidden ${className}`}
    >
      {/* El brillo del borde que sigue al ratón */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59,130,246,0.15), transparent 40%)`,
        }}
      />
      {/* Contenido real */}
      <div className="relative h-full">{children}</div>
    </div>
  );
}