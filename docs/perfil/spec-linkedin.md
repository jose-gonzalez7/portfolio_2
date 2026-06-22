# Perfil de LinkedIn — Registro de lo aplicado + decisiones (José González Román)

> **Estado:** APLICADO en el perfil real vía Claude (extensión de Chrome). Este documento es el **registro oficial** de lo que se decidió y se puso, y las **reglas que cualquier edición futura debe respetar**.
> **Perfil:** https://www.linkedin.com/in/jgonzalezroman-dev/
> **Última actualización:** 2026-06-22

---

## ⚠️ 1. DECISIONES QUE ANULAN LA SPEC ORIGINAL (leer antes de tocar nada)
Estas decisiones priman sobre cualquier borrador anterior. Son cuestión de **autenticidad**: el perfil solo dice cosas que José puede sostener.

- **Marca personal, NO búsqueda activa** de empleo. Sin banner #OpenToWork.
- **NO publicar la cifra de facturación (~10 M€).** Se usa "línea de producción crítica / mission-critical".
- **NO añadir certificaciones** (AWS / Google / Meta) — **no las tiene**.
- **NO añadir formación en ciberseguridad** (IES Zaidín Vergeles) — **no la cursa**.
- **NO referenciar GitHub ni portfolio** — proyectos privados.
- **Seguridad** posicionada como **"mentalidad y práctica real en producción"**, NO como titulación ni certificación.
- **Inglés: B1 real, sin titulación** → en LinkedIn: "Competencia básica limitada".

> Nota de coherencia: el sitio web del portfolio (repo) todavía muestra certificaciones y un grado de ciberseguridad que **no se corresponden con la realidad**. Conviene alinearlo con estas decisiones para que LinkedIn y portfolio no se contradigan (ver "Pendientes / riesgos").

---

## 2. Configuración general del perfil
- **Perfil bilingüe:** Español (principal) + English (secundario).
- **Foto:** se mantiene.
- **Banner:** pendiente de rediseño (subirlo desde el lado del usuario).
- **Empleos no-IT:** eliminados.

---

## 3. Titular (Headline)

**ES**
```
Desarrollador Full Stack | React · TypeScript · Node.js · AWS | Construyo software de producto seguro y escalable | Sistemas industriales en tiempo real (MES)
```
**EN**
```
Full Stack Developer | React · TypeScript · Node.js · AWS | I build secure, scalable product software | Real-time industrial systems (MES)
```

---

## 4. Acerca de (About)

**ES (versión aplicada)**
```
Desarrollador Full Stack centrado en construir software robusto, escalable y seguro de extremo a extremo.

En THIELMANN soy responsable técnico único del diseño, desarrollo y operación de un sistema MES (Manufacturing Execution System) que controla en tiempo real una línea de producción industrial crítica de 120 puestos. Lo he llevado de cero a producción y hoy lo usan a diario ~40 personas —operarios a tres turnos y equipos de calidad, mantenimiento, finanzas y producción— sobre 15 tablets en planta y paneles de administración.

Más allá de operar la línea, el sistema convierte la actividad de planta en decisiones: cálculo de OEE (disponibilidad × rendimiento × calidad), analítica de costes, rendimiento de producción y trazabilidad de extremo a extremo de cada orden.

Responsable de la arquitectura de extremo a extremo:
⚙️ Backend Node.js + Prisma sobre PostgreSQL: arquitectura por capas, separación de responsabilidades e integridad transaccional de los datos.
💻 Dos SPAs en React 19 + TypeScript: panel de administración y app de planta para tablets.
☁️ Infraestructura en AWS (ECS Fargate, RDS, S3, CloudFront, WAF, Route 53), incluida la migración completa a la nube, con despliegue continuo y observabilidad.
🗂️ Microservicio de gestión documental que sirve planos, imágenes y vídeo de proceso de forma segura (cifrado, acceso autenticado y streaming progresivo).

Mi diferencial es la seguridad, entendida como un proceso continuo y no como una capa final. Trabajo con defensa en profundidad y mínimo privilegio: auditorías periódicas de infraestructura, backend y frontends, y endurecimiento del sistema —autenticación JWT en cookies httpOnly, control de acceso por roles, fingerprinting de dispositivos para tablets compartidas, WAF y mitigación del OWASP Top 10—. Construir "seguro por defecto" es mi forma de trabajar.

Mi camino: empecé asentando los fundamentos con C++ y Java, me especialicé en arquitecturas web modernas con el ecosistema JavaScript/TypeScript y hoy aplico esa base en sistemas en producción.

🛠️ Stack: React · TypeScript · Next.js · Node.js · Prisma · PostgreSQL · AWS · Docker · Git · Linux · Python

Creo que si lo puedes imaginar, lo puedes programar. Me mueven el rendimiento, la escalabilidad y hacer las cosas bien.

📫 jgonzalezroman7@gmail.com
```

