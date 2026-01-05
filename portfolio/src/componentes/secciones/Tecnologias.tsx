import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Layout, 
  Server, 
  ShieldCheck, 
  Terminal, 
  Cpu, 
  Globe,
  Layers,
  Box,
  Lock
} from 'lucide-react';

// ─── DEFINICIÓN DEL ARSENAL TECNOLÓGICO ───
const techStack = [
  {
    category: "Core & Frontend Moderno",
    description: "Experiencias de usuario rápidas, reactivas y tipadas.",
    icon: <Layout className="w-6 h-6 text-blue-400" />,
    items: [
      { name: "Next.js 15", level: "Avanzado", color: "bg-white/10 text-white border-white/20" },
      { name: "React", level: "Avanzado", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
      { name: "TypeScript", level: "Experto", color: "bg-blue-600/10 text-blue-500 border-blue-600/20" },
      { name: "Tailwind CSS", level: "Experto", color: "bg-cyan-400/10 text-cyan-400 border-cyan-400/20" },
      { name: "Framer Motion", level: "Intermedio", color: "bg-purple-500/10 text-purple-400 border-purple-500/20" }
    ]
  },
  {
    category: "Backend & Arquitectura Segura",
    description: "Lógica de negocio robusta, escalable y protegida.",
    icon: <Server className="w-6 h-6 text-emerald-400" />,
    items: [
      { name: "Node.js", level: "Avanzado", color: "bg-green-500/10 text-green-400 border-green-500/20" },
      { name: "PostgreSQL", level: "Intermedio", color: "bg-blue-400/10 text-blue-300 border-blue-400/20" },
      { name: "Prisma ORM", level: "Avanzado", color: "bg-slate-500/10 text-slate-300 border-slate-500/20" },
      { name: "Java / Spring", level: "Sólido", color: "bg-red-500/10 text-red-400 border-red-500/20" },
      { name: "Auth.js", level: "Seguridad", color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20" }
    ]
  },
  {
    category: "DevOps & Ciberseguridad",
    description: "Despliegue continuo, contenedores y auditoría.",
    icon: <ShieldCheck className="w-6 h-6 text-orange-400" />,
    items: [
      { name: "Docker", level: "Esencial", color: "bg-blue-600/10 text-blue-400 border-blue-600/20" },
      { name: "AWS", level: "Cloud", color: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
      { name: "Linux / Bash", level: "Nativo", color: "bg-slate-600/10 text-slate-200 border-slate-600/20" },
      { name: "Ethical Hacking", level: "Especialidad", color: "bg-red-600/10 text-red-500 border-red-600/20" },
      { name: "CI/CD", level: "Pipeline", color: "bg-green-400/10 text-green-400 border-green-400/20" }
    ]
  }
];

export function Tecnologias() {
  return (
    <section className="relative pt-10 pb-24 md:py-32 bg-[#0b1220] overflow-hidden">
      {/* 👆 CAMBIO 1: 'pb-24' en móvil (padding-bottom grande) 
         Esto asegura que haya espacio de sobra al final en pantallas pequeñas.
      */}

      {/* Fondo sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Cabecera */}
        <div className="text-center mb-16">
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-4"
          >
            <Layers size={14} className="text-indigo-400" />
            <span className="text-xs font-semibold text-indigo-300 uppercase tracking-wider">Stack Técnico</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Dominio <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Tecnológico</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Un stack moderno y robusto, seleccionado para construir aplicaciones escalables, seguras y de alto rendimiento.
          </p>
        </div>

        {/* Grid Bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {techStack.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col h-full bg-[#0e1625] border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-slate-600 transition-colors duration-300 overflow-hidden"
            >
              {/* Efecto de brillo */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icono y Título */}
              <div className="relative z-10 flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{category.category}</h3>
                  <p className="text-xs text-slate-500 font-medium">{category.description}</p>
                </div>
              </div>

              {/* Chips */}
              <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
                {category.items.map((tech, idx) => (
                  <div 
                    key={idx}
                    className={`
                      px-3 py-1.5 rounded-lg border text-sm font-medium flex items-center gap-2
                      ${tech.color} backdrop-blur-sm
                      hover:scale-105 transition-transform cursor-default
                    `}
                  >
                    {tech.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Integrado (CORREGIDO) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          {/* 👇 CAMBIO 2: 'flex' + 'flex-wrap' + 'justify-center' 
             Esto permite que si el texto es muy largo en móviles estrechos, 
             se adapte en dos líneas en lugar de cortarse.
          */}
          <div className="flex flex-wrap justify-center items-center gap-2 text-slate-500 text-sm bg-slate-900/50 px-5 py-2 rounded-full border border-slate-800 max-w-full mx-auto">
            <Lock size={14} className="text-emerald-500 shrink-0" />
            <span className="text-center">Stack enfocado en <strong>Seguridad</strong> y <strong>Escalabilidad</strong></span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}