import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { 
  Layout, 
  Server, 
  ShieldCheck, 
  Layers,
  Globe // Fallback
} from 'lucide-react';

// ─── 1. ICONOS SVG NATIVOS (BULLETPROOF) ───
// Estos iconos nunca fallarán porque son código, no imágenes externas.
const BrandIcons: Record<string, React.ReactNode> = {
  "Next.js 15": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white"><path d="M24 12.073c.005-.073.005-.146.005-.22 0-6.627-5.373-12-12-12S0 5.233 0 11.853c0 .073 0 .147.005.22C.11 18.61 5.42 23.853 12 23.853c6.58 0 11.89-5.243 11.995-11.78zM12 22.18c-5.707 0-10.327-4.62-10.327-10.327 0-.063 0-.127.005-.19l7.04 9.175 1.288-1.57-8.03-10.457c1.378-1.78 3.535-2.923 5.952-2.923 4.195 0 7.61 3.327 7.765 7.505l-4.7-6.115-1.336 1.62 5.87 7.64c-1.02 1.51-2.73 2.493-4.66 2.493l1.133-1.47 1.336 1.62z"/></svg>
  ),
  "React": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-[#61DAFB]"><path d="M12 21.317a9.317 9.317 0 1 0 0-18.634 9.317 9.317 0 0 0 0 18.634z" fill="none"></path><path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 17.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15z" fill="none"></path><path d="M12 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"></path><circle cx="12" cy="12" r="2"></circle><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="10" ry="4.5" cx="12" cy="12"></ellipse><ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(60 12 12)"></ellipse><ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(120 12 12)"></ellipse></g></svg>
  ),
  "TypeScript": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-[#3178C6]"><path d="M2 2h20v20H2V2zm16.11 15.65v-6.5h-1.63v-1.55h4.94v1.55h-1.63v6.5h-1.68zm-5.69 0c-2.18 0-3.32-1.07-3.32-2.88 0-1.74 1.12-2.88 3.23-2.88 1.16 0 2.05.34 2.58.74l-.65 1.48c-.46-.35-1.12-.66-1.92-.66-.99 0-1.48.51-1.48 1.25 0 .84.6 1.15 1.76 1.41 1.63.36 2.47.96 2.47 2.62 0 1.83-1.22 2.92-3.41 2.92-1.27 0-2.39-.42-2.95-.87l.71-1.45c.48.35 1.34.75 2.23.75 1.05 0 1.56-.5 1.56-1.28 0-.82-.54-1.16-1.81-1.45z"/></svg>
  ),
  "Tailwind": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-[#06B6D4]"><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/></svg>
  ),
  "Framer": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white"><path d="M4 0h16v8h-8zM4 12h8v8zM4 8h8l8 8H4z"/></svg>
  ),
  "Node.js": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-[#339933]"><path d="M12 2l9.6 5.3v10.7L12 23.3l-9.6-5.3V7.3L12 2zm1 14.8v-4.5l4-2.3V6.7l-4.5 2.6-4.5-2.6v3.3l4 2.3v4.5l-4-2.3v-4.5l-4 2.3v3.3l8.5 4.9 8.5-4.9v-3.3l-4-2.3z"/></svg>
  ),
  "PostgreSQL": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-[#4169E1]"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/></svg>
  ),
  "Prisma": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white"><path d="M22.037 22.5L12 2.6 1.963 22.5h20.074zM12 6.77L18.42 19.5H5.58L12 6.77z"/></svg>
  ),
  "Java": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-[#ED8B00]"><path d="M12.9 16.9c-2.5.7-5.5 1-6.1-.5-.4-1.1 1.6-1.9 3.5-2.4 2.6-.7 6.6-1.1 6.6-1.1s-1.8-1.5-2.7-1.8c-1.7-.6-5.4-.5-5.9 1-.2.5.1 1.4.1 1.4s-1.3-.9-1.3-1.8c0-1.9 4.3-2.6 7.6-2.2 1.7.2 3.6 1 3.6 1s-1.6-1.6-3.2-2.1c-2.5-.8-6.9-.6-8 1.5-.4.8 0 1.9 0 1.9s-1.1-1.3-.9-2.4c.3-1.6 3.9-2.7 7.7-2.3 2.1.2 4.4 1.3 4.4 1.3s-1.7-2-3.8-2.6C12.3 4.1 7.6 4.3 6 7c-.6 1.1-.3 2.4-.3 2.4s-1-1.6-.7-3.1C5.6 4.6 9 3 13 3.3c2.5.2 5 1.7 5 1.7s-2-2.7-5.1-3.2c-3.7-.6-8 .3-9.4 3.7C2 8.7 3.3 11 3.3 11s-1.6-2.1-1.3-4.2C2.6 4.1 7.2 1.9 11.9 2c4.7.2 7.8 2.8 7.8 2.8s-2.1-3.6-6.6-3.9C5.8.3 0 4.6 0 10.9c0 2.2 1.3 3.6 1.3 3.6s-1-1.8-1-4.2c0-3.8 3.1-8.1 9.4-8.6C16.6 1.1 22 6 22 6s-4-4.2-10.9-3.7C4.3 2.9 1 7.4 1 12.3c0 3 1.9 4.9 1.9 4.9s-1.6-2.6-1.3-5.8c.4-3.5 4.3-7 10.1-6.9 4.3.1 7.8 3.1 7.8 3.1s-3-3.8-8.6-3.8c-4.4 0-7.8 2.8-7.8 5.4 0 2.3 1.8 3.8 1.8 3.8s-1.4-2.1-1-4.5c.6-3.1 4.4-5.5 8.8-5.3 3.7.2 6.7 2.6 6.7 2.6s-2.4-3.2-7.2-3.2c-3.9 0-6.8 2.2-7.2 4.8-.3 1.9.8 3.3.8 3.3s-1.2-1.8-.7-3.9c.7-2.7 4.9-4.5 8.9-4 3.3.4 5.9 2.5 5.9 2.5s-2.1-2.9-6.3-2.9c-3.5 0-6.1 1.7-6.7 3.7-.5 1.7.3 2.9.3 2.9s-1-1.6-.5-3.3c.7-2.1 4.1-3.6 7.9-3.1 3.1.4 5.3 2.2 5.3 2.2s-1.9-2.4-5.3-2.4c-2.9 0-5.1 1.3-5.8 2.9-.6 1.3 0 2.3 0 2.3s-1-.9-.6-2.4c.5-1.9 3.5-3.1 6.8-2.6 2.7.4 4.5 1.8 4.5 1.8s-1.5-1.9-4.3-1.9c-2.6 0-4.4 1.1-5 2.4-.5 1 0 1.9 0 1.9s-1.1-.9-.6-2.1c.5-1.4 2.8-2.3 5.5-1.9 2.1.3 3.6 1.4 3.6 1.4s-1.2-1.3-3.4-1.3c-2.1 0-3.6.8-4.1 1.8-.4.7-.1 1.4-.1 1.4s-.5-.7-.2-1.5c.4-.9 2-1.5 4-1.3 1.5.2 2.6.9 2.6.9s-.8-.8-2.4-.8c-1.4 0-2.5.5-2.9 1.1-.2.5 0 .9 0 .9s-.3-.4-.1-.9c.2-.5 1.3-.9 2.6-.8 1 .1 1.7.5 1.7.5s-.6-.4-1.6-.4c-.9 0-1.6.3-1.8.7-.1.3 0 .5 0 .5s-.2-.2-.1-.5c.2-.3.9-.5 1.7-.4.6.1 1 .3 1 .3s-.3-.2-.9-.2c-.6 0-1 .2-1.1.4-.1.1-.1.3-.1.3s-.1-.1-.1-.3c0-.2.4-.3.9-.3.4 0 .7.1.7.1s-.2-.1-.6-.1c-.4 0-.6.1-.7.2 0 .1 0 .2 0 .2s-.1-.1-.1-.2c0-.1.3-.2.6-.2.1 0 .3 0 .3.1 0 0-.1 0-.3 0-.2 0-.3.1-.3.1s0-.1.1-.1c.1 0 .2 0 .2.1 0 0-.1 0-.2 0-.1 0-.1 0-.1.1 0 0 0-.1.1-.1.1 0 .1 0 .1 0zm.6 3.1c-1.5-.1-3 .2-4.1.9-.9.6-.9 1.4-.9 1.4s-.3-1.1 1-2.1c1.5-1.2 4-1.3 5.7-.7.6.2 1.1.5 1.1.5s-.5-.3-1.2-.3c-1 0-1.6.2-1.6.3z"/></svg>
  ),
  "Auth / JWT": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-[#D63AFF]"><path d="M13.9 2.01L3.9 6.16C3.31 6.41 3 7.03 3 7.66V13.5c0 5.08 3.58 9.38 8.32 10.42.45.1.91.1 1.36 0 4.74-1.04 8.32-5.34 8.32-10.42V7.66c0-.64-.31-1.25-.9-1.5L14.6 2.01c-.22-.09-.48-.09-.7 0zM12 16.5l-4-4h2.5V9h3v3.5H16l-4 4z"/></svg>
  ),
  "Docker": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-[#2496ED]"><path d="M13.8 9.3h2.5v2.5h-2.5zm-3.6 0h2.5v2.5h-2.5zm-3.6 0h2.5v2.5H6.6zm-3.6 2.5h2.5v2.5H3zm13.3 1.3c2.4 0 4.4 1.1 5.3 2.8H2.1c.5-3.3 3.6-6 7.3-6.4V9.3h2.5v.3h.7c.4 0 .9.1 1.2.2z"/></svg>
  ),
  "AWS": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-[#FF9900]"><path d="M18.1 14.1c-1.3 1.7-3.6 2.8-5.8 2.8-3.4 0-6-2.5-6-6.1 0-3.4 2.4-6.1 6.2-6.1 2.3 0 4.2 1.2 5.3 2.6l-1.3 1.1c-.8-1-2.2-1.9-4-1.9-2.6 0-4.3 1.9-4.3 4.3 0 2.6 1.9 4.3 4.2 4.3 1.5 0 3.2-.8 4.2-2.1l1.5 1.1z"/></svg>
  ),
  "Linux": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white"><path d="M12 20.52c3.3 0 5.9-2.6 5.9-5.9 0-3.3-2.6-5.9-5.9-5.9-3.3 0-5.9 2.6-5.9 5.9 0 3.3 2.6 5.9 5.9 5.9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>
  ),
  "Kali Linux": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-[#557C94]"><path d="M1.77 19.385l8.77-5.952-3.87-4.417L1.77 19.385zm20.46-14.77l-10.5 7.125 4.632 5.285 5.868-12.41zM11.97 12.3L6.035 16.327l11.93-8.093L11.97 12.3zm.06 1.2l-3.33 2.258 7.305-4.957-3.975 2.7zm-4.74 3.215l8.91-6.046L5.34 17.65l1.95-.935z"/></svg>
  ),
  "Git": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-[#F05032]"><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.652 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.421-.225-.6-.404-.538-.539-.67-1.33-.4-1.993L7.665 3.667 2.451 8.881c-.605.603-.605 1.582 0 2.185l10.48 10.48c.604.605 1.582.605 2.186 0l10.43-10.43c.605-.603.605-1.582-.001-2.186z"/></svg>
  )
};

