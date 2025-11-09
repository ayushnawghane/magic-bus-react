import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

const BASE_STORIES = [
  {
    quote:
      "Magic Bus gave me the confidence and skills to secure my first job. Today, I'm supporting my family and inspiring others in my community.",
    name: "Priya Sharma",
    role: "Digital Marketing Associate",
    color: "yellow",
    emoji: "🌟",
  },
  {
    quote:
      "The employability program didn't just teach me skills—it changed my entire perspective on what I could achieve in life.",
    name: "Rahul Kumar",
    role: "Tech Support Specialist",
    color: "red",
    emoji: "🚀",
  },
  {
    quote:
      "As a teacher, Magic Mitra has revolutionized how I engage with students. The AI support is incredible and truly innovative.",
    name: "Anjali Mehta",
    role: "School Teacher",
    color: "blue",
    emoji: "💡",
  },
  {
    quote:
      "I never thought I could become an entrepreneur. The skills training and mentorship gave me wings to start my own business!",
    name: "Amit Patel",
    role: "Small Business Owner",
    color: "green",
    emoji: "🎯",
  },
];

const colorSchemes = {
  yellow: {
    bg: "from-yellow-100 to-orange-100",
    border: "border-yellow-400",
    accent: "bg-yellow-400",
    text: "text-yellow-600",
    shadow: "shadow-yellow-200/50",
  },
  red: {
    bg: "from-red-100 to-pink-100",
    border: "border-red-400",
    accent: "bg-red-400",
    text: "text-red-600",
    shadow: "shadow-red-200/50",
  },
  blue: {
    bg: "from-blue-100 to-cyan-100",
    border: "border-blue-400",
    accent: "bg-blue-400",
    text: "text-blue-600",
    shadow: "shadow-blue-200/50",
  },
  green: {
    bg: "from-green-100 to-teal-100",
    border: "border-green-400",
    accent: "bg-green-400",
    text: "text-green-600",
    shadow: "shadow-green-200/50",
  },
};

