import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// 1. IMPORTAMOS EMAILJS
import emailjs from '@emailjs/browser';
import { 
  Send, Mail, MapPin, Github, Linkedin, Copy, Check, Terminal,
} from 'lucide-react';

export function Contacto() {
  const formRef = useRef<HTMLFormElement>(null); // 2. REFERENCIA AL FORM
  
  // Ajustamos el estado para que sea coherente con EmailJS
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // ─── TUS CREDENCIALES DESDE .ENV ───
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("jgonzalezroman7@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Validación básica
    if (!formState.name || !formState.email || !formState.message) {
        setError("Por favor, completa todos los campos.");
        setIsSubmitting(false);
        return;
    }

    if (!formRef.current) return;

    // 3. ENVÍO REAL
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
          console.log('SUCCESS!', result.text);
          setIsSent(true);
          setFormState({ name: '', email: '', message: '' }); // Limpiar form
          
          setTimeout(() => {
            setIsSent(false);
          }, 4000);
      }, (error) => {
          console.log('FAILED...', error.text);
          setError("Hubo un error al enviar. Inténtalo más tarde.");
      })
      .finally(() => {
          setIsSubmitting(false);
      });
  };

  return (
    <section id="contacto" className="relative pt-20 pb-32 overflow-hidden bg-[#0b1220]">
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] translate-y-1/2 translate-x-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* COLUMNA IZQUIERDA (Info) */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <span className="text-xs font-bold text-purple-300 uppercase tracking-widest">iniciar comunicación</span>
            </motion.div>

            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Iniciemos <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Protocolo de Comunicación.</span>
            </motion.h2>

            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-slate-400 text-lg mb-12 max-w-md mx-auto lg:mx-0">
              ¿Tienes un proyecto en mente o quieres auditar la seguridad de tu sistema? Estoy listo para recibir la transmisión.
            </motion.p>

            {/* Email Copy Button */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="mb-10 w-full flex justify-center lg:justify-start">
               <button onClick={handleCopyEmail} className="group relative flex items-center gap-4 p-3 md:p-4 pr-6 rounded-2xl bg-[#0e1625] border border-slate-800 hover:border-purple-500/50 transition-all duration-300 w-full max-w-md lg:w-auto text-left shadow-lg hover:shadow-purple-500/10">
                 <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                 <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform shrink-0">
                   <Mail className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
                 </div>
                 <div className="flex-1 min-w-0 overflow-hidden">
                   <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-0.5 text-left">Correo Electrónico</p>
                   <p className="text-white font-mono text-sm md:text-lg truncate text-left">jgonzalezroman7@gmail.com</p>
                 </div>
                 <div className="relative w-6 h-6 flex items-center justify-center shrink-0">
                   <AnimatePresence mode='wait'>
                     {copied ? (
                       <motion.div key="check" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="text-emerald-400 absolute">
                         <Check size={20} />
                       </motion.div>
                     ) : (
                       <motion.div key="copy" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="text-slate-500 group-hover:text-white absolute">
                         <Copy size={20} />
                       </motion.div>
                     )}
                   </AnimatePresence>
                 </div>
               </button>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="flex items-center gap-4 justify-center lg:justify-start">
               <SocialBtn href="https://github.com/jose-gonzalez7" icon={<Github size={20} />} />
               <SocialBtn href="https://www.linkedin.com/in/jgonzalezroman-dev/" icon={<Linkedin size={20} />} />
               <div className="h-8 w-[1px] bg-slate-800 mx-2" />
               <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <MapPin size={16} className="text-purple-400" />
                  <span>España / Granada</span>
               </div>
            </motion.div>
          </div>

          {/* COLUMNA DERECHA (Formulario) */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative mt-8 lg:mt-0">
             <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-20 blur-lg" />
             
             <div className="relative rounded-2xl bg-[#0e1625] border border-slate-800 shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0b1220]/50">
                   <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                   </div>
                   <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                      <Terminal size={12} />
                      <span>contact.sh</span>
                   </div>
                   <div className="w-8" />
                </div>

                {/* FORMULARIO CONECTADO */}
                <form ref={formRef} onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      {/* Nombre: Atributo 'name="name"' para coincidir con EmailJS */}
                      <InputGroup 
                         label="Identidad" 
                         name="name" 
                         placeholder="Tu nombre" 
                         value={formState.name}
                         onChange={(e) => setFormState({...formState, name: e.target.value})}
                      />
                      
                      {/* Email: Atributo 'name="email"' para coincidir con EmailJS */}
                      <InputGroup 
                         label="Frecuencia (Email)" 
                         name="email"
                         placeholder="tu@email.com" 
                         type="email"
                         value={formState.email}
                         onChange={(e) => setFormState({...formState, email: e.target.value})}
                      />
                   </div>
                   
                   <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Mensaje encriptado</label>
                      <textarea 
                        name="message" // Coincide con {{message}}
                        rows={4}
                        className="w-full bg-slate-900/50 border border-slate-700 rounded-xl p-4 text-slate-300 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none placeholder:text-slate-600"
                        placeholder="Escribe tu mensaje aquí..."
                        value={formState.message}
                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                      />
                   </div>

                   {error && (
                     <p className="text-red-400 text-sm bg-red-500/10 p-2 rounded border border-red-500/20">{error}</p>
                   )}

                   <button 
                     disabled={isSubmitting || isSent}
                     className={`
                       w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all duration-300 relative overflow-hidden
                       ${isSent ? 'bg-emerald-500' : 'bg-purple-600 hover:bg-purple-500 hover:shadow-[0_0_20px_rgba(147,51,234,0.4)]'}
                       ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}
                     `}
                   >
                     <AnimatePresence mode='wait'>
                        {isSubmitting ? (
                           <motion.div key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                             <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                             <span>Estableciendo conexión...</span>
                           </motion.div>
                        ) : isSent ? (
                           <motion.div key="sent" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="flex items-center gap-2">
                             <Check size={20} />
                             <span>¡Transmisión Enviada!</span>
                           </motion.div>
                        ) : (
                           <motion.div key="idle" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="flex items-center gap-2">
                             <span>Enviar Mensaje</span>
                             <Send size={18} />
                           </motion.div>
                        )}
                     </AnimatePresence>
                   </button>

                </form>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// ─── COMPONENTES AUXILIARES ───

function InputGroup({ label, name, placeholder, type = "text", value, onChange }: { label: string, name: string, placeholder: string, type?: string, value: string, onChange: (e: any) => void }) {
  return (
    <div className="space-y-2 text-left">
       <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">{label}</label>
       <div className="relative group">
          <input 
            type={type}
            name={name} // Importante para EmailJS
            value={value}
            onChange={onChange}
            className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3.5 text-slate-300 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-slate-600"
            placeholder={placeholder}
          />
          <div className="absolute bottom-0 left-2 right-2 h-[1px] bg-purple-500 scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500" />
       </div>
    </div>
  );
}

function SocialBtn({ href, icon }: { href: string, icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all hover:-translate-y-1"
    >
      {icon}
    </a>
  );
}