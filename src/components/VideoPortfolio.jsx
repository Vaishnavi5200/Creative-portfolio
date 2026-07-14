import { useMemo, useState } from "react";
import Reveal from "./Reveal.jsx";
import videos from "../data/videos.js";

function VideoCard({ video, index }) {
  return (
    <Reveal delay={Math.min(index * 0.04, 0.18)}>
      <article className="work-card group">
        <div className="relative aspect-video overflow-hidden bg-black">
          <video
            src={video.video}
            poster={video.poster}
            controls
            preload="none"
            playsInline
            className="w-full h-full object-cover"
          />
          <span className="absolute top-3 left-3 work-chip bg-bg/80 backdrop-blur">{video.category}</span>
        </div>
        <div className="p-5 md:p-6">
          <h3 className="font-display text-xl font-medium">{video.title}</h3>
          <p className="text-xs uppercase tracking-[0.12em] text-accent mt-2">{video.role}</p>
          <p className="text-sm text-muted mt-3 leading-relaxed">{video.description}</p>
        </div>
      </article>
    </Reveal>
  );
}

export default function VideoPortfolio() {
  const categories = ["All", ...new Set(videos.map((video) => video.category))];
  const [active, setActive] = useState("All");
  const visible = useMemo(
    () => (active === "All" ? videos : videos.filter((video) => video.category === active)),
    [active]
  );

  return (
    <section id="videos" className="section-shell border-t border-line">
      <div className="max-w-wrap mx-auto">
        <Reveal>
          <p className="section-label mb-6">03 — VIDEO WORK</p>
          <div className="section-heading-row">
            <h2 className="section-title max-w-xl">Edits built with purpose, not random effects.</h2>
            <div className="filter-row" aria-label="Filter video work">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActive(category)}
                  className={`filter-button ${active === category ? "is-active" : ""}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {visible.map((video, index) => (
            <VideoCard key={video.id} video={video} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