// ─── DEFINICIÓN DEL ARSENAL TECNOLÓGICO ───
const techStack = [
  {
    category: "Core & Frontend Moderno",
    description: "Experiencias de usuario rápidas, reactivas y tipadas.",
    icon: <Layout className="w-6 h-6 text-blue-400" />,
    items: [
      { name: "Next.js 15", color: "hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:border-white/80" },
      { name: "React", color: "hover:shadow-[0_0_20px_rgba(97,218,251,0.3)] hover:border-[#61DAFB]/80" },
      { name: "TypeScript", color: "hover:shadow-[0_0_20px_rgba(49,120,198,0.3)] hover:border-[#3178C6]/80" },
      { name: "Tailwind", color: "hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:border-[#06B6D4]/80" },
      { name: "Framer", color: "hover:shadow-[0_0_20px_rgba(0,85,255,0.3)] hover:border-[#0055FF]/80" }
    ]
  },
  {
    category: "Backend & Arquitectura Segura",
    description: "Lógica de negocio robusta, escalable y protegida.",
    icon: <Server className="w-6 h-6 text-emerald-400" />,
    items: [
      { name: "Node.js", color: "hover:shadow-[0_0_20px_rgba(51,153,51,0.3)] hover:border-[#339933]/80" },
      { name: "PostgreSQL", color: "hover:shadow-[0_0_20px_rgba(65,105,225,0.3)] hover:border-[#4169E1]/80" },
      { name: "Prisma", color: "hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:border-white/80" },
      { name: "Java", color: "hover:shadow-[0_0_20px_rgba(248,0,0,0.3)] hover:border-red-400/80" },
      { name: "Auth / JWT", color: "hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:border-pink-500/80" }
    ]
  },
  {
    category: "DevOps & Ciberseguridad",
    description: "Despliegue continuo, contenedores y auditoría.",
    icon: <ShieldCheck className="w-6 h-6 text-orange-400" />,
    items: [
      { name: "Docker", color: "hover:shadow-[0_0_20px_rgba(36,150,237,0.3)] hover:border-[#2496ED]/80" },
      { name: "AWS", color: "hover:shadow-[0_0_20px_rgba(255,153,0,0.3)] hover:border-[#FF9900]/80" },
      { name: "Linux", color: "hover:shadow-[0_0_20px_rgba(255,255,0,0.3)] hover:border-yellow-200/80" },
      { name: "Kali Linux", color: "hover:shadow-[0_0_20px_rgba(85,124,148,0.3)] hover:border-[#557C94]/80" },
      { name: "Git", color: "hover:shadow-[0_0_20px_rgba(240,80,50,0.3)] hover:border-[#F05032]/80" }
    ]
  }
];

export function Tecnologias() {
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
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
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
            <span className="text-xs font-semibold text-indigo-300 uppercase tracking-wider">Stack Técnico</span>
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
                      {/* Logo SVG Nativo */}
                      <div className="w-4 h-4 text-current">
                         {BrandIcons[tech.name] || <Globe size={16} />}
                      </div>
                      
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
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>
      {children}
    </motion.div>
  );
}