import { Navbar } from "../componentes/layout/Navbar"
import { Hero } from "../componentes/secciones/Hero"
import { Footer } from "../componentes/layout/Footer"

// Home.tsx
export function Home() {
  return (
    // CAMBIO AQUÍ: h-screen -> h-[100dvh]
    // Usamos h-[100dvh] para que se adapte exactamente al espacio visible en móvil
    <div className="h-[100dvh] flex flex-col bg-background overflow-hidden supports-[height:100cqh]:h-[100cqh] supports-[height:100svh]:h-[100svh]">
      
      {/* NAVBAR FIXED */}
      <Navbar />

      {/* CONTENIDO CENTRAL SCROLLEABLE */}
      <main className="flex-1 overflow-y-auto pt-16">
        <Hero />
        {/* resto del contenido */}
      </main>

      {/* FOOTER */}
      {/* Mantenemos el padding para el 'home indicator' (la barrita blanca de abajo del iPhone) */}
      <footer className="pb-[env(safe-area-inset-bottom)] shrink-0">
        <Footer />
      </footer>
    </div>
  )
}