**EN (espejo del ES, para el perfil secundario)**
```
Full Stack Developer focused on building robust, scalable and secure software end to end.

At THIELMANN I'm the sole engineer responsible for the design, development and operation of a MES (Manufacturing Execution System) that runs, in real time, a mission-critical industrial production line of 120 workstations. I took it from zero to production, and today ~40 people use it daily —operators across three shifts and the quality, maintenance, finance and production teams— on 15 shop-floor tablets and admin panels.

Beyond running the line, the system turns shop-floor activity into decisions: OEE calculation (availability × performance × quality), cost and production-performance analytics, and end-to-end traceability of every work order.

Responsible for the end-to-end architecture:
⚙️ Node.js + Prisma backend on PostgreSQL: layered architecture, separation of concerns and transactional data integrity.
💻 Two React 19 + TypeScript SPAs: admin panel and shop-floor tablet app.
☁️ AWS infrastructure (ECS Fargate, RDS, S3, CloudFront, WAF, Route 53), including the full cloud migration, with continuous deployment and observability.
🗂️ A document-management microservice that securely serves drawings, images and process video (encryption, authenticated access and progressive streaming).

What sets me apart is security, understood as a continuous process and not a final layer. I work with defense in depth and least privilege: periodic audits of infrastructure, backend and frontends, and system hardening —JWT in httpOnly cookies, role-based access control, device fingerprinting for shared tablets, WAF and OWASP Top 10 mitigation. Building "secure by default" is how I work.

My path: I started by building strong fundamentals with C++ and Java, specialized in modern web architectures within the JavaScript/TypeScript ecosystem, and today I apply that foundation to production systems.

🛠️ Stack: React · TypeScript · Next.js · Node.js · Prisma · PostgreSQL · AWS · Docker · Git · Linux · Python

I believe that if you can imagine it, you can build it. I'm driven by performance, scalability and doing things right.

📫 jgonzalezroman7@gmail.com
```

---

## 5. Experiencia

### 5.1 THIELMANN — Full Stack Developer · Jornada completa · Híbrido · nov. 2025 – actualidad

**ES**
```
Diseño, desarrollo y operación —como responsable técnico único y desde cero— del sistema MES que controla en tiempo real una línea de producción industrial crítica de 120 puestos. En producción y en uso diario por ~40 personas (operarios a 3 turnos y equipos de calidad, mantenimiento, finanzas y producción).

• Arquitectura cliente-servidor de extremo a extremo: backend Node.js + Prisma sobre PostgreSQL (arquitectura por capas, integridad transaccional), dos SPAs React 19 + TypeScript (administración y app de planta para 15 tablets) y un microservicio independiente de gestión documental (planos, imágenes y vídeo de proceso con streaming progresivo).
• Infraestructura en AWS (ECS Fargate, RDS PostgreSQL, S3, CloudFront, WAF, Route 53): diseño, migración a la nube, despliegue continuo y monitorización.
• Funcionalidad de negocio en tiempo real: planificación de órdenes, fichaje de operarios, asignaciones de producción, control de reparaciones, registro de control de proceso (RCP) y gestión documental técnica.
• Analítica e inteligencia de negocio: cálculo de OEE (disponibilidad × rendimiento × calidad), análisis de costes y rendimiento, y trazabilidad de extremo a extremo de la producción.
• Seguridad de extremo a extremo: enfoque de defensa en profundidad y mínimo privilegio, auditorías periódicas (infraestructura, backend y frontends) y endurecimiento —JWT en cookies httpOnly, control de acceso por roles, fingerprinting de dispositivos para tablets compartidas, WAF y mitigación del OWASP Top 10—.

Stack: React · TypeScript · Node.js · Prisma · PostgreSQL · AWS · Docker
```
**EN**
```
Design, development and operation —as the sole engineer, from scratch— of the MES that runs, in real time, a mission-critical industrial production line of 120 workstations. In production and used daily by ~40 people (operators across 3 shifts and the quality, maintenance, finance and production teams).

• End-to-end client-server architecture: Node.js + Prisma backend on PostgreSQL (layered architecture, transactional integrity), two React 19 + TypeScript SPAs (admin and shop-floor app for 15 tablets) and a standalone document-management microservice (drawings, images and process video with progressive streaming).
• AWS infrastructure (ECS Fargate, RDS PostgreSQL, S3, CloudFront, WAF, Route 53): design, cloud migration, continuous deployment and monitoring.
• Real-time business features: work-order planning, operator clock-in, production assignments, repair tracking, process control records (RCP) and technical document management.
• Business analytics & intelligence: OEE calculation (availability × performance × quality), cost and performance analysis, and end-to-end production traceability.
• End-to-end security: defense-in-depth and least-privilege approach, periodic audits (infrastructure, backend and frontends) and hardening —JWT in httpOnly cookies, role-based access control, device fingerprinting for shared tablets, WAF and OWASP Top 10 mitigation.

Stack: React · TypeScript · Node.js · Prisma · PostgreSQL · AWS · Docker
```

