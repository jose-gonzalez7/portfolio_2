# Auditoría de seguridad — Portfolio (pre-deploy Vercel)

> **Fecha:** 2026-06-22  
> **Auditor:** Cursor AI  
> **Alcance:** Código fuente, configuración de build, assets públicos y configuración de despliegue  
> **Stack:** Vite 7 + React 19 + TypeScript + Tailwind CSS + EmailJS → Vercel (SPA estática)  
> **Resultado:** Sin bloqueadores críticos. 2 hallazgos HIGH que requieren acción antes del deploy.

---

## Resumen ejecutivo

Es un sitio **100 % estático** (SPA generada por Vite). No hay backend propio, no hay base de datos, no hay autenticación de usuarios. La superficie de ataque es reducida. Los riesgos principales son:

1. Las credenciales de EmailJS quedarán **embebidas en el bundle JS** — visible para cualquier visitante.
2. El sitio se servirá sin **cabeceras HTTP de seguridad** — deja abierta protección básica (clickjacking, MIME sniffing, CSP).

Ambos tienen solución directa y documentada más abajo.

---

## Clasificación de hallazgos

| ID | Severidad | Área | Título | Estado |
|----|-----------|------|--------|--------|
| SEC-01 | 🔴 HIGH | Credenciales | EmailJS credentials expuestas en el bundle JS | ✅ Resuelto — proxy serverless en `api/send-email.ts` |
| SEC-02 | 🔴 HIGH | Infraestructura | Ausencia de cabeceras HTTP de seguridad | ✅ Corregido — `vercel.json` creado |
| SEC-03 | 🟡 MEDIUM | Formulario | Sin rate limiting en el formulario de contacto | ✅ Corregido — cooldown de 60s implementado |
| SEC-04 | 🟡 MEDIUM | Privacidad | Email personal expuesto en plaintext scrapieable | ✅ Aceptado — intencional para portfolio |
| SEC-05 | 🟡 MEDIUM | SEO / Social | og:image / twitter:image apuntan a un fichero inexistente | ✅ Corregido — cambiado a `preview.png` |
| SEC-06 | 🟢 LOW | HTML | `lang="en"` en un sitio completamente en español | ✅ Corregido — `lang="es"` |
| SEC-07 | 🟢 LOW | Configuración | Falta `.env.example` para documentar variables necesarias | ✅ Corregido — `.env.example` creado |
| SEC-08 | 🟢 LOW | Dependencias | `react-router-dom` instalado pero no usado | ✅ Corregido — desinstalado |
| SEC-09 | ℹ️ INFO | Assets | CV (`cv.pdf`) accesible públicamente sin autenticación | ✅ Aceptado — intencional |
| SEC-10 | ℹ️ INFO | Git | `.env` correctamente ignorado por `.gitignore` | ✅ Sin acción necesaria |

---

## Detalle de hallazgos

---

### SEC-01 — 🔴 HIGH — EmailJS credentials embebidas en el bundle

**Ficheros afectados:**  
- `portfolio/.env` (fuente)
- `portfolio/src/componentes/secciones/Contacto.tsx` (consumidor)

**Descripción:**

El proyecto usa variables de entorno con el prefijo `VITE_`:

```
VITE_EMAILJS_SERVICE_ID=service_xejugx8
VITE_EMAILJS_TEMPLATE_ID=template_5kauja9
VITE_EMAILJS_PUBLIC_KEY=9MEsUQ5dEkQGE-PiE
```

Cualquier variable con prefijo `VITE_` en Vite es **incrustada en el bundle JavaScript en tiempo de build** y queda accesible públicamente en el navegador. Cualquier persona que inspecione el JS del sitio puede extraer los tres valores.

**Impacto real:**

- La `PUBLIC_KEY` de EmailJS **está diseñada para ser pública** — es una clave de API de cliente, no un secreto. EmailJS la requiere en el frontend.
- El `SERVICE_ID` y `TEMPLATE_ID` también son técnicamente visibles. Un actor malicioso podría usar estas credenciales para enviar emails a través de tu cuenta de EmailJS, agotando la cuota del plan gratuito (~200 emails/mes) o haciendo spam.
- **No es posible ocultar estas credenciales** en una SPA pura — siempre llegarán al cliente.