export default function SuccessStories() {
  const [visible, setVisible] = useState(3);
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isMoving, setIsMoving] = useState(false);
  const trackRef = useRef(null);
  const timerRef = useRef(null);

  // responsive calc
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
    const head = BASE_STORIES.slice(0, visible);
    const tail = BASE_STORIES.slice(-visible);
    return [...tail, ...BASE_STORIES, ...head];
  }, [visible]);

  useEffect(() => {
    setIsAnimating(false);
    setIndex(visible);
    const t = setTimeout(() => setIsAnimating(true), 20);
    return () => clearTimeout(t);
  }, [visible]);

  useEffect(() => {
    startAuto();
    return stopAuto;
  }, [visible]);

  const startAuto = () => {
    stopAuto();
    timerRef.current = setInterval(() => moveNext(), 5000);
  };
  const stopAuto = () => timerRef.current && clearInterval(timerRef.current);

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

  const onTransitionEnd = () => {
    const firstReal = visible;
    const lastReal = visible + BASE_STORIES.length - 1;
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

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let startX = 0, dx = 0;
    const start = (e) => {
      startX = e.touches ? e.touches[0].clientX : e.clientX;
      dx = 0;
      stopAuto();
    };
    const move = (e) => {
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      dx = x - startX;
    };
    const end = () => {
      if (Math.abs(dx) > 50) (dx < 0 ? moveNext() : movePrev());
      startAuto();
    };

    el.addEventListener("touchstart", start, { passive: true });
    el.addEventListener("touchmove", move, { passive: true });
    el.addEventListener("touchend", end, { passive: true });

    let md = false;
    const mdown = (e) => { md = true; start(e); };
    const mmove = (e) => md && move(e);
    const mup = () => { if (!md) return; md = false; end(); };
    el.addEventListener("mousedown", mdown);
    window.addEventListener("mousemove", mmove);
    window.addEventListener("mouseup", mup);

    return () => {
      el.removeEventListener("touchstart", start);
      el.removeEventListener("touchmove", move);
      el.removeEventListener("touchend", end);
      el.removeEventListener("mousedown", mdown);
      window.removeEventListener("mousemove", mmove);
      window.removeEventListener("mouseup", mup);
    };
  }, [visible]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") moveNext();
      if (e.key === "ArrowLeft") movePrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const transform = `translateX(-${(index * 100) / visible}%)`;
  const activeReal = ((index - visible) % BASE_STORIES.length + BASE_STORIES.length) % BASE_STORIES.length;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-purple-50/30 py-24">
      {/* Playful background decorations */}
      <div className="pointer-events-none absolute inset-0">
        {/* Floating shapes */}
        <div className="absolute left-[8%] top-[15%] h-20 w-20 rotate-12 rounded-2xl bg-yellow-300/20 blur-xl"></div>
        <div className="absolute right-[10%] top-[25%] h-24 w-24 rotate-45 rounded-full bg-pink-300/20 blur-2xl"></div>
        <div className="absolute bottom-[20%] left-[15%] h-28 w-28 -rotate-12 rounded-2xl bg-blue-300/20 blur-xl"></div>
        <div className="absolute bottom-[30%] right-[12%] h-16 w-16 rotate-45 rounded-full bg-green-300/20 blur-xl"></div>
        
        {/* Hand-drawn stars */}
        <svg className="absolute left-[5%] top-[8%] h-10 w-10 rotate-12 text-yellow-400/40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
        <svg className="absolute right-[8%] top-[12%] h-8 w-8 -rotate-6 text-pink-400/40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
        
        {/* Crayon doodles */}
        <svg className="absolute bottom-[10%] left-[3%] h-16 w-16 text-orange-400/30" viewBox="0 0 100 100">
          <path d="M20,50 Q30,30 50,50 T80,50" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
        </svg>
        <svg className="absolute right-[5%] bottom-[15%] h-12 w-12 text-blue-400/30" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="4" fill="none" strokeDasharray="8,4"/>
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header with hand-drawn elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-20 text-center"
        >
          {/* Badge */}
          <div className="mb-6 inline-block">
            <div className="relative inline-block">
              <div className="rotate-1 rounded-2xl border-3 border-dashed border-orange-400 bg-white px-6 py-3 shadow-lg">
                <span className="text-sm font-black uppercase tracking-wider text-orange-600" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                  ⭐ Our Impact Stories ⭐
                </span>
              </div>
              {/* Small decorative stars */}
              <svg className="absolute -right-2 -top-2 h-6 w-6 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
          </div>

          {/* Main heading with shadow */}
          <h2 
            className="mb-6 text-5xl font-black leading-tight text-gray-900 md:text-6xl lg:text-7xl"
            style={{ 
              fontFamily: 'Comic Sans MS, cursive',
              textShadow: '4px 4px 0px rgba(255, 200, 87, 0.3), -2px -2px 0px rgba(147, 197, 253, 0.2)'
            }}
          >
            Lives We've <span className="relative inline-block">
              Transformed
              {/* Underline scribble */}
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" preserveAspectRatio="none">
                <path d="M5,8 Q50,2 100,6 T200,5 T290,7" stroke="#fb923c" strokeWidth="4" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>

          <p 
            className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-700 md:text-xl"
            style={{ fontFamily: 'Comic Sans MS, cursive' }}
          >
            Real stories from amazing kids and youth who found their path through our programs! 🎉
          </p>

          {/* Decorative line */}
          <div className="mx-auto mt-8 flex items-center justify-center gap-3">
            <div className="h-1 w-20 rounded-full bg-gradient-to-r from-red-400 to-yellow-400"></div>
            <div className="h-2 w-2 rotate-45 bg-orange-400"></div>
            <div className="h-1 w-20 rounded-full bg-gradient-to-r from-yellow-400 to-green-400"></div>
            <div className="h-2 w-2 rotate-45 bg-blue-400"></div>
            <div className="h-1 w-20 rounded-full bg-gradient-to-r from-green-400 to-blue-400"></div>
          </div>
        </motion.div>

        {/* Slider */}
        <div
          className="relative"
          onMouseEnter={stopAuto}
          onMouseLeave={startAuto}
        >
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex cursor-grab will-change-transform active:cursor-grabbing"
              style={{
                transform,
                transition: isAnimating ? "transform 600ms cubic-bezier(.22,.61,.36,1)" : "none",
              }}
              onTransitionEnd={onTransitionEnd}
            >
              {slides.map((s, i) => (
                <div
                  key={`${s.name}-${i}`}
                  style={{ flex: `0 0 calc(100% / ${visible})` }}
                  className="px-3 md:px-4"
                >
                  <StoryCard story={s} />
                </div>
              ))}
            </div>
          </div>

          {/* Controls with playful styling */}
          <div className="mt-12 flex flex-col items-center gap-6">
            <div className="flex items-center gap-4">
              <button
                aria-label="Previous"
                onClick={movePrev}
                className="group relative h-14 w-14 overflow-hidden rounded-full border-4 border-white bg-gradient-to-br from-purple-400 to-pink-500 shadow-xl transition-all hover:scale-110 hover:shadow-2xl active:scale-95"
                style={{ fontFamily: 'Comic Sans MS, cursive' }}
              >
                <div className="absolute inset-0 bg-white opacity-0 transition-opacity group-hover:opacity-20"></div>
                <svg className="relative mx-auto h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Center indicator */}
              <div className="rounded-full border-3 border-dashed border-gray-300 bg-white px-6 py-2 shadow-sm">
                <span className="text-sm font-bold text-gray-700" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                  {activeReal + 1} / {BASE_STORIES.length}
                </span>
              </div>

              <button
                aria-label="Next"
                onClick={moveNext}
                className="group relative h-14 w-14 overflow-hidden rounded-full border-4 border-white bg-gradient-to-br from-orange-400 to-red-500 shadow-xl transition-all hover:scale-110 hover:shadow-2xl active:scale-95"
                style={{ fontFamily: 'Comic Sans MS, cursive' }}
              >
                <div className="absolute inset-0 bg-white opacity-0 transition-opacity group-hover:opacity-20"></div>
                <svg className="relative mx-auto h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Playful dots */}
            <div className="flex items-center gap-3">
              {BASE_STORIES.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to story ${i + 1}`}
                  onClick={() => {
                    const delta = i - activeReal;
                    if (delta === 0) return;
                    setIndex((curr) => curr + delta);
                  }}
                  className={`transition-all ${
                    i === activeReal 
                      ? "h-3 w-8 rounded-full bg-gradient-to-r from-orange-400 to-red-500 shadow-md" 
                      : "h-3 w-3 rounded-full bg-gray-300 hover:bg-gray-400 hover:scale-125"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0">
        <svg className="w-full" viewBox="0 0 1200 80" preserveAspectRatio="none" style={{ height: '60px' }}>
          <path d="M0,40 Q300,10 600,40 T1200,40 L1200,80 L0,80 Z" fill="white" opacity="0.5"/>
        </svg>
      </div>
    </section>
  );
}

