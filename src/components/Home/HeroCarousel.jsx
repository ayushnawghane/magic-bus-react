import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1]; // smooth ease-out

export default function HeroCarousel() {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);
  const touchX = useRef(0);

  const slides = [
    {
      image: "/ngo-images/1.JPG",
      eyebrow: "AI • Digital • Impact",
      title: "Effortless Banking",
      subtitle: "for India's boldest disruptors",
      desc: "Powerful automation, smart dashboards & integrated access.",
      cta: { label: "Donate Now", href: "#" },
    },
    {
      image: "/ngo-images/4.JPG",
      eyebrow: "Youth Empowerment",
      title: "Empowering Adolescents",
      subtitle: "Through Technology",
      desc: "AI-powered platform transforming adolescents into skilled professionals.",
      cta: { label: "Donate Now", href: "#" },
    },
    {
      image: "/ngo-images/5.jpeg",
      eyebrow: "Digital Skills",
      title: "Build Future-Ready Skills",
      subtitle: "Learn • Practice • Get Placed",
      desc: "Hands-on, market-aligned training for tomorrow's workforce.",
      cta: { label: "Donate Now", href: "#" },
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

  // Slide container animation
  const slideVariants = {
    initial: (direction) => ({
      x: direction * 100,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: EASE,
      },
    },
    exit: (direction) => ({
      x: direction * -100,
      opacity: 0,
      transition: {
        duration: 0.7,
        ease: EASE,
      },
    }),
  };

  // Ken Burns effect on image
  const imgVariants = {
    initial: {
      scale: 1.1,
    },
    animate: {
      scale: 1,
      transition: {
        duration: 7,
        ease: "linear",
      },
    },
  };

  // Staggered text animations
  const textVariants = {
    initial: { y: 30, opacity: 0 },
    animate: (delay) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: EASE,
        delay: delay * 0.1,
      },
    }),
  };

  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-ink"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) (dx > 0 ? prev() : next());
      }}
    >
      <AnimatePresence mode="wait" custom={dir}>
        <motion.div
          key={i}
          className="absolute inset-0"
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          custom={dir}
        >
          {/* Image with Ken Burns */}
          <motion.div
            className="absolute inset-0"
            variants={imgVariants}
            initial="initial"
            animate="animate"
          >
            <img
              src={slides[i].image}
              alt={slides[i].title}
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* Modern gradient overlay - cleaner and softer */}
          <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/75 to-transparent" />
          
          {/* Subtle vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

          {/* Content */}
          <div className="relative z-10 flex h-full items-center">
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
              <div className="max-w-2xl pl-20">
                {/* Eyebrow */}
                {/* {slides[i].eyebrow && (
                  <motion.div
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                    custom={1}
                    className="mb-6"
                  >
                    <span className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-brand-yellow backdrop-blur-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow animate-pulse" />
                      {slides[i].eyebrow}
                    </span>
                  </motion.div>
                )} */}

                {/* Title */}
                <motion.h1
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  custom={2}
                  className="mb-6"
                >
                  <span className="block text-4xl font-bold leading-tight text-white sm:text-6xl lg:text-6xl">
                    {slides[i].title}
                  </span>
                  {/* <span className="mt-2 block bg-gradient-to-r from-brand-red to-brand-yellow bg-clip-text text-5xl font-bold leading-tight text-transparent sm:text-6xl lg:text-7xl">
                    {slides[i].subtitle}
                  </span> */}
                </motion.h1>

                {/* Description */}
                <motion.p
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  custom={3}
                  className="mb-8 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl"
                >
                  {slides[i].desc}
                </motion.p>

                {/* CTAs */}
                <motion.div
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  custom={4}
                  className="flex flex-wrap items-center gap-4"
                >
                  <motion.a
                    href={slides[i].cta.href}
                    className="group relative overflow-hidden rounded-full bg-brand-red px-8 py-4 font-semibold text-white shadow-lg transition-all hover:shadow-2xl hover:shadow-brand-red/20"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">{slides[i].cta.label}</span>
                    <motion.div
                      className="absolute inset-0 bg-brand-red"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>

                  <motion.button
                    className="group rounded-full border-2 border-brand-yellow/80 bg-brand-yellow/5 px-8 py-4 font-semibold text-brand-yellow backdrop-blur-sm transition-all hover:border-brand-yellow hover:bg-brand-yellow/10"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Explore More
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Ambient floating shapes */}
          <motion.div
            className="pointer-events-none absolute right-[10%] top-[20%] h-64 w-64 rounded-full bg-brand-from-brand-red/20 blur-3xl"
            animate={{
              y: [0, 30, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="pointer-events-none absolute bottom-[20%] right-[15%] h-48 w-48 rounded-full bg-brand-green/20 blur-3xl"
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <motion.button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 sm:left-6 md:left-8 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-md transition-all hover:bg-white/20"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft className="h-6 w-6" />
      </motion.button>

      <motion.button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 sm:right-6 md:right-8 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-md transition-all hover:bg-white/20"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight className="h-6 w-6" />
      </motion.button>

      {/* Progress Indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
        {slides.map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => {
              setDir(idx > i ? 1 : -1);
              setI(idx);
            }}
            aria-label={`Go to slide ${idx + 1}`}
            className="group relative"
            whileHover={{ scale: 1.2 }}
          >
            <div
              className={`relative h-2 overflow-hidden rounded-full transition-all duration-500 ${
                idx === i ? "w-12 bg-brand-yellow" : "w-2 bg-white/40"
              }`}
            >
              {idx === i && (
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    duration: 6.5,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                />
              )}
            </div>
          </motion.button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 right-8 z-20 flex flex-col items-center gap-2 text-white/60"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
        <motion.div
          className="h-8 w-[2px] rounded-full bg-white/40"
          animate={{
            scaleY: [1, 1.5, 1],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </section>
  );
}