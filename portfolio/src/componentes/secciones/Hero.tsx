import React, { useState, useEffect } from 'react';
import { motion, useTransform, useMotionValue, useMotionTemplate } from "framer-motion";

// ─── ICONOS ───
const RocketIcon = ({className}: {className?:string}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>;
const GithubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 4 3c-1.25.5-2.5 1-3 1.5 0 3 .15 4.5 1.5 4.5.3 1.5 0 2 .5 3.5 0 1 .5 2.5 1 3.5-1.5 0-3 1.5-3 3.5 0 1 .5 2 1.5 2 1.5 2 1.5 3.5 1.5 4.5v4"/></svg>;
const LinkedinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const TerminalIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>;

// ─── COMPONENTE TIPO ESCRITURA (TYPEWRITER) ───
const CodeBlockTypewriter = () => {
  const codeString = `const Developer = {
  name: 'Jose González',
  role: 'Full Stack & Sec',
  skills: [
    'Next.js', 'React',
    'Node.js', 'AWS',
    'Ethical Hacking'
  ],
  status: 'Ready to Deploy'
};

await Developer.init();`;

  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(codeString.slice(0, i));
      i++;
      if (i > codeString.length) {
        clearInterval(intervalId);
      }
    }, 30); // Velocidad de escritura
    return () => clearInterval(intervalId);
  }, []);

  return (
    <pre className="font-mono text-[13px] sm:text-sm leading-6 text-slate-300">
      <code dangerouslySetInnerHTML={{ 
        __html: displayedText
          .replace(/const|await/g, '<span class="text-purple-400">$&</span>')
          .replace(/Developer/g, '<span class="text-blue-400">$&</span>')
          .replace(/'[^']*'/g, '<span class="text-green-400">$&</span>')
          .replace(/:/g, '<span class="text-slate-400">$&</span>')
          .replace(/\[|\]|\{|\}/g, '<span class="text-yellow-400">$&</span>')
      }} />
      <span className="inline-block w-2 h-4 ml-1 bg-blue-400 animate-pulse align-middle"></span>
    </pre>
  );
};

