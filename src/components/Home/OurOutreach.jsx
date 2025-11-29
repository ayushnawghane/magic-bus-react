// OutreachWithDonut.jsx
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ---------- DonutChart (fixed labels, connectors, centered) ---------- */
function DonutChart({
  size = 420,
  thickness = 42,
  segments = [],
  centerImage = "/ngo-images/girl.jpeg",
  caption = "",
  gap = 6,
}) {
  const r = (size - thickness) / 2;
  const circumference = 2 * Math.PI * r;
  const total = Math.max(1, segments.reduce((s, x) => s + x.value, 0));

  let accAngle = 0;
  const arcs = segments.map((seg, idx) => {
    const frac = seg.value / total;
    const angle = frac * Math.PI * 2;
    const arcLen = circumference * frac;
    const gapLen = Math.min(arcLen * 0.06, gap);
    const visibleLen = Math.max(0.0001, arcLen - gapLen);
    const dashArray = `${visibleLen} ${Math.max(0.0001, circumference - visibleLen)}`;
    const offsetPx = circumference * (accAngle / (2 * Math.PI));
    const dashOffset = circumference - offsetPx;
    accAngle += angle;
    return { ...seg, dashArray, dashOffset };
  });

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <g transform={`translate(${size / 2}, ${size / 2}) rotate(-90)`}>
          <circle
            r={r}
            cx="0"
            cy="0"
            fill="transparent"
            stroke="rgba(0,0,0,.06)"
            strokeWidth={thickness}
          />

          {arcs.map(({ color, dashArray, dashOffset }, idx) => (
            <motion.circle
              key={idx}
              r={r}
              cx="0"
              cy="0"
              fill="transparent"
              stroke={color}
              strokeWidth={thickness}
              strokeLinecap="round"
              strokeDasharray={dashArray}
              strokeDashoffset={dashOffset}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: dashOffset }}
              transition={{ duration: 0.9 + idx * 0.08 }}
            />
          ))}
        </g>
      </svg>

      {/* center image */}
      <div
        className="absolute rounded-full overflow-hidden ring-8 ring-white shadow-xl"
        style={{
          width: size * 0.46,
          height: size * 0.46,
          left: `calc(50% - ${size * 0.46 / 2}px)`,
          top: `calc(50% - ${size * 0.46 / 2}px)`,
        }}
      >
        <img src={centerImage} className="w-full h-full object-cover" />
      </div>

      {/* caption */}
      {caption && (
        <div className="absolute -bottom-8 w-full text-center text-xs text-ink/60">
          {caption}
        </div>
      )}
    </div>
  );
}

