import { useEffect, useMemo, useRef, useState } from "react";

/**
 * Fixed ProgrammesSlider
 * - 3/2/1 visible per breakpoint
 * - slides one card at a time, infinite loop with clones
 * - translate logic fixed so cards remain visible
 */
export default function ProgrammesSlider() {
  const baseSlides = useMemo(
    () => [
      {
        id: "adolescent-programme",
        title: "Adolescent Programme",
        summary:
          "Comprehensive life skills and foundational development for youth aged 11–18 years, building strong foundations for future success.",
        tags: ["Ages 11–18", "6 Month Program"],
        icon: "👥",
        rating: "4.8",
        image:
          "https://images.unsplash.com/photo-1496302662116-35cc4f36df92?q=80&w=1600&auto=format&fit=crop",
        gradient: "from-blue-400 via-purple-500 to-indigo-600",
      },
      {
        id: "livelihood-programme",
        title: "Livelihood Programme",
        summary:
          "Career-focused training connecting youth to sustainable employment opportunities with industry-relevant skills development.",
        tags: ["95% Placement", "₹15K+ Salary"],
        icon: "💼",
        rating: "4.9",
        image:
          "https://images.unsplash.com/photo-1515815859627-c07c5b3d6cf4?q=80&w=1600&auto=format&fit=crop",
        gradient: "from-green-400 via-emerald-500 to-teal-600",
      },
      {
        id: "employee-volunteering",
        title: "Employee Volunteering",
        summary:
          "Corporate partnerships enabling meaningful employee engagement in social impact through structured volunteering programs.",
        tags: ["500+ Companies", "Team Building"],
        icon: "🤝",
        rating: "4.7",
        image:
          "https://images.unsplash.com/photo-1515165562835-c3b8c8c3dc50?q=80&w=1600&auto=format&fit=crop",
        gradient: "from-orange-400 via-red-500 to-pink-600",
      },
      {
        id: "rural-empowerment",
        title: "Rural Empowerment",
        summary:
          "Specialized programs for rural youth development and agricultural innovation, bridging the urban–rural divide.",
        tags: ["MB Dost", "Future X"],
        icon: "🌾",
        rating: "4.6",
        image:
          "https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=1600&auto=format&fit=crop",
        gradient: "from-purple-400 via-violet-500 to-indigo-600",
      },
      {
        id: "magic-mitra",
        title: "Magic Mitra",
        summary:
          "AI-powered community mobilization and youth engagement platform leveraging technology for maximum impact.",
        tags: ["AI Platform", "Community Reach"],
        icon: "🎯",
        rating: "4.9",
        image:
          "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop",
        gradient: "from-cyan-400 via-blue-500 to-indigo-600",
      },
      {
        id: "youth-fellowship",
        title: "Youth Fellowship",
        summary:
          "Leadership development program creating change agents in communities, fostering next-generation social leaders.",
        tags: ["Leadership", "Change Makers"],
        icon: "🎓",
        rating: "4.8",
        image:
          "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1600&auto=format&fit=crop",
        gradient: "from-amber-400 via-orange-500 to-red-600",
      },
    ],
    []
  );

  const [visible, setVisible] = useState(3); // items per view responsive
  const [index, setIndex] = useState(0); // absolute index on extended (cloned) track
  const [isAnimating, setIsAnimating] = useState(true); // toggles CSS transition
  const [isMoving, setIsMoving] = useState(false); // block repeated clicks while moving
  const trackRef = useRef(null);

  // responsive visible calculation
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

  // Extended slides with clones at head and tail for infinite snapping
  const slides = useMemo(() => {
    const head = baseSlides.slice(0, visible);
    const tail = baseSlides.slice(-visible);
    return [...tail, ...baseSlides, ...head];
  }, [baseSlides, visible]);

  // keep index on first real when visible changes
  useEffect(() => {
    // snap to first real instantly then re-enable animation
    setIsAnimating(false);
    setIndex(visible);
    // small tick to restore CSS transition for user actions
    const t = setTimeout(() => setIsAnimating(true), 20);
    return () => clearTimeout(t);
  }, [visible]);

  // translate: each card occupies (100 / visible)% of the viewport
  const translatePct = index * (100 / visible);
  const transform = `translateX(-${translatePct}%)`;

  // move handlers (prevent spamming)
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

  // transition end: handle snapping back from clones
  const handleTransitionEnd = () => {
    const firstReal = visible;
    const lastReal = visible + baseSlides.length - 1;

    // clear moving flag
    setIsMoving(false);

    if (index > lastReal) {
      // jumped to clones after last real, snap to firstReal (no animation)
      setIsAnimating(false);
      setIndex(firstReal);
      // re-enable animation next frame
      requestAnimationFrame(() => {
        // small delay to ensure DOM applied
        requestAnimationFrame(() => setIsAnimating(true));
      });
    } else if (index < firstReal) {
      // jumped to clones before first real, snap to lastReal
      setIsAnimating(false);
      setIndex(lastReal);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsAnimating(true));
      });
    }
  };

  // swipe support
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let startX = 0;
    let dx = 0;
    const onStart = (e) => {
      startX = e.touches ? e.touches[0].clientX : e.clientX;
      dx = 0;
    };
    const onMove = (e) => {
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      dx = x - startX;
    };
    const onEnd = () => {
      if (Math.abs(dx) > 50) {
        dx < 0 ? moveNext() : movePrev();
      }
    };

    el.addEventListener("touchstart", onStart, { passive: true });
    el.addEventListener("touchmove", onMove, { passive: true });
    el.addEventListener("touchend", onEnd, { passive: true });

    // optional mouse swipe
    let mouseDown = false;
    const ms = (e) => {
      mouseDown = true;
      onStart(e);
    };
    const mm = (e) => {
      if (!mouseDown) return;
      onMove(e);
    };
    const mu = () => {
      if (!mouseDown) return;
      mouseDown = false;
      onEnd();
    };
    el.addEventListener("mousedown", ms);
    window.addEventListener("mousemove", mm);
    window.addEventListener("mouseup", mu);

    return () => {
      el.removeEventListener("touchstart", onStart);
      el.removeEventListener("touchmove", onMove);
      el.removeEventListener("touchend", onEnd);
      el.removeEventListener("mousedown", ms);
      window.removeEventListener("mousemove", mm);
      window.removeEventListener("mouseup", mu);
    };
  }, [visible, isMoving]);

  // keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") moveNext();
      if (e.key === "ArrowLeft") movePrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMoving]);

  // active real index for dots
  const activeReal = ((index - visible) % baseSlides.length + baseSlides.length) % baseSlides.length;

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="uppercase tracking-[0.22em] text-xs font-bold text-gray-500 mb-3">
            Comprehensive Solutions
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Our Core Programmes
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Transforming lives through structured pathways from adolescence to sustainable livelihoods.
          </p>
        </div>

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

          {/* Controls */}
          <div className="mt-8 md:mt-10 flex items-center justify-center gap-3">
            <button
              onClick={movePrev}
              aria-label="Previous"
              className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 active:scale-95 transition grid place-items-center"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={moveNext}
              aria-label="Next"
              className="w-12 h-12 rounded-full bg-red-600 text-white hover:bg-red-500 active:scale-95 transition grid place-items-center"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="mt-3 flex items-center justify-center gap-2">
            {baseSlides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => {
                  // compute how many steps to move from current real to target real
                  const delta = i - activeReal;
                  if (delta === 0) return;
                  setIndex((curr) => curr + delta);
                }}
                className={`w-2 h-2 rounded-full transition ${
                  i === activeReal ? "bg-red-600" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Card component remains the same (clean wireframe style) */
function ProgrammeCard({ slide }) {
  const { image, gradient, icon, rating, title, summary, tags } = slide;

  return (
    <div className="relative overflow-hidden rounded-[28px]  h-[420px] md:h-[460px]">
      {/* Full-bleed image */}
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Brand tint (color) */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-50 mix-blend-multiply`}
      />

      {/* Dark legibility gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/35 to-black/70" />

      {/* Top row (icon + rating) */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
        <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-sm grid place-items-center text-2xl text-white">
          {icon}
        </div>
        <div className="px-2.5 py-1 rounded-full bg-white/15 text-white text-sm font-medium backdrop-blur-sm flex items-center gap-1">
          <span className="text-yellow-300">★</span>
          {rating}
        </div>
      </div>

      {/* Bottom content */}
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
        <h3 className="text-white text-[22px] md:text-[26px] font-extrabold leading-tight mb-3">
          {title}
        </h3>

        <p className="text-white/90 text-[13px] md:text-[14.5px] leading-relaxed mb-4 md:mb-5 max-w-[92%]">
          {summary}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-xs rounded-full bg-white/15 text-white border border-white/20 backdrop-blur-[2px]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTA */}
        <button className="w-full bg-white text-gray-900 font-semibold py-3.5 rounded-2xl hover:bg-gray-50 active:scale-[0.99] transition">
          Learn More
        </button>
      </div>
    </div>
  );
}

