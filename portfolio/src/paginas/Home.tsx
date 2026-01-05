import { Navbar } from "../componentes/layout/Navbar"
import { Hero } from "../componentes/secciones/Hero"
import { Footer } from "../componentes/layout/Footer"

export function Home() {
  return (
    <div className="h-[100dvh] flex flex-col bg-[#0b1220] overflow-hidden">
      <Navbar />

      {/* El contenido central crece para ocupar el espacio, el footer se queda abajo */}
      <main className="flex-1 overflow-y-auto pt-16 scroll-smooth">
        <Hero />
        {/* Aquí irán el resto de secciones */}
      </main>

      {/* Quitamos paddings de aquí para que el Footer maneje su propia anchura */}
      <Footer />
    </div>
  )
}