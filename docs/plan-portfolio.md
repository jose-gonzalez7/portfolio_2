# Plan de desarrollo — Portfolio profesional de José González Román

> **Fecha de creación:** 2026-06-22
> **Horizonte:** 2 semanas (antes de incorporación a Radiokable ~julio 2026)
> **Objetivo:** Portfolio centrado en THIELMANN como proyecto estrella. Radiokable (nueva posición) se incorpora después, cuando haya entregables reales.

---

## 1. Principios que gobiernan todo

- **Solo lo que puedes defender.** Sin certificaciones, sin formación que no existe, sin logros inventados.
- **THIELMANN es el centro de gravedad.** Todo lo demás orbita alrededor.
- **Seguridad como práctica, no como credencial.** Ningún badge, ninguna titulación — hechos reales en producción.
- **Coherencia LinkedIn ↔ Portfolio.** Cualquier dato que aparezca aquí debe poder aparecer en LinkedIn sin contradicción.
- **No GitHub público, no proyectos personales.** Los proyectos son privados. El portfolio demuestra con texto, arquitectura y métricas.

---

## 2. Estructura de secciones (orden de scroll)

| # | Sección | Componente | Estado |
|---|---------|-----------|--------|
| 1 | Navbar | `Navbar.tsx` | ✅ |
| 2 | Hero | `Hero.tsx` | ✅ Typewriter real + bio + CTA a #thielmann |
| 3 | THIELMANN Case Study | `ThielmannCaseStudy.tsx` | ✅ Creada — métricas, arquitectura, funcionalidad, seguridad, stack |
| 4 | Experiencia | `Experiencia.tsx` | ✅ THIELMANN con datos reales, Radiokable corregido |
| 5 | Stack técnico | `Tecnologias.tsx` | ✅ |
| 6 | Educación | `Educacion.tsx` | ✅ Certificaciones y Zaidín eliminados |
| 7 | Contacto | `Contacto.tsx` | ✅ |

---

## 3. Plan de implementación por prioridad

### SEMANA 1 — Fundación

#### Días 1-2: Limpieza urgente
Errores que pueden costar un recruiter si cruza portfolio con LinkedIn.

**`Educacion.tsx`**
- [x] Eliminar certificaciones falsas: AWS Solutions Architect, Google Data Analytics, Meta Front-End Dev
- [x] Eliminar IES Zaidín Vergeles y todo lo relacionado con ciberseguridad como titulación
- [x] Eliminar el bloque `certificationsData` entero

**`Hero.tsx`**
- [x] Quitar `'Ethical Hacking'` del typewriter
- [x] Quitar badge `"Online & Available"` (no está en búsqueda activa)
- [x] Quitar `"99% Secure"` del footer de la tarjeta terminal
- [x] Typewriter actualizado con MES, users: 40, workstations: 120
- [x] Bio alineada con spec: "Construyo software robusto, escalable y seguro..."
- [x] CTA apunta a #thielmann en lugar de #experiencia
- [x] Redes: solo LinkedIn + Email (sin GitHub)

**`Experiencia.tsx`**
- [x] THIELMANN: descripción alineada con spec — 120 puestos, 40 personas, 3 turnos, 15 tablets, microservicio documental, seguridad end-to-end (JWT, RBAC, fingerprinting, WAF, OWASP Top 10)
- [x] THIELMANN: añadido Docker al stack de tags
- [x] Radiokable: descripción real (Flutter + RK Utility en App Store/Google Play, Node.js + Express + PostgreSQL, PHP + MySQL)
- [x] Radiokable: periodo corregido a "Feb - May 2026" (no Jun) + indicado "Prácticas"
- [x] Título de THIELMANN: "Full Stack Developer" (alineado con LinkedIn)

---

#### Días 3-5: Hero renovado

**Objetivo:** Primera impresión que para el scroll. Las métricas reales son el gancho.

**Contenido del Hero:**
- Titular: `Full Stack Developer | React · TypeScript · Node.js · AWS`
- Subtítulo/frase: "Si lo puedes imaginar, lo puedes programar." (mantener — es auténtica)
- Bio corta: "Construyo software robusto, escalable y seguro de extremo a extremo. Responsable técnico único del MES que controla en tiempo real una línea de producción industrial crítica."
- Métricas como elementos visuales destacados:
  - `120 puestos` — Línea de producción
  - `40 usuarios diarios` — Operarios + equipos
  - `15 tablets` — App de planta
  - `1 engineer` — Diseño, desarrollo y operación
- Typewriter corregido — mostrar arquitectura real:
  ```
  const MES = {
    stack: ['React 19', 'Node.js', 'PostgreSQL', 'AWS'],
    users: 40,
    workstations: 120,
    security: 'defense-in-depth',
    status: 'Production'
  };
  ```
- CTA: "Ver el proyecto" → ancla a sección THIELMANN (no a Experiencia genérica)
- Redes: LinkedIn + Email (sin GitHub público)

---

#### Días 5-7: Sección THIELMANN Case Study (nueva)

**Componente:** `ThielmannCaseStudy.tsx`
**Ancla:** `#thielmann`

Esta es la sección más importante del portfolio. No es una tarjeta de timeline — es un case study completo.

**Subsecciones:**

**A) El reto**
- Empresa: THIELMANN (enlace a thielmann.com)
- Periodo: nov. 2025 – actualidad
- Encuadre: "Línea de producción industrial crítica de 120 puestos. Cero sistema. Un engineer."
- Contexto: 40 personas dependiendo del sistema a diario (operarios a 3 turnos + calidad, mantenimiento, finanzas, producción)