/* ---------- StatTile ---------- */
function StatTile({ value, suffix = "", label, delay = 0, accent }) {
  const [val, setVal] = React.useState(0);

  React.useEffect(() => {
    const dur = 900;
    const start = performance.now();
    const anim = (t) => {
      const p = Math.min(1, (t - start) / dur);
      setVal(Math.floor(value * p));
      if (p < 1) requestAnimationFrame(anim);
    };
    const raf = requestAnimationFrame(anim);
    return () => cancelAnimationFrame(raf);
  }, [value]);

  return (
    <motion.div
      initial={{ y: 12, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.32, delay }}
      className="rounded-2xl bg-white p-6 text-center border border-border shadow-[0_6px_24px_rgba(16,24,40,0.06)] hover:shadow-[0_10px_30px_rgba(16,24,40,0.1)] transition relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
        style={{ background: accent }}
      />

      <div className="relative">
        <div
          className="text-2xl md:text-3xl font-extrabold mb-1"
          style={{
            background: "linear-gradient(90deg,#FF7A59,#FFB86B)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          {val.toLocaleString("en-IN")}
          {suffix}
        </div>
        <div className="mt-1 text-xs md:text-sm text-ink/70 font-medium">
          {label}
        </div>
      </div>
    </motion.div>
  );
}

/* ---------- OutreachWithDonut Section ---------- */
export default function OutreachWithDonut() {
  const [tab, setTab] = useState("adolescent");

  const TABS = useMemo(
    () => ({
      adolescent: {
        title: "Adolescent Programme Outreach",
        stats: [
          { label: "Adolescents Outreach", value: 3500000, suffix: "+" },
          { label: "Schools", value: 30069 },
          { label: "Community Learning Centres", value: 343 },
          { label: "Teachers Trained", value: 37389 },
          { label: "Government Partnerships", value: 11 },
          { label: "States & UT", value: 22 },
          { label: "Aspirational Blocks", value: 141 },
          { label: "% Girl Participants", value: 52, suffix: "%" },
        ],
        donut: {
          img: "/ngo-images/girl.jpeg",
          caption: "Data as on April 2024 – March 2025",
          segments: [
            { label: "School Regularity • 27%", value: 27, color: "#21BDEA" },
            { label: "Higher Studies • 34%", value: 34, color: "#B3CC35" },
            { label: "Resilience • 45%", value: 45, color: "#FFCC04" },
            { label: "Self Efficacy • 20%", value: 20, color: "#E12228" },
          ],
        },
      },
      livelihood: {
        title: "Livelihood Programme Outreach",
        stats: [
          { label: "Outreach", value: 214493 },
          { label: "Youth Placed", value: 158319 },
          { label: "Colleges", value: 1130 },
          { label: "Livelihood Centres", value: 133 },
          { label: "% Girls Participants", value: 60, suffix: "%" },
          { label: "States", value: 17 },
        ],
        donut: {
          img: "/ngo-images/girl.jpeg",
          caption: "Data as on April 2024 – March 2025",
          segments: [
            { label: "Placement • 74%", value: 74, color: "#21BDEA" },
            { label: "Retention • 65%", value: 65, color: "#FF8A65" },
            { label: "Graduates • 99%", value: 99, color: "#B3CC35" },
            { label: "Girls Participation • 60%", value: 60, color: "#FFCC04" },
          ],
          salaryNote: "Entry-Level Salary • ₹15,261",
        },
      },
    }),
    []
  );

  const active = TABS[tab];
  const accents = [
    "#4F5BFE",
    "#FF7A59",
    "#21BDEA",
    "#B3CC35",
    "#FFCC04",
    "#E12228",
    "#8B5CF6",
    "#06B6D4",
  ];

  const leftHighlights = active.donut.segments.slice(0, 2);
  const rightHighlights = active.donut.segments.slice(2);

  return (
    <section className="py-16 md:py-20 relative">
      <div className="text-center mb-8">
        <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-ink">
          Our <span className="text-brand-red">Outreach</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-6">
          {["adolescent", "livelihood"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                tab === t
                  ? "bg-ink text-white shadow"
                  : "bg-white text-ink border border-border hover:bg-gray-50"
              }`}
            >
              {t === "adolescent"
                ? "Adolescent Programme"
                : "Livelihood Programme"}
            </button>
          ))}
        </div>

        {/* Stats grid */}
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {active.stats.map((s, i) => (
            <StatTile
              key={s.label}
              value={s.value}
              suffix={s.suffix || ""}
              label={s.label}
              delay={i * 0.03}
              accent={accents[i % accents.length]}
            />
          ))}
        </div>

        {/* ✅ CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="my-8 flex justify-center"
        >
          <button
            className="px-8 py-3 text-sm md:text-base font-semibold rounded-full text-white 
                        bg-brand-red
                        shadow-md hover:shadow-lg transition-transform duration-300 
                        hover:scale-105 active:scale-95"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            } // change this to link or action as needed
          >
            View Our Outreach
          </button>
        </motion.div>


        <div className="text-center my-8">
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-ink">
            Our <span className="text-brand-red">Impact</span>
          </h2>
        </div>

        {/* Donut & animated highlights */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45 }}
            className="mt-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
              {/* left highlight cards */}
              <div className="space-y-6">
                {leftHighlights.map((seg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.18 + i * 0.08 }}
                    className="bg-white rounded-xl p-5 border border-border shadow-md hover:shadow-lg transition relative overflow-hidden"
                  >
                    <div
                      className="absolute -right-4 top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-t border-l border-border rounded-tr-md transform rotate-45 shadow-sm"
                      aria-hidden
                    />
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ background: seg.color }}
                      />
                      <div className="text-sm font-semibold text-ink">
                        {seg.label.split("•")[0].trim()}
                      </div>
                    </div>
                    <div
                      className="text-3xl font-extrabold"
                      style={{ color: seg.color }}
                    >
                      {seg.value}%
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* center donut */}
              <div className="flex items-center justify-center">
                <DonutChart
                  size={400}
                  thickness={42}
                  centerImage={active.donut.img}
                  segments={active.donut.segments}
                  caption={active.donut.caption}
                  gap={6}
                />
              </div>

              {/* right highlight cards */}
              <div className="space-y-6">
                {rightHighlights.map((seg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.18 + i * 0.08 }}
                    className="bg-white rounded-xl p-5 border border-border shadow-md hover:shadow-lg transition relative overflow-hidden"
                  >
                    <div
                      className="absolute -left-4 top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-t border-l border-border rounded-tr-md transform -rotate-45 shadow-sm"
                      aria-hidden
                    />
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ background: seg.color }}
                      />
                      <div className="text-sm font-semibold text-ink">
                        {seg.label.split("•")[0].trim()}
                      </div>
                    </div>
                    <div
                      className="text-3xl font-extrabold"
                      style={{ color: seg.color }}
                    >
                      {seg.value}%
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Salary note for livelihood tab */}
            {active.donut.salaryNote && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 text-center"
              >
                <div className="inline-block bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-full px-6 py-3">
                  <span className="text-sm font-semibold text-green-800">
                    💰 {active.donut.salaryNote}
                  </span>
                </div>
              </motion.div>
            )}

            {/* ✅ CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 flex justify-center"
            >
              <button
                className="px-8 py-3 text-sm md:text-base font-semibold rounded-full text-white 
                           bg-brand-red
                           shadow-md hover:shadow-lg transition-transform duration-300 
                           hover:scale-105 active:scale-95"
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                } // change this to link or action as needed
              >
                View Our Impact
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
