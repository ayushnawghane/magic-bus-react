import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AWARDS = [
  {
    year: "2024",
    title: "UN SDG Action Award",
    icon: "🏆",
    badge: "Global",
    accent: "from-yellow-400 to-orange-500",
    img: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1600&auto=format&fit=crop",
  },
  {
    year: "2024",
    title: "AI Innovation Award",
    icon: "🥇",
    badge: "Tech",
    accent: "from-blue-400 to-indigo-500",
    img: "https://images.unsplash.com/photo-1609931847351-cb4df69d49e3?q=80&w=1600&auto=format&fit=crop",
  },
  {
    year: "2023",
    title: "Excellence in CSR",
    icon: "🌟",
    badge: "CSR",
    accent: "from-green-400 to-teal-500",
    img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    year: "2022",
    title: "Digital India Award",
    icon: "🏅",
    badge: "Digital",
    accent: "from-red-400 to-pink-500",
    img: "https://images.unsplash.com/photo-1504814532849-92766107a1f1?q=80&w=1600&auto=format&fit=crop",
  },
];

function AwardTitleFX({ text }) {
  return (
    <div className="relative text-center select-none">
      <h3
        className="font-black tracking-tight leading-tight"
        style={{
          fontFamily: 'Comic Sans MS, cursive',
          fontSize: "clamp(32px, 5vw, 64px)",
          color: '#ffffff',
          textShadow: '3px 3px 0px rgba(0,0,0,0.3), -2px -2px 0px rgba(255,200,87,0.4), 0px 0px 20px rgba(255,255,255,0.3)',
        }}
      >
        {text}
      </h3>
    </div>
  );
}

