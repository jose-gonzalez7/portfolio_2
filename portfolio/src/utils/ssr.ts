/**
 * true durante el prerender en Node.js (renderToString),
 * false siempre en el navegador.
 * Se usa para que Framer Motion emita el estado final (visible)
 * en el HTML estático que indexa Google.
 */
export const ssr = typeof window === 'undefined';
