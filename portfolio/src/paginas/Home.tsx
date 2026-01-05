import { Navbar } from "../componentes/layout/Navbar"
import { Hero } from "../componentes/secciones/Hero"
import { Footer } from "../componentes/layout/Footer"

export function Home() {
  return (
    <div
      className="
        min-h-[100dvh]
        grid
        grid-rows-[auto,1fr,auto]
        bg-background
        overflow-hidden
      "
    >
      {/* NAVBAR */}
      <Navbar />

      {/* CONTENIDO SCROLLEABLE */}
      <main className="overflow-y-auto pt-16">
        <Hero />
        {/* aquí irán más secciones */}
      </main>

      {/* FOOTER SIEMPRE VISIBLE */}
      <footer className="pb-[env(safe-area-inset-bottom)]">
        <Footer />
      </footer>
    </div>
  )
}
