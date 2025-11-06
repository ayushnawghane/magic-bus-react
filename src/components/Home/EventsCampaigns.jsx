// EventsCampaigns.jsx
import { useRef, useState } from "react";
import { motion } from "framer-motion";

/** Reusable glare + hover wrapper */
function GlareCard({ className = "", children }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0, rx: 0, ry: 0 });

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const rx = ((y / r.height) - 0.5) * -6; // rotateX
    const ry = ((x / r.width) - 0.5) * 6;   // rotateY
    setPos({ x, y, rx, ry });
  };

  const onLeave = () => setPos((p) => ({ ...p, rx: 0, ry: 0 }));

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        "--mx": `${pos.x}px`,
        "--my": `${pos.y}px`,
        transform: `perspective(900px) rotateX(${pos.rx}deg) rotateY(${pos.ry}deg)`,
      }}
      className={`group relative will-change-transform transition-transform duration-300 ${className}`}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 240, damping: 20 }}
    >
      {/* subtle inner border glow on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 [box-shadow:inset_0_0_0_1px_rgba(255,255,255,.18)]" />
      {/* glare layer */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(300px 300px at var(--mx) var(--my), rgba(255,255,255,0.28), rgba(255,255,255,0.08) 40%, transparent 65%)",
          mixBlendMode: "screen",
        }}
      />
      {children}
    </motion.div>
  );
}

export default function EventsCampaigns() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <span className="font-dosis text-sm font-bold uppercase tracking-wider text-brand-red">
              Stay Connected
            </span>
            <h2 className="mt-3 font-dosis text-5xl font-bold text-brand-black">
              Events & Campaigns
            </h2>
          </div>

          <a
            href="#"
            className="hidden items-center font-work font-semibold text-brand-red hover:underline md:inline-flex"
          >
            View All Events
            <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Grid */}
        <div className="grid gap-6 lg:grid-cols-4 lg:grid-rows-2">
          {/* Feature (2x2) */}
          <GlareCard className="lg:col-span-2 lg:row-span-2">
            <div className="relative flex h-full min-h-[22rem] flex-col justify-end overflow-hidden rounded-2xl shadow-sm transition-all hover:shadow-xl">
              {/* Image + overlays */}
              <img
                src="https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2000&auto=format&fit=crop"
                alt="Annual Fundraiser Gala 2025"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-red/70 to-brand-magenta/50 mix-blend-multiply" />
              <div className="absolute inset-0 bg-black/35" />

              <div className="absolute right-4 top-4 z-20 rounded-full bg-brand-yellow px-3 py-1 font-dosis text-xs font-bold text-brand-black">
                UPCOMING
              </div>

              <div className="relative z-10 p-6 text-white">
                <div className="font-work text-xs font-semibold uppercase tracking-wide opacity-80">
                  Dec 15, 2025
                </div>
                <h3 className="font-dosis mt-2 text-2xl font-bold transition-colors group-hover:text-brand-yellow">
                  Annual Fundraiser Gala 2025
                </h3>
                <p className="font-lato mt-2 text-sm opacity-90">
                  Join us for an evening celebrating youth empowerment and innovation.
                </p>

                <button className="mt-4 inline-flex items-center font-work text-sm font-semibold text-brand-yellow hover:underline">
                  Register Now
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </GlareCard>

          {/* Card 1 */}
          <GlareCard>
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-xl">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1600&auto=format&fit=crop"
                  alt="Digital Skills Campaign"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/55 to-brand-green/55 mix-blend-multiply" />
                <div className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 font-dosis text-xs font-bold text-brand-black">
                  ACTIVE
                </div>
              </div>
              <div className="p-6">
                <div className="font-work text-xs font-semibold uppercase tracking-wide text-brand-blue">
                  Nov – Dec 2025
                </div>
                <h3 className="font-dosis mt-2 text-lg font-bold transition-colors group-hover:text-brand-red">
                  Digital Skills Campaign
                </h3>
                <p className="font-lato mt-2 text-sm text-gray-600">
                  Help us train 5,000 youth in digital skills this quarter.
                </p>
                <button className="mt-4 inline-flex items-center font-work text-sm font-semibold text-brand-red hover:underline">
                  Support Campaign
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </GlareCard>

          {/* Card 2 */}
          <GlareCard>
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-xl">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1600&auto=format&fit=crop"
                  alt="Mentor-A-Youth Program"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/55 to-brand-red/55 mix-blend-multiply" />
                <div className="absolute right-4 top-4 rounded-full bg-brand-black px-3 py-1 font-dosis text-xs font-bold text-brand-yellow">
                  VOLUNTEER
                </div>
              </div>
              <div className="p-6">
                <div className="font-work text-xs font-semibold uppercase tracking-wide text-brand-magenta">
                  Ongoing
                </div>
                <h3 className="font-dosis mt-2 text-lg font-bold transition-colors group-hover:text-brand-red">
                  Mentor-A-Youth Program
                </h3>
                <p className="font-lato mt-2 text-sm text-gray-600">
                  Share your expertise and guide the next generation of leaders.
                </p>
                <button className="mt-4 inline-flex items-center font-work text-sm font-semibold text-brand-red hover:underline">
                  Become a Mentor
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </GlareCard>

          {/* Card 3 */}
          <GlareCard>
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-xl">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop"
                  alt="FutureX Tech Summit"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-magenta/55 to-brand-blue/55 mix-blend-multiply" />
                <div className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 font-dosis text-xs font-bold text-brand-black">
                  NEW
                </div>
              </div>
              <div className="p-6">
                <div className="font-work text-xs font-semibold uppercase tracking-wide text-brand-green">
                  Jan 2026
                </div>
                <h3 className="font-dosis mt-2 text-lg font-bold transition-colors group-hover:text-brand-red">
                  FutureX Tech Summit
                </h3>
                <p className="font-lato mt-2 text-sm text-gray-600">
                  Showcasing AI innovation and digital transformation in NGO sector.
                </p>
                <button className="mt-4 inline-flex items-center font-work text-sm font-semibold text-brand-red hover:underline">
                  Learn More
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </GlareCard>

          {/* Card 4 */}
          <GlareCard>
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-xl">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1600&auto=format&fit=crop"
                  alt="Youth Leadership Week"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red/55 to-brand-yellow/55 mix-blend-multiply" />
                <div className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 font-dosis text-xs font-bold text-brand-black">
                  UPDATE
                </div>
              </div>
              <div className="p-6">
                <div className="font-work text-xs font-semibold uppercase tracking-wide text-brand-red">
                  Feb 2026
                </div>
                <h3 className="font-dosis mt-2 text-lg font-bold transition-colors group-hover:text-brand-red">
                  Youth Leadership Week
                </h3>
                <p className="font-lato mt-2 text-sm text-gray-600">
                  A week of workshops, talks, and community projects across cities.
                </p>
                <button className="mt-4 inline-flex items-center font-work text-sm font-semibold text-brand-red hover:underline">
                  See Schedule
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </GlareCard>
        </div>
      </div>
    </section>
  );
}
