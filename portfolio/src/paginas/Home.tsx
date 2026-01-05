import { Navbar } from "../componentes/layout/Navbar"
import { Hero } from "../componentes/secciones/Hero"
import { Footer } from "../componentes/layout/Footer"

export function Home() {
  return (
    <div className="h-screen flex flex-col bg-background">
      {/* NAVBAR FIJO */}
      <Navbar />

      {/* ZONA SCROLLEABLE */}
      <main className="flex-1 overflow-y-auto">
        <Hero />
      </main>

      {/* FOOTER SIEMPRE VISIBLE */}
      <Footer />
    </div>
  )
}