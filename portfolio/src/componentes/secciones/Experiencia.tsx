import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Calendar, 
  CheckCircle2, 
  ArrowUpRight, 
  Laptop, 
  Code2 
} from 'lucide-react';

// ─── DATOS MEJORADOS ───
const experienceData = [
  {
    period: "2024 - Presente",
    title: "Desarrollador Full Stack Freelance",
    company: "Proyectos Personales / Clientes",
    description: [
      "Desarrollo de aplicaciones web a medida utilizando Next.js 15 y Tailwind CSS.",
      "Implementación de arquitecturas seguras y escalables para pequeños negocios.",
      "Optimización de rendimiento web (Core Web Vitals) y SEO técnico."
    ],
    tags: ["Next.js", "React", "TypeScript", "Vercel"],
    icon: <Laptop className="w-6 h-6 text-blue-400" />,
    color: "blue"
  },
  {
    period: "2023 - 2024",
    title: "Prácticas Desarrollo Web",
    company: "Tech Solutions",
    description: [
      "Colaboración en el mantenimiento de un dashboard administrativo en React.",
      "Refactorización de componentes legacy para mejorar la mantenibilidad.",
      "Integración de APIs REST y gestión de estado global con Redux/Zustand."
    ],
    tags: ["React", "JavaScript", "API REST", "Git"],
    icon: <Code2 className="w-6 h-6 text-indigo-400" />,
    color: "indigo"
  },
];

export function Experiencia() {
  return (
    <section id="experiencia" className="relative pt-0 pb-20 md:pb-32 overflow-hidden bg-[#0b1220]">
      
      {/* ─── FONDO AMBIENTAL (Cohesión con el resto) ─── */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
      
      {/* Glow lateral para separar visualmente */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Título de la sección */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 mb-20 pt-10">
        <div className="text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
            >
              <Briefcase size={14} className="text-blue-400" />
              <span className="text-xs font-semibold text-blue-300 uppercase tracking-wider">Trayectoria Profesional</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Experiencia <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 animate-gradient-x">
                Construyendo Soluciones.
              </span>
            </motion.h2>
        </div>
      </div>

      {/* ─── TIMELINE DE EXPERIENCIA ─── */}
      <div className="relative max-w-5xl mx-auto px-6 md:px-0">
        
        {/* Línea Central con Gradiente Animado */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-800 md:-translate-x-1/2 overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500 via-indigo-500 to-transparent opacity-40 animate-pulse"></div>
        </div>

        {experienceData.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-20 ${
                isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              
              {/* 1. La Tarjeta de Contenido (Con Spotlight) */}
              <div className="md:w-1/2 md:px-12 ml-12 md:ml-0">
                <SpotlightCard className="h-full">
                  <div className={`relative h-full p-6 md:p-8 rounded-2xl bg-[#0e1625]/90 backdrop-blur-md border border-slate-800/50 transition-all hover:shadow-2xl hover:shadow-blue-900/10 ${
                      isEven ? "md:text-left" : "md:text-right"
                  }`}>
                    
                    {/* Cabecera */}
                    <div className={`flex items-start justify-between mb-6 ${
                        !isEven ? "md:flex-row-reverse" : ""
                    }`}>
                      <div className={`flex flex-col ${!isEven ? "md:items-end" : ""}`}>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                            {item.title}
                        </h3>
                        <div className={`flex items-center gap-2 text-indigo-400 font-medium text-sm ${
                            !isEven ? "md:justify-end" : ""
                        }`}>
                          {item.icon}
                          <span>{item.company}</span>
                        </div>
                      </div>
                      
                      {/* Icono decorativo flecha */}
                      <div className="p-2 rounded-lg bg-slate-800/50 text-slate-400 hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110">
                        <ArrowUpRight size={20} />
                      </div>
                    </div>

                    {/* Lista de tareas */}
                    <ul className="space-y-4 mb-8">
                      {item.description.map((point, idx) => (
                        <li key={idx} className={`flex items-start gap-3 text-slate-400 text-sm leading-relaxed group/item ${
                            !isEven ? "md:flex-row-reverse" : ""
                        }`}>
                          <CheckCircle2 size={16} className="text-blue-500 mt-1 shrink-0 group-hover/item:text-blue-400 transition-colors" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tags (Pills) */}
                    <div className={`flex flex-wrap gap-2 pt-6 border-t border-slate-800/50 ${
                        !isEven ? "md:justify-end" : "justify-start"
                    }`}>
                      {item.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-slate-800/40 border border-slate-700/50 text-xs font-medium text-slate-300 hover:text-white hover:border-blue-500/30 hover:bg-blue-500/10 transition-all cursor-default">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </div>

              {/* 2. El Punto Central */}
              <div className="absolute left-[24px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0b1220] border-2 border-[#0b1220] z-10 box-content flex items-center justify-center">
                 <div className={`w-full h-full rounded-full border-2 ${
                    index === 0 ? "border-blue-500 bg-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.6)]" : "border-slate-600 bg-slate-800"
                 } flex items-center justify-center`}>
                    {index === 0 && <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />}
                 </div>
              </div>

              {/* 3. La Fecha */}
              <div className={`md:w-1/2 flex items-center ${
                 isEven ? "md:justify-end" : "md:justify-start"
              } pl-12 md:pl-0 md:px-12`}>
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-semibold shadow-lg ${
                    index === 0 
                    ? "bg-blue-500/10 border-blue-500/20 text-blue-400 shadow-blue-900/20" 
                    : "bg-slate-800/50 border-slate-700 text-slate-400"
                }`}>
                  <Calendar size={16} />
                  {item.period}
                </div>
              </div>

            </motion.div>
          );
        })}

      </div>
    </section>
  );
}

// ─── COMPONENTE HELPER: SPOTLIGHT CARD (Reutilizable) ───
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