import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const metrics = [
  { number: '120', label: 'Puestos de trabajo' },
  { number: '40',  label: 'Usuarios diarios' },
  { number: '15',  label: 'Tablets en planta' },
  { number: '1',   label: 'Solo' },
];

const architectureLayers = [
  {
    layer: 'Frontend',
    detail: 'React 19 + TypeScript',
    items: 'SPA Admin · App de planta para 15 tablets · HTTPS con JWT httpOnly',
  },
  {
    layer: 'Backend',
    detail: 'Node.js + Prisma',
    items: 'Arquitectura por capas · Separación de responsabilidades · Integridad transaccional',
  },
  {
    layer: 'Documental',
    detail: 'Microservicio independiente',
    items: 'Planos, imágenes y vídeo de proceso · Streaming progresivo · Acceso autenticado y cifrado',
  },
  {
    layer: 'Datos',
    detail: 'PostgreSQL (RDS)',
    items: 'Transacciones ACID · S3 para almacenamiento de binarios',
  },
  {
    layer: 'AWS',
    detail: 'ECS Fargate · CloudFront · WAF · Route 53',
    items: 'Migración completa a la nube · CI/CD · Observabilidad',
  },
];

const features = [
  { title: 'Planificación',   desc: 'Órdenes de producción' },
  { title: 'Fichaje',         desc: 'Control de operarios' },
  { title: 'Asignaciones',    desc: 'Distribución por turno' },
  { title: 'Reparaciones',    desc: 'Registro e incidencias' },
  { title: 'RCP',             desc: 'Control de proceso' },
  { title: 'Documental',      desc: 'Planos, imágenes, vídeo' },
  { title: 'OEE',             desc: 'Disponibilidad × Rendimiento × Calidad' },
  { title: 'Analítica',       desc: 'Costes y rendimiento' },
  { title: 'Trazabilidad',    desc: 'End-to-end por orden' },
];

const securityItems = [
  { title: 'JWT en cookies httpOnly',      desc: 'Protección XSS con same-site' },
  { title: 'RBAC',                         desc: 'Control granular por rol' },
  { title: 'Device fingerprinting',        desc: 'Validación de tablets compartidas' },
  { title: 'AWS WAF',                      desc: 'OWASP Top 10 en capa de red' },
  { title: 'Auditorías periódicas',        desc: 'Infra, backend y frontends' },
  { title: 'Defensa en profundidad',       desc: 'Mínimo privilegio en cada capa' },
];

const stack = ['React 19', 'TypeScript', 'Node.js', 'Prisma', 'PostgreSQL', 'AWS', 'ECS Fargate', 'S3', 'CloudFront', 'WAF', 'Route 53', 'Docker'];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: 'easeOut' },
};

export function ThielmannCaseStudy() {
  return (
    <section id="thielmann" className="bg-[#09090b] px-6 md:px-14 py-16 md:py-24 lg:py-32 overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto">

        {/* Header */}
        <motion.div {...fadeUp} className="mb-16">
          <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em] mb-4">
            Proyecto estrella
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white uppercase leading-[0.9]">
            Thielmann
            <br />
            <span style={{ WebkitTextStroke: '2px rgba(255,255,255,0.18)', color: 'transparent' }}>
              MES
            </span>
          </h2>
        </motion.div>

        <div className="h-px bg-white/10 mb-16" />

        {/* Intro */}
        <motion.div {...fadeUp} className="mb-16 max-w-2xl">
          <p className="text-zinc-400 text-base leading-relaxed">
            Sistema integral de gestión de producción industrial.{' '}
            <a
              href="https://www.thielmann.com/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-zinc-300 transition-colors inline-flex items-center gap-1"
            >
              THIELMANN <ExternalLink size={12} />
            </a>{' '}
            — 120 puestos de trabajo. De cero a producción. Solo.
          </p>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-x-6 md:gap-x-10 gap-y-8 mb-16 md:mb-24"
        >
          {metrics.map((m) => (
            <div key={m.number}>
              <div className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-none tabular-nums">{m.number}</div>
              <div className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest mt-2">{m.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="h-px bg-white/10 mb-24" />

        {/* El Reto */}
        <motion.div {...fadeUp} className="mb-24">
          <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em] mb-8">El reto</p>
          <div className="border-l border-white/10 pl-8 max-w-2xl space-y-4">
            <p className="text-zinc-300 text-base leading-relaxed">
              Línea de producción industrial crítica de 120 puestos sin ningún sistema de gestión.
              Cero digitalización. Cero trazabilidad. Cero visibilidad en tiempo real.
            </p>
            <p className="text-zinc-500 text-sm leading-relaxed">
              40 personas dependen del sistema a diario — operarios a 3 turnos y equipos de calidad,
              mantenimiento, finanzas y producción. Un único developer responsable de diseño,
              desarrollo, arquitectura, despliegue y operación en producción.
            </p>
          </div>
        </motion.div>

        <div className="h-px bg-white/10 mb-24" />

        {/* Arquitectura */}
        <motion.div {...fadeUp} className="mb-24">
          <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em] mb-8">Arquitectura</p>
          <div className="divide-y divide-white/5">
            {architectureLayers.map((layer, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07, ease: 'easeOut' }}
                className="py-6 grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-12"
              >
                <div>
                  <div className="text-xs font-mono text-white uppercase tracking-widest">{layer.layer}</div>
                  <div className="text-[10px] font-mono text-zinc-600 mt-1">{layer.detail}</div>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed">{layer.items}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="h-px bg-white/10 mb-24" />

        {/* Funcionalidad */}
        <motion.div {...fadeUp} className="mb-24">
          <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em] mb-8">Lo que hace el sistema</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className="text-white text-sm font-semibold mb-1">{f.title}</div>
                <div className="text-zinc-600 text-xs font-mono">{f.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="h-px bg-white/10 mb-24" />

        {/* Seguridad */}
        <motion.div {...fadeUp} className="mb-24">
          <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em] mb-8">Seguridad en producción</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
            {securityItems.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex gap-4"
              >
                <span className="text-white/20 font-mono text-xs mt-0.5 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <div className="text-white text-sm font-semibold mb-1">{s.title}</div>
                  <div className="text-zinc-600 text-xs font-mono">{s.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="h-px bg-white/10 mb-12" />

        {/* Stack */}
        <motion.div {...fadeUp}>
          <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em] mb-6">Stack</p>
          <div className="flex flex-wrap gap-3">
            {stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 border border-white/10 text-zinc-400 text-xs font-mono hover:border-white/30 hover:text-white transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
