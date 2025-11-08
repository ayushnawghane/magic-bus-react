import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Playful NGO Programmes Slider
 * - Child-friendly design with textures and playful elements
 * - Hand-drawn style cards with crayon aesthetics
 * - Scrapbook-inspired layout
 */
export default function ProgrammesSlider() {
  const baseSlides = useMemo(
    () => [
      {
        id: "adolescent-programme",
        title: "Adolescent Programme",
        summary:
          "Fun learning & life skills for teens! We help young minds grow strong and confident for their amazing future.",
        tags: ["Ages 11–18", "6 Months"],
        icon: "🎒",
        color: "#FFB6C1",
        image:
          "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1600&auto=format&fit=crop",
      },
      {
        id: "livelihood-programme",
        title: "Livelihood Programme",
        summary:
          "Learn cool job skills! We train youth for great careers and help them find awesome work opportunities.",
        tags: ["95% Jobs!", "₹15K+ Pay"],
        icon: "💼",
        color: "#98D8C8",
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
      },
      {
        id: "employee-volunteering",
        title: "Employee Volunteering",
        summary:
          "Companies helping kids! Teams come together to make a real difference in children's lives.",
        tags: ["500+ Teams", "Fun Impact"],
        icon: "🤝",
        color: "#FFD700",
        image:
          "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1600&auto=format&fit=crop",
      },
      {
        id: "rural-empowerment",
        title: "Rural Empowerment",
        summary:
          "Village heroes! Special programs helping rural youth dream big and grow their communities.",
        tags: ["Village Kids", "Future Stars"],
        icon: "🌾",
        color: "#DDA0DD",
        image:
          "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1600&auto=format&fit=crop",
      },
      {
        id: "magic-mitra",
        title: "Magic Mitra",
        summary:
          "Technology magic! Using AI and smart tools to reach more kids and create bigger smiles.",
        tags: ["AI Helper", "Big Reach"],
        icon: "🎯",
        color: "#87CEEB",
        image:
          "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1600&auto=format&fit=crop",
      },
      {
        id: "youth-fellowship",
        title: "Youth Fellowship",
        summary:
          "Be a leader! Training young changemakers who inspire their friends and communities.",
        tags: ["Leaders", "Changemakers"],
        icon: "🎓",
        color: "#FFA07A",
        image:
          "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1600&auto=format&fit=crop",
      },
    ],
    []
  );

  const [visible, setVisible] = useState(3);
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isMoving, setIsMoving] = useState(false);
  const trackRef = useRef(null);

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w < 768) setVisible(1);
      else if (w < 1024) setVisible(2);
      else setVisible(3);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const slides = useMemo(() => {
    const head = baseSlides.slice(0, visible);
    const tail = baseSlides.slice(-visible);
    return [...tail, ...baseSlides, ...head];
  }, [baseSlides, visible]);

  useEffect(() => {
    setIsAnimating(false);
    setIndex(visible);
    const t = setTimeout(() => setIsAnimating(true), 20);
    return () => clearTimeout(t);
  }, [visible]);

  const translatePct = index * (100 / visible);
  const transform = `translateX(-${translatePct}%)`;

  const moveNext = () => {
    if (isMoving) return;
    setIsMoving(true);
    setIndex((i) => i + 1);
  };
  
  const movePrev = () => {
    if (isMoving) return;
    setIsMoving(true);
    setIndex((i) => i - 1);
  };

  const handleTransitionEnd = () => {
    const firstReal = visible;
    const lastReal = visible + baseSlides.length - 1;
    setIsMoving(false);

    if (index > lastReal) {
      setIsAnimating(false);
      setIndex(firstReal);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsAnimating(true));
      });
    } else if (index < firstReal) {
      setIsAnimating(false);
      setIndex(lastReal);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsAnimating(true));
      });
    }
  };

  const activeReal = ((index - visible) % baseSlides.length + baseSlides.length) % baseSlides.length;

  return (
    <section 
      className="py-16 md:py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #FFF9E6 0%, #FFE4D6 50%, #E8F5E9 100%)",
      }}
    >
      {/* Paper texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative crayon scribbles */}
      <div className="absolute top-10 left-10 w-24 h-24 opacity-20 hidden lg:block">
        <svg viewBox="0 0 100 100" className="text-red-400">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="5,5" />
        </svg>
      </div>
      
      <div className="absolute bottom-20 right-16 w-20 h-20 opacity-20 hidden lg:block">
        <svg viewBox="0 0 100 100" className="text-blue-400">
          <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="5,5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header with playful styling */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-flex items-center gap-2 mb-4 px-5 py-2 bg-white rounded-full shadow-lg border-3 border-dashed border-yellow-400"
          >
            <span className="text-2xl">✨</span>
            <span 
              className="text-orange-600 font-bold text-sm tracking-wide uppercase"
              style={{ fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive" }}
            >
              What We Do
            </span>
          </motion.div>

          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 mb-5"
            style={{ 
              fontFamily: "'Fredoka', 'Baloo 2', 'Comic Sans MS', cursive",
              textShadow: "3px 3px 0 rgba(255,255,255,0.8), -1px -1px 0 rgba(0,0,0,0.05)"
            }}
          >
            <span className="text-red-500">Our Amazing</span>{" "}
            <span className="text-blue-500">Programs!</span>
          </h2>
          
          <p 
            className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Quicksand', 'Arial Rounded MT Bold', sans-serif" }}
          >
            Super cool ways we help kids & youth grow, learn, and shine bright! 🌟
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex will-change-transform"
              style={{
                transform,
                transition: isAnimating ? "transform 450ms ease" : "none",
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {slides.map((s, i) => (
                <div
                  key={`${s.id}-${i}`}
                  style={{ flex: `0 0 calc(100% / ${visible})` }}
                  className="px-3 md:px-4 lg:px-5"
                >
                  <ProgrammeCard slide={s} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation with crayon buttons */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1, rotate: -10 }}
              whileTap={{ scale: 0.9 }}
              onClick={movePrev}
              aria-label="Previous"
              className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 text-white shadow-[4px_4px_0_rgba(0,0,0,0.2)] border-3 border-white grid place-items-center"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </motion.button>

            {/* Dot indicators */}
            <div className="flex items-center gap-2 px-4">
              {baseSlides.map((_, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    const delta = i - activeReal;
                    if (delta === 0) return;
                    setIndex((curr) => curr + delta);
                  }}
                  className={`rounded-full transition-all ${
                    i === activeReal 
                      ? "w-8 h-3 bg-orange-500" 
                      : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                  }`}
                  style={{
                    boxShadow: i === activeReal ? "2px 2px 0 rgba(0,0,0,0.15)" : "none"
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              onClick={moveNext}
              aria-label="Next"
              className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-pink-600 text-white shadow-[4px_4px_0_rgba(0,0,0,0.2)] border-3 border-white grid place-items-center"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Floating stickers decoration */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-8 text-6xl hidden xl:block"
      >
        🌈
      </motion.div>
      
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [5, -5, 5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 left-8 text-5xl hidden xl:block"
      >
        ⭐
      </motion.div>
    </section>
  );
}

/* Scrapbook-style card with hand-drawn elements */
function ProgrammeCard({ slide }) {
  const { image, icon, title, summary, tags, color } = slide;

  return (
    <motion.div
      whileHover={{ y: -8, rotate: 1 }}
      className="relative h-[480px] md:h-[520px]"
    >
      {/* Tape effect at top */}
      <div 
        className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-8 bg-yellow-200/60 backdrop-blur-sm rounded-sm z-20"
        style={{
          boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
        }}
      />

      {/* Main card with torn paper edge effect */}
      <div 
        className="relative h-full bg-white rounded-3xl overflow-hidden shadow-[6px_6px_0_rgba(0,0,0,0.1)] border-4 border-white"
        style={{
          transform: "rotate(-1deg)",
          background: "linear-gradient(135deg, #FFFEF9 0%, #FFF9F0 100%)",
        }}
      >
        {/* Image area with crayon border */}
        <div className="relative h-[240px] overflow-hidden">
          <div 
            className="absolute inset-0 m-3"
            style={{
              clipPath: "polygon(2% 0%, 98% 0%, 100% 2%, 100% 98%, 98% 100%, 2% 100%, 0% 98%, 0% 2%)",
            }}
          >
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover"
            />
            {/* Color wash overlay */}
            <div 
              className="absolute inset-0 mix-blend-overlay opacity-40"
              style={{ backgroundColor: color }}
            />
          </div>

          {/* Icon badge with sticker style */}
          <div 
            className="absolute top-5 left-5 w-16 h-16 rounded-full bg-white shadow-lg grid place-items-center text-3xl border-4 border-dashed"
            style={{ 
              borderColor: color,
              transform: "rotate(-8deg)",
            }}
          >
            {icon}
          </div>

          {/* Hand-drawn corner decoration */}
          <svg 
            className="absolute top-3 right-3 w-12 h-12 opacity-60" 
            viewBox="0 0 50 50"
            style={{ color }}
          >
            <path 
              d="M 10 25 Q 25 10, 40 25 Q 25 40, 10 25" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              strokeDasharray="3,3"
            />
          </svg>
        </div>

        {/* Content area */}
        <div className="p-5 md:p-6">
          <h3 
            className="text-2xl md:text-[26px] font-black mb-3 leading-tight"
            style={{ 
              fontFamily: "'Fredoka', 'Comic Sans MS', cursive",
              color: color,
              textShadow: "2px 2px 0 rgba(255,255,255,0.8)",
            }}
          >
            {title}
          </h3>

          <p 
            className="text-gray-700 text-sm md:text-[15px] leading-relaxed mb-4"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            {summary}
          </p>

          {/* Tags with crayon style */}
          <div className="flex flex-wrap gap-2 mb-5">
            {tags.map((t, i) => (
              <span
                key={t}
                className="px-3 py-1.5 text-xs font-bold rounded-full border-2 border-dashed shadow-sm"
                style={{
                  backgroundColor: `${color}20`,
                  borderColor: color,
                  color: color,
                  transform: `rotate(${i % 2 === 0 ? '-2' : '2'}deg)`,
                  fontFamily: "'Comic Sans MS', cursive",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* CTA button with playful style */}
          <motion.button 
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3.5 rounded-2xl font-bold text-white shadow-[3px_3px_0_rgba(0,0,0,0.2)] border-3 border-white"
            style={{
              background: `linear-gradient(135deg, ${color} 0%, ${color}DD 100%)`,
              fontFamily: "'Fredoka', cursive",
            }}
          >
            Learn More! →
          </motion.button>
        </div>

        {/* Corner fold effect */}
        <div 
          className="absolute bottom-0 right-0 w-12 h-12"
          style={{
            background: "linear-gradient(225deg, #E0E0E0 0%, #F5F5F5 100%)",
            clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
          }}
        />
      </div>
    </motion.div>
  );
}