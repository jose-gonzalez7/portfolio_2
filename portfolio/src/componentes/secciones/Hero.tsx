import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";

// ─── ICONOS ───
const RocketIcon = ({className}: {className?:string}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>;
const GithubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 4 3c-1.25.5-2.5 1-3 1.5 0 3 .15 4.5 1.5 4.5.3 1.5 0 2 .5 3.5 0 1 .5 2.5 1 3.5-1.5 0-3 1.5-3 3.5 0 1 .5 2 1.5 2 1.5 2 1.5 3.5 1.5 4.5v4"/></svg>;
const LinkedinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;

function SocialLink({ icon, label, href }: { icon: React.ReactNode, label: string, href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition-all text-sm font-medium group border border-transparent hover:border-white/10">
      <div className="group-hover:scale-110 group-hover:text-blue-400 transition-transform duration-300">{icon}</div>
      <span>{label}</span>
    </a>
  );
}

export function Hero() {
  // Lógica para el efecto Tilt 3D en la tarjeta de código
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Lógica para el fondo Spotlight (Linterna)
  const spotX = useMotionValue(-100);
  const spotY = useMotionValue(-100);
  
  function handleSpotlightMove({ clientX, clientY }: React.MouseEvent) {
    spotX.set(clientX);
    spotY.set(clientY);
  }

  return (
    <section 
      id="inicio" 
      onMouseMove={handleSpotlightMove}
      className="relative flex min-h-[calc(100vh-4rem)] items-center pt-36 pb-20 overflow-hidden bg-[#0b1220]"
    >
      
      {/* ───────────────────────────── */}
      {/* FONDO: Grid + Spotlight FX    */}
      {/* ───────────────────────────── */}
      <div className="absolute inset-0 z-0">
        {/* Grid estático */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        
        {/* Luz que sigue al ratón */}
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                650px circle at ${spotX}px ${spotY}px,
                rgba(14, 165, 233, 0.15),
                transparent 80%
              )
            `,
          }}
        />
      </div>

      <div className="relative w-full max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center z-10">
        
        {/* ─── COLUMNA IZQUIERDA: Texto ─── */}
        <div className="flex flex-col gap-8 text-center lg:text-left">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="mx-auto lg:mx-0 inline-flex items-center gap-2 w-fit rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 px-4 py-1.5 text-xs font-bold tracking-wide uppercase shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-shadow cursor-default">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              Disponible para nuevos retos
            </span>
          </motion.div>

          <div className="space-y-2">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-white"
            >
              SI LO PUEDES <br />
              IMAGINAR
            </motion.h1>
            
            <motion.h1 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5, delay: 0.2 }}
               className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1]"
            >
              LO PUEDES <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 animate-gradient-x">
                PROGRAMAR.
              </span>
            </motion.h1>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate-400 max-w-xl mx-auto lg:mx-0 text-lg leading-relaxed"
          >
            Transformo ideas complejas en código elegante. Especialista Full Stack enfocado en <span className="text-slate-200 font-semibold">arquitecturas escalables</span> y experiencias de usuario fluidas.
          </motion.p>
          
          {/* BOTONES */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start"
          >
            <a href="#proyectos" className="group relative inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:-translate-y-1">
              Ver Proyectos
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
            </a>
            <a href="#contacto" className="inline-flex items-center justify-center gap-2 border border-slate-700 bg-slate-800/30 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-medium transition-all hover:-translate-y-1 hover:border-slate-500">
              Contáctame
            </a>
          </motion.div>
          
           {/* REDES SOCIALES */}
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.5, delay: 0.5 }}
             className="flex items-center justify-center lg:justify-start gap-4 pt-4"
           >
             <SocialLink icon={<GithubIcon />} label="GitHub" href="https://github.com/jose-gonzalez7" />
             <SocialLink icon={<LinkedinIcon />} label="LinkedIn" href="https://linkedin.com/in/jose-antonio-gonzalez" />
             <SocialLink icon={<MailIcon />} label="Email" href="mailto:tu@email.com" />
          </motion.div>

        </div>

        {/* ─── COLUMNA DERECHA: Tarjeta 3D Interactiva ─── */}
        <div className="relative w-full max-w-xl mx-auto lg:ml-auto lg:mr-0 perspective-1000" onMouseMove={handleMouseMove}>
          
          <TiltCard mouseX={mouseX} mouseY={mouseY} />

          {/* Elementos decorativos de fondo detrás de la tarjeta */}
          <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[80px] -z-10 animate-pulse-slow" />
          <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-[80px] -z-10 animate-pulse-slow delay-1000" />
        </div>

      </div>
    </section>
  );
}

// ─── COMPONENTE TARJETA TILT 3D ───
function TiltCard({ mouseX, mouseY }: { mouseX: any, mouseY: any }) {
  const rotateX = useTransform(mouseY, [0, 600], [5, -5]);
  const rotateY = useTransform(mouseX, [0, 600], [-5, 5]);

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative rounded-2xl bg-[#0e1625]/90 border border-slate-700/50 shadow-2xl backdrop-blur-sm transition-shadow hover:shadow-blue-500/10"
    >
      {/* Cohete flotante que sale de la tarjeta */}
      <motion.div 
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-8 -right-8 z-30 p-4 bg-slate-800 border border-slate-700 rounded-2xl shadow-xl hidden sm:block transform rotate-12"
      >
        <RocketIcon className="text-blue-400 w-8 h-8" />
      </motion.div>

      {/* Header de la ventana */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-[#0b1220]/50 rounded-t-2xl">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="text-xs text-slate-500 font-mono flex gap-2">
           <span className="text-blue-400">⚛️</span> portfolio.ts
        </div>
        <div className="w-10"></div>
      </div>

      {/* Contenido del Código */}
      <div className="p-6 sm:p-8 font-mono text-[13px] sm:text-sm leading-7 text-slate-300 overflow-x-auto relative group">
        
        {/* Efecto Scanline sutil */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[size:100%_4px] pointer-events-none opacity-20" />

        <pre>
          <code>
            <span className="text-purple-400">const</span> <span className="text-blue-400">Developer</span> <span className="text-slate-400">=</span> <span className="text-yellow-400">{`{`}</span>{'\n'}
            {'  '}name: <span className="text-green-400">'Jose González'</span>,{'\n'}
            {'  '}role: <span className="text-green-400">'Full Stack Architect'</span>,{'\n'}
            {'  '}skills: <span className="text-yellow-400">[</span>{'\n'}
            {'    '}<span className="text-cyan-400">'React'</span>, <span className="text-cyan-400">'Next.js'</span>, <span className="text-cyan-400">'Node.js'</span>,{'\n'}
            {'    '}<span className="text-cyan-400">'AWS'</span>, <span className="text-cyan-400">'Cybersecurity'</span>{'\n'}
            {'  '}<span className="text-yellow-400">]</span>,{'\n'}
            {'  '}hardWorker: <span className="text-red-400">true</span>,{'\n'}
            {'  '}quickLearner: <span className="text-red-400">true</span>{'\n'}
            <span className="text-yellow-400">{`}`}</span>;{'\n'}
            {'\n'}
            <span className="text-slate-500">// Ready to deploy production code</span>{'\n'}
            <span className="text-purple-400">await</span> Developer.launch(<span className="text-green-400">'NextProject'</span>);
          </code>
        </pre>
      </div>
      
      {/* Footer de la ventana */}
      <div className="px-5 py-3 border-t border-slate-800 bg-[#0b1220]/50 flex justify-between items-center rounded-b-2xl">
         <div className="flex gap-4 text-[10px] text-slate-500 font-mono">
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Server: Online</span>
            <span>Latencia: 24ms</span>
         </div>
         <span className="text-[10px] text-blue-400 font-mono">v2.0.0</span>
      </div>
    </motion.div>
  );
}