### 5.2 Radiokable — Desarrollador Full Stack (Prácticas) · feb. – may. 2026 · (en paralelo con THIELMANN)

**ES**
```
Prácticas full-stack desarrolladas en paralelo a mi puesto en THIELMANN.

• RK Utility: aplicación móvil (Flutter) con backend Node.js + Express sobre PostgreSQL, publicada en App Store y Google Play. Desarrollada en equipo y desplegada en servidor propio.
• Aplicación web interna (PHP + MySQL) para la gestión de inspecciones de emplazamientos.

Stack: Flutter · Node.js · Express · PostgreSQL · PHP · MySQL
```
**EN**
```
Full-stack internship carried out in parallel with my role at THIELMANN.

• RK Utility: mobile app (Flutter) with a Node.js + Express backend on PostgreSQL, published on the App Store and Google Play. Built as a team and deployed on an in-house server.
• Internal web app (PHP + MySQL) for managing site inspections.

Stack: Flutter · Node.js · Express · PostgreSQL · PHP · MySQL
```

### 5.3 SM Services — Full-stack Developer (Prácticas) · abr. – jun. 2024

**ES**
```
• Desarrollo full-stack de aplicaciones cloud y de nuevas funcionalidades.
• Trabajo en equipo bajo metodología Agile/Scrum.

Stack: JavaScript · Cloud · Git · Scrum
```
**EN**
```
• Full-stack development of cloud applications and new features.
• Teamwork under Agile/Scrum methodology.

Stack: JavaScript · Cloud · Git · Scrum
```
> Skills de esta entrada limpiadas: se quitaron Azure / Blockchain / Java (no representativos).

---

## 6. Educación (títulos y descripciones traducidos al inglés)

### 6.1 CES Cristo Rey — Desarrollo de Aplicaciones Multiplataforma (DAM) · 2022 – 2024
- **EN title:** Cross-platform Application Development
- **EN desc:** Fundamentals of software development: memory management with C++ and robust, concurrent architectures with Java (multithreading), plus database design.

### 6.2 IES Alonso Cano — Desarrollo de Aplicaciones Web (DAW) · 2024 – 2026
- **EN title:** Web Application Development
- **EN desc:** Modern software architecture and building scalable systems with the JavaScript/TypeScript ecosystem.

> No se pudieron vincular los logos de los centros: el campo no ofrece autocompletado al editar; quedan como texto.

---

## 7. Idiomas
- **Español:** nativo.
- **Inglés:** "Competencia básica limitada" (B1 real, sin titulación).

## 8. Aptitudes (skills aplicadas)
React.js · Node.js · TypeScript · AWS · Seguridad de aplicaciones web.

---

## 9. Posicionamiento (vigente)
**Desarrollador Full Stack con sello en seguridad y cloud**: "Full Stack" como sustantivo principal; **seguridad como mentalidad y práctica real en producción** (no como credencial); AWS/cloud como activo de apoyo; nicho **industrial/MES** como diferenciador único. No usar "Architect" como titular.

## 10. Pendientes / riesgos
- [ ] Subir el **banner rediseñado** (prompt de diseño lo aporta el usuario).
- [ ] (Opcional) Usar el **mensaje para reclutadores (ES/EN)** ya preparado.
- [ ] **Riesgo de coherencia:** el portfolio público muestra certificaciones (AWS/Google/Meta) y formación en ciberseguridad que no son reales. Alinear el portfolio con las decisiones de la sección 1 para evitar contradicción LinkedIn ↔ portfolio si un recruiter cruza ambos.

## 11. Reglas para futuras ediciones del perfil
- Respetar la sección 1 (decisiones que anulan la spec) sin excepción.
- No inventar logros ni métricas; lo no verificable se marca `[PENDIENTE]` y se pregunta.
- Confirmar con el usuario antes de aplicar cualquier cambio en el perfil real; no activar #OpenToWork, no publicar posts, no enviar invitaciones.
- Mantener paridad ES/EN en titular, "Acerca de" y experiencias.
```
