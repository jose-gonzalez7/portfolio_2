import { motion } from 'framer-motion';

// ─── DATOS: MODIFICA TU EDUCACIÓN AQUÍ ───
const educationData = [
  {
    period: "2026 - Actualidad",
    title: "Especialidad en Ciberseguridad",
    institution: "IES ZAIDÍN VERGELES (Granada)",
    description: "Enfoque en seguridad defensiva y ofensiva, auditorías de sistemas, análisis forense y securización de infraestructuras críticas.",
    tags: ["Ethical Hacking", "SIEM/SOAR", "Cloud Security", "Pentesting"],
    icon: "verified_user" 
  },
  {
    period: "2024 - 2026",
    title: "Desarrollo de Aplicaciones Web (DAW)",
    institution: "IES Alonso Cano (Granada)",
    description: "Dominio del ecosistema web moderno. Creación de aplicaciones escalables, interactivas y optimizadas para el rendimiento.",
    tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "Docker"],
    icon: "language"
  },
  {
    period: "2022 - 2024",
    title: "Desarrollo de Aplicaciones Multiplataforma (DAM)",
    institution: "CES Cristo Rey (Granada)",
    description: "Base sólida en lógica de programación, gestión de bases de datos relacionales y desarrollo de interfaces multiplataforma.",
    tags: ["C++ Fundamentals", "Java Server Side", "BBDD", "Programación Multihilo"],
    icon: "devices"
  }
];

const certificationsData = [
  {
    year: "2024",
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    icon: "cloud", // Lucide o similar
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20"
  },
  {
    year: "2023",
    title: "Google Data Analytics Professional",
    issuer: "Google",
    icon: "bar_chart",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20"
  },
  {
    year: "2022",
    title: "Meta Front-End Developer",
    issuer: "Meta",
    icon: "html",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20"
  }
];

// ─── COMPONENTE PRINCIPAL ───
export function Educacion() {
  return (
    <section id="educacion" className="relative pt-3 md:pt-8 pb-20 md:pb-12 overflow-hidden bg-[#0b1220]">
      
      {/* Fondo decorativo (Glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        
        {/* TITULO DE LA SECCIÓN */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-xs font-semibold text-blue-300 uppercase tracking-wider">Formación Académica</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Forjando el futuro a través <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              del conocimiento continuo.
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Un recorrido por mi trayectoria educativa, donde la teoría se encuentra con la práctica para crear soluciones de software sólidas.
          </motion.p>
        </div>

        {/* ─── LÍNEA DE TIEMPO (TIMELINE) ─── */}
        <div className="relative max-w-5xl mx-auto mb-32">
          {/* Línea Central */}
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-800 md:-translate-x-1/2">
             <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-500 to-transparent opacity-40"></div>
          </div>

          {educationData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-16 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Contenido (Tarjeta) */}
              <div className="md:w-1/2 ml-12 md:ml-0">
                <div className={`p-6 rounded-2xl bg-[#0e1625] border border-slate-800 hover:border-blue-500/30 transition-all duration-300 shadow-xl hover:shadow-blue-500/5 group ${
                   index % 2 === 0 ? "md:text-left" : "md:text-right"
                }`}>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <div className={`flex items-center gap-2 mb-4 text-slate-400 text-sm font-medium ${
                     index % 2 === 0 ? "justify-start" : "md:justify-end justify-start"
                  }`}>
                    <span className="text-blue-500">@</span> {item.institution}
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className={`flex flex-wrap gap-2 ${
                     index % 2 === 0 ? "justify-start" : "md:justify-end justify-start"
                  }`}>
                    {item.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 rounded-md bg-slate-800/50 border border-slate-700 text-xs text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Punto Central (Icono) */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-[#0b1220] border-2 border-blue-500 z-10 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
              </div>

              {/* Fecha (Lado opuesto) */}
              <div className={`md:w-1/2 flex items-center ${
                 index % 2 === 0 ? "md:justify-end" : "md:justify-start"
              } ml-12 md:ml-0`}>
                <span className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold">
                  {item.period}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ─── SECCIÓN DE CERTIFICACIONES ─── */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8 px-2">
            <h3 className="text-2xl font-bold text-white">Certificaciones & Cursos</h3>
            <a href="#" className="text-blue-400 text-sm font-medium hover:underline flex items-center gap-1">
              Ver credenciales <span>→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificationsData.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="group relative p-6 rounded-xl bg-[#0e1625] border border-slate-800 hover:border-slate-600 transition-all hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-2 rounded-lg ${cert.bg} ${cert.border} ${cert.color}`}>
                    {/* SVG genérico o usar librería de iconos */}
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-xs font-mono text-slate-500">{cert.year}</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h4>
                <p className="text-sm text-slate-400">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}