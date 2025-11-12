import { motion } from "framer-motion";
import { Layers, Users, Code2, Briefcase, Network } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Strong Foundation",
    desc: "Ages 11–18 — foundational development & life skills",
    icon: Layers,
    grad: "from-orange-400 to-red-500",
  },
  {
    id: 2,
    title: "Develop Life Skills",
    desc: "Communication, leadership & personal development",
    icon: Users,
    grad: "from-blue-500 to-indigo-600",
  },
  {
    id: 3,
    title: "Master Market Skills",
    desc: "Technical & digital skills aligned with market needs",
    icon: Code2,
    grad: "from-emerald-400 to-teal-500",
  },
  {
    id: 4,
    title: "Secure Career",
    desc: "Career counselling & placement opportunities",
    icon: Briefcase,
    grad: "from-amber-400 to-orange-500",
  },
  {
    id: 5,
    title: "Alumni Network",
    desc: "Lifelong support & community of successful graduates",
    icon: Network,
    grad: "from-fuchsia-500 to-violet-500",
  },
];


// Small helper to stagger card fades
const fade = (i) => ({
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px -10% 0px" },
  transition: { delay: 0.05 * i, duration: 0.45, ease: "easeOut" },
});

export default function JourneyZigzagAnimated() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <p className="uppercase tracking-[0.22em] text-xs font-bold text-gray-500 mb-3">
            Our proven model
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-ink mb-4">
            Childhood to Livelihood Journey
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            A clear, practical 5-step pathway that prepares young people for
            meaningful careers and lifelong success.
          </p>
        </div>

        <div className="relative">
          {/* Dotted wave path – tuned to sit under 1, 4, 5 */}
          <svg
            className="pointer-events-none absolute inset-x-0 -top-6 hidden md:block"
            viewBox="0 0 1200 180"
            fill="none"
            aria-hidden="true"
          >
            {/* main wave (starts slightly before step-1 and ends after step-5) */}
            <motion.path
              // anchors ~ under each icon center: 1(160), 2(380), 3(600), 4(820), 5(1040)
              // up (60) -> down (110) -> up (60) -> down (110) -> up (60)
              d="
                M 70 90
                C 120 40, 200 40, 260 90
                S 440 120, 540 90
                S 740 60, 840 120
                S 1000 100, 1100 90
              "
              stroke="#9B87F5"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray="6 12"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
              opacity="0.75"
            />
          </svg>

          {/* Steps grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 relative">
            {steps.map((s, i) => {
              const isDown = i % 2 === 1; // 2 & 4 lower
              return (
                <div
                  key={s.id}
                  className={`relative flex flex-col items-center ${
                    isDown ? "mt-16" : "mt-0"
                  }`}
                >
                  {/* Floating Icon */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3 + i * 0.15, repeat: Infinity, ease: "easeInOut" }}
                    whileHover={{ scale: 1.06 }}
                    className={`relative z-10 w-[96px] h-[96px] rounded-full grid place-items-center shadow-xl
                                bg-gradient-to-br ${s.grad}`}
                  >
                    <s.icon className="w-10 h-10 text-white drop-shadow-md" />
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white text-ink text-xs font-bold grid place-items-center shadow">
                      {s.id}
                    </span>
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-full blur-2xl opacity-30 bg-white"
                      style={{ maskImage: "radial-gradient(white, transparent 60%)" }}
                    />
                  </motion.div>

                  {/* Card */}
                  <motion.div {...fade(i)} className="mt-6 w-full">
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