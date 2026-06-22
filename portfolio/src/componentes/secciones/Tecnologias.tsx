import { motion } from 'framer-motion';

const groups = [
  {
    label: 'Frontend',
    items: ['React 19', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Prisma', 'PostgreSQL', 'Express', 'Python'],
  },
  {
    label: 'Infraestructura',
    items: ['AWS — ECS Fargate', 'RDS · S3 · CloudFront', 'WAF · Route 53', 'Docker', 'CI/CD'],
  },
  {
    label: 'Seguridad',
    items: ['JWT httpOnly', 'RBAC', 'Device Fingerprinting', 'AWS WAF', 'OWASP Top 10'],
  },
  {
    label: 'Herramientas',
    items: ['Git', 'Linux', 'Flutter', 'PHP'],
  },
];

export function Tecnologias() {
  return (
    <section id="tecnologias" className="bg-[#09090b] px-6 md:px-14 py-16 md:py-24 lg:py-32 overflow-x-hidden">
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
            Stack técnico
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white uppercase leading-[0.9]">
            Dominio
            <br />
            <span style={{ WebkitTextStroke: '2px rgba(255,255,255,0.18)', color: 'transparent' }}>
              Tecnológico
            </span>
          </h2>
        </motion.div>

        <div className="h-px bg-white/10 mb-0" />

        {/* Groups */}
        {groups.map((group, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="border-b border-white/5 py-10 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-16"
          >
            <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest pt-1">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-2 border border-white/10 text-zinc-300 text-xs font-mono hover:border-white/30 hover:text-white transition-colors duration-200 cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