**B) La arquitectura**
Diagrama visual de capas (componente React con SVG o divs):
```
┌─────────────────────────────────────────────┐
│  Frontend                                    │
│  • SPA Admin (React 19 + TypeScript)        │
│  • App Planta — 15 tablets (React 19 + TS) │
└─────────────────┬───────────────────────────┘
                  │ HTTPS / JWT httpOnly
┌─────────────────▼───────────────────────────┐
│  Backend (Node.js + Prisma)                  │
│  • Arquitectura por capas                    │
│  • Integridad transaccional                  │
│  • Microservicio documental (streaming)      │
└─────────────────┬───────────────────────────┘
                  │
┌─────────────────▼───────────────────────────┐
│  Datos                                       │
│  • PostgreSQL (RDS)                          │
│  • S3 — planos, imágenes, vídeo de proceso  │
└─────────────────┬───────────────────────────┘
                  │
┌─────────────────▼───────────────────────────┐
│  Infraestructura AWS                         │
│  ECS Fargate · RDS · S3 · CloudFront        │
│  WAF · Route 53 · CI/CD · Observabilidad    │
└─────────────────────────────────────────────┘
```

**C) Funcionalidad clave**
Lista de lo que el sistema hace en producción:
- Planificación de órdenes de producción
- Fichaje de operarios
- Asignaciones de producción
- Control de reparaciones
- Registro de Control de Proceso (RCP)
- Gestión documental técnica (planos, imágenes, vídeo)
- Cálculo de OEE (disponibilidad × rendimiento × calidad)
- Analítica de costes y rendimiento
- Trazabilidad end-to-end de cada orden

**D) Seguridad aplicada en producción**
- JWT en cookies httpOnly
- Control de acceso por roles (RBAC)
- Fingerprinting de dispositivos para tablets compartidas
- WAF (AWS)
- Mitigación OWASP Top 10
- Auditorías periódicas de infraestructura, backend y frontends
- Defensa en profundidad + mínimo privilegio

**E) Métricas de impacto (animadas al scroll)**
- `120` puestos de trabajo controlados
- `40` usuarios diarios
- `3` turnos de producción
- `15` tablets en planta
- `1` engineer — diseño, desarrollo y operación

**Stack:**
React · TypeScript · Node.js · Prisma · PostgreSQL · AWS (ECS Fargate, RDS, S3, CloudFront, WAF, Route 53) · Docker

---

### SEMANA 2 — Refinamiento

#### Días 8-10: Stack técnico reorganizado

**Organización por capa de arquitectura real** (no por categoría genérica):

| Capa | Tecnologías |
|------|-------------|
| **Frontend** | React 19, TypeScript, Next.js, Tailwind CSS, Framer Motion |
| **Backend** | Node.js, Prisma, PostgreSQL, Express |
| **Infraestructura** | AWS (ECS Fargate, RDS, S3, CloudFront, WAF, Route 53), Docker |
| **Seguridad** | JWT httpOnly, RBAC, WAF, OWASP Top 10, device fingerprinting |
| **Otros** | Git, Linux, Python, Flutter, PHP |

Eliminar: Kali Linux (no es parte del stack real de producción).

---

#### Días 11-12: Experiencia + Educación corregidas

**Experiencia — datos correctos:**

| Empresa | Periodo | Lo que hizo |
|---------|---------|-------------|
| THIELMANN | nov. 2025 – actualidad | Ver case study completo arriba |
| Radiokable (prácticas) | feb. – may. 2026 | RK Utility (Flutter + Node.js + PostgreSQL, App Store + Google Play), app web PHP + MySQL para inspecciones |
| SM Services (prácticas) | abr. – jun. 2024 | Full-stack de apps cloud bajo Agile/Scrum |

**Educación — solo lo real:**

| Título | Centro | Periodo | Descripción |
|--------|--------|---------|-------------|
| DAM — Desarrollo de Aplicaciones Multiplataforma | CES Cristo Rey | 2022–2024 | C++, Java (multithreading), bases de datos |
| DAW — Desarrollo de Aplicaciones Web | IES Alonso Cano | 2024–2026 | Ecosistema JavaScript/TypeScript, arquitecturas escalables |

Sin certificaciones. Sin IES Zaidín Vergeles.

---

#### Días 13-14: Polish general

- [ ] Revisión responsive (mobile, tablet)
- [ ] Transiciones suaves entre secciones
- [ ] Metadata y SEO básico (title, description, og:image)
- [ ] Revisión de todos los textos — coherencia de tono
- [ ] Test de la sección de contacto (EmailJS)
- [ ] Verificar todos los enlaces externos (THIELMANN, LinkedIn)

---

## 4. Lo que NO se hace en estas 2 semanas

| Item | Motivo |
|------|--------|
| Sección de proyectos personales | Sin GitHub público, proyectos privados |
| Radiokable nueva posición | Sin entregables reales hasta que empiece |
| Blog / artículos | Fuera de scope |
| Modo claro | No encaja con la estética definida |
| Multiidioma | Complejidad no justificada ahora |

---

## 5. Lo que viene después (cuando empiece en Radiokable)

- Actualizar sección Experiencia con la nueva posición
- Añadir entregables reales cuando existan (app, proyecto concreto)
- Revisar si el posicionamiento del Hero necesita ajustarse con dos empresas en paralelo

---

## 6. Decisiones de diseño

- **Paleta:** Dark — `#0b1220` como base. Se mantiene.
- **Estética:** Tech/industrial. Animaciones con Framer Motion al servicio del contenido, no como fin.
- **Métricas animadas:** Contadores que suben al entrar en viewport (impacto visual inmediato).
- **Diagrama de arquitectura:** Componente React propio, no imagen — escalable y mantenible.
- **Sin GitHub público:** Los enlaces van a LinkedIn y email únicamente.
