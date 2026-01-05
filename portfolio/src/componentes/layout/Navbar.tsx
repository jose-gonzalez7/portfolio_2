import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        backdrop-blur-lg
        bg-[#0b1220]/70
        border-b border-white/10
        shadow-[0_4px_30px_rgba(0,0,0,0.25)]
      "
    >
      <nav className="relative w-full px-6 h-16 flex items-center">

        {/* IZQUIERDA – LOGO */}
        <div className="flex items-center gap-3 text-white font-semibold">
                <AnimatePresence mode="wait">
        {/* Iniciales en móvil */}
        <motion.div
          key="avatar-iniciales"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={{ duration: 0.25 }}
          className="
            grid h-9 w-9 place-items-center
            rounded-full
            bg-gradient-to-br from-cyan-400 to-violet-600
            font-bold text-slate-900 text-sm
            sm:hidden
          "
        >
          JG
        </motion.div>

        {/* Imagen en desktop */}
        <motion.div
          key="avatar-imagen"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="
            relative hidden sm:flex
            items-center justify-center
            h-9 w-9
            overflow-hidden
            rounded-full
            ring-2 ring-primary/60
            bg-[#0b1220]
          "
        >
          <img
            src="/perfil.png"
            alt="José Antonio González Román"
            className="
              h-full w-full
              object-contain
              object-center
              scale-110
              p-0.5
            "
            onError={(e) => {
              const parent = e.currentTarget.parentElement
              if (parent) {
                parent.innerHTML = `
                  <div style="
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    width:100%;
                    height:100%;
                    border-radius:9999px;
                    background:linear-gradient(135deg,#06b6d4,#7c3aed);
                    color:#021018;
                    font-weight:700;
                    font-size:12px;
                  ">JG</div>`
              }
            }}
          />
        </motion.div>
      </AnimatePresence>
      </div>

        {/* CENTRO – LINKS (DESKTOP) */}
        <ul
          className="
            absolute left-1/2 top-1/2
            -translate-x-1/2 -translate-y-1/2
            hidden md:flex gap-8 text-sm
          "
        >
          {navLinks.map(link => {
            const isActive = link.label === "Sobre mí"

            return (
              <li key={link.label} className="relative">
                <a
                  href={link.href}
                  className={`transition ${
                    isActive
                      ? "text-white"
                      : "text-text-secondary hover:text-white"
                  }`}
                >
                  {link.label}
                </a>

                {isActive && (
                  <span
                    className="
                      absolute -bottom-2 left-0 w-full h-[2px]
                      bg-primary rounded-full
                    "
                  />
                )}
              </li>
            )
          })}
        </ul>

        {/* DERECHA – BOTÓN + HAMBURGUESA */}
        <div className="ml-auto flex items-center gap-4">
          {/* BOTÓN CV (DESKTOP) */}
          <a
            href="/cv.pdf"
            download
            className="
              hidden md:inline-flex
              bg-primary text-white
              px-5 py-2 rounded-lg
              text-sm font-semibold
              shadow-lg shadow-primary/30
              hover:shadow-primary/50
              hover:opacity-90
              transition
            "
          >
          CV
          </a>

          {/* BOTÓN MENÚ (MOBILE) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className="text-2xl">☰</span>
          </button>
        </div>
      </nav>

      {/* MENÚ MOBILE */}
      {isOpen && (
        <div className="md:hidden bg-[#0b1220]/95 border-t border-white/10">
          <ul className="flex flex-col items-center gap-6 py-6">
            {navLinks.map(link => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-text-secondary hover:text-white text-lg transition"
                >
                  {link.label}
                </a>
              </li>
            ))}

            {/* BOTÓN CV (MOBILE) */}
            <a
              href="/cv.pdf"
              download
              onClick={() => setIsOpen(false)}
              className="
                mt-4
                bg-primary text-white
                px-6 py-2 rounded-lg
                font-semibold
                shadow-lg shadow-primary/30
                hover:opacity-90
                transition
              "
            >
            CV
            </a>
          </ul>
        </div>
      )}
    </header>
  )
}
