import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, ArrowUpRight } from 'lucide-react';

// ─── DATOS ───
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
    company: "Tech Solutions",
    description: [
      "Colaboración en el mantenimiento de un dashboard administrativo en React.",
      "Refactorización de componentes legacy para mejorar la mantenibilidad.",
      "Integración de APIs REST y gestión de estado global con Redux/Zustand."
    ],
    tags: ["React", "JavaScript", "API REST", "Git"],
  },
];

export function Experiencia() {
  return (
    <section id="experiencia" className="relative pt-0 pb-20 md:pb-12 overflow-hidden bg-[#0b1220]">
      
      {/* Título de la sección (Centrado) */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 mb-20 pt-0">
        <div className="text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
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
        </div>
      </div>

      {/* ─── TIMELINE DE EXPERIENCIA ─── */}
      <div className="relative max-w-5xl mx-auto px-6 md:px-0">
        
        {/* Línea Central */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-700 md:-translate-x-1/2">
           <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-500 to-transparent opacity-60"></div>
        </div>

        {experienceData.map((item, index) => {
          // Lógica: Si es par (0, 2...), la tarjeta va a la derecha y el texto a la izquierda.
          // Si es impar (1, 3...), la tarjeta va a la izquierda y el texto a la derecha.
          const isEven = index % 2 === 0;

          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2 }}
              // Si es par, invertimos el orden flex (Tarjeta a la derecha)
              className={`relative flex flex-col md:flex-row gap-8 mb-20 ${
                isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              
              {/* 1. La Tarjeta de Contenido */}
              <div className="md:w-1/2 md:px-12 ml-12 md:ml-0">
                <div className={`group relative p-6 rounded-2xl bg-[#0e1625] border border-slate-800 hover:border-blue-500/30 transition-all duration-300 shadow-xl hover:shadow-blue-500/5 ${
                    // ALINEACIÓN DE TEXTO: Par -> Izq (hacia el centro), Impar -> Der (hacia el centro)
                    isEven ? "md:text-left" : "md:text-right"
                }`}>
                  
                  {/* Cabecera de la tarjeta */}
                  <div className={`flex items-start justify-between mb-4 ${
                      // Invertimos la cabecera si es impar para mantener el icono fuera
                      !isEven ? "md:flex-row-reverse" : ""
                  }`}>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                      <div className={`flex items-center gap-2 text-blue-400 font-medium text-sm ${
                          !isEven ? "md:justify-end" : ""
                      }`}>
                        <Briefcase size={16} />
                        <span>{item.company}</span>
                      </div>
                    </div>
                    {/* Icono decorativo (flecha) */}
                    <div className="p-2 rounded-lg bg-slate-800/50 text-slate-400 group-hover:text-white group-hover:bg-blue-600 transition-all duration-300">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>

                  {/* Lista de tareas */}
                  <ul className="space-y-3 mb-6">
                    {item.description.map((point, idx) => (
                      <li key={idx} className={`flex items-start gap-3 text-slate-400 text-sm leading-relaxed ${
                          // Alineación de los items de la lista
                          !isEven ? "md:flex-row-reverse" : ""
                      }`}>
                        <CheckCircle2 size={16} className="text-blue-500 mt-1 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className={`flex flex-wrap gap-2 pt-4 border-t border-slate-800/50 ${
                      // Justificación de los tags
                      !isEven ? "md:justify-end" : "justify-start"
                  }`}>
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
                 isEven ? "md:justify-end" : "md:justify-start"
              } pl-12 md:pl-0 md:px-12`}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-300 text-sm font-semibold">
                  <Calendar size={16} className="text-blue-400" />
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