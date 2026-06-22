import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Users, Zap, Shield, Database, Cloud, GitBranch,
  Lock, Eye, Server, Smartphone, ExternalLink, CheckCircle
} from 'lucide-react';

const MetricCard = ({ number, label, icon }: { number: string | number, label: string, icon: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ type: "spring", stiffness: 100 }}
    className="relative group"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative bg-slate-900/50 border border-slate-800 rounded-2xl p-6 backdrop-blur-xl h-full flex flex-col items-center justify-center group-hover:border-blue-500/50 transition-colors duration-300">
      <div className="text-blue-400 mb-3">{icon}</div>
      <div className="text-4xl md:text-5xl font-black text-white mb-2">{number}</div>
      <div className="text-slate-400 text-sm text-center font-medium">{label}</div>
    </div>
  </motion.div>
);

const ArchitectureLayer = ({ title, items, color, position }: { title: string, items: string[], color: string, position: 'top' | 'middle' | 'bottom' }) => (
  <motion.div
    initial={{ opacity: 0, y: position === 'top' ? -20 : 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: position === 'top' ? 0 : position === 'middle' ? 0.15 : 0.3 }}
    className={`bg-gradient-to-r ${color} border border-slate-700 rounded-xl p-6 backdrop-blur-xl`}
  >
    <h4 className="text-white font-bold mb-3 flex items-center gap-2">
      <Server size={18} />
      {title}
    </h4>
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
          <span className="text-blue-400 mt-1">•</span>
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

const SecurityFeature = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="flex gap-3 items-start"
  >
    <div className="text-emerald-400 flex-shrink-0 mt-1">{icon}</div>
    <div>
      <h5 className="text-white font-semibold text-sm mb-1">{title}</h5>
      <p className="text-slate-400 text-xs leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-slate-900/30 border border-slate-800 rounded-xl p-4 backdrop-blur-xl hover:border-blue-500/30 transition-colors duration-300 group"
  >
    <div className="text-blue-400 mb-3 group-hover:scale-110 transition-transform duration-300">{icon}</div>
    <h4 className="text-white font-semibold text-sm mb-2">{title}</h4>
    <p className="text-slate-400 text-xs leading-relaxed">{description}</p>
  </motion.div>
);

