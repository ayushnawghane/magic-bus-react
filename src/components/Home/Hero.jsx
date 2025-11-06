import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Polished Hero Carousel
 * - Proper left alignment + max text width
 * - Consistent heading line-height & responsive sizes
 * - Subheading contrast + readable width
 * - True-looking concave notch with controls centered
 * - Safer auto-advance (resets on idx change; pauses on hover)
 */
export default function Hero({
  slides = [
    {
      img: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1600&auto=format&fit=crop",
      thumb:
        "https://images.unsplash.com/photo-1511193311914-0346f0b93999?q=80&w=200&auto=format&fit=crop",
      title: "Empowering Hope Futures\nLives Through Giving",
      description:
        "It is a long established fact that a reader will be distracted lorem the readable content of a page when looking at layout the point lorem established fact that it is a long established.",
    },
    {
      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1600&auto=format&fit=crop",
      thumb:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
      title: "Create Impact Today\nSupport Bright Tomorrows",
      description:
        "Your contribution helps enable skills, education and livelihoods for young people across communities.",
    },
    {
      img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1600&auto=format&fit=crop",
      thumb:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop",
      title: "Together We Can\nChange The World",
      description:
        "Partner with us to scale programs and unlock opportunities at every stage of the journey.",
    },
  ],
  auto = 6000,
  className = "",
}) {
  const [idx, setIdx] = useState(0);
  const len = slides.length;
  const timerRef = useRef(null);

  const mod = (n) => ((n % len) + len) % len;
  const next = () => setIdx((i) => mod(i + 1));
  const prev = () => setIdx((i) => mod(i - 1));

  // Robust auto-advance: reset the timer whenever idx changes or auto toggles.
  useEffect(() => {
    if (!auto) return;
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, auto);
    return () => timerRef.current && clearInterval(timerRef.current);
  }, [auto, idx, len]);

  const pause = () => timerRef.current && clearInterval(timerRef.current);
  const resume = () => {
    if (!auto) return;
    timerRef.current = setInterval(next, auto);
  };

  const active = slides[idx];
  const prevThumb = slides[mod(idx - 1)].thumb;
  const nextThumb = slides[mod(idx + 1)].thumb;

  // Allow hard line breaks in titles
  const titleLines = useMemo(
    () => (active.title || "").split("\n"),
    [active.title]
  );

  return (
    <section className={`max-w-[1440px] mx-auto px-4 md:px-6 py-6 ${className}`}>
      <div
        className="
          relative h-[540px] md:h-[600px] lg:h-[640px]
          rounded-[28px] overflow-hidden bg-black shadow-[0_8px_40px_rgba(0,0,0,0.22)]
          isolate
        "
      >
        {/* Background crossfade */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={idx}
              src={active.img}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            />
          </AnimatePresence>

          {/* Orange film + vignette to match the reference look */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(225,34,40,0.35)_0%,rgba(225,34,40,0.65)_100%)] mix-blend-multiply" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.2)_45%,rgba(0,0,0,0.06)_100%)]" />
        </div>

        {/* Text block (fixed left alignment + readable width) */}
        <div className="relative z-10 h-full grid grid-cols-12">
          <div className="col-span-12 md:col-span-8 lg:col-span-7 flex items-center">
            <motion.div
              className="px-6 md:px-10 lg:px-14 w-full"
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <p className="text-white/90 text-[13px] md:text-sm font-semibold tracking-[0.18em] mb-3 flex items-center gap-2">
                <span aria-hidden className="text-white">♥</span>
                Change The World Together
              </p>

              <h1
                className="
                  text-white font-extrabold tracking-[-0.01em]
                  text-[36px] leading-[1.06]
                  sm:text-[44px] sm:leading-[1.06]
                  md:text-[58px] md:leading-[1.06]
                  lg:text-[64px] lg:leading-[1.04]
                  max-w-[46rem]
                "
                style={{ fontFamily: "Dosis, system-ui, sans-serif" }}
              >
                {titleLines.map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </h1>

              {active.description && (
                <p className="text-white/90 mt-5 text-[15px] md:text-base leading-relaxed max-w-[44rem]">
                  {active.description}
                </p>
              )}

              <div className="mt-7">
                <button className="inline-flex items-center gap-2 rounded-full border-2 border-white/85 text-white px-5 py-3 font-semibold hover:bg-white/10 transition">
                  <span className="inline-block w-2 h-2 rounded-full bg-white/90" />
                  Donate Now
                </button>
              </div>
            </motion.div>
          </div>
          {/* spacer to preserve composition on large screens */}
          <div className="hidden md:block md:col-span-4 lg:col-span-5" />
        </div>

        {/* Controls centered inside the notch */}
        <div
            className="
            absolute left-1/2 -translate-x-1/2
            bottom-[12px] z-20 flex items-center gap-4 md:gap-5
            "
            onMouseEnter={pause}
            onMouseLeave={resume}
        >
            <CircleBtn ariaLabel="Previous slide" onClick={prev} dir="prev" />
            <div className="flex items-center gap-3">
            <Thumb src={prevThumb} onClick={prev} />
            <Thumb src={active.thumb} active />
            <Thumb src={nextThumb} onClick={next} />
            </div>
            <CircleBtn ariaLabel="Next slide" onClick={next} dir="next" />
        </div>
      </div>
    </section>
  );
}

function CircleBtn({ ariaLabel, onClick, dir }) {
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      className="
        w-[28px] h-[28px] rounded-full grid place-items-center
        border border-[#FF7A1A] bg-white transition active:scale-95
      "
      style={{ boxShadow: "0 2px 8px rgba(0,0,0,.15)" }}
    >
      {dir === "prev" ? (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#FF7A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#FF7A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 6l6 6-6 6" />
        </svg>
      )}
    </button>
  );
}

function Thumb({ src, active = false, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        w-[40px] h-[40px] rounded-full overflow-hidden border-2 border-white
        shadow-[0_4px_14px_rgba(0,0,0,.25)] transition
        ${active ? "opacity-100 scale-105" : "opacity-60 hover:opacity-85"}
      `}
      style={{ pointerEvents: "auto" }}
      aria-label="Slide thumbnail"
    >
      <motion.img
        key={src + String(active)}
        src={src}
        alt=""
        className="w-full h-full object-cover"
        initial={{ scale: active ? 1 : 1 }}
        animate={{ scale: active ? 1.04 : 1 }}
        transition={{ duration: 0.25 }}
      />
    </button>
  );
}
