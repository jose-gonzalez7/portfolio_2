import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    // CAMBIO: fixed bottom-0 para que flote sobre el contenido
    <footer className="fixed bottom-0 left-0 w-full bg-[#0b1220]/70 backdrop-blur-md border-t border-white/5 z-50 px-6 sm:px-10">
      {/* El gradiente debe ser absoluto respecto al footer */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent pointer-events-none" />
      
      <div className="relative w-full h-16 flex items-center justify-between">
        {/* BLOQUE IZQUIERDO */}
        <div className="flex flex-col items-start leading-tight">
          <span className="text-white/90 font-medium text-sm">
            © 2026 <span className="text-blue-500">Jose</span>González
          </span>
          <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
            Full Stack Developer
          </span>
        </div>

        {/* BLOQUE DERECHO */}
        <div className="flex items-center gap-1">
          <SocialLink href="https://github.com/jose-gonzalez7" icon={<Github size={20}/>} />
          <SocialLink href="https://www.linkedin.com/in/jgonzalezroman-dev/" icon={<Linkedin size={20}/>} />
          <SocialLink href="mailto:jgonzalezroman7@gmail.com" icon={<Mail size={20}/>} />
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="relative z-10 p-2 text-slate-400 hover:text-blue-400 hover:bg-white/5 rounded-full transition-all duration-300"
    >
      {icon}
    </a>
  )
}