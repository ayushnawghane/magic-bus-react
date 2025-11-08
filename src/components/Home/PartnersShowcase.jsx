// PartnersShowcase.jsx
import React from "react";

/** Simple icon chip (gradient square with emoji/icon) */
const Chip = ({ gradient, icon }) => (
  <div
    className={[
      "w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-sm",
      "bg-gradient-to-br",
      gradient,
    ].join(" ")}
  >
    <span className="text-2xl">{icon}</span>
  </div>
);

const categories = [
  {
    title: "Corporate Partners",
    copy: "Fortune 500 companies driving CSR impact",
    gradient: "from-brand-blue to-indigo-600", // if you have --color-brand-blue token
    fallback: "from-blue-500 to-indigo-600",
    icon: "🏢",
  },
  {
    title: "Foundations",
    copy: "International and domestic funding partners",
    gradient: "from-brand-green to-teal-600",
    fallback: "from-green-500 to-teal-600",
    icon: "🏛️",
  },
  {
    title: "Government",
    copy: "State and central government collaborations",
    gradient: "from-brand-red to-pink-600",
    fallback: "from-red-500 to-pink-600",
    icon: "🏛️",
  },
  {
    title: "Employment",
    copy: "Hiring partners for youth placement",
    gradient: "from-purple-500 to-violet-600",
    fallback: "from-purple-500 to-violet-600",
    icon: "💼",
  },
];

/** Replace these with real logo image URLs when you have them */
const logos = [
  { label: "TATA" },
  { label: "Infosys" },
  { label: "Microsoft" },
  { label: "Accenture" },
  { label: "Wipro" },
  { label: "HCL" },
  { label: "Capgemini" },
  { label: "AWS" },
  { label: "Meta" },
  { label: "Google" },
];

export default function PartnersShowcase() {
  return (
    <section className="relative py-20 max-w-7xl mx-auto bg-white">
      {/* soft background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-yellow/20 blur-3xl" />
        <div className="absolute -bottom-20 -right-24 h-80 w-80 rounded-full bg-brand-red/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-ink/5 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-ink/80 uppercase">
            Trusted Partnerships
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-ink">
            Trusted by 500+ Organizations
          </h2>
          <p className="mt-4 text-lg md:text-xl text-ink/70 max-w-3xl mx-auto">
            Leading corporations, foundations, and institutions partner with us
            for sustainable impact.
          </p>
        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {categories.map((c) => (
            <div
              key={c.title}
              className="text-center rounded-2xl border border-border bg-white shadow-[0_6px_24px_rgba(0,0,0,0.06)] p-8 transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
            >
              <Chip
                icon={c.icon}
                gradient={`${c.gradient || c.fallback} ${
                  c.gradient ? "" : ""
                }`}
              />
              <h4 className="font-bold text-lg mb-2 text-ink">{c.title}</h4>
              <p className="text-ink/70 text-sm">{c.copy}</p>
            </div>
          ))}
        </div>

        {/* Rotating logos strip (infinite marquee) */}
        <div className="rounded-2xl p-10 bg-gradient-to-b from-gray-50 to-white border border-border">
          <div className="relative overflow-hidden">
            <div className="flex items-center gap-6 animate-partners-marquee will-change-transform">
              {[...logos, ...logos].map((l, idx) => (
                <div
                  key={`${l.label}-${idx}`}
                  className="shrink-0 h-16 min-w-[160px] rounded-xl bg-white border border-border/80 flex items-center justify-center px-6 text-gray-500 text-sm font-semibold tracking-wide shadow-sm"
                  aria-label={`${l.label} logo`}
                >
                  {/* Drop an <img> tag here when you have the actual logo URLs */}
                  {/* <img src={l.src} alt={l.label} className="h-8 object-contain" /> */}
                  {l.label}
                </div>
              ))}
            </div>
          </div>

          <p className="text-center mt-8 text-gray-500 text-sm">
            Corporate • Foundation • Government • Employment partners
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 rounded-full bg-brand-red text-white px-8 py-4 text-lg font-semibold shadow-sm transition hover:bg-brand-red/90 active:scale-[0.99]">
            Partner With Us
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Local keyframes for the marquee */}
      <style>{`
        @keyframes partners-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-partners-marquee {
          animation: partners-marquee 22s linear infinite;
        }
      `}</style>
    </section>
  );
}
