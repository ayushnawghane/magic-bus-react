// OutreachWithDonut.jsx
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

/* ----- shared: angles & layout helpers ----- */
const TAU = Math.PI * 2;
// rotate whole chart (screen coords). -90 means start at top (12 o'clock)
const START_ANGLE_DEG = -90;
const deg2rad = (d) => (d * Math.PI) / 180;

function computeLayout(segments) {
  const total = Math.max(1, segments.reduce((s, x) => s + x.value, 0));
  let acc = 0; // radians in data space, 0 at 3 o'clock
  const rot = deg2rad(START_ANGLE_DEG); // screen rotation

  const enriched = segments.map((seg) => {
    const frac = seg.value / total;
    const arc = frac * TAU;
    const mid = acc + arc / 2; // data coords
    const screenMid = mid + rot; // after rotation

    // side by x of the unit circle after rotation: left if cos < 0
    const side = Math.cos(screenMid) < 0 ? "left" : "right";
    // y for vertical sort (smaller y is higher on screen)
    const y = Math.sin(screenMid);

    acc += arc;
    return { ...seg, side, y, midAngle: screenMid };
  });

  // split & sort top→bottom per side
  const left = enriched
    .filter((s) => s.side === "left")
    .sort((a, b) => a.y - b.y);
  const right = enriched
    .filter((s) => s.side === "right")
    .sort((a, b) => a.y - b.y);

  return { left, right, enriched };
}

/* ---------- DonutChart (animated when in view) ---------- */
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
  const rot = START_ANGLE_DEG; // keep in sync with computeLayout

  let accAngle = 0;
  const arcs = segments.map((seg, idx) => {
    const frac = seg.value / total;
    const angle = frac * TAU;
    const arcLen = circumference * frac;
    const gapLen = Math.min(arcLen * 0.06, gap);
    const visibleLen = Math.max(0.0001, arcLen - gapLen);
    const dashArray = `${visibleLen} ${Math.max(0.0001, circumference - visibleLen)}`;
    const offsetPx = circumference * (accAngle / TAU);
    const dashOffset = circumference - offsetPx;
    accAngle += angle;
    return { ...seg, dashArray, dashOffset };
  });

  const wrapRef = React.useRef(null);
  const inView = useInView(wrapRef, { once: true, amount: 0.45 });

  return (
    <motion.div
      ref={wrapRef}
      className="relative z-20 "
      style={{ width: size, height: size }}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.92 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      <svg className="bg-white rounded-full" width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <g transform={`translate(${size / 2}, ${size / 2}) rotate(${rot})`}>
          <circle
            r={r}
            cx="0"
            cy="0"
            fill="transparent"
            stroke="rgba(0,0,0,.06)"
            strokeWidth={thickness}
            className="bg-white"
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
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: inView ? dashOffset : circumference }}
              transition={{ duration: 0.9 + idx * 0.08, ease: "easeOut" }}
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

      {caption && (
        <div className="absolute -bottom-8 w-full text-center text-xs text-ink/60">
          {caption}
        </div>
      )}
    </motion.div>
  );
}

/* ---------- StatTile (unchanged) ---------- */
function StatTile({ value, suffix = "", label, delay = 0, accent }) {
  const [val, setVal] = React.useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.35 });

  React.useEffect(() => {
    if (!isInView) return;
    const dur = 900;
    const start = performance.now();
    let raf;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 12, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.35 }}
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
          {(isInView ? val : 0).toLocaleString("en-IN")}
          {suffix}
        </div>
        <div className="mt-1 text-xs md:text-sm text-ink/70 font-medium">
          {label}
        </div>
      </div>
    </motion.div>
  );
}

/* ---------- OutreachWithDonut ---------- */
export default function OutreachWithDonut() {
  const [tab, setTab] = useState("livelihood");

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
            { label: "School Regularity • 27%", value: 27, color: "#21BDEA" }, // blue
            { label: "Higher Studies • 34%", value: 34, color: "#B3CC35" },   // green
            { label: "Resilience • 45%", value: 45, color: "#FFCC04" },       // yellow
            { label: "Self Efficacy • 20%", value: 20, color: "#E12228" },    // red
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
            { label: "Placement • 74%", value: 74, color: "#21BDEA" },   // blue
            { label: "Retention • 65%", value: 65, color: "#FF8A65" },   // orange
            { label: "Graduates • 99%", value: 99, color: "#B3CC35" },   // green
            { label: "Girls Participation • 60%", value: 60, color: "#FFCC04" }, // yellow
          ],
        },
      },
    }),
    []
  );

  const active = TABS[tab];

  // compute placement for label columns based on segment mid-angles
  const { left: leftHighlights, right: rightHighlights } = useMemo(
    () => computeLayout(active.donut.segments),
    [active.donut.segments]
  );

  const accents = ["#4F5BFE", "#FF7A59", "#21BDEA", "#B3CC35", "#FFCC04", "#E12228", "#8B5CF6", "#06B6D4"];

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
                tab === t ? "bg-ink text-white shadow" : "bg-white text-ink border border-border hover:bg-gray-50"
              }`}
            >
              {t === "adolescent" ? "Adolescent Programme" : "Livelihood Programme"}
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="my-8 flex justify-center"
        >
          <button
            className="px-8 py-3 text-sm md:text-base font-semibold rounded-full text-white bg-brand-red shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105 active:scale-95"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            View Our Outreach
          </button>
        </motion.div>

        <div className="text-center my-8">
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-ink">
            Our <span className="text-brand-red">Impact</span>
          </h2>
        </div>

        {/* Donut & labels aligned by side and vertical position */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45 }}
            className="mt-12"
          >
            <div className="relative isolate grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
              {/* LEFT column (segments whose midpoint lies on left half) */}
              <div className="space-y-6 relative z-0">
                {leftHighlights.map((seg, i) => (
                  <motion.div
                    key={`${seg.label}-${i}`}
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
                      <div className="w-4 h-4 rounded-full" style={{ background: seg.color }} />
                      <div className="text-sm font-semibold text-ink">
                        {seg.label.split("•")[0].trim()}
                      </div>
                    </div>
                    <div className="text-3xl font-extrabold" style={{ color: seg.color }}>
                      {seg.value}%
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* center donut (animated when in view) */}
              <div className="flex items-center justify-center">
                <DonutChart
                  size={500}
                  thickness={48}
                  centerImage={active.donut.img}
                  segments={active.donut.segments}
                  caption={active.donut.caption}
                  gap={6}
                />
              </div>

              {/* RIGHT column (segments on right half) */}
              <div className="space-y-6 relative z-0">
                {rightHighlights.map((seg, i) => (
                  <motion.div
                    key={`${seg.label}-${i}`}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.18 + i * 0.08 }}
                    className="bg-white rounded-xl p-5 pl-14 border border-border shadow-md hover:shadow-lg transition relative overflow-hidden"
                  >
                    <div
                      className="absolute -left-4 top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-t border-l border-border rounded-tr-md transform -rotate-45 shadow-sm"
                      aria-hidden
                    />
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-4 h-4 rounded-full" style={{ background: seg.color }} />
                      <div className="text-sm font-semibold text-ink">
                        {seg.label.split("•")[0].trim()}
                      </div>
                    </div>
                    <div className="text-3xl font-extrabold" style={{ color: seg.color }}>
                      {seg.value}%
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
