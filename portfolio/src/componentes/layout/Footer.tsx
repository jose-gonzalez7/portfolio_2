import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full bg-[#0b1220]/80 border-t border-white/10">
      <div className="h-14 w-full mx-auto px-6 flex items-center justify-between text-sm text-text-secondary">

        {/* IZQUIERDA – TEXTO */}
        <span>© 2026 JoseGonzález</span>

        {/* DERECHA – ICONOS */}
        <div className="flex items-center gap-4">
          {/* GitHub */}
          <a
            href="https://github.com/jose-gonzalez7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white transition"
          >
            <Github size={18} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/jose-antonio-gonz%C3%A1lez-rom%C3%A1n-5a7252317/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white transition"
          >
            <Linkedin size={18} />
          </a>

          {/* Email */}
          <a
            href="jgonzalezroman7@gmail.com"
            aria-label="Email"
            className="hover:text-white transition"
          >
            <Mail size={18} />
          </a>
        </div>

      </div>
    </footer>
  )
}
