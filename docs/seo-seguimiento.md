# SEO — Seguimiento y contexto

> **Última actualización:** 2026-07-02
> **Dominio:** `https://jgonzalezroman.com/`
> **Stack:** Vite 7 + React 19 + prerender SSR propio (`scripts/prerender.mjs`)

---

## Estado actual (2026-07-02)

| Señal | Estado |
|-------|--------|
| Google Search Console configurado | ✅ |
| Sitemap enviado (`/sitemap.xml`) | ✅ |
| Indexación solicitada manualmente | ✅ (solicitada esta noche) |
| Redirect `www` → `jgonzalezroman.com` | ✅ 301 Permanent (configurado en Vercel) |
| Nombre visible en body HTML | ✅ (corregido hoy) |
| Contenido sin `opacity:0` en prerender | ✅ (corregido hoy) |
| Backlink externo detectado por Google | ❌ Pendiente (artículo LinkedIn) |
| URL indexada por Google | ❌ En proceso (24-48h) |

---

## Problema que existía y cómo se resolvió

### 1. Framer Motion ocultaba el contenido al prerender

**Problema:** El script `postbuild` (`scripts/prerender.mjs`) genera HTML estático con
`renderToString`. Framer Motion inyecta los valores del prop `initial` como estilos inline.
Todos los elementos empezaban con `opacity:0` o `transform:translateY(110%)` en el HTML
que Google indexaba — contenido técnicamente presente pero invisible.

**Solución aplicada:** Se creó `src/utils/ssr.ts`:

```ts
export const ssr = typeof window === 'undefined';
```

En cada componente:
- **Animaciones de montaje** (Hero): `initial={ssr ? estadoFinal : estadoInicial}`
- **Animaciones de scroll** (whileInView): `initial={ssr ? false : estadoInicial}`

Con `initial={false}` en SSR, Framer Motion no aplica ningún estilo inline → el elemento
renderiza visible por defecto. En el navegador (`ssr = false`) las animaciones funcionan
con normalidad.

**Archivos modificados:**
- `src/utils/ssr.ts` — nueva utilidad
- `src/componentes/secciones/Hero.tsx`
- `src/componentes/layout/SectionTransition.tsx`
- `src/componentes/secciones/ThielmannCaseStudy.tsx`
- `src/componentes/secciones/Experiencia.tsx`
- `src/componentes/secciones/Tecnologias.tsx`
- `src/componentes/secciones/Educacion.tsx`

**Commit:** `1c2b181` — `fix(seo): contenido visible en prerender y nombre legible por Google`

---

### 2. Nombre no visible en el body

**Problema:** El nombre "José Antonio González Román" solo aparecía en `<title>`,
`<meta>`, JSON-LD y footer. El `<h1>` solo contenía "Full Stack" + "Developer." El
`<span class="sr-only">` con el nombre estaba en la versión local sin deployar.

**Solución aplicada:** Se añadió un `<p>` visible encima del label de rol en `Hero.tsx`:

```tsx
<motion.p
  initial={ssr ? { opacity: 1 } : { opacity: 0 }}
  animate={{ opacity: 1 }}
  className="text-xs font-mono text-zinc-400 tracking-[0.15em] mb-2"
>
  José Antonio González Román
</motion.p>
```

Estéticamente mantiene la tipografía mono del diseño, en `zinc-400` (ligeramente más
brillante que el label de rol en `zinc-600`).

---

### 3. Redirect `www` era 307 (temporal) en vez de 301 (permanente)

**Problema:** `www.jgonzalezroman.com` redirigía a `jgonzalezroman.com` con un **307
Temporary Redirect** (procedente del DNS/registrador, sin estar configurado en Vercel).
Google interpretó las dos URLs como duplicadas y eligió `www` como canónica en lugar de
la declarada en el `<link rel="canonical">`.

Error en Search Console: _"Duplicada: Google ha elegido una versión canónica diferente
a la del usuario"_ con canónica seleccionada por Google: `https://www.jgonzalezroman.com/`

**Solución aplicada:** Se añadió `www.jgonzalezroman.com` en **Vercel → Settings →
Domains** configurado como:
- Tipo: **Redirect to Another Domain**
- Redirect: **301 Moved Permanently**
- Destino: `jgonzalezroman.com`

Verificado con `curl -sI https://www.jgonzalezroman.com/` → `HTTP/2 301`.

---

## Qué falta por hacer

### Acción inmediata — ALTA PRIORIDAD

**Publicar artículo en LinkedIn** con enlace a `https://jgonzalezroman.com/`

Search Console muestra: _"Página de referencia: No se ha detectado ninguna"_. Sin
backlinks externos Google no tiene señal de autoridad. Un enlace desde LinkedIn
(dominio de altísima autoridad) es la acción con mayor impacto en el tiempo de
posicionamiento.

El artículo ya está redactado. Solo falta publicarlo.

---

### Revisión en 48 horas

Volver a Search Console → Inspección de URLs → `https://jgonzalezroman.com/` y
comprobar que:
- [ ] La canónica seleccionada por Google es `https://jgonzalezroman.com/` (no `www`)
- [ ] Desaparece el error "Duplicada"
- [ ] El estado cambia de "URL no está en Google" a "URL está en Google"

---

## Plazos estimados

| Hito | Plazo estimado |
|------|---------------|
| Google procesa solicitud de indexación | 24-48h |
| Error de duplicada resuelto (301 propagado) | 24-72h |
| URL aparece indexada en Google | 3-7 días |
| Posicionamiento por nombre completo | 2-4 semanas |
| Posicionamiento consolidado con backlink LinkedIn | 1-2 semanas tras publicar |

---

## Verificación técnica del prerender

Resultado del build post-corrección:

```
Instancias translateY(110%) en dist/index.html : 0
Instancias opacity:0 en body                   : 1 (solo icono SVG hamburguesa — no contenido)
"José Antonio González Román" con opacity:1    : ✅ visible en body
```

Para verificar en el futuro tras cualquier cambio:

```bash
cd portfolio && npm run build
python3 -c "
import re
html = open('dist/index.html').read()
print('translateY(110%):', html.count('translateY(110%)'))
print('opacity:0 en body:', len(re.findall(r'opacity:0', html)))
print('Nombre visible:', 'José Antonio González Román' in html)
"
```
