import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/** Small icon helpers */
const ChevronDown = (props) => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
  </svg>
);
const SearchIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"/>
  </svg>
);

const MENUS = [
  { key: "about",      label: "About Us", emoji: "👋" },
  { key: "programmes", label: "Programmes", emoji: "🎯" },
  { key: "partners",   label: "Partners", emoji: "🤝" },
  { key: "resources",  label: "Resources", emoji: "📚" },
  { key: "life",       label: "Life @ Magic Bus", emoji: "✨" },
];

// Content blocks for the mega menu
const MEGA = {
  about: {
    title: "About Us",
    items: ["Our Approach", "Our Team", "Our Culture", "Board of Directors"],
  },
  programmes: {
    title: "Programmes",
    items: [
      "Adolescent Programme",
      "Government Partnership Programme",
      "Youth for Change Fellowship Programme",
      "Magic Mitra",
      "Livelihood Programme",
      "Standard Skilling",
      "Digital Skilling",
      "Rural Empowerment Programme",
      "MB Dost",
      "Future X",
      "Employee Volunteering Programme",
    ],
  },
  partners: {
    title: "Partners",
    items: [
      "Corporate Partners",
      "Foundations & Institutions",
      "Government Partners",
      "Knowledge Partners",
      "Employment Partners",
      "Partner Connect",
    ],
  },
  resources: {
    title: "Resources",
    groups: [
      {
        title: "Reports & Publications",
        items: ["Impact Reports", "Gender Journey Report", "Annual Reports", "FLFPR Report"],
      },
      {
        title: "Media & Stories",
        items: ["News", "Podcast", "Blogs", "Success Stories", "Testimonials", "Awards"],
      },
      {
        title: "Policies",
        items: ["Whistle Blower", "Youth Protection Policy", "POSH Policy", "Child Protection Policy"],
      },
    ],
  },
  life: {
    title: "Life @ Magic Bus",
    items: ["Work With Us", "Certifications", "Our Culture", "Learning Loop", "MB Academy", "Darwin (Employee Login)"],
  },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeKey, setActiveKey] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMegaSoon = () => setTimeout(() => setActiveKey(null), 80);

  return (
    <>
      {/* Decorative top stripe */}
      <div className="fixed top-0 inset-x-0 h-2 bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-400 z-[60]" />
      
      <nav
        className={`site-nav fixed top-2 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-yellow-50/98 shadow-lg" : "bg-yellow-50"
        }`}
        onMouseLeave={closeMegaSoon}
        style={{
          borderBottom: '3px solid #333',
          fontFamily: 'Comic Sans MS, cursive'
        }}
      >
        {/* Decorative doodles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
          <div className="absolute top-3 right-20 text-xl -rotate-12">⭐</div>
          <div className="absolute bottom-2 left-1/4 text-xl rotate-45">🎨</div>
          <div className="absolute bottom-3 right-1/3 text-2xl -rotate-6">📝</div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          {/* Top bar */}
          <div className="flex items-center justify-between h-20">
            {/* Logo with crayon border */}
            <a href="/" className="flex items-center gap-3 bg-white p-2 pr-4 rounded-full border-3 border-red-400 shadow-md transform hover:scale-105 transition-transform relative z-10">
              <div className="w-18 h-18">
                <img
                  src="/Magic Bus Logo - Usage As Per Background-01.png"
                  alt="Magic Bus Logo"
                  className="w-full h-full rounded-full object-contain"
                />
              </div>
              <span className="font-black text-2xl hidden sm:block bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                Magic Bus
              </span>
            </a>

            {/* Search with sketch style */}
            <div className="hidden lg:block flex-1 max-w-md mx-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for magic... ✨"
                  className="w-full pl-5 pr-11 py-3 rounded-full border-3 border-gray-800 bg-white focus:outline-none focus:border-yellow-400 text-sm placeholder-gray-500 font-medium shadow-md"
                  style={{ fontFamily: 'Comic Sans MS, cursive' }}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center border-2 border-gray-800">
                  <SearchIcon className="text-gray-800" />
                </div>
              </div>
            </div>

            {/* CTAs with crayon button style */}
            <div className="flex items-center gap-2">
              <button className="px-5 py-2.5 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-black hover:from-red-600 hover:to-pink-600 transition-all transform hover:scale-110 hover:rotate-2 shadow-lg border-2 border-white relative overflow-hidden group">
                <span className="relative z-10">Donate Now 💝</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </button>
              <button className="px-4 py-2.5 rounded-full bg-white border-3 border-gray-800 text-sm font-black hover:bg-yellow-300 hover:border-yellow-500 transition-all hidden sm:inline-flex transform hover:scale-105">
                Contact Us 📞
              </button>
              <button className="px-4 py-2.5 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 border-2 border-white text-white text-sm font-black hover:from-blue-500 hover:to-cyan-500 transition-all hidden sm:inline-flex transform hover:scale-105 shadow-md">
                Partner 🤝
              </button>

              <button
                className="lg:hidden w-10 h-10 grid place-items-center rounded-full border-3 border-gray-800 bg-yellow-300 hover:bg-yellow-400 transition"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Secondary row (desktop) - crayon tab style */}
          <div className="hidden lg:flex items-center justify-center gap-2 pb-4 -mt-2">
            {MENUS.map((m, idx) => (
              <button
                key={m.key}
                onMouseEnter={() => setActiveKey(m.key)}
                onFocus={() => setActiveKey(m.key)}
                className={`px-5 py-2 text-sm font-black transition-all rounded-t-xl border-3 border-b-0 relative transform hover:-translate-y-1 ${
                  activeKey === m.key 
                    ? "bg-white border-gray-800 text-red-500 shadow-lg z-10" 
                    : "bg-yellow-100/80 border-transparent text-gray-700 hover:bg-yellow-200"
                } flex items-center gap-2`}
                style={{
                  fontFamily: 'Comic Sans MS, cursive',
                  transform: activeKey === m.key ? 'translateY(-4px) rotate(-1deg)' : `rotate(${idx % 2 === 0 ? '1deg' : '-1deg'})`
                }}
              >
                <span className="text-lg">{m.emoji}</span>
                {m.label}
                <ChevronDown className={`transition-transform ${activeKey === m.key ? "rotate-180" : ""}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Mega menu (desktop) - notebook style */}
        <AnimatePresence>
          {activeKey && (
            <motion.div
              key={activeKey}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onMouseEnter={() => setActiveKey(activeKey)}
              className="hidden lg:block absolute left-0 right-0 top-full bg-white shadow-2xl border-3 border-t-0 border-gray-800"
              style={{
                backgroundImage: `repeating-linear-gradient(transparent, transparent 31px, #e5e7eb 31px, #e5e7eb 32px)`,
                backgroundSize: '100% 32px',
                fontFamily: 'Comic Sans MS, cursive'
              }}
            >
              <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
                {activeKey !== "resources" ? (
                  <div className="grid grid-cols-5 gap-8">
                    {/* Primary column with post-it style */}
                    <div className="col-span-2 bg-yellow-100 p-6 rounded-lg border-2 border-yellow-400 shadow-lg transform -rotate-1">
                      <h3 className="font-black text-xl mb-5 text-gray-900 flex items-center gap-2 underline decoration-wavy decoration-red-400">
                        {MEGA[activeKey].title}
                        <span className="text-2xl">{MENUS.find(m => m.key === activeKey)?.emoji}</span>
                      </h3>
                      <ul className="space-y-3">
                        {MEGA[activeKey].items?.map((t, idx) => (
                          <li key={t}>
                            <a href="#" className="text-sm font-bold text-gray-700 hover:text-red-500 transition-colors flex items-center gap-2 py-1 hover:translate-x-1 transform transition-transform">
                              <span className="text-red-400">→</span>
                              {t}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Highlight cards with crayon box colors */}
                    <div className="col-span-3 grid grid-cols-3 gap-4">
                      {[
                        { color: 'from-pink-100 to-pink-200', border: 'border-pink-400', emoji: '🎨' },
                        { color: 'from-blue-100 to-blue-200', border: 'border-blue-400', emoji: '✨' },
                        { color: 'from-green-100 to-green-200', border: 'border-green-400', emoji: '🌟' }
                      ].map((style, k) => (
                        <div 
                          key={k} 
                          className={`rounded-2xl border-3 ${style.border} p-5 bg-gradient-to-br ${style.color} shadow-md transform ${k % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:scale-105 transition-transform`}
                        >
                          <div className="text-3xl mb-2">{style.emoji}</div>
                          <div className="text-xs font-black text-gray-700 mb-2">Highlight {k + 1}</div>
                          <p className="text-xs text-gray-600 font-medium leading-relaxed">
                            Quick links and key sections relevant to {MEGA[activeKey].title}.
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  // Resources with index card style
                  <div className="grid grid-cols-3 gap-8">
                    {MEGA.resources.groups.map((g, idx) => (
                      <div 
                        key={g.title}
                        className="bg-white p-6 rounded-lg border-3 border-gray-800 shadow-lg transform hover:scale-105 transition-transform"
                        style={{
                          transform: `rotate(${idx % 2 === 0 ? '0.5deg' : '-0.5deg'})`
                        }}
                      >
                        <h4 className="font-black text-lg text-gray-900 mb-4 pb-2 border-b-2 border-dashed border-gray-300 flex items-center gap-2">
                          <span className="text-xl">{['📊', '📰', '📋'][idx]}</span>
                          {g.title}
                        </h4>
                        <ul className="space-y-2">
                          {g.items.map((t) => (
                            <li key={t}>
                              <a href="#" className="text-sm font-bold text-gray-700 hover:text-red-500 transition-colors flex items-center gap-2 py-1">
                                <span className="text-yellow-500">★</span>
                                {t}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile drawer with sketch style */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="lg:hidden border-t-3 border-gray-800 bg-yellow-50"
              style={{ fontFamily: 'Comic Sans MS, cursive' }}
            >
              <div className="px-6 py-4">
                {/* Mobile search */}
                <div className="mb-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search... ✨"
                      className="w-full pl-4 pr-11 py-3 rounded-full border-3 border-gray-800 bg-white focus:outline-none focus:border-yellow-400 text-sm font-medium"
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center border-2 border-gray-800">
                      <SearchIcon className="text-gray-800"/>
                    </div>
                  </div>
                </div>

                {/* Menu groups with accordion style */}
                <div className="grid grid-cols-1 divide-y-2 divide-dashed divide-gray-300">
                  {MENUS.map((m) => (
                    <details key={m.key} className="py-3">
                      <summary className="list-none flex items-center justify-between py-2 cursor-pointer font-black text-gray-900 hover:text-red-500">
                        <span className="flex items-center gap-2">
                          <span className="text-xl">{m.emoji}</span>
                          {m.label}
                        </span>
                        <ChevronDown className="shrink-0" />
                      </summary>
                      <div className="pl-8 pt-3 space-y-2">
                        {(MEGA[m.key].items || MEGA[m.key].groups?.flatMap(g => g.items) || []).slice(0, 8).map((t) => (
                          <a key={t} href="#" className="block text-sm font-bold text-gray-700 hover:text-red-500 py-1 flex items-center gap-2">
                            <span className="text-yellow-500">→</span>
                            {t}
                          </a>
                        ))}
                      </div>
                    </details>
                  ))}
                </div>

                {/* Mobile CTAs */}
                <div className="mt-6 flex flex-col gap-3">
                  <button className="w-full px-5 py-3 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white font-black shadow-lg border-2 border-white">
                    Donate Now 💝
                  </button>
                  <div className="flex gap-2">
                    <button className="flex-1 px-4 py-3 rounded-full border-3 border-gray-800 bg-white font-black">
                      Contact 📞
                    </button>
                    <button className="flex-1 px-4 py-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 text-white font-black border-2 border-white">
                      Partner 🤝
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer for fixed nav */}
      <div className="h-24"></div>
    </>
  );
}