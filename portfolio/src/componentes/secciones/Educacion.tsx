import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const education = [
  {
    period: '2025 — 2026',
    title: 'Desarrollo de Aplicaciones Web',
    abbr: 'DAW',
    institution: 'IES Alonso Cano',
    link: 'https://iesalonsocano.es/',
    description: 'Arquitectura de software moderna. Construcción de sistemas escalables utilizando el ecosistema JavaScript/TypeScript.',
    tags: ['Next.js', 'TypeScript', 'Docker'],
  },
  {
    period: '2022 — 2024',
    title: 'Desarrollo de Aplicaciones Multiplataforma',
    abbr: 'DAM',
    institution: 'CES Cristo Rey',
    link: 'https://cescristorey.com/',
    description: 'Inicié mi camino dominando la gestión de memoria con C++, para luego especializarme en arquitecturas robustas y programación concurrente con Java.',
    tags: ['C++', 'Java', 'PostgreSQL'],
  },
];

export function Educacion() {
  return (
    <section id="educacion" className="bg-[#09090b] px-6 md:px-14 py-16 md:py-24 lg:py-32 overflow-x-hidden">
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
            Trayectoria académica
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white uppercase leading-[0.9]">
            En continuo
            <br />
            <span style={{ WebkitTextStroke: '2px rgba(255,255,255,0.18)', color: 'transparent' }}>
              Aprendizaje
            </span>
          </h2>
        </motion.div>

        <div className="h-px bg-white/10 mb-0" />

        {/* Entries */}
        {education.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="border-b border-white/5 py-10 md:py-14 grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 md:gap-16"
          >
            {/* Left */}
            <div className="space-y-2">
              <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                {item.period}
              </p>
              <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                {item.abbr}
              </p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono text-zinc-600 hover:text-white transition-colors"
              >
                {item.institution} <ExternalLink size={10} />
              </a>
            </div>

            {/* Right */}
            <div className="space-y-5">
              <h3 className="text-xl font-black text-white uppercase tracking-tight">
                {item.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 border border-white/10 text-zinc-600 text-[10px] font-mono uppercase tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
