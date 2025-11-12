// SuccessStories.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

const BASE_STORIES = [
  {
    quote:
      "Magic Bus gave me the confidence and skills to secure my first job. Today, I'm supporting my family and inspiring others in my community.",
    name: "Priya Sharma",
    role: "Digital Marketing Associate",
    leftBorder: "brand-yellow",
    avatarGradient: "from-brand-yellow to-brand-red",
  },
  {
    quote:
      "The employability program didn't just teach me skills—it changed my entire perspective on what I could achieve in life.",
    name: "Rahul Kumar",
    role: "Tech Support Specialist",
    leftBorder: "brand-red",
    avatarGradient: "from-brand-red to-brand-magenta",
  },
  {
    quote:
      "As a teacher, Magic Mitra has revolutionized how I engage with students. The AI support is incredible and truly innovative.",
    name: "Anjali Mehta",
    role: "School Teacher",
    leftBorder: "brand-blue",
    avatarGradient: "from-brand-blue to-brand-green",
  },
  // (Optional) add more items — the slider will adapt
];

const borderClass = {
  "brand-yellow": "border-brand-yellow",
  "brand-red": "border-brand-red",
  "brand-blue": "border-brand-blue",
};

export default function SuccessStories() {
  // visible cards responsive: 1 (sm), 2 (md), 3 (lg+)
  const [visible, setVisible] = useState(3);
  const [index, setIndex] = useState(0); // position on extended track
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

  // create clones for seamless loop
  const slides = useMemo(() => {
    const head = BASE_STORIES.slice(0, visible);
    const tail = BASE_STORIES.slice(-visible);
    return [...tail, ...BASE_STORIES, ...head];
  }, [visible]);

  // snap to first real on visible change (without anim)
  useEffect(() => {
    setIsAnimating(false);
    setIndex(visible);
    const t = setTimeout(() => setIsAnimating(true), 20);
    return () => clearTimeout(t);
  }, [visible]);

  // autoplay
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

  // snap back after passing clones
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

  // swipe
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let startX = 0,
      dx = 0;
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
    const mdown = (e) => {
      md = true;
      start(e);
    };
    const mmove = (e) => md && move(e);
    const mup = () => {
      if (!md) return;
      md = false;
      end();
    };
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

  // keyboard
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") moveNext();
      if (e.key === "ArrowLeft") movePrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // translate calc: each card width = 100%/visible
  const transform = `translateX(-${(index * 100) / visible}%)`;

  // active page for dots (based on real items)
  const activeReal =
    ((index - visible) % BASE_STORIES.length + BASE_STORIES.length) %
    BASE_STORIES.length;

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-brand-red font-dosis font-bold text-sm uppercase tracking-wider">
            Success Stories
          </span>
          <h2 className="mt-3 text-5xl font-dosis font-bold text-brand-black">
            Lives We've Transformed
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto font-lato text-lg">
            Real stories from youth who found their path through Magic Bus programs.
          </p>
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
              className="flex will-change-transform"
              style={{
                transform,
                transition: isAnimating ? "transform 500ms cubic-bezier(.22,.61,.36,1)" : "none",
              }}
              onTransitionEnd={onTransitionEnd}
            >
              {slides.map((s, i) => (
                <div
                  key={`${s.name}-${i}`}
                  style={{ flex: `0 0 calc(100% / ${visible})` }}
                  className="px-3 md:px-4 lg:px-5"
                >
                  <StoryCard story={s} />
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              aria-label="Previous"
              onClick={movePrev}
              className="grid h-11 w-11 place-items-center rounded-full bg-white text-ink shadow-sm ring-1 ring-black/5 hover:shadow-md active:scale-95 transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              aria-label="Next"
              onClick={moveNext}
              className="grid h-11 w-11 place-items-center rounded-full bg-brand-red text-white shadow-sm hover:bg-brand-red/90 active:scale-95 transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>

          {/* Dots (based on real items) */}
          <div className="mt-3 flex items-center justify-center gap-2">
            {BASE_STORIES.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to story ${i + 1}`}
                onClick={() => {
                  const delta = i - activeReal;
                  if (delta === 0) return;
                  setIndex((curr) => curr + delta);
                }}
                className={`h-2 w-2 rounded-full transition ${
                  i === activeReal ? "bg-brand-red" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StoryCard({ story }) {
  const { quote, name, role, leftBorder, avatarGradient } = story;
  const borderColor = borderClass[leftBorder] || "border-brand-red";

  return (
    <article
      className={[
        "h-full rounded-2xl bg-gradient-to-br from-gray-50 to-white p-6 md:p-7 lg:p-8",
        "shadow-sm hover:shadow-xl transition-shadow",
        "border-l-4",
        borderColor,
      ].join(" ")}
    >
      <div className="mb-4 flex">
        <span className="text-brand-yellow text-2xl leading-none">★★★★★</span>
      </div>
      <p className="font-lato italic leading-relaxed text-gray-700">
        “{quote}”
      </p>

      <div className="mt-6 flex items-center gap-4">
        <div className={`h-14 w-14 rounded-full bg-gradient-to-br ${avatarGradient}`} />
        <div>
          <div className="font-dosis text-lg font-bold text-ink">{name}</div>
          <div className="font-lato text-sm text-gray-500">{role}</div>
        </div>
      </div>
    </article>
  );
}