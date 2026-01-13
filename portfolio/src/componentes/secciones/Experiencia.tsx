import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, type Variants } from 'framer-motion';
import { 
  Calendar, CheckCircle2, ArrowUpRight, Code2, Activity, 
  Globe, Server, Bot, Cloud, Database, Terminal, ExternalLink 
} from 'lucide-react';

// ─── ICONOS SVG NATIVOS ───
const BrandIcons: Record<string, React.ReactNode> = {
  "React": <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-[#61DAFB]"><path d="M12 21.317a9.317 9.317 0 1 0 0-18.634 9.317 9.317 0 0 0 0 18.634z" fill="none"></path><path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 17.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15z" fill="none"></path><path d="M12 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"></path><circle cx="12" cy="12" r="2"></circle><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="10" ry="4.5" cx="12" cy="12"></ellipse><ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(60 12 12)"></ellipse><ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(120 12 12)"></ellipse></g></svg>,
  "TypeScript": <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-[#3178C6]"><path d="M2 2h20v20H2V2zm16.11 15.65v-6.5h-1.63v-1.55h4.94v1.55h-1.63v6.5h-1.68zm-5.69 0c-2.18 0-3.32-1.07-3.32-2.88 0-1.74 1.12-2.88 3.23-2.88 1.16 0 2.05.34 2.58.74l-.65 1.48c-.46-.35-1.12-.66-1.92-.66-.99 0-1.48.51-1.48 1.25 0 .84.6 1.15 1.76 1.41 1.63.36 2.47.96 2.47 2.62 0 1.83-1.22 2.92-3.41 2.92-1.27 0-2.39-.42-2.95-.87l.71-1.45c.48.35 1.34.75 2.23.75 1.05 0 1.56-.5 1.56-1.28 0-.82-.54-1.16-1.81-1.45z"/></svg>,
  "Node.js": <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-[#339933]"><path d="M12 2l9.6 5.3v10.7L12 23.3l-9.6-5.3V7.3L12 2zm1 14.8v-4.5l4-2.3V6.7l-4.5 2.6-4.5-2.6v3.3l4 2.3v4.5l-4-2.3v-4.5l-4 2.3v3.3l8.5 4.9 8.5-4.9v-3.3l-4-2.3z"/></svg>,
  "AWS": <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-[#FF9900]"><path d="M18.1 14.1c-1.3 1.7-3.6 2.8-5.8 2.8-3.4 0-6-2.5-6-6.1 0-3.4 2.4-6.1 6.2-6.1 2.3 0 4.2 1.2 5.3 2.6l-1.3 1.1c-.8-1-2.2-1.9-4-1.9-2.6 0-4.3 1.9-4.3 4.3 0 2.6 1.9 4.3 4.2 4.3 1.5 0 3.2-.8 4.2-2.1l1.5 1.1z"/></svg>,
  "Python": <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-[#3776AB]"><path d="M12 2c2.7 0 3 .2 4.1.8 1.1.6 1.8 1.7 1.8 4.2H12V8h6v2h-2c-3.1 0-4.2-1.1-4.2-4.2V2zm0 20c-2.7 0-3-.2-4.1-.8-1.1-.6-1.8-1.7-1.8-4.2h5.9v-1H6v-2h2c3.1 0 4.2 1.1 4.2 4.2v3.8z"/></svg>,
  "Docker": <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-[#2496ED]"><path d="M13.8 9.3h2.5v2.5h-2.5zm-3.6 0h2.5v2.5h-2.5zm-3.6 0h2.5v2.5H6.6zm-3.6 2.5h2.5v2.5H3zm13.3 1.3c2.4 0 4.4 1.1 5.3 2.8H2.1c.5-3.3 3.6-6 7.3-6.4V9.3h2.5v.3h.7c.4 0 .9.1 1.2.2z"/></svg>,
  "PostgreSQL": <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-[#4169E1]"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/></svg>,
  "OpenAI": <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-white"><path d="M20.9 9.9c.2-.9.2-1.9-.1-2.9-.4-1.2-1.3-2.2-2.4-2.8-1.1-.6-2.4-.6-3.6 0l-1.3-.8c.7-1.1.9-2.4.5-3.6-.4-1.2-1.3-2.2-2.4-2.8-1.1-.6-2.4-.6-3.6 0-1.2.6-2 1.7-2.3 3-.3 1.3 0 2.6.9 3.6l-.7 1.3c-1.3-.2-2.6.2-3.6.9-1.2.8-1.9 2.1-1.9 3.5 0 1.4.7 2.7 1.9 3.5 1 .7 2.3 1 3.6.9l.7 1.3c-.9 1-1.2 2.3-.9 3.6.3 1.3 1.1 2.4 2.3 3 1.2.6 2.5.6 3.6 0 1.1-.6 1.9-1.7 2.3-3 .3-1.3 0-2.6-.9-3.6l1.3.8c-.3 1.3 0 2.6.9 3.6.8 1 2.1 1.5 3.4 1.5.5 0 1-.1 1.5-.3 1.3-.7 2.2-1.9 2.4-3.3.2-1.4-.2-2.7-1-3.7l.8-1.3c1.3.2 2.6-.2 3.6-.9 1.2-.8 1.9-2.1 1.9-3.5 0-1.4-.7-2.7-1.9-3.5zM12 16.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"/></svg>
};

// ─── DATOS ───
const experienceData = [
  {
    period: "Nov 2025 - Actualidad",
    title: "Full Stack Architect & Developer",
    company: "THIELMANN",
    link: "https://www.thielmann.com/en/",
    description: [
      "Diseño y construcción desde cero de una plataforma Cliente-Servidor para la gestión integral de líneas de producción.",
      "Arquitectura backend robusta utilizando Node.js + Prisma ORM sobre PostgreSQL para garantizar integridad de datos.",
      "Desarrollo de frontend reactivo con React + TypeScript y despliegue automatizado en infraestructura Cloud."
    ],
    tags: ["React", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "AWS"],
    icon: <Server className="w-6 h-6 text-blue-400" />,
    color: "blue",
    active: true
  },
  {
    period: "Feb 2026 - Jun 2026",
    title: "Ingeniero de Automatización & IA",
    company: "Radiokable",
    link: "https://radiokable.net/",
    description: [
      "Desarrollo de pipelines de automatización inteligente para optimizar flujos de trabajo internos.",
      "Implementación de agentes de IA para el análisis predictivo y gestión de datos masivos.",
      "Integración de APIs de terceros para centralizar la monitorización de sistemas de red."
    ],
    tags: ["Python", "IA", "Docker", "Cloud"],
    icon: <Bot className="w-6 h-6 text-emerald-400" />,
    color: "emerald",
    active: true
  },
  {
    period: "2024",
    title: "Desarrollador de Software",
    company: "SM Services",
    link: "https://sm-services.es/?lang=en",
    description: [
      "Mantenimiento evolutivo y correctivo de aplicaciones cloud de alta disponibilidad.",
      "Desarrollo de nuevas funcionalidades full-stack, asegurando la escalabilidad del código.",
      "Colaboración activa en sprints bajo metodología Agil/Scrum."
    ],
    tags: ["JavaScript", "Cloud", "Scrum", "Git"],
    icon: <Code2 className="w-6 h-6 text-violet-400" />,
    color: "violet",
    active: false
  },
];

// ─── VARIANTES ANIMACIÓN (SIN BLUR PARA EVITAR FLICKER) ───
const cardVariants: Variants = {
  offscreen: (isEven) => ({
    y: 50,
    // En Desktop alternamos lados, en móvil anulamos X para evitar scroll horizontal
    x: typeof window !== 'undefined' && window.innerWidth > 768 ? (isEven ? -40 : 40) : 0,
    opacity: 0,
    scale: 0.9, 
    // NOTA: Eliminado filter: "blur(10px)" para rendimiento
  }),
  onscreen: {
    y: 0,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8,
      delay: 0.1
    }
  }
};

const textReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export function Experiencia() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experiencia" ref={containerRef} className="relative pt-24 pb-40 overflow-hidden bg-[#0b1220]">
      
      {/* FONDO */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        
        {/* Orbes con GPU activado */}
        <motion.div 
          animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 hidden md:block transform-gpu" 
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        
        {/* HEADER */}
        <div className="text-center mb-28 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6 backdrop-blur-md shadow-lg"
          >
            <Activity size={16} className="text-indigo-400" />
            <span className="text-xs font-bold text-indigo-300 uppercase tracking-widest">Career Path</span>
          </motion.div>
          
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textReveal}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            Experiencia <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 animate-gradient-x bg-[length:200%_auto]">Profesional</span>
          </motion.h2>
        </div>

        {/* TIMELINE PRINCIPAL */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Línea base estática */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-800/50 md:-translate-x-1/2 rounded-full" />
          
          {/* LÍNEA DE PROGRESO */}
          <motion.div 
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-violet-500 to-transparent md:-translate-x-1/2 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.6)] z-10"
          />

          {experienceData.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={index} 
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, margin: "-100px" }}
                custom={isEven}
                variants={cardVariants}
                className={`relative flex flex-col md:flex-row gap-8 mb-24 ${isEven ? "md:flex-row-reverse" : ""}`}
              >
                
                {/* TARJETA INTERACTIVA */}
                <div className="md:w-1/2 ml-12 md:ml-0">
                  <TechCard color={item.color} active={item.active}>
                    <div className="p-6 md:p-8 relative z-10 h-full flex flex-col">
                      {/* Header Card */}
                      <div className="flex justify-between items-start mb-6 relative">
                        <div className="flex flex-col pr-2">
                          <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-200 transition-colors">{item.title}</h3>
                          
                          <div className={`text-sm font-medium flex items-center gap-2 text-${item.color}-400 mt-1`}>
                            {item.icon}
                            <a 
                              href={item.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="hover:text-white transition-colors flex items-center gap-1 group/link relative"
                            >
                              <span className="relative z-10">{item.company}</span>
                              <ExternalLink size={12} className="opacity-50 group-hover/link:opacity-100 transition-opacity" />
                              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white group-hover/link:w-full transition-all duration-300" />
                            </a>
                          </div>
                        </div>
                        
                        {item.active ? (
                          <div className={`shrink-0 px-3 py-1 rounded-full bg-${item.color}-500/10 border border-${item.color}-500/20 text-${item.color}-400 text-[10px] font-bold uppercase tracking-wider shadow-[0_0_10px_rgba(0,0,0,0.2)] backdrop-blur-md`}>
                            Activo
                          </div>
                        ) : (
                          <div className={`shrink-0 p-2 rounded-lg bg-white/5 text-slate-400 group-hover:bg-${item.color}-500 group-hover:text-white transition-all duration-300`}>
                            <ArrowUpRight size={18} />
                          </div>
                        )}
                      </div>

                      {/* Descripción */}
                      <ul className="space-y-4 mb-8 flex-grow">
                        {item.description.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed group/item">
                            <CheckCircle2 size={16} className={`mt-1 shrink-0 text-${item.color}-500/50 group-hover/item:text-${item.color}-400 transition-colors`} />
                            <span className="group-hover/item:text-slate-300 transition-colors">{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                        {item.tags.map(tag => {
                          let iconNode: React.ReactNode;
                          
                          if (BrandIcons[tag]) iconNode = BrandIcons[tag];
                          else if (tag === "IA") iconNode = BrandIcons["OpenAI"];
                          else if (tag === "Cloud") iconNode = <Cloud size={14} className="text-sky-400" />;
                          else if (tag === "Scrum") iconNode = <Activity size={14} className="text-orange-400" />;
                          else if (tag === "Prisma") iconNode = <Database size={14} className="text-white" />;
                          else if (tag === "Git") iconNode = <Terminal size={14} className="text-red-400" />;
                          else iconNode = <Globe size={14} className="opacity-70" />;

                          return (
                            <span 
                              key={tag} 
                              className={`
                                flex items-center gap-1.5 px-3 py-1.5 rounded-lg 
                                bg-[#0b1220]/50 border border-slate-700/50 
                                text-xs font-semibold text-slate-300 whitespace-nowrap
                                hover:border-${item.color}-500/40 hover:bg-slate-800 transition-all duration-300 cursor-default hover:scale-105
                              `}
                            >
                              {iconNode}
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
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className={`relative w-4 h-4 rounded-full bg-[#0b1220] border-2 ${item.active ? "border-cyan-400" : "border-slate-600 group-hover:border-white transition-colors"}`}
                  >
                    {item.active && (
                      <>
                        <span className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-75" />
                        <span className="absolute inset-0 rounded-full bg-cyan-500 shadow-[0_0_15px_#22d3ee]" />
                      </>
                    )}
                  </motion.div>
                </div>

                {/* FECHA LATERAL */}
                <div className={`md:w-1/2 flex items-center ${isEven ? "md:justify-end" : "md:justify-start"} ml-12 md:ml-0 md:px-12`}>
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-mono font-semibold backdrop-blur-sm transition-all duration-300 ${item.active ? "bg-cyan-950/30 border-cyan-500/30 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.1)]" : "bg-slate-900/50 border-slate-800 text-slate-400"}`}
                  >
                    <Calendar size={14} />
                    {item.period}
                    {item.active && <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse ml-1"/>}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── TILT CARD ANTI-PARPADEO ───
function TechCard({ children, color, active }: { children: React.ReactNode, color: string, active: boolean }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);

  // Reducimos la rotación para evitar bordes dentados
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 200, damping: 25 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
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
      className="relative h-full group"
      style={{ perspective: 1000 }} // Perspective en el contenedor
    >
      <motion.div
         style={{ 
           rotateX, 
           rotateY,
           transformStyle: "preserve-3d",
           backfaceVisibility: "hidden", // CLAVE ANTI-FLICKER
           willChange: "transform", // CLAVE PERFORMANCE
         }}
         className="w-full h-full"
      >
          {/* Sombra suave optimizada */}
          <div 
            className={`absolute inset-0 rounded-2xl bg-${color}-500/10 blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            style={{ transform: "translateZ(-1px)" }} 
          />
          
          <div 
            style={{ transform: "translateZ(1px)" }} // Elevamos el contenido muy poco
            className={`
              relative h-full rounded-2xl border shadow-xl overflow-hidden
              backdrop-blur-xl bg-[#0e1625]/90
              ${active ? `border-${color}-500/40` : "border-slate-800 group-hover:border-slate-600"}
              transition-colors duration-300
            `}
          >
            {/* Fondo Estático */}
            <div className="absolute inset-0 bg-slate-950/50 pointer-events-none" />
            
            {/* Brillo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay" />
            
            <div className="relative z-10">
              {children}
            </div>
          </div>
      </motion.div>
    </motion.div>
  );
}