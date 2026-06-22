import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Copy, Check, MapPin, Linkedin } from 'lucide-react';

export function Contacto() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [cooldownUntil, setCooldownUntil] = useState<number | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('jgonzalezroman7@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (cooldownUntil && Date.now() < cooldownUntil) {
      const secsLeft = Math.ceil((cooldownUntil - Date.now()) / 1000);
      setError(`Espera ${secsLeft}s antes de volver a enviar.`);
      return;
    }

    if (!formState.name || !formState.email || !formState.message) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? 'Error desconocido');
      }

      setIsSent(true);
      setFormState({ name: '', email: '', message: '' });
      setCooldownUntil(Date.now() + 60_000);
      setTimeout(() => setIsSent(false), 4000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Hubo un error al enviar. Inténtalo más tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="bg-[#09090b] px-6 md:px-14 py-16 md:py-24 lg:py-32 pb-32 overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em] mb-4">
            Siguiente paso
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white uppercase leading-[0.9]">
            Construyamos
            <br />
            <span style={{ WebkitTextStroke: '2px rgba(255,255,255,0.18)', color: 'transparent' }}>
              Algo Real.
            </span>
          </h2>
        </motion.div>

        <div className="h-px bg-white/10 mb-16" />

        {/* 2-col layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-10"
          >
            <p className="text-zinc-300 text-base leading-relaxed max-w-sm">
              Si lo que necesitas es alguien que construya el sistema crítico que tu empresa necesita — de cero a producción, sin excusas — hablemos.
            </p>
            <p className="text-zinc-600 text-sm leading-relaxed max-w-sm">
              No planificaciones infinitas.<br />Código real en producción.
            </p>

            {/* Email copy */}
            <button
              onClick={handleCopyEmail}
              className="group flex items-center gap-4 text-left w-full"
            >
              <div className="border-b border-white/10 group-hover:border-white/30 transition-colors pb-3 flex-1">
                <p className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest mb-1">Email</p>
                <p className="text-white font-mono text-sm">jgonzalezroman7@gmail.com</p>
              </div>
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.span key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="text-white/60">
                    <Check size={16} />
                  </motion.span>
                ) : (
                  <motion.span key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="text-zinc-600 group-hover:text-white transition-colors">
                    <Copy size={16} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* Links */}
            <div className="space-y-3">
              <a
                href="https://www.linkedin.com/in/jgonzalezroman-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-zinc-600 hover:text-white transition-colors group"
              >
                <Linkedin size={16} />
                <span className="text-xs font-mono uppercase tracking-widest group-hover:translate-x-1 transition-transform duration-200">
                  LinkedIn
                </span>
              </a>
              <div className="flex items-center gap-3 text-zinc-700">
                <MapPin size={16} />
                <span className="text-xs font-mono uppercase tracking-widest">España · Granada</span>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <Field
                  label="Nombre"
                  name="name"
                  placeholder="Tu nombre"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Cuéntame tu proyecto..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-transparent border-b border-white/10 focus:border-white/40 py-3 text-sm text-zinc-300 placeholder:text-zinc-700 focus:outline-none transition-colors resize-none"
                />
              </div>

              {error && (
                <p className="text-red-400/80 text-xs font-mono">{error}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting || isSent || !!(cooldownUntil && Date.now() < cooldownUntil)}
                className="inline-flex items-center gap-3 text-white text-sm font-medium group disabled:opacity-50"
              >
                <span className="block w-8 h-px bg-white/25 group-hover:w-14 group-hover:bg-white transition-all duration-300" />
                <AnimatePresence mode="wait">
                  {isSubmitting ? (
                    <motion.span key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      Enviando...
                    </motion.span>
                  ) : isSent ? (
                    <motion.span key="sent" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                      <Check size={14} /> Enviado
                    </motion.span>
                  ) : (
                    <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                      Enviar mensaje <Send size={14} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

function Field({ label, name, placeholder, type = 'text', value, onChange }: {
  label: string; name: string; placeholder: string;
  type?: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="space-y-2">
      <label className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-white/10 focus:border-white/40 py-3 text-sm text-zinc-300 placeholder:text-zinc-700 focus:outline-none transition-colors"
      />
    </div>
  );
}
