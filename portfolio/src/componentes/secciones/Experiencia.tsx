import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import { 
  Calendar, 
  CheckCircle2, 
  ArrowUpRight, 
  Laptop, 
  Code2,
  Activity,
  Globe // Para fallbacks
} from 'lucide-react';

// ─── MAPA DE LOGOS (Para conectar con el Stack) ───
const techLogos: Record<string, string> = {
  "Next.js": "https://cdn.simpleicons.org/nextdotjs/white",
  "React": "https://cdn.simpleicons.org/react/61DAFB",
  "TypeScript": "https://cdn.simpleicons.org/typescript/3178C6",
  "Vercel": "https://cdn.simpleicons.org/vercel/white",
  "Redux": "https://cdn.simpleicons.org/redux/764ABC",
  "API REST": "", // Sin logo específico, usaremos un icono por defecto
  "Git": "https://cdn.simpleicons.org/git/F05032",
  "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  "Node.js": "https://cdn.simpleicons.org/nodedotjs/339933",
  "PostgreSQL": "https://cdn.simpleicons.org/postgresql/4169E1",
  "Docker": "https://cdn.simpleicons.org/docker/2496ED",
  "AWS": "https://cdn.simpleicons.org/amazonaws/FF9900"
};

// ─── DATOS ───
const experienceData = [
  {
    period: "2024 - Presente",
    title: "Desarrollador Full Stack Freelance",
    company: "Proyectos Personales / Clientes",
    description: [
      "Arquitectura de aplicaciones web escalables con Next.js 15 y Server Actions.",
      "Diseño de sistemas de autenticación seguros y bases de datos optimizadas.",
      "Auditoría de rendimiento (Web Vitals) y SEO técnico avanzado."
    ],
    tags: ["Next.js", "React", "TypeScript", "Vercel"],
    icon: <Laptop className="w-6 h-6 text-cyan-400" />,
    color: "cyan",
    active: true
  },
  {
    period: "2023 - 2024",
    title: "Prácticas Desarrollo Web",
    company: "Tech Solutions",
    description: [
      "Mantenimiento y refactorización de dashboards administrativos críticos.",
      "Migración de componentes legacy a React moderno con Hooks.",
      "Implementación de CI/CD pipelines básicos y control de versiones con Git."
    ],
    tags: ["React", "Redux", "API REST", "Git"],
    icon: <Code2 className="w-6 h-6 text-violet-400" />,
    color: "violet",
    active: false
  },
];

export function Experiencia() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  return (
    <section id="experiencia" ref={containerRef} className="relative pt-20 pb-32 overflow-hidden bg-[#0b1220]">
      
      {/* ─── FONDO DECORATIVO ─── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        
        {/* ─── CABECERA ─── */}
        <div className="text-center mb-24 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6 backdrop-blur-md"
          >
            <Activity size={16} className="text-indigo-400" />
            <span className="text-xs font-bold text-indigo-300 uppercase tracking-widest">Career Path</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            Experiencia <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400 animate-gradient-x">
              Profesional
            </span>
          </motion.h2>
        </div>

        {/* ─── TIMELINE MAGICA ─── */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Línea Base */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-800 md:-translate-x-1/2 rounded-full" />
          
          {/* Línea de Progreso */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-[20px] md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-cyan-500 via-violet-500 to-transparent md:-translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.6)] z-10"
          />

          {experienceData.map((item, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row gap-8 mb-24 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}>
              
              {/* TARJETA 3D */}
              <div className="md:w-1/2 ml-12 md:ml-0 perspective-1000">
                <TechCard color={item.color} active={item.active}>
                  <div className="p-6 md:p-8 relative z-10 h-full flex flex-col">
                    
                    {/* Header */}
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex flex-col">
                        <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                        <div className={`text-sm font-medium flex items-center gap-2 text-${item.color}-400`}>
                          {item.icon}
                          {item.company}
                        </div>
                      </div>
                      
                      <div className={`p-2 rounded-lg bg-white/5 text-slate-400 group-hover:bg-${item.color}-500 group-hover:text-white transition-all duration-300`}>
                        <ArrowUpRight size={18} />
                      </div>
                    </div>

                    {/* Descripción */}
                    <ul className="space-y-4 mb-8 flex-grow">
                      {item.description.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed group/item">
                          <CheckCircle2 size={16} className={`mt-1 shrink-0 text-${item.color}-500/50 group-hover/item:text-${item.color}-400 transition-colors`} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tags (AHORA CON LOGOS) */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                      {item.tags.map(tag => {
                        const logoUrl = techLogos[tag];
                        return (
                          <span 
                            key={tag} 
                            className={`
                              flex items-center gap-1.5 px-3 py-1.5 rounded-lg 
                              bg-[#0b1220]/50 border border-slate-700/50 
                              text-xs font-semibold text-slate-300 
                              group-hover:border-${item.color}-500/30 group-hover:text-white 
                              transition-all duration-300 cursor-default hover:scale-105
                            `}
                          >
                            {logoUrl ? (
                              <img src={logoUrl} alt={tag} className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
                            ) : (
                              <Globe size={12} className="opacity-70" />
                            )}
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </TechCard>
              </div>

              {/* NODO CENTRAL */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 flex items-center justify-center z-20">
                <div className={`relative w-4 h-4 rounded-full bg-[#0b1220] border-2 ${
                   item.active ? "border-cyan-400" : "border-slate-600"
                }`}>
                  {item.active && (
                    <>
                      <span className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-75" />
                      <span className="absolute inset-0 rounded-full bg-cyan-500 shadow-[0_0_10px_#22d3ee]" />
                    </>
                  )}
                </div>
              </div>

              {/* FECHA */}
              <div className={`md:w-1/2 flex items-center ${
                 index % 2 === 0 ? "md:justify-end" : "md:justify-start"
              } ml-12 md:ml-0 md:px-12`}>
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-mono font-semibold backdrop-blur-sm transition-all duration-300 ${
                  item.active 
                    ? "bg-cyan-950/30 border-cyan-500/30 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.1)]" 
                    : "bg-slate-900/50 border-slate-800 text-slate-400"
                }`}>
                  <Calendar size={14} />
                  {item.period}
                  {item.active && <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse ml-1"/>}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// ─── COMPONENTE TECH CARD (3D TILT) ───
function TechCard({ children, color, active }: { children: React.ReactNode, color: string, active: boolean }) {
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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      style={{
        rotateX: useTransform(y, [-0.5, 0.5], [7, -7]),
        rotateY: useTransform(x, [-0.5, 0.5], [-7, 7]),
        transformStyle: "preserve-3d",
      }}
      className="relative h-full transition-all duration-200 ease-out group"
    >
      {/* Brillo trasero */}
      <div className={`absolute inset-0 rounded-2xl bg-${color}-500/20 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      <div 
        style={{ transform: "translateZ(20px)" }}
        className={`relative h-full rounded-2xl border backdrop-blur-xl shadow-xl overflow-hidden ${
           active ? `bg-[#0e1625]/90 border-${color}-500/30` : "bg-[#0e1625]/80 border-slate-800"
        }`}
      >
        {/* Patrón de fondo */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none" />
        
        {/* Efecto Scanline */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        {children}
      </div>
    </motion.div>
  );
}