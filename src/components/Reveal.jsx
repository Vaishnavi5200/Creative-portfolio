import { motion } from "framer-motion";

/**
 * Reveal
 * A small reusable wrapper that fades + slides content up into view
 * as the user scrolls. Keeps every section's motion consistent instead
 * of re-writing the same variants everywhere.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
  once = true,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
