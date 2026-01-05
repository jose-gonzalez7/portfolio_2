import { Navbar } from "../componentes/layout/Navbar"
import { Hero } from "../componentes/secciones/Hero"
import { Footer } from "../componentes/layout/Footer"

export function Home() {
  return (
    <div className="h-screen flex flex-col bg-background overflow-hidden">
      {/* NAVBAR FIXED */}
      <Navbar />

      {/* CONTENIDO CENTRAL SCROLLEABLE */}
      <main className="flex-1 overflow-y-auto pt-16">
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