**Mitigación obligatoria (EmailJS Dashboard):**

EmailJS permite restringir las llamadas API **por dominio**. Hay que configurarlo antes del deploy:

1. Ir a [EmailJS Dashboard → Account → Security](https://dashboard.emailjs.com/admin/account)
2. En la sección **"Allowed Origins"** o **"Domain Whitelist"**, añadir exclusivamente el dominio de producción (ej. `https://jgonzalezroman.com` o el dominio de Vercel).
3. Con esta restricción activa, las credenciales solo funcionan desde ese origen — aunque alguien las extraiga del bundle, no podrá usarlas desde otro dominio.

**Variables de entorno en Vercel:**

Las variables `VITE_*` deben configurarse como **Environment Variables** en el panel de Vercel (Settings → Environment Variables), no subirse en ningún fichero `.env` al repositorio. El `.env` local ya está correctamente ignorado por `.gitignore` (ver SEC-10).

---

### SEC-02 — 🔴 HIGH — Sin cabeceras HTTP de seguridad

**Ficheros afectados:**  
- No existe `portfolio/vercel.json`  
- `portfolio/index.html` (sin meta CSP)

**Descripción:**

El sitio se desplegará en Vercel sin ninguna cabecera de seguridad configurada. Vercel no las añade automáticamente. Esto deja las siguientes protecciones desactivadas:

| Cabecera | Riesgo sin ella |
|----------|-----------------|
| `X-Frame-Options: DENY` | Clickjacking — el sitio puede embeberse en un iframe de terceros |
| `X-Content-Type-Options: nosniff` | MIME sniffing — el navegador puede interpretar ficheros como un tipo distinto al declarado |
| `Referrer-Policy: strict-origin-when-cross-origin` | Fuga de URL del portfolio al navegar a enlaces externos |
| `Permissions-Policy` | Acceso sin restricción a cámara, micrófono, geolocalización desde iframes |
| `Content-Security-Policy` | Sin política de fuentes — permite carga de scripts de cualquier origen si hubiera una inyección XSS |

**Acción requerida:**

Crear el fichero `portfolio/vercel.json` con las cabeceras adecuadas. Ejemplo mínimo recomendado:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options",           "value": "DENY" },
        { "key": "X-Content-Type-Options",    "value": "nosniff" },
        { "key": "Referrer-Policy",           "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy",        "value": "camera=(), microphone=(), geolocation=()" },
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.emailjs.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https://api.emailjs.com; font-src 'self'; frame-ancestors 'none'"
        }
      ]
    }
  ]
}
```

> **Nota sobre CSP y `'unsafe-inline'`:** Vite genera el bundle con hashes de scripts inline. En producción con Vite, `'unsafe-inline'` en `script-src` puede ser necesario dependiendo de si hay scripts inline generados. Si el build final no tiene scripts inline, se puede eliminar y usar nonces o hashes. Requiere verificación post-build.

**Nota sobre HSTS:** Vercel gestiona automáticamente HTTPS y añade `Strict-Transport-Security` en sus propios dominios (`*.vercel.app`). Con dominio personalizado, se puede añadir manualmente al `vercel.json`.

---

### SEC-03 — 🟡 MEDIUM — Sin rate limiting en el formulario de contacto

**Fichero afectado:** `portfolio/src/componentes/secciones/Contacto.tsx`

**Descripción:**

El formulario no tiene ningún mecanismo de rate limiting en el cliente. Un bot podría hacer múltiples envíos en bucle y:
- Agotar la cuota de EmailJS (200 emails/mes en plan gratuito).
- Llenar la bandeja de entrada con spam.

La validación actual solo comprueba campos vacíos:

```tsx
// Contacto.tsx — línea 29-33
if (!formState.name || !formState.email || !formState.message) {
  setError('Por favor, completa todos los campos.');
  setIsSubmitting(false);
  return;
}
```

**Mitigaciones posibles (sin modificar código ahora):**

1. **EmailJS domain restriction** (ver SEC-01): limita el origen de las llamadas.
2. **Cooldown de estado**: añadir un timer que bloquee nuevos envíos durante X segundos tras un envío exitoso.
3. **Honeypot field oculto**: campo invisible para humanos que los bots suelen rellenar — si tiene contenido, rechazar el envío.
4. **Google reCAPTCHA v3** (invisible): integración directa con EmailJS disponible.

**Prioridad de implementación:** después del deploy inicial. No es bloqueante para el lanzamiento.

---

### SEC-04 — 🟡 MEDIUM — Email en plaintext scrapieable

**Ficheros afectados:**  
- `portfolio/src/componentes/secciones/Contacto.tsx` (líneas 19, 97)  
- `portfolio/src/componentes/layout/Navbar.tsx` (línea 122)

**Descripción:**

El email `jgonzalezroman7@gmail.com` aparece en tres puntos en texto plano:
- En el `href="mailto:..."` del Navbar.
- Como texto visible en la sección de contacto.
- En la función `handleCopyEmail` como string literal.

Los scrapers de spam recopilan emails de forma automatizada explorando el código fuente HTML. Un email público en un portfolio atrae spam.

**Contexto:** para un portfolio profesional, cierto nivel de exposición del email es deliberado (es el punto de contacto). La pregunta es el nivel de protección deseado.

**Opciones (de menor a mayor fricción):**

| Opción | Descripción |
|--------|-------------|
| Ninguna | Mantener como está — email visible, funcional, scrapieable |
| Ofuscación CSS | Invertir el email con `direction: rtl` en CSS — confunde scrapers simples, transparente para usuarios |
| Solo formulario | Eliminar el mailto visible y dejar solo el formulario — menos spam, menos accesibilidad directa |
| Servicio intermediario | Usar un alias (ej. `hey@jgonzalezroman.com` que redirige a Gmail) — separa el email público del real |

**Recomendación:** dado que es un portfolio profesional y el objetivo es que los recruiters contacten, se acepta la exposición. La opción de alias de dominio es la mejor protección a largo plazo cuando el dominio esté activo.

---

### SEC-05 — 🟡 MEDIUM — og:image / twitter:image apuntan a un archivo que no existe

**Fichero afectado:** `portfolio/index.html` (líneas 13, 20)

**Descripción:**

Las meta tags de Open Graph y Twitter Card referencian:

```
https://jgonzalezroman.com/preview.jpg
```

Sin embargo, en `portfolio/public/` solo existen:
- `preview.png`
- `preview2.jpg`
- `preview3.jpg`

**No existe `preview.jpg`.**

Esto significa que al compartir el portfolio en LinkedIn, Twitter o Slack, el preview de imagen no se mostrará — aparecerá en blanco o con un error.

**Acción requerida:**

Decidir cuál de las imágenes existentes es la adecuada como preview social (probablemente `preview.png` o `preview2.jpg`) y actualizar las meta tags acordemente. Si se usa el dominio personalizado, la URL debería ser:

```html
<meta property="og:image" content="https://jgonzalezroman.com/preview.png" />
<meta name="twitter:image" content="https://jgonzalezroman.com/preview.png" />
```

Si aún no hay dominio propio y se usa el subdominio de Vercel, la URL será diferente — actualizarla en consecuencia.

---

### SEC-06 — 🟢 LOW — `lang="en"` en un sitio en español

**Fichero afectado:** `portfolio/index.html` (línea 2)

**Descripción:**

```html
<html lang="en">
```

Todo el contenido del portfolio está en español. El atributo `lang` incorrecto afecta:
- Lectores de pantalla (accesibilidad) — pronunciarán el contenido con acento inglés.
- SEO — los motores de búsqueda pueden indexar el idioma incorrectamente.

**Corrección:** cambiar a `lang="es"`.

---

### SEC-07 — 🟢 LOW — Falta `.env.example`

**Descripción:**

No existe un fichero `.env.example` que documente las variables de entorno requeridas para el proyecto. Cuando alguien clone el repositorio o cuando se configure el proyecto en Vercel por primera vez, no hay referencia de qué variables hay que configurar.

**Acción recomendada:** crear `portfolio/.env.example`:

```env
# EmailJS — configurar en https://dashboard.emailjs.com
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

