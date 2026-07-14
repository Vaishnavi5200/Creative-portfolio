import Reveal from "./Reveal.jsx";
import { testimonials } from "../data/site.js";

export default function Testimonials() {
  if (!testimonials.length) return null;

  return (
    <section className="section-shell border-t border-line">
      <div className="max-w-wrap mx-auto">
        <Reveal>
          <p className="section-label mb-6">08 — CLIENT FEEDBACK</p>
          <h2 className="section-title max-w-xl mb-10">What collaborators say.</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((item, index) => (
            <Reveal key={`${item.name}-${index}`} delay={index * 0.08}>
              <blockquote className="service-card h-full">
                <p className="text-lg leading-relaxed">“{item.quote}”</p>
                <footer className="mt-7 text-sm text-muted">{item.name} · {item.role}</footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
