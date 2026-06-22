import { motion } from "framer-motion";

const metrics = [
  { number: '120', label: 'Puestos de trabajo' },
  { number: '40',  label: 'Usuarios diarios' },
  { number: '15',  label: 'Tablets en planta' },
  { number: '1',   label: 'Solo' },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col bg-[#09090b] px-6 md:px-14 pt-20 md:pt-28 pb-12 overflow-hidden"
    >
      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center">

        {/* Small label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.25em] mb-10"
        >
          Full Stack Developer · React · Node.js · AWS
        </motion.p>

        {/* Main headline */}
        <div className="mb-12">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2rem,11vw,9rem)] font-black leading-[0.88] tracking-tighter text-white uppercase"
            >
              Full Stack
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2rem,11vw,9rem)] font-black leading-[0.88] tracking-tighter uppercase"
              style={{ WebkitTextStroke: '2px rgba(255,255,255,0.18)', color: 'transparent' }}
            >
              Developer.
            </motion.h1>
          </div>
        </div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-10"
        >
          {/* Tagline + CTA */}
          <div className="space-y-7">
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Si lo puedes imaginar, lo puedes programar.
              <br />
              <span className="text-zinc-700">
                Construyo sistemas críticos end-to-end.
              </span>
            </p>
            <a
              href="#thielmann"
              className="inline-flex items-center gap-3 text-white text-sm font-medium group"
            >
              <span className="block w-8 h-px bg-white/25 group-hover:w-14 group-hover:bg-white transition-all duration-300" />
              Ver THIELMANN
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 md:gap-x-10 gap-y-6">
            {metrics.map((m) => (
              <div key={m.number}>
                <div className="text-4xl md:text-5xl font-black text-white leading-none tabular-nums">
                  {m.number}
                </div>
                <div className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest mt-1.5">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        style={{ transformOrigin: 'left' }}
        className="mt-12 h-px bg-white/10"
      />
    </section>
  );
}
