import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Playful NGO Hero Carousel
 * - Child-friendly design with textures and playful elements
 * - Crayon and paper-inspired styling
 * - Hand-drawn decorative elements
 * - Warm, welcoming color palette
 */
export default function Hero({
  slides = [
    {
      img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1600&auto=format&fit=crop",
      thumb: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=200&auto=format&fit=crop",
      title: "Every Child\nDeserves A Smile",
      subtitle: "Building Brighter Futures Together",
      description:
        "Join us in creating opportunities for underprivileged children through education, healthcare, and empowerment programs.",
    },
    {
      img: "/ngo-images/3.JPG",
      thumb: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=200&auto=format&fit=crop",
      title: "Learn, Grow\n& Dream Big!",
      subtitle: "Education Changes Everything",
      description:
        "Your support helps provide quality education, skill training, and resources to children who need it most.",
    },
    {
      img: "/ngo-images/2.JPG",
      thumb: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=200&auto=format&fit=crop",
      title: "Be The Change\nMakers!",
      subtitle: "Together We Make A Difference",
      description:
        "Partner with us to empower communities and create lasting impact in the lives of children and families.",
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
          relative h-[560px] md:h-[620px] lg:h-[680px]
          rounded-[32px] overflow-hidden bg-gradient-to-br from-yellow-50 to-orange-50
          shadow-[0_12px_50px_rgba(0,0,0,0.15)]
          isolate
        "
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='%23FEF3C7'/%3E%3Cpath d='M30 0L0 30l30 30 30-30z' fill='%23FED7AA' opacity='0.2'/%3E%3C/svg%3E")`,
        }}
      >
        {/* Paper texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.15] mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Background image with playful mask */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Crayon scribble frame effect */}
              <div 
                className="absolute inset-0"
                style={{
                  clipPath: "polygon(5% 0%, 95% 0%, 100% 5%, 100% 95%, 95% 100%, 5% 100%, 0% 95%, 0% 5%)",
                }}
              >
                <img
                  src={active.img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Playful color overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 via-orange-400/20 to-pink-400/25 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Decorative crayon elements */}
        <div className="absolute top-8 right-12 z-10 hidden lg:block">
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-3 bg-red-500 rounded-full shadow-lg"
            style={{ transform: "rotate(45deg)" }}
          />
        </div>
        
        <div className="absolute bottom-20 right-8 z-10 hidden md:block">
          <motion.div
            animate={{ rotate: [0, -8, 8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-12 h-3 bg-blue-500 rounded-full shadow-lg"
            style={{ transform: "rotate(-30deg)" }}
          />
        </div>

        {/* Hand-drawn star decorations */}
        <svg className="absolute top-12 left-16 w-12 h-12 text-yellow-400 opacity-60 hidden md:block" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.5 7.5H22l-6 4.5 2.5 7.5L12 17l-6.5 4.5L8 14 2 9.5h7.5z" />
        </svg>
        
        <svg className="absolute top-1/3 right-20 w-10 h-10 text-pink-400 opacity-50 hidden lg:block" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10" />
        </svg>

        {/* Main content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full px-8 md:px-12 lg:px-16">
            <motion.div
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
              className="max-w-3xl"
            >
              {/* Badge with hand-drawn style */}
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/90 rounded-full shadow-lg border-3 border-dashed border-orange-400">
                <span className="text-2xl" aria-hidden>✨</span>
                <span 
                  className="text-orange-600 font-bold text-sm tracking-wide uppercase"
                  style={{ fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive" }}
                >
                  {active.subtitle}
                </span>
              </div>

              {/* Main title with playful font */}
              <h1
                className="
                  text-gray-800 font-black
                  text-[48px] leading-[1.1]
                  sm:text-[56px] sm:leading-[1.1]
                  md:text-[68px] md:leading-[1.1]
                  lg:text-[82px] lg:leading-[1.05]
                  mb-5
                  drop-shadow-[2px_2px_0_rgba(255,255,255,0.8)]
                "
                style={{ 
                  fontFamily: "'Fredoka', 'Baloo 2', 'Comic Sans MS', cursive",
                  textShadow: "3px 3px 0 rgba(255,255,255,0.9), -1px -1px 0 rgba(0,0,0,0.1)"
                }}
              >
                {titleLines.map((line, i) => (
                  <motion.span 
                    key={i} 
                    className="block"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    style={{
                      color: i === 0 ? "#EF4444" : "#F59E0B",
                    }}
                  >
                    {line}
                  </motion.span>
                ))}
              </h1>

              {/* Description with readable styling */}
              {active.description && (
                <p 
                  className="text-gray-700 text-[16px] md:text-[18px] leading-relaxed max-w-2xl mb-8 bg-white/70 p-4 rounded-2xl border-2 border-dashed border-yellow-300"
                  style={{ fontFamily: "'Quicksand', 'Arial Rounded MT Bold', sans-serif" }}
                >
                  {active.description}
                </p>
              )}

              {/* Call to action button */}
              <div className="flex flex-wrap gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    inline-flex items-center gap-3 px-8 py-4
                    bg-gradient-to-r from-orange-400 to-pink-500
                    text-white font-bold text-lg rounded-full
                    shadow-[4px_4px_0_rgba(0,0,0,0.2)]
                    border-3 border-white
                    hover:shadow-[6px_6px_0_rgba(0,0,0,0.25)]
                    transition-all
                  "
                  style={{ fontFamily: "'Fredoka', cursive" }}
                >
                  <span className="text-2xl">❤️</span>
                  Donate Now
                </motion.button>
                
                <motion.button 
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    inline-flex items-center gap-2 px-8 py-4
                    bg-white text-orange-600 font-bold text-lg rounded-full
                    shadow-[4px_4px_0_rgba(249,115,22,0.3)]
                    border-3 border-orange-400
                    hover:bg-orange-50
                    transition-all
                  "
                  style={{ fontFamily: "'Fredoka', cursive" }}
                >
                  Learn More
                  <span className="text-xl">→</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Playful navigation with notebook paper style */}
        <div
          className="
            absolute left-1/2 -translate-x-1/2
            bottom-[16px] z-20
            bg-white/95 backdrop-blur-sm
            px-6 py-4 rounded-3xl
            shadow-[0_8px_30px_rgba(0,0,0,0.12)]
            border-4 border-orange-300
            flex items-center gap-5
          "
          onMouseEnter={pause}
          onMouseLeave={resume}
          style={{
            backgroundImage: "repeating-linear-gradient(transparent, transparent 35px, #fbbf24 35px, #fbbf24 37px)",
          }}
        >
          <CrayonBtn ariaLabel="Previous slide" onClick={prev} dir="prev" color="bg-blue-500" />
          
          <div className="flex items-center gap-3">
            <Thumb src={prevThumb} onClick={prev} />
            <Thumb src={active.thumb} active />
            <Thumb src={nextThumb} onClick={next} />
          </div>
          
          <CrayonBtn ariaLabel="Next slide" onClick={next} dir="next" color="bg-red-500" />
          
          {/* Page indicator */}
          <div className="flex gap-2 ml-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`
                  w-3 h-3 rounded-full transition-all
                  ${i === idx ? "bg-orange-500 w-6" : "bg-gray-300 hover:bg-gray-400"}
                `}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CrayonBtn({ ariaLabel, onClick, dir, color }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1, rotate: dir === "prev" ? -10 : 10 }}
      whileTap={{ scale: 0.9 }}
      aria-label={ariaLabel}
      onClick={onClick}
      className={`
        w-[42px] h-[42px] rounded-full grid place-items-center
        ${color} text-white
        shadow-[3px_3px_0_rgba(0,0,0,0.2)]
        border-3 border-white
        transition-all
      `}
    >
      {dir === "prev" ? (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 6l6 6-6 6" />
        </svg>
      )}
    </motion.button>
  );
}

function Thumb({ src, active = false, onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1, rotate: active ? 0 : 5 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className={`
        w-[48px] h-[48px] rounded-2xl overflow-hidden
        border-4 ${active ? "border-orange-400" : "border-white"}
        shadow-[3px_3px_0_rgba(0,0,0,0.15)]
        transition-all
        ${active ? "opacity-100" : "opacity-60 hover:opacity-90"}
      `}
      style={{ 
        pointerEvents: "auto",
        transform: active ? "rotate(-3deg)" : "rotate(0deg)",
      }}
      aria-label="Slide thumbnail"
    >
      <img
        src={src}
        alt=""
        className="w-full h-full object-cover"
      />
    </motion.button>
  );
}