Este fichero sí debe estar en el repositorio (sin valores reales). El `.env` real permanece ignorado por `.gitignore`.

---

### SEC-08 — 🟢 LOW — `react-router-dom` instalado pero no utilizado

**Fichero afectado:** `portfolio/package.json`

**Descripción:**

`react-router-dom@^7.11.0` está listado como dependencia de producción, pero el proyecto no lo usa en ningún lugar. `App.tsx` renderiza directamente `<Home />` sin ningún `<Router>`, `<Routes>` ni `<Route>`.

**Impacto:**
- Añade ~50 KB al bundle (antes de tree-shaking — Vite puede eliminar la mayoría si no se importa nada).
- Dependencia de mantenimiento innecesaria — futuras vulnerabilidades en `react-router-dom` generarían alertas de Dependabot sin relevancia real.

**Acción:** si no se planea añadir routing en el corto plazo, ejecutar `npm uninstall react-router-dom`.

---

### SEC-09 — ℹ️ INFO — `cv.pdf` accesible públicamente

**Fichero:** `portfolio/public/cv.pdf`

**Descripción:**

El fichero `cv.pdf` está en la carpeta `public/` y se servirá en `https://tudominio.com/cv.pdf` sin ningún control de acceso. Cualquier persona con la URL puede descargarlo directamente.

