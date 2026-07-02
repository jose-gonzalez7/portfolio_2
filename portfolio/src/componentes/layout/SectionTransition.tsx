import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { ssr } from "../../utils/ssr";

interface Props {
  children: ReactNode;
  className?: string;
}

export function SectionTransition({ children, className = "" }: Props) {
  return (
    <motion.div
      initial={ssr ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
