import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const jobs = [
  {
    period: 'Nov 2025 — Actualidad',
    title: 'Full Stack Developer',
    company: 'THIELMANN',
    link: 'https://www.thielmann.com/en/',
    active: true,
    bullets: [
      'Responsable técnico único del MES que controla en tiempo real una línea de producción industrial crítica de 120 puestos, usado a diario por ~40 personas (operarios a 3 turnos + calidad, mantenimiento, finanzas y producción) en 15 tablets y paneles de administración.',
      'Arquitectura cliente-servidor end-to-end: backend Node.js + Prisma sobre PostgreSQL, dos SPAs React 19 + TypeScript y microservicio de gestión documental (planos, imágenes y vídeo con streaming progresivo y acceso autenticado).',
      'Infraestructura AWS (ECS Fargate, RDS, S3, CloudFront, WAF, Route 53), CI/CD y observabilidad. Seguridad de extremo a extremo: JWT httpOnly, RBAC, fingerprinting de dispositivos, WAF y mitigación OWASP Top 10.',
    ],
    stack: ['React 19', 'TypeScript', 'Node.js', 'Prisma', 'PostgreSQL', 'AWS', 'Docker'],
  },
  {
    period: 'Feb — May 2026 · Prácticas',
    title: 'Full Stack Developer',
    company: 'Radiokable',
    link: 'https://radiokable.net/',
    active: false,
    bullets: [
      'Desarrollo de RK Utility: app móvil en Flutter publicada en App Store y Google Play, con backend Node.js + Express sobre PostgreSQL.',
      'Aplicación web interna en PHP + MySQL para la gestión de inspecciones de emplazamientos.',
      'Despliegue en servidor propio y trabajo en equipo.',
    ],
    stack: ['Flutter', 'Node.js', 'Express', 'PostgreSQL', 'PHP', 'MySQL'],
  },
  {
    period: 'Abr — Jun 2024 · Prácticas',
    title: 'Software Developer',
    company: 'SM Services',
    link: 'https://sm-services.es/?lang=en',
    active: false,
    bullets: [
      'Mantenimiento evolutivo y correctivo de aplicaciones cloud de alta disponibilidad.',
      'Desarrollo de nuevas funcionalidades full-stack bajo metodología Agile/Scrum.',
    ],
    stack: ['JavaScript', 'Cloud', 'Git', 'Scrum'],
  },
];

export function Experiencia() {
  return (
    <section id="experiencia" className="bg-[#09090b] px-6 md:px-14 py-16 md:py-24 lg:py-32 overflow-x-hidden">
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
            Trayectoria profesional
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white uppercase leading-[0.9]">
            Experiencia
            <br />
            <span style={{ WebkitTextStroke: '2px rgba(255,255,255,0.18)', color: 'transparent' }}>
              Profesional
            </span>
          </h2>
        </motion.div>

        <div className="h-px bg-white/10 mb-0" />

        {/* Jobs */}
        {jobs.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="border-b border-white/5 py-10 md:py-14 grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 md:gap-16"
          >
            {/* Left: meta */}
            <div className="space-y-2">
              <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                {job.period}
              </p>
              <div className="flex items-center gap-2">
                <p className="text-xs font-mono text-white uppercase tracking-wider">{job.title}</p>
                {job.active && (
                  <span className="flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-1.5 w-1.5 rounded-full bg-white opacity-30" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white/60" />
                  </span>
                )}
              </div>
              <a
                href={job.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-black text-white uppercase tracking-tight hover:text-zinc-400 transition-colors"
              >
                {job.company} <ExternalLink size={11} className="opacity-40" />
              </a>
            </div>

            {/* Right: content */}
            <div className="space-y-8">
              <ul className="space-y-4">
                {job.bullets.map((b, j) => (
                  <li key={j} className="flex gap-4 text-zinc-500 text-sm leading-relaxed">
                    <span className="text-white/20 font-mono text-xs shrink-0 mt-0.5">
                      {String(j + 1).padStart(2, '0')}
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {job.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 border border-white/10 text-zinc-600 text-[10px] font-mono uppercase tracking-wide hover:border-white/20 hover:text-zinc-400 transition-colors"
                  >
                    {tech}
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