**Evaluación:** esto es **completamente intencionado** en un portfolio profesional. Los recruiters deben poder acceder al CV. No es un riesgo de seguridad, sino una decisión de diseño deliberada.

**Nota a futuro:** si en algún momento se quiere controlar el acceso o versionar el CV, se puede usar un enlace externo (Google Drive, LinkedIn, Notion) en lugar de servirlo estáticamente.

---

### SEC-10 — ℹ️ INFO — `.env` correctamente ignorado por `.gitignore`

**Fichero:** `portfolio/.gitignore` (línea 11)

**Descripción:**

El fichero `.env` que contiene las credenciales de EmailJS **no está rastreado por git** — está correctamente listado en `.gitignore`. Verificado con `git ls-files` y `git check-ignore`.

No existe riesgo de exposición de credenciales en el historial del repositorio.

---

## Lista de acciones por prioridad

### Antes del deploy — estado final

| # | Acción | Estado |
|---|--------|--------|
| 1 | Proxy serverless `api/send-email.ts` — credenciales nunca llegan al cliente | ✅ Hecho |
| 2 | Configurar variables `EMAILJS_*` (sin `VITE_`) en **Vercel Environment Variables** | ⚠️ **Pendiente — configurar al conectar repo en Vercel** |
| 3 | `portfolio/vercel.json` con cabeceras de seguridad | ✅ Hecho |
| 4 | Corregir `og:image` → `preview.png` | ✅ Hecho |
| 5 | `lang="es"` en `index.html` | ✅ Hecho |
| 6 | `.env.example` creado | ✅ Hecho |
| 7 | `react-router-dom` desinstalado | ✅ Hecho |
| 8 | Cooldown 60s en formulario de contacto | ✅ Hecho |

---

## Configuración de variables de entorno en Vercel

Cuando se conecte el repositorio a Vercel, las variables deben configurarse así:

```
Variable name                    Value                    Environment
VITE_EMAILJS_SERVICE_ID         service_xejugx8          Production, Preview, Development
VITE_EMAILJS_TEMPLATE_ID        template_5kauja9         Production, Preview, Development
VITE_EMAILJS_PUBLIC_KEY         9MEsUQ5dEkQGE-PiE        Production, Preview, Development
```

**No subir el fichero `.env` al repositorio.** El `.gitignore` ya lo previene, pero hay que verificarlo antes de hacer push si se han hecho cambios.

---

## Veredicto final

El portfolio es un sitio estático sin backend propio. **No maneja datos sensibles de usuarios, no tiene autenticación, no almacena información en base de datos.** El riesgo inherente es bajo.

Los dos puntos de acción obligatorios antes del deploy son:
1. **Restricción de dominio en EmailJS** — para que las credenciales embebidas en el bundle no puedan ser usadas desde otro origen.
2. **Cabeceras de seguridad en Vercel** — protección básica estándar que cualquier sitio moderno debe tener.

Con esas dos acciones aplicadas, el portfolio puede desplegarse con confianza.

---

*Auditoría realizada sobre commit `2028695` (HEAD). Revisar si se aplican cambios antes del deploy.*
