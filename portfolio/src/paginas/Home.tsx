import { Navbar } from "../componentes/layout/Navbar"
import { Hero } from "../componentes/secciones/Hero"
import { Educacion } from "../componentes/secciones/Educacion"
import { Footer } from "../componentes/layout/Footer"
import { Experiencia } from "../componentes/secciones/Experiencia"

export function Home() {
  return (
    <div className="h-[100dvh] flex flex-col bg-[#0b1220] overflow-hidden">
      <Navbar />

      <main className="flex-1 overflow-y-auto scroll-smooth">
        <Hero />
        <Educacion />
        <Experiencia />
      </main>

      <Footer /> {/* Si quieres que el footer siga fijo o abajo del todo */}
    </div>
  )
}