function SocialLink({ icon, label, href }: { icon: React.ReactNode, label: string, href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition-all text-sm font-medium group border border-transparent hover:border-white/10">
      <div className="group-hover:scale-110 group-hover:text-blue-400 transition-transform duration-300">{icon}</div>
      <span>{label}</span>
    </a>
  );
}

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotX = useMotionValue(-100);
  const spotY = useMotionValue(-100);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
    spotX.set(clientX);
    spotY.set(clientY);
  }

  return (
    <section 
      id="inicio" 
      onMouseMove={handleMouseMove}
      className="relative flex min-h-[calc(100vh-4rem)] items-center pt-36 pb-20 overflow-hidden bg-[#0b1220]"
    >
      
      {/* ─── FONDO VIVO (ATMOSFERA) ─── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        
        {/* Orbes flotantes animados */}
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -50, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, 50, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]" 
        />

        {/* Spotlight Interactivo */}
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                650px circle at ${spotX}px ${spotY}px,
                rgba(14, 165, 233, 0.1),
                transparent 80%
              )
            `,
          }}
        />
      </div>

      <div className="relative w-full max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center z-10">
        
        {/* ─── COLUMNA IZQUIERDA: TEXTO DE ALTO IMPACTO ─── */}
        <div className="flex flex-col gap-8 text-center lg:text-left">
          
          {/* Badge "Tech / Security" */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="mx-auto lg:mx-0 inline-flex items-center gap-2 w-fit rounded-lg border border-slate-700/50 bg-slate-800/50 text-slate-300 px-3 py-1.5 text-xs font-mono tracking-wide shadow-lg backdrop-blur-md">
              <TerminalIcon className="text-emerald-400 w-3.5 h-3.5" />
              <span className="text-emerald-400">sys_status:</span>
              <span className="typing-effect">Online & Available</span>
            </span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[1] text-white"
            >
              SI LO PUEDES
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-600">
              IMAGINAR
              </span>
            </motion.h1>
            
            <motion.h1 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5, delay: 0.2 }}
               className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[1]"
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
            className="text-slate-400 max-w-xl mx-auto lg:mx-0 text-lg md:text-xl leading-relaxed font-light"
          >
            Transformo ideas abstractas en <span className="text-white font-medium">arquitecturas seguras</span>. Especialista Full Stack obsesionado con el rendimiento, la escalabilidad y la ciberseguridad.
          </motion.p>
          
          {/* BOTONES PREMIUM */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-5 pt-6 justify-center lg:justify-start"
          >
            <a href="#proyectos" className="relative inline-flex h-14 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-[#0b1220] px-8 py-1 text-sm font-bold text-white backdrop-blur-3xl transition-all hover:bg-slate-900">
                Ver Proyectos 🚀
              </span>
            </a>
            
            <a href="#contacto" className="inline-flex h-14 items-center justify-center rounded-xl border border-slate-800 bg-transparent px-8 text-sm font-bold text-slate-300 transition-colors hover:bg-slate-800 hover:text-white">
              Contáctame
            </a>
          </motion.div>
          
           {/* REDES */}
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.5, delay: 0.5 }}
             className="flex items-center justify-center lg:justify-start gap-4 pt-6 border-t border-slate-800/50 mt-4"
           >
             <SocialLink icon={<GithubIcon />} label="GitHub" href="https://github.com/jose-gonzalez7" />
             <SocialLink icon={<LinkedinIcon />} label="LinkedIn" href="https://linkedin.com/in/jose-antonio-gonzalez" />
             <SocialLink icon={<MailIcon />} label="Email" href="mailto:tu@email.com" />
          </motion.div>

        </div>

        {/* ─── COLUMNA DERECHA: CODIGO INTERACTIVO ─── */}
        <div className="relative w-full max-w-xl mx-auto lg:ml-auto lg:mr-0 perspective-1000">
          
          <TiltCard mouseX={mouseX} mouseY={mouseY} />
          
        </div>

      </div>
    </section>
  );
}

// ─── COMPONENTE TARJETA 3D CON CÓDIGO AUTOGENERADO ───
function TiltCard({ mouseX, mouseY }: { mouseX: any, mouseY: any }) {
  const rotateX = useTransform(mouseY, [0, 600], [5, -5]);
  const rotateY = useTransform(mouseX, [0, 600], [-5, 5]);

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative rounded-2xl bg-[#0e1625]/80 border border-slate-700/50 shadow-2xl backdrop-blur-xl transition-shadow hover:shadow-blue-500/20 group"
    >
      {/* Cohete flotante animado */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-10 -right-10 z-30 p-4 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl shadow-2xl hidden sm:block transform rotate-12"
      >
        <RocketIcon className="text-blue-400 w-10 h-10 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
      </motion.div>

      {/* Header Ventana */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-[#0b1220]/50 rounded-t-2xl">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="text-xs text-slate-500 font-mono flex gap-2">
           <span className="text-blue-400 font-bold">~/portfolio</span> 
           <span className="text-slate-600">-- secure</span>
        </div>
        <TerminalIcon className="w-4 h-4 text-slate-600" />
      </div>

      {/* CÓDIGO: Aquí está la magia del Typewriter */}
      <div className="p-6 sm:p-8 min-h-[300px] overflow-hidden relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.2)_50%)] bg-[size:100%_4px] pointer-events-none opacity-10 z-10" />
        <CodeBlockTypewriter />
      </div>
      
      {/* Footer Ventana */}
      <div className="px-5 py-3 border-t border-slate-800 bg-[#0b1220]/50 flex justify-between items-center rounded-b-2xl">
         <div className="flex gap-4 text-[10px] text-slate-500 font-mono">
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Compilation: Success</span>
         </div>
         <span className="text-[10px] text-purple-400 font-mono">100% Secure</span>
      </div>
    </motion.div>
  );
}