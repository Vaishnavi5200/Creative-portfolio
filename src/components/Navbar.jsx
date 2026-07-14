import { useEffect, useState } from "react";

const links = [
  { label: "Showreel", href: "#showreel" },
  { label: "Videos", href: "#videos" },
  { label: "Thumbnails", href: "#thumbnails" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? "bg-bg/90 backdrop-blur-xl border-b border-line" : "bg-transparent"}`}>
      <nav className="max-w-wrap mx-auto flex items-center justify-between px-6 md:px-10 py-5" aria-label="Main navigation">
        <a href="#top" className="font-display text-lg tracking-tight" aria-label="Vaishnavi Dwivedi home">VD<span className="text-accent">.</span></a>
        <ul className="hidden md:flex items-center gap-7 text-sm text-muted">
          {links.map((link) => <li key={link.href}><a href={link.href} className="hover:text-white transition-colors">{link.label}</a></li>)}
        </ul>
        <a href="#contact" className="hidden md:inline-flex secondary-cta py-2.5 px-5">Let’s talk</a>
        <button type="button" onClick={() => setOpen((value) => !value)} className="md:hidden flex flex-col gap-[5px] w-7 p-1" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          <span className={`h-[1.5px] bg-white transition-transform ${open ? "translate-y-[6.5px] rotate-45" : ""}`} />
          <span className={`h-[1.5px] bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-[1.5px] bg-white transition-transform ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
        </button>
      </nav>
      {open && (
        <div className="md:hidden min-h-[calc(100vh-73px)] bg-bg px-6 py-8">
          <ul className="space-y-6 text-2xl font-display">
            {links.map((link) => <li key={link.href}><a href={link.href} onClick={() => setOpen(false)}>{link.label}</a></li>)}
            <li><a href="#contact" onClick={() => setOpen(false)} className="text-accent">Start a project</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}
