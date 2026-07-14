import Reveal from "./Reveal.jsx";
import { contact } from "../data/site.js";

export default function Contact() {
  const whatsappHref = contact.whatsappNumber
    ? `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent("Hi Vaishnavi, I would like to discuss a creative project with you.")}`
    : null;

  return (
    <section id="contact" className="section-shell border-t border-line">
      <div className="max-w-wrap mx-auto">
        <div className="contact-panel">
          <Reveal>
            <p className="section-label mb-6">09 — START A PROJECT</p>
            <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tight text-balance max-w-3xl">
              Have footage, an idea or a thumbnail brief?
            </h2>
            <p className="text-muted mt-6 max-w-xl leading-relaxed">
              Share the goal, platform, deadline and references. I’ll reply with the next steps and a realistic delivery estimate.
            </p>
            <div className="flex flex-wrap gap-3 mt-9">
              <a href={`mailto:${contact.email}?subject=${encodeURIComponent("Creative project enquiry")}`} className="primary-cta">Email a brief</a>
              {whatsappHref && <a href={whatsappHref} target="_blank" rel="noreferrer" className="secondary-cta">WhatsApp</a>}
              <a href={contact.fiverr} target="_blank" rel="noreferrer" className="secondary-cta">View Fiverr</a>
            </div>
            <p className="text-sm text-muted mt-6">{contact.email}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
