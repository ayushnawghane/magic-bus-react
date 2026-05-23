import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

export default function HeroCarousel() {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);
  const touchX = useRef(0);

  const slides = [
    {
      image: "/ngo-videos/4.MOV",
      eyebrow: "Digital Skills",
      title: "Build Future-Ready Skills",
      desc: "Hands-on, market-aligned training for tomorrow's workforce.",
      cta: { label: "Donate Now", href: "/donate" },
    },
    {
      image: "/ngo-videos/4.MOV",
      eyebrow: "AI • Digital • Impact",
      title: "AI & Digital Programmes",
      desc: "First NGO to Launch AI & Digital Programmes for India's boldest disruptors.",
      cta: { label: "Donate Now", href: "/donate" },
    },
    {
      image: "/ngo-videos/4.MOV",
      eyebrow: "Youth Empowerment",
      title: "Empowering Adolescents",
      desc: "AI-powered platform transforming adolescents into skilled professionals.",
      cta: { label: "Donate Now", href: "/donate" },
    },
  ];

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => next(), 6500);
    return () => clearInterval(t);
  }, [paused, i]);

  const wrap = (n) => (n + slides.length) % slides.length;
  const next = () => {
    setDir(1);
    setI((p) => wrap(p + 1));
  };
  const prev = () => {
    setDir(-1);
    setI((p) => wrap(p - 1));
  };

  // Ken Burns effect on image
  const imgVariants = {
    initial: { scale: 1.06 },
    animate: {
      scale: 1,
      transition: { duration: 7, ease: "linear" },
    },
  };

  // Text card animation
  const cardVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE, delay: 0.2 } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.4, ease: EASE } },
  };

  const textItem = (delay) => ({
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE, delay } },
  });

  return (
    <section
      className="relative w-full overflow-hidden bg-[#111]"
      style={{ height: "calc(100vh - 0px)" }}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) (dx > 0 ? prev() : next());
      }}
    >
      {/* ── Background media (full bleed) ─────────────────────── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`bg-${i}`}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.9, ease: EASE } }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: EASE } }}
        >
          <motion.div
            className="absolute inset-0"
            variants={imgVariants}
            initial="initial"
            animate="animate"
          >
            {slides[i].image.match(/\.(mp4|MP4|MOV|mov|webm)$/) ? (
              <motion.video
                key={slides[i].image}
                src={slides[i].image}
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              />
            ) : (
              <img
                src={slides[i].image}
                alt={slides[i].title}
                className="h-full w-full object-cover"
              />
            )}
          </motion.div>

          {/* Subtle left-side gradient so the white card reads cleanly */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent pointer-events-none" />
          {/* Bottom fade so the card merges smoothly */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* ── White text card — bottom-left (BRAC style) ─────────── */}
      <div className="absolute bottom-0 left-0 z-20 w-full pointer-events-none">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 pb-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={`card-${i}`}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="inline-block bg-white/95 backdrop-blur-sm rounded-t-2xl px-8 py-7 max-w-md shadow-xl pointer-events-auto"
            >
              {/* Eyebrow */}
              {slides[i].eyebrow && (
                <motion.span
                  {...textItem(0.1)}
                  initial={textItem(0.1).initial}
                  animate={textItem(0.1).animate}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-red mb-3"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-red inline-block" />
                  {slides[i].eyebrow}
                </motion.span>
              )}

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE, delay: 0.2 } }}
                className="text-3xl sm:text-4xl font-extrabold leading-tight text-[#1A1A1A] mb-3 uppercase tracking-tight"
              >
                {slides[i].title}
              </motion.h1>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1, transition: { duration: 0.5, ease: EASE, delay: 0.35 } }}
                className="origin-left h-[3px] w-12 rounded-full bg-brand-red mb-3"
              />

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay: 0.4 } }}
                className="text-sm text-[#444] leading-relaxed mb-5"
              >
                {slides[i].desc}
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE, delay: 0.5 } }}
                className="flex items-center gap-3"
              >
                <motion.a
                  href={slides[i].cta.href}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-brand-red/90 transition-colors"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {slides[i].cta.label}
                </motion.a>
                <motion.button
                  className="inline-flex items-center gap-2 rounded-full border-2 border-brand-red/30 px-6 py-2.5 text-sm font-semibold text-brand-red hover:border-brand-red hover:bg-brand-red/5 transition-colors"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Navigation Arrows ───────────────────────────────────── */}
      <motion.button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 sm:left-6 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/30 bg-white/10 p-3 text-white backdrop-blur-md transition-all hover:bg-white/25"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft className="h-5 w-5" />
      </motion.button>

      <motion.button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 sm:right-6 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/30 bg-white/10 p-3 text-white backdrop-blur-md transition-all hover:bg-white/25"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight className="h-5 w-5" />
      </motion.button>

      {/* ── Progress Dots ───────────────────────────────────────── */}
      <div className="absolute bottom-6 right-8 z-30 flex items-center gap-2.5">
        {slides.map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => {
              setDir(idx > i ? 1 : -1);
              setI(idx);
            }}
            aria-label={`Go to slide ${idx + 1}`}
            whileHover={{ scale: 1.2 }}
          >
            <div
              className={`relative h-2 overflow-hidden rounded-full transition-all duration-500 ${
                idx === i ? "w-10 bg-white" : "w-2 bg-white/40"
              }`}
            >
              {idx === i && (
                <motion.div
                  className="absolute inset-0 bg-brand-red"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 6.5, ease: "linear", repeat: Infinity }}
                />
              )}
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  );
}