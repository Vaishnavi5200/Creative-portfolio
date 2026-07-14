import Reveal from "./Reveal.jsx";
import { turnaround } from "../data/site.js";

const groups = [
  {
    title: "Video Editing",
    summary: "Retention-aware edits with clean pacing and intentional visual changes.",
    items: ["Short-form reels", "Promotional videos", "Podcast edits", "Captions", "Motion graphics", "Sound design"],
  },
  {
    title: "Thumbnail Design",
    summary: "Clear visual concepts created for mobile-first readability and stronger clicks.",
    items: ["YouTube thumbnails", "Podcast covers", "Educational topics", "Technology", "Finance", "Product promotion"],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-shell border-t border-line">
      <div className="max-w-wrap mx-auto">
        <Reveal>
          <p className="section-label mb-6">05 — SERVICES &amp; DELIVERY</p>
          <h2 className="section-title max-w-2xl mb-12">Clear services, realistic timelines and a predictable workflow.</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.08}>
              <article className="service-card h-full">
                <h3 className="font-display text-2xl font-medium">{group.title}</h3>
                <p className="text-muted mt-3 leading-relaxed">{group.summary}</p>
                <div className="flex flex-wrap gap-2 mt-7">
                  {group.items.map((item) => <span key={item} className="work-chip">{item}</span>)}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <div className="mt-6 border border-line rounded-2xl overflow-hidden bg-card">
            <div className="grid md:grid-cols-3">
              {turnaround.map((item, index) => (
                <div key={item.service} className={`p-6 md:p-7 ${index ? "border-t md:border-t-0 md:border-l border-line" : ""}`}>
                  <p className="text-sm text-muted">{item.service}</p>
                  <p className="font-display text-2xl mt-2">{item.time}</p>
                  <p className="text-xs text-muted mt-2">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-xs text-muted mt-4">Timelines are estimates and may vary with footage length, revisions and project complexity.</p>
        </Reveal>
      </div>
    </section>
  );
}
