import { motion } from "framer-motion";
import { contact } from "../data/site.js";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] flex items-end overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-45"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/posters/intro-first-reel.webp"
      >
        <source src="/videos/intro-first-reel-optimized.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/75 to-bg/25" />
      <div className="absolute inset-0 grain" />

      <div className="relative z-10 max-w-wrap mx-auto w-full px-6 md:px-10 pb-16 md:pb-24 pt-36">
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="section-label mb-7">
          VIDEO EDITING · THUMBNAIL DESIGN
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }} className="font-display font-semibold text-balance leading-[0.94] text-5xl sm:text-6xl md:text-8xl tracking-tight max-w-5xl">
          Visual work built to earn attention—and hold it.
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.22 }} className="mt-6 max-w-xl text-muted leading-relaxed text-base md:text-lg">
          I’m Vaishnavi Dwivedi. I edit short-form, promotional and podcast videos, and design clear, mobile-first YouTube thumbnails.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.34 }} className="mt-9 flex flex-wrap items-center gap-3">
          <a href="#showreel" className="primary-cta">Watch featured work</a>
          <a href={`mailto:${contact.email}?subject=${encodeURIComponent("Creative project enquiry")}`} className="secondary-cta">Start a project</a>
        </motion.div>
      </div>
    </section>
  );
}
