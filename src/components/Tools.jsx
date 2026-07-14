import Reveal from "./Reveal.jsx";

const tools = [
  {
    name: "DaVinci Resolve",
    icon: "/icons/images.png",
  },
  {
    name: "Photopea",
    icon: "/icons/photopea.png",
  },
  {
    name: "Canva",
    icon: "/icons/canva.png",
  },
  {
    name: "CapCut",
    icon: "/icons/6118_cwAx.png",
  },
];

export default function Tools() {
  return (
    <section className="section-shell border-t border-line">
      <div className="max-w-wrap mx-auto">
        <Reveal>
          <p className="section-label mb-6">07 — TOOLS</p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="section-title max-w-xl">
            What I edit and design with.
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-16">
          {tools.map((tool, i) => (
            <Reveal key={tool.name} delay={i * 0.05}>
              <div className="border border-line rounded-xl px-5 py-7 text-center hover:border-accent transition">
              <div className="mb-4 flex justify-center">
                <img
                  src={tool.icon}
                  alt={tool.name}
                  loading="lazy" decoding="async" className="w-14 h-14 object-contain"
                     />
              </div>
                <p className="text-sm">{tool.name}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}