export function ThielmannCaseStudy() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="thielmann" ref={containerRef} className="relative pt-24 pb-32 overflow-hidden bg-[#0b1220]">

      {/* FONDO ANIMADO */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-10" />

        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 12, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px]"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">

        {/* HEADER */}
        <div className="text-center mb-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 backdrop-blur-md"
          >
            <Zap size={16} className="text-blue-400" />
            <span className="text-xs font-bold text-blue-300 uppercase tracking-widest">Proyecto Estrella</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            THIELMANN <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">MES</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            Sistema integral de gestión de producción industrial. 120 puestos de trabajo. 1 engineer. 3 turnos. Producción crítica.
          </motion.p>
        </div>

        {/* METRICS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          <MetricCard number={120} label="Puestos de trabajo" icon={<Users size={24} />} />
          <MetricCard number={40} label="Usuarios diarios" icon={<Zap size={24} />} />
          <MetricCard number={15} label="Tablets en planta" icon={<Smartphone size={24} />} />
          <MetricCard number={1} label="Engineer (full stack)" icon={<GitBranch size={24} />} />
        </div>

        {/* EL RETO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-500/10 to-purple-500/5 border border-slate-700 rounded-2xl p-8 md:p-12 mb-24 backdrop-blur-xl"
        >
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <Eye size={28} className="text-blue-400" />
            El Reto
          </h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            <a href="https://www.thielmann.com/en/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1">
              THIELMANN <ExternalLink size={14} />
            </a>
            {' '}es una línea de producción industrial de 120 puestos completamente operativa sin sistema de gestión. Cero digitalización, cero trazabilidad, cero visibilidad en tiempo real.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            40 personas dependen del sistema a diario (operarios a 3 turnos, calidad, mantenimiento, finanzas, producción). Cualquier parada no planificada = decenas de miles de euros en pérdidas.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Un único engineer. Responsable de diseño, desarrollo, arquitectura, despliegue, observabilidad y operación en producción.
          </p>
        </motion.div>

        {/* ARQUITECTURA */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Server size={28} className="text-blue-400" />
            Arquitectura
          </h3>

          <div className="space-y-4 max-w-4xl">
            <ArchitectureLayer
              title="Frontend"
              color="from-blue-500/20 to-blue-500/5"
              items={[
                "SPA Admin (React 19 + TypeScript)",
                "App Planta — 15 tablets (React 19 + TypeScript)",
                "HTTPS con JWT en cookies httpOnly"
              ]}
              position="top"
            />

            <div className="text-center text-slate-500 text-xs font-mono">↓ HTTPS / JWT httpOnly ↓</div>

            <ArchitectureLayer
              title="Backend"
              color="from-purple-500/20 to-purple-500/5"
              items={[
                "Node.js 20 con arquitectura por capas",
                "Prisma ORM para integridad transaccional",
                "Microservicio documental con streaming"
              ]}
              position="middle"
            />

            <div className="text-center text-slate-500 text-xs font-mono">↓ SQL Queries ↓</div>

            <ArchitectureLayer
              title="Datos & Almacenamiento"
              color="from-emerald-500/20 to-emerald-500/5"
              items={[
                "PostgreSQL (RDS) — transacciones ACID",
                "S3 — planos, imágenes, vídeo de proceso"
              ]}
              position="middle"
            />

            <div className="text-center text-slate-500 text-xs font-mono">↓ AWS Infrastructure ↓</div>

            <ArchitectureLayer
              title="Infraestructura AWS"
              color="from-orange-500/20 to-orange-500/5"
              items={[
                "ECS Fargate — contenedores serverless",
                "CloudFront — CDN global",
                "WAF — protección OWASP Top 10",
                "Route 53 — DNS y failover",
                "RDS — database managed"
              ]}
              position="bottom"
            />
          </div>
        </div>

        {/* FUNCIONALIDAD */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <CheckCircle size={28} className="text-blue-400" />
            Lo que el Sistema Hace
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <FeatureCard icon={<Database size={20} />} title="Planificación" description="Órdenes de producción automáticas según demanda" />
            <FeatureCard icon={<Users size={20} />} title="Fichaje" description="Control de asistencia y tiempos de operarios" />
            <FeatureCard icon={<Zap size={20} />} title="Asignaciones" description="Distribución inteligente de tareas por turno" />
            <FeatureCard icon={<Shield size={20} />} title="Reparaciones" description="Registro y trazabilidad de incidencias" />
            <FeatureCard icon={<Eye size={20} />} title="RCP" description="Control de proceso en tiempo real" />
            <FeatureCard icon={<Cloud size={20} />} title="Documental" description="Gestión de planos, imágenes, vídeo" />
            <FeatureCard icon={<Zap size={20} />} title="OEE" description="Cálculo de Disponibilidad × Rendimiento × Calidad" />
            <FeatureCard icon={<BarChart size={20} />} title="Analítica" description="Reportes de costes y rendimiento" />
            <FeatureCard icon={<GitBranch size={20} />} title="Trazabilidad" description="End-to-end de cada orden de producción" />
          </div>
        </div>

        {/* SEGURIDAD */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Lock size={28} className="text-emerald-400" />
            Seguridad en Producción
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SecurityFeature
              icon={<Lock size={18} />}
              title="JWT en Cookies httpOnly"
              description="Tokens seguros contra XSS con same-site protection"
            />
            <SecurityFeature
              icon={<Shield size={18} />}
              title="RBAC (Role-Based Access Control)"
              description="Control granular de permisos por rol de usuario"
            />
            <SecurityFeature
              icon={<Smartphone size={18} />}
              title="Device Fingerprinting"
              description="Validación de dispositivos para tablets compartidas"
            />
            <SecurityFeature
              icon={<Cloud size={18} />}
              title="AWS WAF"
              description="Protección contra OWASP Top 10 en la capa de red"
            />
            <SecurityFeature
              icon={<Eye size={18} />}
              title="Auditorías Periódicas"
              description="Scanning de infraestructura, backend y frontends"
            />
            <SecurityFeature
              icon={<Server size={18} />}
              title="Defensa en Profundidad"
              description="Mínimo privilegio en cada capa de la arquitectura"
            />
          </div>
        </div>

        {/* STACK */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900/50 border border-slate-700 rounded-2xl p-8 backdrop-blur-xl"
        >
          <h3 className="text-lg font-bold text-white mb-6">Stack Tecnológico</h3>
          <div className="flex flex-wrap gap-3">
            {['React 19', 'TypeScript', 'Node.js', 'Prisma', 'PostgreSQL', 'AWS', 'ECS Fargate', 'S3', 'CloudFront', 'WAF', 'Route 53', 'Docker'].map(tech => (
              <span key={tech} className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Componente BarChart si no existe
const BarChart = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" y1="20" x2="12" y2="10"></line>
    <line x1="18" y1="20" x2="18" y2="4"></line>
    <line x1="6" y1="20" x2="6" y2="16"></line>
  </svg>
);