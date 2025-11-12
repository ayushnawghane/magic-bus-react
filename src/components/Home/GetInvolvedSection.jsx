import { motion, useReducedMotion } from "framer-motion";

export default function GetInvolvedSection() {
  const prefersReduced = useReducedMotion();

  // If user prefers reduced motion, keep very subtle drift (or none)
  const baseDrift = prefersReduced
    ? { x: 0, y: 0, opacity: 0.75, rotate: 0 }
    : undefined;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-black to-gray-900 py-20">
      {/* --- Animated Blobs (Framer Motion) --- */}
      <div className="pointer-events-none absolute inset-0">
        {/* Yellow blob */}
        <motion.div
          className="absolute -top-24 -right-24 h-[30rem] w-[30rem] rounded-full mix-blend-screen"
          style={{
            background:
              "radial-gradient(closest-side, rgba(255,204,4,.55), rgba(255,204,4,.35), transparent 70%)",
            filter: "blur(48px)",
          }}
          initial={{ x: 0, y: 0, opacity: 0.85, rotate: 0 }}
          animate={
            baseDrift ?? {
              x: [0, -30, -10, 25, 0],
              y: [0, -25, 20, -10, 0],
              opacity: [0.85, 0.7, 0.8, 0.75, 0.85],
              rotate: [0, 5, -3, 4, 0],
            }
          }
          transition={{ duration: 28, ease: "easeInOut", repeat: Infinity }}
        />

        {/* Red blob */}
        <motion.div
          className="absolute -bottom-28 -left-24 h-[28rem] w-[28rem] rounded-full mix-blend-screen"
          style={{
            background:
              "radial-gradient(closest-side, rgba(225,34,40,.55), rgba(225,34,40,.35), transparent 70%)",
            filter: "blur(48px)",
          }}
          initial={{ x: 0, y: 0, opacity: 0.85, rotate: 0 }}
          animate={
            baseDrift ?? {
              x: [0, 35, 10, -30, 0],
              y: [0, 15, -20, 10, 0],
              opacity: [0.8, 0.68, 0.78, 0.7, 0.8],
              rotate: [0, -6, 4, -5, 0],
            }
          }
          transition={{
            duration: 34,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 0.6,
          }}
        />

        {/* Blue blob */}
        <motion.div
          className="absolute top-1/3 left-1/4 h-[24rem] w-[24rem] rounded-full mix-blend-screen"
          style={{
            background:
              "radial-gradient(closest-side, rgba(33,189,234,.48), rgba(33,189,234,.32), transparent 70%)",
            filter: "blur(48px)",
          }}
          initial={{ x: 0, y: 0, opacity: 0.82, rotate: 0 }}
          animate={
            baseDrift ?? {
              x: [0, -20, 25, -15, 0],
              y: [0, 20, -15, 10, 0],
              opacity: [0.82, 0.7, 0.8, 0.72, 0.82],
              rotate: [0, 4, -4, 3, 0],
            }
          }
          transition={{
            duration: 32,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 1.2,
          }}
        />
      </div>

      {/* --- Content --- */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="font-dosis font-bold uppercase tracking-wider text-sm text-brand-yellow">
            Get Involved With Us
          </span>
          <h2 className="mt-3 font-dosis text-4xl md:text-5xl font-bold text-white">
            Transform Lives Through Partnership
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-lato text-lg text-gray-300">
            Join leading corporates and foundations in creating lasting social
            impact through innovative CSR partnerships.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Corporate CSR */}
          <article className="group rounded-2xl border border-white/15 bg-white/10 p-8 backdrop-blur-sm transition-all hover:-translate-y-2 hover:bg-white/15">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-yellow shadow-xl transition-transform group-hover:scale-110">
              <svg
                className="h-8 w-8 text-brand-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="mb-3 font-dosis text-xl font-bold text-white">
              Corporate CSR
            </h3>
            <p className="font-lato text-sm leading-relaxed text-gray-300">
              Strategic CSR partnerships aligned with ESG goals and sustainable
              impact.
            </p>
          </article>

          {/* Grant Funding */}
          <article className="group rounded-2xl border border-white/15 bg-white/10 p-8 backdrop-blur-sm transition-all hover:-translate-y-2 hover:bg-white/15">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-blue shadow-xl transition-transform group-hover:scale-110">
              <svg
                className="h-8 w-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="mb-3 font-dosis text-xl font-bold text-white">
              Grant Funding
            </h3>
            <p className="font-lato text-sm leading-relaxed text-gray-300">
              Foundation partnerships supporting scalable, tech-driven youth
              programs.
            </p>
          </article>

          {/* Skill Partners */}
          <article className="group rounded-2xl border border-white/15 bg-white/10 p-8 backdrop-blur-sm transition-all hover:-translate-y-2 hover:bg-white/15">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-magenta shadow-xl transition-transform group-hover:scale-110">
              <svg
                className="h-8 w-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="mb-3 font-dosis text-xl font-bold text-white">
              Skill Partners
            </h3>
            <p className="font-lato text-sm leading-relaxed text-gray-300">
              Industry collaboration for curriculum design and placement support.
            </p>
          </article>

          {/* Tech Partners */}
          <article className="group rounded-2xl border border-white/15 bg-white/10 p-8 backdrop-blur-sm transition-all hover:-translate-y-2 hover:bg-white/15">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-green shadow-xl transition-transform group-hover:scale-110">
              <svg
                className="h-8 w-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="mb-3 font-dosis text-xl font-bold text-white">
              Tech Partners
            </h3>
            <p className="font-lato text-sm leading-relaxed text-gray-300">
              Technology partnerships powering AI and digital innovation at
              scale.
            </p>
          </article>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button className="rounded-full bg-brand-yellow px-10 py-4 font-work font-bold text-brand-black shadow-xl transition hover:-translate-y-0.5 hover:bg-yellow-400 hover:shadow-2xl">
            Become a Partner
          </button>
        </div>
      </div>
    </section>
  );
}