export default function AwardsShowcase() {
  const [i, setI] = useState(0);
  const a = AWARDS[i];

  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Playful background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[12%] h-20 w-20 rounded-full bg-yellow-300/20 blur-2xl"></div>
        <div className="absolute right-[10%] top-[20%] h-24 w-24 rotate-45 bg-blue-300/20 blur-3xl"></div>
        <div className="absolute bottom-[15%] left-[15%] h-28 w-28 rounded-full bg-pink-300/20 blur-2xl"></div>
        <div className="absolute bottom-[25%] right-[12%] h-20 w-20 rotate-12 bg-green-300/20 blur-xl"></div>

        {/* Hand-drawn stars */}
        <svg className="absolute left-[5%] top-[8%] h-10 w-10 rotate-12 text-yellow-400/40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
        <svg className="absolute right-[6%] top-[10%] h-8 w-8 -rotate-6 text-pink-400/40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>

        {/* Crayon doodles */}
        <svg className="absolute bottom-[10%] left-[3%] h-16 w-16 text-orange-400/30" viewBox="0 0 100 100">
          <path d="M20,50 Q30,30 50,50 T80,50" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="mb-4 inline-block">
              <div className="relative">
                <div className="rotate-1 rounded-2xl border-3 border-dashed border-orange-400 bg-white px-5 py-2 shadow-md">
                  <span className="text-sm font-black uppercase tracking-wider text-orange-600" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                    🎖️ Recognition 🎖️
                  </span>
                </div>
                <div className="absolute -right-1 -top-1 h-3 w-3 rotate-45 bg-yellow-400"></div>
              </div>
            </div>
            <h2 
              className="text-4xl font-black text-gray-900 md:text-5xl lg:text-6xl"
              style={{ 
                fontFamily: 'Comic Sans MS, cursive',
                textShadow: '3px 3px 0px rgba(251, 191, 36, 0.2)'
              }}
            >
              Awards & <span className="relative inline-block text-red-600">
                Achievements
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" preserveAspectRatio="none">
                  <path d="M5,5 Q50,2 100,4 T195,5" stroke="#dc2626" strokeWidth="3" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
          </div>

          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full border-3 border-red-600 bg-red-600 px-6 py-3 text-sm font-black text-white shadow-lg transition-all hover:scale-105 hover:border-red-700 hover:bg-red-700 hover:shadow-xl active:scale-95"
            style={{ fontFamily: 'Comic Sans MS, cursive' }}
          >
            All Awards
            <svg className="transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
            </svg>
          </a>
        </div>

        {/* Main Grid */}
        <div className="grid items-stretch gap-6 lg:grid-cols-12">
          {/* Left stats card */}
          <div className="lg:col-span-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, rotate: 1 }}
              className="flex h-full min-h-[420px] flex-col justify-between overflow-hidden rounded-3xl border-4 border-white bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-100 p-8 shadow-xl"
            >
              {/* Paper texture */}
              <div 
                className="pointer-events-none absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}
              ></div>

              <div className="relative">
                {/* Trophy icon decoration */}
                <div className="absolute -right-4 -top-4 text-6xl opacity-20">🏆</div>
                
                <div className="inline-flex items-baseline gap-2">
                  <span 
                    className="text-7xl font-black text-gray-900"
                    style={{ 
                      fontFamily: 'Comic Sans MS, cursive',
                      textShadow: '3px 3px 0px rgba(251, 191, 36, 0.3)'
                    }}
                  >
                    8
                  </span>
                  <span 
                    className="text-3xl font-black text-orange-600"
                    style={{ fontFamily: 'Comic Sans MS, cursive' }}
                  >
                    +
                  </span>
                </div>
                
                <div className="mt-4 flex items-center gap-1 text-2xl text-amber-500">
                  {[...Array(5)].map((_, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1, type: "spring" }}
                    >
                      ⭐
                    </motion.span>
                  ))}
                </div>
                
                <p 
                  className="mt-4 text-base font-bold leading-relaxed text-gray-700"
                  style={{ fontFamily: 'Comic Sans MS, cursive' }}
                >
                  Global awards & certifications that recognize our impact! 🌍
                </p>
              </div>

              <div className="relative mt-8 space-y-4">
                {/* Decorative line */}
                <div className="flex items-center gap-2">
                  <div className="h-1 flex-1 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400"></div>
                  <div className="h-2 w-2 rotate-45 bg-orange-400"></div>
                </div>

                <p 
                  className="text-xs font-black uppercase tracking-wider text-orange-700"
                  style={{ fontFamily: 'Comic Sans MS, cursive' }}
                >
                  ✨ Recent Honors ✨
                </p>
                
                <div className="flex items-center -space-x-3">
                  {AWARDS.slice(0, 4).map((w, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + idx * 0.1, type: "spring" }}
                      whileHover={{ scale: 1.2, zIndex: 10 }}
                      className={`grid h-14 w-14 cursor-pointer place-items-center rounded-full border-4 border-white bg-gradient-to-br ${w.accent} text-2xl shadow-lg transition-transform`}
                      title={w.title}
                    >
                      <span>{w.icon}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right awards carousel */}
          <div className="lg:col-span-8">
            <div className="relative h-full min-h-[420px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.95, rotate: 2 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 overflow-hidden rounded-3xl border-4 border-white shadow-2xl"
                >
                  {/* Background image with overlay */}
                  <div className="relative h-full w-full">
                    <motion.img
                      src={a.img}
                      alt={a.title}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                    
                    {/* Paper texture overlay */}
                    <div 
                      className="absolute inset-0 opacity-10 mix-blend-overlay"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M0 0h20v20H0V0zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm20 0a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM10 37a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm10-17h20v20H20V20zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14z'/%3E%3C/g%3E%3C/svg%3E")`
                      }}
                    ></div>
                  </div>

                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col justify-between p-8">
                    {/* Top badge */}
                    <div className="flex justify-end">
                      <motion.div 
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-3 rounded-2xl border-3 border-white/40 bg-white/20 px-4 py-3 backdrop-blur-md"
                      >
                        <div className={`grid h-10 w-10 place-items-center rounded-full border-2 border-white bg-gradient-to-br ${a.accent} text-xl shadow-lg`}>
                          {a.icon}
                        </div>
                        <span 
                          className="text-base font-black text-white"
                          style={{ fontFamily: 'Comic Sans MS, cursive' }}
                        >
                          {a.badge}
                        </span>
                      </motion.div>
                    </div>

                    {/* Bottom content */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <AwardTitleFX text={a.title} />
                      
                      <div className="mt-6 flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <div className="h-1 w-12 rounded-full bg-gradient-to-r from-white to-white/50" />
                          <div className="h-1.5 w-1.5 rotate-45 bg-white/70" />
                        </div>
                        <span 
                          className="text-xl font-black text-white/90"
                          style={{ 
                            fontFamily: 'Comic Sans MS, cursive',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                          }}
                        >
                          📅 {a.year}
                        </span>
                      </div>

                      {/* Decorative corner element */}
                      <div className="absolute bottom-8 right-8 opacity-30">
                        <svg className="h-16 w-16 text-white" viewBox="0 0 100 100">
                          <path d="M50,10 L60,40 L90,50 L60,60 L50,90 L40,60 L10,50 L40,40 Z" fill="currentColor"/>
                        </svg>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation dots and arrows */}
            <div className="mt-6 flex items-center justify-between">
              <div className="flex gap-3">
                {AWARDS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setI(idx)}
                    className={`rounded-full transition-all ${
                      idx === i 
                        ? "h-3 w-10 bg-gradient-to-r from-red-600 to-orange-500 shadow-md" 
                        : "h-3 w-3 bg-gray-300 hover:scale-125 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to award ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setI((p) => (p - 1 + AWARDS.length) % AWARDS.length)}
                  aria-label="Previous award"
                  className="grid h-12 w-12 place-items-center rounded-full border-3 border-gray-200 bg-white text-gray-900 shadow-md transition-all hover:scale-110 hover:border-gray-300 hover:shadow-lg active:scale-95"
                  style={{ fontFamily: 'Comic Sans MS, cursive' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={() => setI((p) => (p + 1) % AWARDS.length)}
                  aria-label="Next award"
                  className="grid h-12 w-12 place-items-center rounded-full border-3 border-red-700 bg-gradient-to-br from-red-600 to-orange-500 text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl active:scale-95"
                  style={{ fontFamily: 'Comic Sans MS, cursive' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="#"
            className="group inline-flex items-center gap-3 rounded-full border-4 border-gray-900 bg-gray-900 px-10 py-4 font-black text-white shadow-xl transition-all hover:scale-105 hover:border-gray-800 hover:bg-gray-800 hover:shadow-2xl active:scale-95"
            style={{ fontFamily: 'Comic Sans MS, cursive' }}
          >
            View All Awards & Certifications 🏅
            <svg className="transition-transform group-hover:translate-x-2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}