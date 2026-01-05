import React from 'react';

// Iconos (Mismos que antes...)
const RocketIcon = ({className}: {className?:string}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>;
const GithubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 4 3c-1.25.5-2.5 1-3 1.5 0 3 .15 4.5 1.5 4.5.3 1.5 0 2 .5 3.5 0 1 .5 2.5 1 3.5-1.5 0-3 1.5-3 3.5 0 1 .5 2 1.5 2 1.5 2 1.5 3.5 1.5 4.5v4"/></svg>;
const LinkedinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;

function SocialLink({ icon, label, href }: { icon: React.ReactNode, label: string, href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm font-medium group">
      <div className="group-hover:scale-110 transition-transform">{icon}</div>
      <span>{label}</span>
    </a>
  );
}

export function Hero() {
  return (
    <section 
      id="inicio" 
      className="relative flex min-h-[calc(100vh-4rem)] items-center pt-20 pb-32 lg:pb-40 overflow-hidden"
    >
      
      {/* ───────────────────────────── */}
      {/* FONDO: Gradientes / Glows */}
      {/* ───────────────────────────── */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -z-10" />

      {/* CAMBIO CLAVE AQUÍ:
         - Mantenemos max-w-7xl (para que no se separe demasiado el contenido)
         - CAMBIAMOS px-5 sm:px-6 POR px-6 md:px-10 (Para que coincida EXACTO con el Navbar)
      */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* COLUMNA IZQUIERDA: Texto */}
        <div className="flex flex-col gap-8 text-center lg:text-left relative z-10">
          
          <span className="mx-auto lg:mx-0 inline-flex items-center gap-2 w-fit rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 px-3 py-1 text-xs font-semibold tracking-wide uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 opacity-75"></span>
            </span>
            Disponible para nuevos retos
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-white">
            SI LO PUEDES <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              IMAGINAR <br />
            </span>{' '}
            LO PUEDES PROGRAMAR.
          </h1>

          <p className="text-slate-400 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed">
            Especialista en el desarrollo de aplicaciones Full Stack con un enfoque sólido en **arquitecturas backend escalables**, optimización de bases de datos y experiencias de usuario de alto rendimiento.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">
            <a href="#proyectos" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg font-semibold transition-all shadow-lg shadow-blue-600/25">
              Ver Proyectos
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <a href="#contacto" className="inline-flex items-center justify-center gap-2 border border-slate-700 bg-slate-800/50 hover:bg-slate-800 text-white px-8 py-3.5 rounded-lg font-medium transition-all">
              Contáctame
            </a>
          </div>
          
           {/* REDES SOCIALES (Mantenemos la alineación) */}
           <div className="flex items-center justify-center lg:justify-start gap-6 pt-2 text-slate-400">
             <SocialLink icon={<GithubIcon />} label="GitHub" href="https://github.com/jose-gonzalez7" />
             <SocialLink icon={<LinkedinIcon />} label="LinkedIn" href="https://linkedin.com/in/jose-antonio-gonzalez" />
             <SocialLink icon={<MailIcon />} label="Email" href="mailto:tu@email.com" />
          </div>

        </div>

        {/* COLUMNA DERECHA: Código Backend Pro */}
        <div className="relative w-full max-w-lg mx-auto lg:ml-auto lg:mr-0">
          <div className="absolute -top-6 -right-6 z-20 p-3 bg-slate-800/80 backdrop-blur-md border border-slate-700 rounded-xl shadow-xl hidden sm:block animate-bounce-slow">
            <RocketIcon className="text-blue-400 w-6 h-6" />
          </div>

          <div className="relative rounded-xl bg-[#0e1625] border border-slate-800 shadow-2xl overflow-hidden transform transition-transform hover:scale-[1.02] duration-500">
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-[#0e1625]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="text-xs text-slate-500 font-mono">portfolio.ts</div>
              <div className="w-10"></div>
            </div>

            <div className="p-6 font-mono text-[13px] sm:text-sm leading-6 text-slate-300 overflow-x-auto">
              <pre>
                <code>
                  <span className="text-purple-400">const</span> <span className="text-blue-400">JoseGonzalez</span> <span className="text-slate-400">=</span> <span className="text-yellow-400">{`{`}</span>{'\n'}
                  {'  '}rol: <span className="text-green-400">'Full Stack Dev'</span>,{'\n'}
                  {'  '}backend: <span className="text-yellow-400">{`{`}</span>{'\n'}
                  {'    '}core: <span className="text-yellow-400">[</span><span className="text-green-400">'Node.js'</span>, <span className="text-green-400">'Next.js'</span>, <span className="text-green-400">'TS'</span><span className="text-yellow-400">]</span>,{'\n'}
                  {'    '}db: <span className="text-yellow-400">[</span><span className="text-green-400">'PostgreSQL'</span>, <span className="text-green-400">'Prisma'</span>, <span className="text-green-400">'Redis'</span><span className="text-yellow-400">]</span>,{'\n'}
                  {'    '}devops: <span className="text-yellow-400">[</span><span className="text-green-400">'Docker'</span>, <span className="text-green-400">'AWS'</span>, <span className="text-green-400">'CI/CD'</span><span className="text-yellow-400">]</span>{'\n'}
                  {'  '}<span className="text-yellow-400">{`}`}</span>,{'\n'}
                  {'  '}enfoque: <span className="text-green-400">'Arquitectura Limpia'</span>{'\n'}
                  <span className="text-yellow-400">{`}`}</span>;{'\n'}
                  {'\n'}
                  <span className="text-purple-400">async function</span> <span className="text-blue-400">deploy</span><span className="text-purple-400">()</span> <span className="text-yellow-400">{`{`}</span>{'\n'}
                  {'  '}<span className="text-purple-400">await</span> JoseGonzalez.build(<span className="text-green-400">'Escalabilidad'</span>);{'\n'}
                  <span className="text-yellow-400">{`}`}</span>
                </code>
              </pre>
            </div>
            
            <div className="px-4 py-2 border-t border-slate-800 bg-[#0e1625]/50 flex justify-between items-center">
               <div className="flex gap-4 text-[10px] text-slate-500 font-mono">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Online</span>
                  <span>Port: 3000</span>
               </div>
               <span className="text-[10px] text-blue-400 font-mono italic">Ready to ship</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}