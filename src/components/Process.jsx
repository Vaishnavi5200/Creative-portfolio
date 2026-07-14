import Reveal from "./Reveal.jsx";

const steps = [
  { label: "Message", note: "You tell me about your project & goals." },
  { label: "Planning", note: "I outline structure, pacing and style." },
  { label: "Editing", note: "I cut, design and refine the final piece." },
  { label: "Delivery", note: "You receive the finished file, ready to post." },
];

export default function Process() {
  return (
    <section className="px-6 md:px-10 py-24 md:py-32 border-t border-line">
      <div className="max-w-wrap mx-auto">
        <Reveal>
          <p className="section-label mb-6">06 — MY PROCESS</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight max-w-xl mb-16">
            A simple, predictable workflow.
          </h2>
        </Reveal>

        <div className="flex flex-col md:flex-row md:items-start gap-0 md:gap-6">
          {steps.map((step, i) => (
            <Reveal key={step.label} delay={i * 0.1} className="flex-1 relative">
              <div className="flex md:flex-col items-start md:items-start gap-4 md:gap-0 py-6 md:py-0">
                <div className="flex items-center gap-3 md:gap-0 md:flex-col md:items-start">
                  <span className="font-display text-3xl text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="md:mt-5">
                  <h3 className="font-display text-xl font-medium">{step.label}</h3>
                  <p className="text-sm text-muted mt-1.5 max-w-[200px]">{step.note}</p>
                </div>
              </div>

              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-4 left-[calc(100%-10px)] w-6 h-px bg-line" />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
