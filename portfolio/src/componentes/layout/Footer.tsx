import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full bg-[#0b1220]/90 backdrop-blur-md border-t border-white/5 shrink-0 px-6">
      {/* max-w-7xl asegura que no se pegue al borde infinito en monitores gigantes, 
          pero justify-between separa los bloques a los lados */}
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between">
        
        {/* BLOQUE IZQUIERDO */}
        <div className="flex flex-col items-start">
          <span className="text-white/90 font-medium text-sm">
            © 2026 <span className="text-blue-500">Jose</span>González
          </span>
          <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
            Full Stack Developer
          </span>
        </div>

        {/* BLOQUE DERECHO */}
        <div className="flex items-center gap-2">
          <SocialLink href="https://github.com/jose-gonzalez7" icon={<Github size={20}/>} />
          <SocialLink href="https://linkedin.com/in/tu-perfil" icon={<Linkedin size={20}/>} />
          <SocialLink href="mailto:tuemail@gmail.com" icon={<Mail size={20}/>} />
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
      className="p-2 text-slate-400 hover:text-blue-400 hover:bg-white/5 rounded-full transition-all duration-300"
    >
      {icon}
    </a>
  )
}