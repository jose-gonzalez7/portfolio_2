import { motion } from 'framer-motion';
import { 
  Layout, 
  Server, 
  ShieldCheck, 
  Layers,
  Lock
} from 'lucide-react';

// ─── DEFINICIÓN DEL ARSENAL TECNOLÓGICO ───
const techStack = [
  {
    category: "Core & Frontend Moderno",
    description: "Experiencias de usuario rápidas, reactivas y tipadas.",
    icon: <Layout className="w-6 h-6 text-blue-400" />,
    items: [
      { name: "Next.js 15", logo: "https://cdn.simpleicons.org/nextdotjs/white", color: "hover:border-white/50" },
      { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB", color: "hover:border-[#61DAFB]/50" },
      { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript/3178C6", color: "hover:border-[#3178C6]/50" },
      { name: "Tailwind CSS", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4", color: "hover:border-[#06B6D4]/50" },
      { name: "Framer Motion", logo: "https://cdn.simpleicons.org/framer/0055FF", color: "hover:border-[#0055FF]/50" }
    ]
  },
  {
    category: "Backend & Arquitectura Segura",
    description: "Lógica de negocio robusta, escalable y protegida.",
    icon: <Server className="w-6 h-6 text-emerald-400" />,
    items: [
      { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/339933", color: "hover:border-[#339933]/50" },
      { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql/4169E1", color: "hover:border-[#4169E1]/50" },
      { name: "Prisma", logo: "https://cdn.simpleicons.org/prisma/white", color: "hover:border-white/50" },
      { name: "Java", logo: "https://cdn.simpleicons.org/openjdk/white", color: "hover:border-red-400/50" }, // Java/OpenJDK
      { name: "JWT / Auth", logo: "https://cdn.simpleicons.org/jsonwebtokens/white", color: "hover:border-pink-500/50" }
    ]
  },
  {
    category: "DevOps & Ciberseguridad",
    description: "Despliegue continuo, contenedores y auditoría.",
    icon: <ShieldCheck className="w-6 h-6 text-orange-400" />,
    items: [
      { name: "Docker", logo: "https://cdn.simpleicons.org/docker/2496ED", color: "hover:border-[#2496ED]/50" },
      { name: "AWS", logo: "https://cdn.simpleicons.org/amazonaws/FF9900", color: "hover:border-[#FF9900]/50" },
      { name: "Linux", logo: "https://cdn.simpleicons.org/linux/white", color: "hover:border-yellow-200/50" },
      { name: "Kali Linux", logo: "https://cdn.simpleicons.org/kalilinux/557C94", color: "hover:border-[#557C94]/50" },
      { name: "Git", logo: "https://cdn.simpleicons.org/git/F05032", color: "hover:border-[#F05032]/50" }
    ]
  }
];

export function Tecnologias() {
  return (
    <section className="relative pt-0 pb-20 md:pb-32 bg-[#0b1220] overflow-hidden">
      
      {/* Fondo sutil tipo matriz */}
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
            <span className="text-xs font-semibold text-indigo-300 uppercase tracking-wider">Arsenal Técnico</span>
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
              {/* Efecto de brillo (Glow) al hacer hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icono y Título de Categoría */}
              <div className="relative z-10 flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{category.category}</h3>
                  <p className="text-xs text-slate-500 font-medium">{category.description}</p>
                </div>
              </div>

              {/* Lista de Tecnologías (Chips con Logos) */}
              <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
                {category.items.map((tech, idx) => (
                  <div 
                    key={idx}
                    className={`
                      px-3 py-1.5 rounded-lg border border-slate-700/50 bg-slate-800/30 
                      text-sm font-medium flex items-center gap-2 text-slate-300
                      hover:bg-slate-800 hover:text-white transition-all duration-300
                      cursor-default ${tech.color}
                    `}
                  >
                    {/* LOGO: Aquí está la magia */}
                    <img 
                      src={tech.logo} 
                      alt={tech.name} 
                      className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" 
                    />
                    {tech.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Integrado */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-2 text-slate-500 text-sm bg-slate-900/50 px-5 py-2 rounded-full border border-slate-800 max-w-full mx-auto">
            <Lock size={14} className="text-emerald-500 shrink-0" />
            <span className="text-center">Stack enfocado en <strong>Seguridad</strong> y <strong>Escalabilidad</strong></span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}