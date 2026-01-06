import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion';
import { 
  Layout, 
  Server, 
  ShieldCheck, 
  Layers,
  Lock,
  ScanEye // Icono nuevo para el escáner
} from 'lucide-react';

// ─── DEFINICIÓN DEL ARSENAL TECNOLÓGICO ───
const techStack = [
  {
    category: "Core & Frontend Moderno",
    description: "Experiencias de usuario rápidas, reactivas y tipadas.",
    icon: <Layout className="w-6 h-6 text-blue-400" />,
    items: [
      { name: "Next.js 15", logo: "https://cdn.simpleicons.org/nextdotjs/white", color: "hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:border-white/80" },
      { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB", color: "hover:shadow-[0_0_20px_rgba(97,218,251,0.3)] hover:border-[#61DAFB]/80" },
      { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript/3178C6", color: "hover:shadow-[0_0_20px_rgba(49,120,198,0.3)] hover:border-[#3178C6]/80" },
      { name: "Tailwind", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4", color: "hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:border-[#06B6D4]/80" },
      { name: "Framer", logo: "https://cdn.simpleicons.org/framer/0055FF", color: "hover:shadow-[0_0_20px_rgba(0,85,255,0.3)] hover:border-[#0055FF]/80" }
    ]
  },
  {
    category: "Backend & Arquitectura Segura",
    description: "Lógica de negocio robusta, escalable y protegida.",
    icon: <Server className="w-6 h-6 text-emerald-400" />,
    items: [
      { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/339933", color: "hover:shadow-[0_0_20px_rgba(51,153,51,0.3)] hover:border-[#339933]/80" },
      { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql/4169E1", color: "hover:shadow-[0_0_20px_rgba(65,105,225,0.3)] hover:border-[#4169E1]/80" },
      { name: "Prisma", logo: "https://cdn.simpleicons.org/prisma/white", color: "hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:border-white/80" },
      { name: "Java", logo: "https://cdn.simpleicons.org/openjdk/white", color: "hover:shadow-[0_0_20px_rgba(248,0,0,0.3)] hover:border-red-400/80" },
      { name: "Auth / JWT", logo: "https://cdn.simpleicons.org/jsonwebtokens/white", color: "hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:border-pink-500/80" }
    ]
  },
  {
    category: "DevOps & Ciberseguridad",
    description: "Despliegue continuo, contenedores y auditoría.",
    icon: <ShieldCheck className="w-6 h-6 text-orange-400" />,
    items: [
      { name: "Docker", logo: "https://cdn.simpleicons.org/docker/2496ED", color: "hover:shadow-[0_0_20px_rgba(36,150,237,0.3)] hover:border-[#2496ED]/80" },
      { name: "AWS", logo: "https://cdn.simpleicons.org/amazonaws/FF9900", color: "hover:shadow-[0_0_20px_rgba(255,153,0,0.3)] hover:border-[#FF9900]/80" },
      { name: "Linux", logo: "https://cdn.simpleicons.org/linux/white", color: "hover:shadow-[0_0_20px_rgba(255,255,0,0.3)] hover:border-yellow-200/80" },
      { name: "Kali Linux", logo: "https://cdn.simpleicons.org/kalilinux/557C94", color: "hover:shadow-[0_0_20px_rgba(85,124,148,0.3)] hover:border-[#557C94]/80" },
      { name: "Git", logo: "https://cdn.simpleicons.org/git/F05032", color: "hover:shadow-[0_0_20px_rgba(240,80,50,0.3)] hover:border-[#F05032]/80" }
    ]
  }
];

export function Tecnologias() {
  // Lógica del Spotlight Unificado
  const mouseX = useMotionValue(-0);
  const mouseY = useMotionValue(-0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section 
      id="tecnologias" 
      className="relative pt-5 pb-20 md:pb-32 bg-[#0b1220] overflow-hidden group/section"
      onMouseMove={handleMouseMove}
    >
      
      {/* ─── FONDO & ESCÁNER DE SEGURIDAD ─── */}
      <div className="absolute inset-0 pointer-events-none">
          {/* Grid de fondo */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
          
          {/* LÍNEA LÁSER DE ESCANEO (Efecto Security) */}
          <motion.div 
            animate={{ top: ["0%", "100%"], opacity: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
            className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent shadow-[0_0_15px_#10b981] z-0 opacity-50"
          />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Cabecera */}
        <div className="text-center mb-16 relative z-10">
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-4 backdrop-blur-md"
          >
            <Layers size={14} className="text-indigo-400" />
            <span className="text-xs font-semibold text-indigo-300 uppercase tracking-wider">Arsenal Técnico</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Dominio <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 animate-gradient-x">Tecnológico</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Stack optimizado para el rendimiento y blindado para la seguridad.
          </p>
        </div>

        {/* ─── SPOTLIGHT GRID ─── */}
        <div className="group/grid grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          
          {/* El Spotlight que viaja por detrás de las tarjetas */}
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover/section:opacity-100"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  600px circle at ${mouseX}px ${mouseY}px,
                  rgba(59, 130, 246, 0.15),
                  transparent 80%
                )
              `,
            }}
          />

          {techStack.map((category, index) => (
            <SpotlightCard key={index} index={index} mouseX={mouseX} mouseY={mouseY}>
              
              <div className="relative z-10 h-full flex flex-col">
                 {/* Icono y Título */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-700/50 shadow-inner group-hover/card:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover/card:text-blue-200 transition-colors">{category.category}</h3>
                    <p className="text-xs text-slate-500 font-medium">{category.description}</p>
                  </div>
                </div>

                {/* Lista de Tecnologías (Chips Interactivos) */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.items.map((tech, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`
                        relative px-3 py-2 rounded-lg border border-slate-800 bg-[#0b1220]/50 
                        text-sm font-medium flex items-center gap-2 text-slate-300
                        transition-all duration-200 cursor-default group/tech
                        ${tech.color}
                      `}
                    >
                      {/* Logo */}
                      <img 
                        src={tech.logo} 
                        alt={tech.name} 
                        className="w-4 h-4 opacity-70 group-hover/tech:opacity-100 transition-opacity" 
                      />
                      <span className="group-hover/tech:text-white">{tech.name}</span>
                      
                      {/* Brillo sutil dentro del chip */}
                      <div className="absolute inset-0 rounded-lg bg-white/5 opacity-0 group-hover/tech:opacity-100 transition-opacity pointer-events-none" />
                    </motion.div>
                  ))}
                </div>
              </div>

            </SpotlightCard>
          ))}
        </div>

        {/* Footer: Scan Status */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 text-slate-500 text-sm bg-slate-950/80 px-6 py-2 rounded-full border border-slate-800 shadow-xl backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-center font-mono">
              System Status: <span className="text-emerald-400 font-bold">SECURE & OPTIMIZED</span>
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

// ─── COMPONENTE CARD CON BORDE REVELADO ───
function SpotlightCard({ children, index, mouseX, mouseY }: { children: React.ReactNode, index: number, mouseX: any, mouseY: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group/card relative rounded-3xl bg-slate-900 border border-white/5 px-6 py-8 shadow-2xl overflow-hidden"
    >
      {/* El "Spotlight" interno para el borde. 
         Usamos useMotionTemplate para mover el gradiente basado en la posición global del mouse 
         pero ajustado al contenedor padre (gracias al contexto relativo)
      */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover/card:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              500px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Patrón de ruido sutil para textura */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>

      {children}
    </motion.div>
  );
}