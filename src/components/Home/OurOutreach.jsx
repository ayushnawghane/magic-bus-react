import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Fixed DonutChart (unchanged from your corrected version)
 * ...keep same DonutChart implementation you used earlier...
 */
function DonutChart({
  size = 360,
  thickness = 36,
  segments = [],
  centerImage = "/ngo-images/girl.jpeg",
  caption = "",
  gap = 4,
}) {
  const r = (size - thickness) / 2;
  const c = Math.PI * 2 * r;
  const total = segments.reduce((a, b) => a + b.value, 0) || 1;

  let acc = 0;
  const arcs = segments.map((s, idx) => {
    const frac = s.value / total;
    let len = c * frac;
    const gapLen = Math.min(len * 0.3, gap);
    const visible = Math.max(0.0001, len - gapLen);
    const dashArray = `${visible} ${Math.max(0.0001, c - visible)}`;
    const dashOffset = c - acc;
    const mid = acc + visible / 2;
    const midAngle = (mid / c) * Math.PI * 2;
    acc += len;
    return {
      ...s,
      idx,
      visible,
      dashArray,
      dashOffset,
      midAngle,
    };
  });

  const pillRadius = r + thickness * 0.5 + 8;

  return (
    <div className="relative grid place-items-center">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="drop-shadow-sm"
      >
        <g transform={`translate(${size / 2}, ${size / 2}) rotate(-90)`}>
          <circle
            r={r}
            cx="0"
            cy="0"
            fill="transparent"
            stroke="rgba(0,0,0,.06)"
            strokeWidth={thickness}
          />

          {arcs.map(({ color, dashArray, dashOffset, idx, label }) => (
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
              initial={{ strokeDashoffset: c }}
              whileInView={{ strokeDashoffset: dashOffset }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1.0 + idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="cursor-pointer"
            >
              <title>{label}</title>
            </motion.circle>
          ))}
        </g>
      </svg>

      <div
        className="absolute rounded-full overflow-hidden ring-8 ring-white shadow-xl"
        style={{
          width: size * 0.46,
          height: size * 0.46,
        }}
      >
        {centerImage ? (
          <img src={centerImage} alt="" className="h-full w-full object-cover" />
        ) : (
          <div className="h-full w-full bg-gray-200" />
        )}
      </div>

      {caption && (
        <div className="absolute -bottom-10 text-center text-xs text-ink/60">
          {caption}
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 hidden md:block">
        {arcs.map((s, idx) => {
          const x = size / 2 + Math.cos(s.midAngle) * pillRadius;
          const y = size / 2 + Math.sin(s.midAngle) * pillRadius;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.12 + idx * 0.05 }}
              className="absolute text-xs font-semibold bg-white/90 backdrop-blur rounded-full px-3 py-1 shadow border"
              style={{
                color: "#111",
                borderColor: "rgba(0,0,0,.08)",
                left: `${x}px`,
                top: `${y}px`,
                transform: "translate(-50%,-50%)",
                whiteSpace: "nowrap",
              }}
            >
              <span
                className="inline-block h-2 w-2 rounded-full mr-2 align-middle"
                style={{ background: s.color }}
              />
              {s.label}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- Counter Tile ---------- */
function StatTile({ value, suffix = "", label, delay = 0, accent }) {
  const [val, setVal] = useState(0);

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
      {/* left accent bar */}
      <div
        aria-hidden
        className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
        style={{ background: accent }}
      />

      <div className="relative">
        <div
          className="text-2xl md:text-3xl font-extrabold mb-1"
          style={{ background: "linear-gradient(90deg,#FF7A59,#FFB86B)", WebkitBackgroundClip: "text", color: "transparent" }}
        >
          {val.toLocaleString("en-IN")}
          {suffix}
        </div>
        <div className="mt-1 text-xs md:text-sm text-ink/70 font-medium">{label}</div>
      </div>
    </motion.div>
  );
}

/* ---------- Main Section ---------- */
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

  // brand accents to rotate on stat tiles (keeps visual variety)
  const accents = ["#4F5BFE", "#FF7A59", "#21BDEA", "#B3CC35", "#FFCC04", "#E12228", "#8B5CF6", "#06B6D4"];

  return (
    <section className="py-16 md:py-20 relative">
        <div className="text-center mb-12">
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-ink">
            Our <span className="text-brand-red">Outreach</span>
          </h2>
        </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Tabs */}
        <div className="flex justify-center gap-3">
          {["adolescent", "livelihood"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition
                    ${
                      tab === t
                        ? "bg-ink text-white shadow"
                        : "bg-white text-ink border border-border hover:bg-gray-50"
                    }`}
            >
              {t === "adolescent" ? "Adolescent Programme" : "Livelihood Programme"}
            </button>
          ))}
        </div>

        {/* Stats grid */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
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

        {/* Donut + notes */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className="mt-12 grid lg:grid-cols-2 gap-8 items-center"
          >
            <div className="order-2 lg:order-1">
              <DonutChart
                size={380}
                thickness={38}
                centerImage={active.donut.img}
                segments={active.donut.segments}
                caption={active.donut.caption}
              />
            </div>

            <div className="order-1 lg:order-2">
              <div className="rounded-2xl bg-white/80 backdrop-blur border border-border p-6 shadow-sm">
                <h3 className="text-lg font-bold text-ink mb-3">Key Highlights</h3>
                <ul className="space-y-3">
                  {active.donut.segments.map((s, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-1 h-3 w-3 rounded-full" style={{ background: s.color }} />
                      <span className="text-ink/85 text-sm font-medium">{s.label}</span>
                    </li>
                  ))}
                  {"salaryNote" in active.donut && (
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-3 w-3 rounded-full bg-ink/30" />
                      <span className="text-ink/85 text-sm font-medium">{active.donut.salaryNote}</span>
                    </li>
                  )}
                </ul>

                <div className="mt-5 text-xs text-ink/60">Data as on April 2024 – March 2025</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
