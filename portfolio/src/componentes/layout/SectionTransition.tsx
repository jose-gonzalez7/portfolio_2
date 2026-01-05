import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export function SectionTransition({ children, className = "" }: Props) {
  return (
    <motion.div
      // Estado inicial (Invisible y desplazado 50px abajo)
      initial={{ opacity: 0, y: 50 }}
      
      // Cuando entra en la pantalla (Visible y en su sitio)
      whileInView={{ opacity: 1, y: 0 }}
      
      // Configuración del "disparador"
      viewport={{ 
        once: true,      // Solo se anima una vez (no desaparece al subir)
        margin: "-100px" // Se activa cuando el elemento entra 100px en la pantalla
      }}
      
      // Duración y suavidad
      transition={{ duration: 0.8, ease: "easeOut" }}
      
      className={className}
    >
      {children}
    </motion.div>
  );
}