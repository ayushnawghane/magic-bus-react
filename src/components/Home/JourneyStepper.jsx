import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Strong Foundation",
    desc: "Ages 11–18 — foundational development & life skills",
    emoji: "👶",
    grad: "from-orange-400 to-red-500",
  },
  {
    id: 2,
    title: "Develop Life Skills",
    desc: "Communication, leadership & personal development",
    emoji: "🎯",
    grad: "from-blue-500 to-indigo-600",
  },
  {
    id: 3,
    title: "Master Market Skills",
    desc: "Technical & digital skills aligned with market needs",
    emoji: "🎓",
    grad: "from-emerald-400 to-teal-500",
  },
  {
    id: 4,
    title: "Secure Career",
    desc: "Career counselling & placement opportunities",
    emoji: "💼",
    grad: "from-amber-400 to-orange-500",
  },
  {
    id: 5,
    title: "Alumni Network",
    desc: "Lifelong support & community of successful graduates",
    emoji: "🌟",
    grad: "from-fuchsia-500 to-violet-500",
  },
];

export default function JourneyZigzag() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.22em] text-xs font-bold text-gray-500 mb-3">
            Our proven model
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-ink mb-4">
            Childhood to Livelihood Journey
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            A clear, practical 5-step pathway that prepares young people for meaningful
            careers and lifelong success.
          </p>
        </div>

        {/* Track */}
        <div className="relative">
          {/* Dotted wave path (desktop) */}
          <svg
            className="pointer-events-none absolute inset-x-0 -top-3 hidden md:block"
            viewBox="0 0 1200 160"
            fill="none"
            aria-hidden="true"
          >
            {/* A smooth wave across five nodes; tweak stroke color as needed */}
            <path
              d="
                M 40 80
                C 140 30, 220 30, 300 80
                S 460 130, 600 80
                S 820 30, 960 80
                S 1080 130, 1160 80
              "
              stroke="#9B87F5"
              strokeWidth="4"
              strokeDasharray="6 10"
              strokeLinecap="round"
              opacity="0.65"
            />
          </svg>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 relative">
            {steps.map((s, i) => {
              const isDown = i % 2 === 1; // 2nd & 4th go down
              return (
                <div
                  key={s.id}
                  className={`relative flex flex-col items-center ${
                    isDown ? "mt-16" : "mt-0"
                  }`}
                >
                  {/* Icon bubble */}
                  <motion.div
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative z-10 w-[96px] h-[96px] rounded-full grid place-items-center shadow-xl 
                                bg-gradient-to-br ${s.grad}`}
                  >
                    <span className="text-3xl drop-shadow-sm">{s.emoji}</span>

                    {/* Number badge */}
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full 
                                     bg-white text-ink text-xs font-bold grid place-items-center shadow">
                      {s.id}
                    </span>

                    {/* glow */}
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-full blur-2xl opacity-30 bg-white"
                      style={{ maskImage: "radial-gradient(white, transparent 60%)" }}
                    />
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className={`mt-6 w-full`}
                  >
                    <div className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(16,24,40,0.08)] p-6 text-center">
                      <h3 className="text-lg font-semibold text-ink mb-2">{s.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full px-8 py-4 
                         font-semibold bg-brand-red text-white shadow-lg hover:shadow-xl
                         transition hover:-translate-y-0.5 active:translate-y-0"
            >
              Know Our Model
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
