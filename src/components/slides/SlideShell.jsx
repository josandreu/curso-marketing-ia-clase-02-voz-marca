import { motion } from 'framer-motion';

export default function SlideShell({ children, className = "", variant = "light" }) {
  const bg = variant === "dark" 
    ? "bg-[#0F0F0F] text-white" 
    : variant === "accent" 
    ? "bg-primary text-white"
    : "bg-[#F8F9FA] text-foreground";

  const pdfExport =
    typeof document !== "undefined" &&
    document.documentElement.hasAttribute("data-pdf-export");

  return (
    <motion.div
      initial={pdfExport ? false : { opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: pdfExport ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`w-full h-full relative overflow-hidden ${bg} ${className}`}
    >
      {children}
    </motion.div>
  );
}