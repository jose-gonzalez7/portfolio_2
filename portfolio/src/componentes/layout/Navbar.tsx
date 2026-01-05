import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Download, Menu, X } from "lucide-react"

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("Inicio")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = navLinks.map(link => link.href.substring(1))
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) {
        setActiveSection(navLinks.find(link => link.href === `#${current}`)?.label || "Inicio")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      // ─────────────────────────────────────────────────────────────
      // CORRECCIÓN 1: Fondo del Navbar
      // ─────────────────────────────────────────────────────────────
      // Antes: Si no hay scroll, era transparente siempre.
      // Ahora: Usamos una lógica base (oscuro) y sobreescribimos solo en desktop (md:)
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled || isOpen // Si hay scroll O el menú está abierto
          ? "bg-[#0b1220]/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/5"
          : "bg-[#0b1220]/90 backdrop-blur-md border-b border-white/5 md:bg-transparent md:border-transparent md:shadow-none"
          // ^ En móvil: fondo oscuro siempre. ^ En PC (md): transparente si no hay scroll.
        }
      `}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* ─── IZQUIERDA: LOGO ─── */}
        <a href="#inicio" className="flex items-center gap-3 group">
          {/*
            ─────────────────────────────────────────────────────────────
            CORRECCIÓN 2: Foto de perfil
            ─────────────────────────────────────────────────────────────
            Se añadió 'aspect-square' para asegurar que siempre sea un círculo perfecto.
            Se añadió 'shrink-0' para que flexbox no intente aplastarla.
          */}
          <div className="relative flex shrink-0 items-center justify-center h-10 w-10 aspect-square overflow-hidden rounded-full ring-2 ring-white/10 group-hover:ring-blue-500/50 transition-all duration-300 bg-[#0b1220]">
            <img
              src="/perfil.png"
              alt="Logo"
              // object-cover se encarga de recortar la imagen para que llene el círculo sin deformarse
              className="h-full w-full object-cover"
              onError={(e) => {
                // Fallback si falla la imagen
                const target = e.currentTarget as HTMLImageElement;
                target.style.display = 'none';
                if (target.parentElement) {
                    target.parentElement.classList.add('bg-gradient-to-br', 'from-cyan-400', 'to-violet-600');
                    target.parentElement.innerHTML = '<span class="text-white font-bold text-xs">JG</span>';
                }
              }}
            />
          </div>
        </a>

        {/* ─── CENTRO: LINKS DESKTOP ─── */}
        <ul className="hidden md:flex items-center gap-1 bg-white/5 px-2 py-1.5 rounded-full border border-white/5 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.label
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setActiveSection(link.label)}
                  className={`
                    relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300
                    ${isActive ? "text-white" : "text-slate-400 hover:text-white"}
                  `}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute inset-0 bg-white/10 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              </li>
            )
          })}
        </ul>

        {/* ─── DERECHA: ACCIONES ─── */}
        <div className="flex items-center gap-4">
          <a
            href="/cv.pdf"
            download
            className="
              hidden md:inline-flex items-center gap-2
              bg-blue-600 hover:bg-blue-500 text-white
              px-5 py-2.5 rounded-lg text-sm font-semibold
              transition-all duration-300 transform hover:scale-105
              shadow-[0_0_20px_rgba(37,99,235,0.3)]
            "
          >
            <span>CV</span>
            <Download size={16} />
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300 hover:text-white transition-colors p-2"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X size={28} />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Menu size={28} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* ─── MENÚ MÓVIL ─── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            // Aseguramos que el fondo del menú desplegado también sea sólido
            className="md:hidden overflow-hidden bg-[#0b1220] border-b border-white/10 shadow-xl"
          >
            <ul className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <a
                    href={link.href}
                    onClick={() => {
                      setIsOpen(false)
                      setActiveSection(link.label)
                    }}
                    className={`text-lg font-medium ${activeSection === link.label ? "text-blue-400" : "text-slate-400"}`}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <a
                  href="/cv.pdf"
                  download
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full mt-4 transition-all shadow-lg shadow-blue-900/20"
                >
                  Descargar CV <Download size={18} />
                </a>
              </motion.div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}