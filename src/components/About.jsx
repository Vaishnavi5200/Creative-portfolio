import Reveal from "./Reveal.jsx";

export default function About() {
  return (
    <section id="about" className="px-6 md:px-10 py-24 md:py-32 border-t border-line">
      <div className="max-w-wrap mx-auto grid md:grid-cols-[0.8fr_1.2fr] gap-12 md:gap-20">
        <Reveal>
          <p className="section-label mb-6">08 — ABOUT</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
            A bit about me.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-muted leading-relaxed text-base md:text-lg">
           I’m Vaishnavi Dwivedi, a first-year B.Tech CSE student learning 
           frontend development and building my skills in video editing and thumbnail 
           design.
          </p>
          <p className="text-muted leading-relaxed text-base md:text-lg mt-5">
            I create short-form promo reels, podcast-style edits, travel edits, and 
            YouTube thumbnails. This portfolio is a collection of my practice projects as 
            I grow toward freelance work.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">
            <div className="border-l border-line pl-4">
              <p className="font-display text-2xl">B.Tech CSE</p>
              <p className="text-sm text-muted mt-1">First-year student</p>
            </div>
            <div className="border-l border-line pl-4">
              <p className="font-display text-2xl">Freelance</p>
              <p className="text-sm text-muted mt-1">Editing &amp; design</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
