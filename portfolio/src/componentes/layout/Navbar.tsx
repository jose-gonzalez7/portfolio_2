import  { useState, useEffect } from "react"
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Download, Menu, X, Terminal, Github, Linkedin, Mail } from "lucide-react"

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Educación", href: "#educacion" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Tecnologías", href: "#tecnologias" },
  { label: "Contacto", href: "#contacto" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("Inicio")
  const [isScrolled, setIsScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    setIsScrolled(latest > 50);
    setVisible(!(latest > previous && latest > 150));
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1))
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 300 && rect.bottom >= 300
        }
        return false
      })
      if (current) {
        setActiveSection(navLinks.find(link => link.href === `#${current}`)?.label || "Inicio")
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isOpen])

  // ─── VARIANTES ANIMACIÓN (FIX TYPESCRIPT APLICADO) ───
  
  const menuVars = {
    initial: { 
      y: "-100%", 
      opacity: 1 
    },
    animate: { 
      y: "0%", 
      opacity: 1,
      transition: { 
        duration: 0.4, 
        ease: [0.22, 1, 0.36, 1] as const 
      }
    },
    exit: { 
      y: "-100%", 
      opacity: 1,
      transition: { 
        duration: 0.3, 
        ease: [0.22, 1, 0.36, 1] as const 
      }
    }
  }

  const containerVars = {
    initial: { transition: { staggerChildren: 0.05 } },
    open: { transition: { delayChildren: 0.3, staggerChildren: 0.05 } }
  }

  const linkVars = {
    initial: { y: 20, opacity: 0 },
    // FIX TS: Añadido 'as const' a "easeOut"
    open: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" as const } }
  }

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -100, opacity: 0 },
        }}
        animate={visible ? "visible" : "hidden"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`
          fixed top-0 left-0 right-0 z-50 flex justify-center 
          transition-all duration-300 pointer-events-none
          ${isScrolled ? "pt-4" : "pt-6"}
        `}
      >
        <nav 
          className={`
            pointer-events-auto relative flex items-center justify-between 
            px-2 rounded-full border border-white/10 shadow-2xl backdrop-blur-xl transition-all duration-500
            ${isScrolled 
              ? "bg-[#0b1220]/80 w-[90%] md:w-[70%] max-w-4xl py-2" 
              : "bg-transparent border-transparent w-[95%] max-w-7xl py-4"
            }
          `}
        >
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 group pl-2 focus:outline-none z-50">
            <div className="
              relative flex shrink-0 items-center justify-center 
              h-10 w-10 rounded-xl 
              bg-gradient-to-br from-slate-800 to-black
              border border-slate-700
              text-blue-400
              shadow-lg group-hover:shadow-blue-500/20
              transition-all duration-300 group-hover:scale-105
            ">
              <Terminal size={20} />
            </div>
            <span className={`font-bold text-slate-200 tracking-tight hidden sm:block ${isScrolled ? 'text-sm' : 'text-base'}`}>
              Jose<span className="text-blue-500">.Dev</span>
            </span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1">
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
                      <motion.div
                        layoutId="navbar-active"
                        className="absolute inset-0 bg-white/10 rounded-full border border-white/5"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-2 pr-1 z-50">
            <a
              href="/cv.pdf"
              download
              className="group relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none hidden sm:inline-flex"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#0b1220] px-5 py-1 text-xs font-bold text-white backdrop-blur-3xl transition-all group-hover:bg-slate-900">
                <span className="flex items-center gap-2">
                   CV <Download size={14} />
                </span>
              </span>
            </a>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative group p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, scale: 0 }} animate={{ rotate: 0, scale: 1 }} exit={{ rotate: 90, scale: 0 }} transition={{ duration: 0.2 }}>
                    <X size={24} className="text-white" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, scale: 0 }} animate={{ rotate: 0, scale: 1 }} exit={{ rotate: -90, scale: 0 }} transition={{ duration: 0.2 }}>
                    <Menu size={24} className="text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* ─── MENÚ MÓVIL OPTIMIZADO PARA IOS ─── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 z-40 bg-[#0b1220] origin-top md:hidden will-change-transform"
          >
            {/* Fondo Limpio (GPU Friendly) */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
               <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
               <div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, rgba(11,18,32,0) 70%)'
                  }}
               />
            </div>

            <div className="flex flex-col h-full justify-center px-8 relative z-10">
              
              <motion.div 
                variants={containerVars} 
                initial="initial" 
                animate="open" 
                exit="initial"
                className="flex flex-col gap-6"
              >
                {navLinks.map((link) => (
                  <div key={link.label} className="overflow-hidden">
                    <motion.div variants={linkVars}>
                      <a
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-4xl font-bold tracking-tight transition-colors ${
                          activeSection === link.label ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400" : "text-slate-300 hover:text-white"
                        }`}
                      >
                        {link.label}
                      </a>
                    </motion.div>
                  </div>
                ))}
              </motion.div>

              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.4 }}
                 className="mt-12 flex flex-col gap-8"
              >
                 {/* FIX VISUAL: Añadido 'relative z-10' al span del texto para que salga ENCIMA del brillo.
                 */}
                 <a href="/cv.pdf" download className="group relative inline-flex h-14 overflow-hidden rounded-xl p-[1px] focus:outline-none w-full">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] z-0" />
                    <span className="relative z-10 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-[#0b1220] px-8 py-1 text-lg font-bold text-white transition-all group-hover:bg-slate-900">
                      Descargar CV 🚀
                    </span>
                 </a>

                 <div className="flex justify-center gap-8 border-t border-white/10 pt-8">
                    <a href="https://github.com/jose-gonzalez7" target="_blank" className="text-slate-400 hover:text-blue-400 transition-colors"><Github size={24} /></a>
                    <a href="https://linkedin.com/in/jose-antonio-gonzalez" target="_blank" className="text-slate-400 hover:text-blue-400 transition-colors"><Linkedin size={24} /></a>
                    <a href="mailto:tu@email.com" className="text-slate-400 hover:text-blue-400 transition-colors"><Mail size={24} /></a>
                 </div>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}