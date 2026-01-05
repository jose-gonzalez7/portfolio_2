import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, ArrowUpRight } from 'lucide-react';

// ─── DATOS: MODIFICA TU EXPERIENCIA AQUÍ ───
const experienceData = [
  {
    period: "2024 - Presente",
    title: "Desarrollador Full Stack Freelance",
    company: "Proyectos Personales / Clientes",
    description: [
      "Desarrollo de aplicaciones web a medida utilizando Next.js y Tailwind CSS.",
      "Implementación de arquitecturas seguras y escalables para pequeños negocios.",
      "Optimización de rendimiento web (Core Web Vitals) y SEO técnico."
    ],
    tags: ["Next.js", "React", "TypeScript", "Vercel"],
  },
  {
    period: "2023 - 2024",
    title: "Prácticas Desarrollo Web",
    company: "Tech Solutions (Ejemplo)",
    description: [
      "Colaboración en el mantenimiento de un dashboard administrativo en React.",
      "Refactorización de componentes legacy para mejorar la mantenibilidad.",
      "Integración de APIs REST y gestión de estado global con Redux/Zustand."
    ],
    tags: ["React", "JavaScript", "API REST", "Git"],
  },
  // Puedes añadir más experiencias aquí...
];

export function Experiencia() {
  return (
    <section id="experiencia" className="relative pt-3 md:pt-8 pb-20 md:pb-12 overflow-hidden bg-[#0b1220]">
      
      {/* ─── TITULO Y ESTADÍSTICAS ─── */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 mb-20">
        <div className="flex flex-col md:flex-row gap-12 items-end justify-between">
          
          {/* Texto Principal */}
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Construyendo Soluciones.
              </span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-lg leading-relaxed"
            >
              Aplicando conocimientos técnicos para resolver problemas reales. Desde proyectos académicos ambiciosos hasta soluciones freelance.
            </motion.p>
          </div>

          {/* Cajas de Estadísticas (Opcional) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="hidden md:flex gap-4"
          >
            <div className="p-4 rounded-2xl bg-[#0e1625] border border-slate-800 text-center min-w-[120px]">
              <div className="text-3xl font-bold text-white mb-1">+2</div>
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Años Codificando</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#0e1625] border border-slate-800 text-center min-w-[120px]">
              <div className="text-3xl font-bold text-white mb-1">+10</div>
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Proyectos</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ─── TIMELINE DE EXPERIENCIA ─── */}
      <div className="relative max-w-5xl mx-auto px-6 md:px-0">
        
        {/* CORRECCIÓN: Línea Vertical más visible */}
        {/* 1. w-[2px] en lugar de w-px para que sea más gruesa */}
        {/* 2. bg-slate-700 en lugar de bg-slate-800 para más contraste */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-700 md:-translate-x-1/2">
           {/* Degradado superior para un efecto elegante */}
           <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-500 to-transparent opacity-60"></div>
        </div>

        {experienceData.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.2 }}
            className={`relative flex flex-col md:flex-row gap-8 mb-20 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            
            {/* 1. La Tarjeta de Contenido */}
            <div className="md:w-1/2 md:px-12 ml-12 md:ml-0">
              <div className="group relative p-6 rounded-2xl bg-[#0e1625] border border-slate-800 hover:border-blue-500/30 transition-all duration-300 shadow-xl hover:shadow-blue-500/5">
                
                {/* Cabecera de la tarjeta */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <div className="flex items-center gap-2 text-blue-400 font-medium text-sm">
                      <Briefcase size={16} />
                      <span>{item.company}</span>
                    </div>
                  </div>
                  {/* Icono decorativo */}
                  <div className="p-2 rounded-lg bg-slate-800/50 text-slate-400 group-hover:text-white group-hover:bg-blue-600 transition-all duration-300">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                {/* Lista de tareas */}
                <ul className="space-y-3 mb-6">
                  {item.description.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                      <CheckCircle2 size={16} className="text-blue-500 mt-1 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/50">
                  {item.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 rounded-md bg-slate-800/50 border border-slate-700/50 text-xs font-medium text-slate-300 group-hover:border-blue-500/30 group-hover:text-blue-300 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. El Punto Central */}
            <div className="absolute left-[24px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0b1220] border-2 border-blue-500 z-10 box-content">
              <div className="w-full h-full bg-blue-500/50 rounded-full animate-ping opacity-75" />
            </div>

            {/* 3. La Fecha */}
            <div className={`md:w-1/2 flex items-center ${
               index % 2 === 0 ? "md:justify-end" : "md:justify-start"
            } pl-12 md:pl-0 md:px-12`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-300 text-sm font-semibold">
                <Calendar size={16} className="text-blue-400" />
                {item.period}
              </div>
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}