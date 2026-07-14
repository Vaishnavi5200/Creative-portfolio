import Reveal from "./Reveal.jsx";
import videos from "../data/videos.js";

export default function FeaturedProject() {
  const showreel = videos.find((video) => video.id === "promo-reel") ?? videos[0];

  return (
    <section id="showreel" className="section-shell border-t border-line">
      <div className="max-w-wrap mx-auto">
        <Reveal>
          <p className="section-label mb-6">02 — FEATURED SHOWREEL</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-10">
            <h2 className="section-title max-w-2xl">One edit, from raw idea to polished delivery.</h2>
            <p className="text-muted max-w-md leading-relaxed">
              A selected piece demonstrating pacing, visual hierarchy, captions, transitions and sound-led storytelling.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="showreel-frame">
            <video
              className="w-full h-full object-cover"
              src={showreel.video}
              poster={showreel.poster}
              controls
              preload="metadata"
              playsInline
            />
          </div>
          <div className="mt-6 grid md:grid-cols-[1fr_auto] gap-4 items-start">
            <div>
              <p className="font-display text-2xl font-medium">{showreel.title}</p>
              <p className="text-muted mt-2 max-w-2xl leading-relaxed">{showreel.description}</p>
            </div>
            <span className="work-chip">{showreel.role}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
