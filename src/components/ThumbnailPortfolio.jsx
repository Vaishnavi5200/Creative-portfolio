import { useMemo, useState } from "react";
import Reveal from "./Reveal.jsx";
import thumbnails from "../data/thumbnails.js";

function ThumbnailCard({ thumb, index }) {
  return (
    <Reveal delay={Math.min(index * 0.035, 0.18)}>
      <a href={thumb.image} target="_blank" rel="noopener noreferrer" className="thumbnail-card group">
        <img
          src={thumb.image}
          alt={`${thumb.title} — ${thumb.category} thumbnail design`}
          loading="lazy"
          decoding="async"
          width="1280"
          height="720"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.045]"
        />
        <div className="thumbnail-overlay">
          <div>
            <p className="font-display text-lg font-medium">{thumb.title}</p>
            <p className="text-xs text-white/65 mt-1">Open full design ↗</p>
          </div>
        </div>
        <span className="absolute top-3 left-3 work-chip bg-bg/80 backdrop-blur">{thumb.category}</span>
      </a>
    </Reveal>
  );
}

export default function ThumbnailPortfolio() {
  const categories = ["All", ...new Set(thumbnails.map((thumb) => thumb.category))];
  const [active, setActive] = useState("All");
  const visible = useMemo(
    () => (active === "All" ? thumbnails : thumbnails.filter((thumb) => thumb.category === active)),
    [active]
  );

  return (
    <section id="thumbnails" className="section-shell border-t border-line">
      <div className="max-w-wrap mx-auto">
        <Reveal>
          <p className="section-label mb-6">04 — THUMBNAIL DESIGN</p>
          <div className="section-heading-row">
            <h2 className="section-title max-w-xl">Designed to communicate before the click.</h2>
            <div className="filter-row" aria-label="Filter thumbnail work">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {visible.map((thumb, index) => (
            <ThumbnailCard key={thumb.id} thumb={thumb} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
