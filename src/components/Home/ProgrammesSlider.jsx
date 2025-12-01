import { useEffect, useMemo, useRef, useState } from "react";
import {
  Users,
  BriefcaseBusiness,
  Handshake,
  Sprout,
  Target,
  GraduationCap,
} from "lucide-react";

export default function ProgrammesSlider() {
  const baseSlides = useMemo(
    () => [
      {
        id: "adolescent-programme",
        title: "Adolescent Life Skills Programme",
        summary:
          "Foundational life skills for ages 11–18, building confidence and core competencies.",
        tags: ["Ages 11–18", "6 Months"],
        Icon: Users,
        rating: "4.8",
        image: "/ngo-images/1.JPG",
        gradient: "from-blue-400 via-purple-500 to-indigo-600",
      },
      {
        id: "livelihood-programme",
        title: "Livelihood Programme",
        summary:
          "Industry-aligned training that connects youth to sustainable jobs.",
        tags: ["95% Placement", "₹15K+"],
        Icon: BriefcaseBusiness,
        rating: "4.9",
        image: "/ngo-images/2.JPG",
        gradient: "from-green-400 via-emerald-500 to-teal-600",
      },
      {
        id: "employee-volunteering",
        title: "Employee Volunteering",
        summary:
          "Corporate partnerships for high-impact, structured volunteering.",
        tags: ["500+ Companies", "Teams"],
        Icon: Handshake,
        rating: "4.7",
        image: "/ngo-images/3.JPG",
        gradient: "from-orange-400 via-red-500 to-pink-600",
      },
      {
        id: "rural-empowerment",
        title: "Rural Empowerment",
        summary: "Programs tailored to rural youth and agri-innovation.",
        tags: ["MB Dost", "Future X"],
        Icon: Sprout,
        rating: "4.6",
        image: "/ngo-images/4.JPG",
        gradient: "from-purple-400 via-violet-500 to-indigo-600",
      },
      {
        id: "magic-mitra",
        title: "Magic Mitra",
        summary: "AI-powered community mobilization and engagement.",
        tags: ["AI Platform"],
        Icon: Target,
        rating: "4.9",
        image: "/ngo-images/5.jpeg",
        gradient: "from-cyan-400 via-blue-500 to-indigo-600",
      },
      {
        id: "youth-fellowship",
        title: "Youth Fellowship",
        summary: "Leadership pathway for next-gen social changemakers.",
        tags: ["Leadership"],
        Icon: GraduationCap,
        rating: "4.8",
        image:
          "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1600&auto=format&fit=crop",
        gradient: "from-amber-400 via-orange-500 to-red-600",
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

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") moveNext();
      if (e.key === "ArrowLeft") movePrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMoving]);

  const activeReal =
    ((index - visible) % baseSlides.length + baseSlides.length) %
    baseSlides.length;

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
            Transforming lives through structured pathways from adolescence to
            sustainable livelihoods.
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
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={moveNext}
              aria-label="Next"
              className="w-12 h-12 rounded-full bg-red-600 text-white hover:bg-red-500 active:scale-95 transition grid place-items-center"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="mt-3 flex items-center justify-center gap-2">
            {baseSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const delta = i - activeReal;
                  if (delta === 0) return;
                  setIndex((curr) => curr + delta);
                }}
                className={`w-2 h-2 rounded-full transition ${
                  i === activeReal
                    ? "bg-red-600"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgrammeCard({ slide }) {
  const { image, gradient, Icon, title, summary } = slide;

  return (
    <div className="group relative overflow-hidden rounded-[28px] h-[420px] md:h-[500px]">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-35 mix-blend-multiply`}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/75" />

      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
        <div className="h-10 px-3 rounded-full bg-black/35 backdrop-blur-[3px] text-white flex items-center gap-2">
          <Icon className="w-5 h-5" />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
        {/* Description — only visible on hover now */}
        <p
          className="
            text-white/90 text-[13.5px] leading-relaxed max-w-[92%] mb-3
            opacity-0 translate-y-4
            group-hover:opacity-100 group-hover:translate-y-0
            transition-all duration-300
          "
        >
          {summary}
        </p>

        <h3
          className="
            text-white text-[24px] font-extrabold leading-tight mb-2
            transition-all duration-300 group-hover:-translate-y-2
          "
        >
          {title}
        </h3>

        <button className="w-full bg-white/95 text-gray-900 font-semibold py-3 rounded-2xl hover:bg-white active:scale-[0.99] transition">
          Learn More
        </button>
      </div>
    </div>
  );
}
