// ImpactHighlights.jsx
import React from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * ImpactHighlights — white background + integrated brand colors
 *
 * - Top strip: numeric stats with brand color accents
 * - Bottom strip: white glossy tiles with left brand-colored bar
 * - Decorative image uses local path (tooling converts to public URL)
 *
 * Requires Tailwind extended colors (brand-red, brand-yellow, brand-blue, brand-magenta, brand-green, ink).
 */

const NUMERIC_STATS = [
  { big: "500K+", label: "Youth Trained", color: "brand-yellow" },
  { big: "85%", label: "Placement Rate", color: "brand-red" },
  { big: "28", label: "States Covered", color: "brand-blue" },
  { big: "AI", label: "First Mobilization", color: "brand-magenta" },
];

const TILES = [
  { big: "First", small: "NGO in AI & Digital", color: "brand-red" },
  { big: "C2L", small: "Childhood to Livelihood", color: "brand-yellow" },
  { big: "FutureX", small: "Internal Transformation", color: "brand-blue" },
  { big: "FPD", small: "Organisational Excellence", color: "brand-magenta" },
];

export default function ImpactHighlights() {
  const reduce = useReducedMotion();

  const enter = {
    initial: { opacity: 0, y: 10, scale: 0.995 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: reduce ? 0.2 : 0.6, ease: "easeOut" },
  };

  return (
    <section className="relative bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* TOP STRIP: Numeric stats (white card, subtle brand accents) */}
        <motion.div
          className="relative bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 overflow-hidden"
          {...enter}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
            {NUMERIC_STATS.map((s, i) => (
              <div
                key={s.label}
                className="flex flex-col items-start md:items-center md:text-center p-3 md:p-6"
              >
                {/* colored circle accent + number */}
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-block w-3 h-3 rounded-full bg-[var(--${s.color})]`}
                    style={{
                      // fallback colors if CSS vars unavailable
                      background:
                        s.color === "brand-red"
                          ? undefined
                          : undefined,
                    }}
                    aria-hidden
                  />
                  <motion.div
                    initial={{ scale: 0.98, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.6, delay: i * 0.06 }}
                    className={`text-3xl md:text-5xl font-extrabold ${s.color === "brand-red" ? "text-brand-red" : s.color === "brand-yellow" ? "text-brand-yellow" : s.color === "brand-blue" ? "text-brand-blue" : "text-brand-magenta"}`}
                  >
                    {s.big}
                  </motion.div>
                </div>

                <div className="mt-2 text-sm text-gray-600">{s.label}</div>
              </div>
            ))}
          </div>

          {/* subtle vertical separators for md+ using brand tint */}
          <div className="hidden md:block pointer-events-none absolute inset-y-4 left-0 right-0">
            <div className="mx-auto max-w-6xl h-full flex">
              <div className="w-1/4 h-full" />
              <div className="w-1/4 h-full flex items-center justify-center">
                <div className="h-[56%] w-px bg-brand-red/10" />
              </div>
              <div className="w-1/4 h-full flex items-center justify-center">
                <div className="h-[56%] w-px bg-brand-red/10" />
              </div>
              <div className="w-1/4 h-full" />
            </div>
          </div>
        </motion.div>

        {/* BOTTOM STRIP: Tiles (white glossy cards with brand color bar on left) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          {TILES.map((t, i) => (
            <motion.div
              key={t.big}
              className="relative rounded-2xl bg-white p-5 md:p-6 overflow-hidden shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.12 * i }}
            >
              {/* colored left bar */}
              <div className="absolute inset-y-0 left-0 w-2 rounded-l-2xl"
                   style={{
                     background:
                       t.color === "brand-red"
                         ? "linear-gradient(180deg, rgba(225,34,40,1), rgba(225,34,40,0.85))"
                         : t.color === "brand-yellow"
                         ? "linear-gradient(180deg, rgba(255,204,4,1), rgba(255,204,4,0.85))"
                         : t.color === "brand-blue"
                         ? "linear-gradient(180deg, rgba(33,189,234,1), rgba(33,189,234,0.85))"
                         : "linear-gradient(180deg, rgba(224,16,133,1), rgba(224,16,133,0.85))",
                   }}
              />

              {/* glossy sheen */}
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none rounded-2xl"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 40%, transparent 60%)",
                }}
              />

              <div className="flex items-center gap-4 pl-6">
                <div className={`flex-none w-14 h-14 rounded-lg bg-[color:var(--tile-${i}-bg,transparent)] flex items-center justify-center ring-1 ring-gray-100`}>
                  <div className={`text-lg font-bold ${t.color === "brand-yellow" ? "text-ink" : "text-ink"}`}>
                    {t.big}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="text-lg md:text-xl font-extrabold leading-tight text-ink">{t.big}</div>
                  <div className="text-sm text-gray-600 mt-1">{t.small}</div>
                </div>
              </div>

              {/* subtle hover lift */}
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.25 }}
                aria-hidden
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
