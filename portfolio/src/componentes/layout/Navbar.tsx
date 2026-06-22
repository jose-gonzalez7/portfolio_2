import { useState, useEffect } from "react"
import { AnimatePresence, motion, useScroll, useMotionValueEvent, type Variants } from "framer-motion"
import { X, Menu } from "lucide-react"

const navLinks = [
  { label: "Inicio",       href: "#inicio" },
  { label: "THIELMANN",   href: "#thielmann" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Educación",   href: "#educacion" },
  { label: "Tecnologías", href: "#tecnologias" },
  { label: "Contacto",    href: "#contacto" },
]

export function Navbar() {
  const [isOpen, setIsOpen]               = useState(false)
  const [activeSection, setActiveSection] = useState("Inicio")
  const [isScrolled, setIsScrolled]       = useState(false)
  const [visible, setVisible]             = useState(true)

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    setIsScrolled(latest > 50)
    setVisible(!(latest > previous && latest > 150))
  })

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    const handleScroll = () => {
      const trigger = window.scrollY + window.innerHeight * 0.3

      if (window.scrollY < 50) { setActiveSection("Inicio"); return }
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        setActiveSection("Contacto"); return
      }
      for (const link of navLinks) {
        const el = document.getElementById(link.href.substring(1))
        if (el) {
          const { offsetTop, offsetHeight } = el
          if (trigger >= offsetTop && trigger < offsetTop + offsetHeight) {
            setActiveSection(link.label); break
          }
        }
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isOpen])

  const mobileMenuVars: Variants = {
    initial: { y: "-100%"  },
    animate: { y: "0%",    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
    exit:    { y: "-100%", transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
  }

  const mobileLinkVars: Variants = {
    initial: { y: 24, opacity: 0 },
    open:    { y: 0,  opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
  }

  return (
    <>
      <motion.header
        variants={{ visible: { y: 0, opacity: 1 }, hidden: { y: -80, opacity: 0 } }}
        animate={visible ? "visible" : "hidden"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#09090b]/90 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-screen-xl mx-auto flex items-center justify-between px-6 md:px-14 h-16">

          {/* Logo */}
          <a
            href="#inicio"
            className="text-xs font-mono text-zinc-500 hover:text-white transition-colors tracking-[0.15em] uppercase"
          >
            José González
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setActiveSection(link.label)}
                  className={`text-xs font-mono uppercase tracking-widest transition-colors duration-200 ${
                    activeSection === link.label
                      ? "text-white"
                      : "text-zinc-600 hover:text-zinc-300"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right: social + mobile toggle */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              <a
                href="https://www.linkedin.com/in/jgonzalezroman-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-zinc-600 hover:text-white transition-colors uppercase tracking-widest"
              >
                LinkedIn
              </a>
              <a
                href="mailto:jgonzalezroman7@gmail.com"
                className="text-xs font-mono text-zinc-600 hover:text-white transition-colors uppercase tracking-widest"
              >
                Email
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-1 text-zinc-400 hover:text-white transition-colors"
              aria-label="Menú"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X size={22} />
                  </motion.span>
                ) : (
                  <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu size={22} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 z-40 bg-[#09090b] flex flex-col px-6 pt-24 pb-10 md:hidden overflow-y-auto"
          >
            <motion.ul
              initial="initial"
              animate="open"
              exit="initial"
              transition={{ staggerChildren: 0.06, delayChildren: 0.15 }}
              className="flex flex-col gap-2 flex-1"
            >
              {navLinks.map((link) => (
                <li key={link.label} className="overflow-hidden border-b border-white/5 py-4">
                  <motion.div variants={mobileLinkVars}>
                    <a
                      href={link.href}
                      onClick={() => { setActiveSection(link.label); setIsOpen(false) }}
                      className={`text-3xl font-black uppercase tracking-tighter transition-colors ${
                        activeSection === link.label ? "text-white" : "text-zinc-700 hover:text-zinc-400"
                      }`}
                    >
                      {link.label}
                    </a>
                  </motion.div>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex gap-8 pt-8 border-t border-white/5"
            >
              <a href="https://www.linkedin.com/in/jgonzalezroman-dev/" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-zinc-500 hover:text-white transition-colors uppercase tracking-widest">
                LinkedIn
              </a>
              <a href="mailto:jgonzalezroman7@gmail.com" className="text-xs font-mono text-zinc-500 hover:text-white transition-colors uppercase tracking-widest">
                Email
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
