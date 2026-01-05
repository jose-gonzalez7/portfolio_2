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
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled || isOpen 
          ? "bg-[#0b1220]/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/5" 
          : "bg-[#0b1220]/90 backdrop-blur-md border-b border-white/5 md:bg-transparent md:border-transparent md:shadow-none"
        }
      `}
    >
      <nav className="w-full px-6 md:px-10 h-20 flex items-center justify-between">

        {/* ─── IZQUIERDA: LOGO (INICIALES JG) ─── */}
        <a href="#inicio" className="flex items-center gap-3 group focus:outline-none">
          {/* Contenedor del Logo */}
          <div className="
            relative flex shrink-0 items-center justify-center 
            h-10 w-10 rounded-full 
            bg-gradient-to-br from-blue-600 to-violet-600
            text-white font-bold font-mono text-sm tracking-wider
            ring-2 ring-white/10 group-hover:ring-blue-400/50 
            shadow-[0_0_15px_rgba(37,99,235,0.3)] group-hover:shadow-[0_0_25px_rgba(37,99,235,0.6)]
            transition-all duration-300
          ">
            JG
            {/* Brillo interno sutil */}
            <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
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
              shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]
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
            className="md:hidden overflow-hidden bg-[#0b1220] border-b border-white/10 shadow-2xl"
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