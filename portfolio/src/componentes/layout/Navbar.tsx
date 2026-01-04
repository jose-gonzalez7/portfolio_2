import { useState } from "react"

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
      <nav className="relative max-w-7xl mx-auto px-6 h-16 flex items-center">
        {/* IZQUIERDA – LOGO */}
        <div className="flex items-center gap-2 text-white font-semibold">
          <span className="text-primary text-lg">{"</>"}</span>
          <span>DevPortfolio</span>
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
          <button
            className="
              hidden md:inline-flex
              bg-primary text-white
              px-5 py-2 rounded-lg
              text-sm font-semibold
              shadow-lg shadow-primary/30
              hover:shadow-primary/50
              transition
            "
          >
            CV
          </button>

          {/* BOTÓN MENÚ (MOBILE) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              md:hidden
              text-white
              focus:outline-none
            "
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

            <button
              className="
                mt-4
                bg-primary text-white
                px-6 py-2 rounded-lg
                font-semibold
                shadow-lg shadow-primary/30
              "
            >
              Descargar CV
            </button>
          </ul>
        </div>
      )}
    </header>
  )
}
