import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

/**
 * Trusted by 500+ Organizations
 * - 5 auto-scrolling columns (up/down alternating) with seamless loop
 * - Logo image cards (glass, subtle border/shadow)
 * - Brand-tinted light background + fade edges for the marquee
 * - Grayscale → color on hover, scale lift
 * - Respects prefers-reduced-motion
 */



const col1  = [
  { name: "OTIS", src: "/partners/1 (1).jpg" },
  { name: "Dow", src: "/partners/1 (1).png" },
  { name: "Interactive Brokers", src: "/partners/1 (3).jpg" },
];

const col2  = [
  { name: "Reliance", src: "/partners/1 (4).png" },
  { name: "SBI Card", src: "/partners/1 (3).png" },
  { name: "Deutsche Bank", src: "/partners/1 (2).jpg" },
  { name: "Deloitte", src: "/partners/1 (2).png" },
];

const col3  = [
  { name: "KFC", src: "/partners/1 (4).jpg" },
  { name: "Airbus", src: "/partners/1 (5).jpg" },
  { name: "Cisco", src: "/partners/1 (14).jpg" },
];

const col4  = [
  { name: "Puma", src: "/partners/1 (6).jpg" },
  { name: "Convergys", src: "/partners/1 (13).jpg" },
  { name: "IndiGo", src: "/partners/1 (7).jpg" },
  { name: "Oracle", src: "/partners/1 (12).jpg" },
];

const col5  = [
  { name: "MEL", src: "/partners/1 (8).jpg" },
  { name: "Mitsubishi", src: "/partners/1 (11).jpg" },
  { name: "Hexaware", src: "/partners/1 (9).jpg" },
  { name: "Relaygo", src: "/partners/1 (10).jpg" },
];

function LogoCard({ logo }) {
  const Img = (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-border/70 shadow-sm hover:shadow-md transition-shadow duration-300 p-6 grid place-items-center h-28">
      <img
        src={logo.src}
        alt={logo.name}
        className="max-h-18 max-w-[180px] object-contain grayscale hover:grayscale-0 transition duration-300 ease-out will-change-transform"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
  return logo.href ? (
    <a href={logo.href} aria-label={logo.name} className="block hover:scale-[1.01] transition-transform">
      {Img}
    </a>
  ) : (
    Img
  );
}

function AnimatedColumn({
  logos,
  direction = "up",
  duration = 22,
}) {
  const shouldReduce = useReducedMotion();
  // Duplicate to create a seamless loop
  const rows = [...logos, ...logos];

  return (
    <div className="relative h-[440px] overflow-hidden">
      {/* top/bottom fades */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent z-10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent z-10" />

      <motion.div
        animate={
          shouldReduce
            ? undefined
            : {
                y: direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"],
              }
        }
        transition={
          shouldReduce
            ? undefined
            : { duration, repeat: Infinity, ease: "linear" }
        }
        className="will-change-transform"
      >
        {rows.map((logo, i) => (
          <div key={`${logo.name}-${i}`} className="mb-6">
            <LogoCard logo={logo} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function TrustedOrganizations() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-brand-blue/10 via-brand-white to-brand-green/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wide bg-brand-red/10 text-brand-red ring-1 ring-brand-red/20">
            Trusted by 500+ Organizations
          </p>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-ink">
            Our Partners in <span className="text-brand-red">Change</span>
          </h2>
          <p className="mt-3 text-ink/70 max-w-2xl mx-auto">
            Strategic employers, corporates and ecosystem allies who power scale with us.
          </p>
        </div>

        {/* 4 Columns, 3 Rows Visible */}
        <div className="grid grid-cols-4 gap-6">

          <AnimatedColumn logos={col2} direction="down" duration={22} />
          <AnimatedColumn logos={col3} direction="up" duration={22} />
          <AnimatedColumn logos={col4} direction="down" duration={22} />
          <AnimatedColumn logos={col5} direction="up" duration={22} />

        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/partner"
            className="inline-flex items-center gap-2 rounded-full bg-ink text-brand-white px-5 py-3 font-semibold shadow hover:opacity-90 transition"
          >
            Partner With Us
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}