function StoryCard({ story }) {
  const { quote, name, role, color, emoji } = story;
  const scheme = colorSchemes[color];

  return (
    <motion.article
      whileHover={{ y: -8, rotate: Math.random() > 0.5 ? 1 : -1 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="h-full"
    >
      <div className={`relative h-full overflow-hidden rounded-3xl border-4 border-white bg-gradient-to-br ${scheme.bg} p-8 shadow-xl ${scheme.shadow} transition-shadow hover:shadow-2xl`}>
        {/* Paper texture overlay */}
        <div 
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M0 0h20v20H0V0zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm20 0a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM10 37a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm10-17h20v20H20V20zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14z'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>

        {/* Top decorative element */}
        <div className="relative mb-6 flex items-start justify-between">
          {/* Stars */}
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, type: "spring" }}
                className="text-2xl"
              >
                ⭐
              </motion.span>
            ))}
          </div>

          {/* Emoji badge */}
          <div className={`-rotate-6 rounded-xl border-3 border-white ${scheme.accent} px-3 py-2 text-2xl shadow-md`}>
            {emoji}
          </div>
        </div>

        {/* Quote with hand-drawn quote marks */}
        <div className="relative mb-6">
          <svg className="absolute -left-2 -top-2 h-8 w-8 text-gray-400/40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
          </svg>
          <p 
            className="relative pl-6 pr-2 text-base leading-relaxed text-gray-800 md:text-lg"
            style={{ fontFamily: 'Comic Sans MS, cursive' }}
          >
            {quote}
          </p>
        </div>

        {/* Author section with crayon-style avatar */}
        <div className="relative mt-8 flex items-center gap-4">
          {/* Colorful avatar circle */}
          <div className="relative">
            <div className={`h-16 w-16 overflow-hidden rounded-full border-4 border-white ${scheme.accent} shadow-lg`}>
              <div className="flex h-full w-full items-center justify-center text-3xl font-black text-white" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                {name.charAt(0)}
              </div>
            </div>
            {/* Small decorative circle */}
            <div className="absolute -bottom-1 -right-1 h-5 w-5 rotate-12 rounded-full border-2 border-white bg-yellow-400 shadow-sm"></div>
          </div>

          <div>
            <div 
              className="text-xl font-black text-gray-900"
              style={{ fontFamily: 'Comic Sans MS, cursive' }}
            >
              {name}
            </div>
            <div 
              className={`text-sm font-bold ${scheme.text}`}
              style={{ fontFamily: 'Comic Sans MS, cursive' }}
            >
              {role}
            </div>
          </div>
        </div>

        {/* Bottom corner decoration */}
        <svg className="absolute bottom-2 right-2 h-8 w-8 opacity-20" viewBox="0 0 100 100">
          <path d="M50,10 L60,40 L90,50 L60,60 L50,90 L40,60 L10,50 L40,40 Z" fill="currentColor"/>
        </svg>
      </div>
    </motion.article>
  );
}