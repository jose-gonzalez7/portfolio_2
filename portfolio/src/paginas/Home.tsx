import { Navbar } from "../componentes/layout/Navbar"
import { Hero } from "../componentes/secciones/Hero"
import { Educacion } from "../componentes/secciones/Educacion"
import { Footer } from "../componentes/layout/Footer"
import { Experiencia } from "../componentes/secciones/Experiencia"
import { SectionTransition } from "../componentes/layout/SectionTransition"
import { Tecnologias } from "../componentes/secciones/Tecnologias"
import { Contacto } from "../componentes/secciones/Contacto"

export function Home() {
  return (
    <div className="h-[100dvh] flex flex-col bg-[#0b1220] overflow-hidden">
      <Navbar />

      <main className="flex-1 overflow-y-auto scroll-smooth">
        
        {/* El Hero suele ir sin transición externa porque carga al inicio */}
        <Hero />
        
        {/* Envolvemos Educación */}
        <SectionTransition>
          <Educacion />
        </SectionTransition>
        
        {/* Envolvemos Experiencia */}
        <SectionTransition>
          <Experiencia />
        </SectionTransition>

        {/* Envolvemos Tecnologías */}
        <SectionTransition>
          <Tecnologias />
        </SectionTransition>

        <SectionTransition>
          <Contacto />
        </SectionTransition>
        
      </main>

      <Footer />
    </div>
  )
}