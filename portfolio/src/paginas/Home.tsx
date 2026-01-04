import { Navbar } from "../componentes/layout/Navbar"
import { Hero } from "../componentes/secciones/Hero"
import { Footer } from "../componentes/layout/Footer"

export function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1">
        <Hero />
      </main>

      <Footer />
    </div>
  )
}