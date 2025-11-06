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
  { key: "about",      label: "About Us" },
  { key: "programmes", label: "Programmes" },
  { key: "partners",   label: "Partners" },
  { key: "resources",  label: "Resources" },
  { key: "life",       label: "Life @ Magic Bus" },
];

// Content blocks for the mega menu (kept concise but you can expand freely)
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
  const [activeKey, setActiveKey] = useState(null);    // which top-level menu is hovered/focused
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mega when mouse leaves the whole nav area
  const closeMegaSoon = () => setTimeout(() => setActiveKey(null), 80);

  return (
    <nav
      className={`site-nav fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/98 shadow-sm" : "bg-white"
      }`}
      onMouseLeave={closeMegaSoon}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top bar */}
        <div className="flex items-center justify-between h-16 border-b border-gray-100">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img
              src="/Magic Bus Logo - Usage As Per Background-01.png"
              alt="Magic Bus Logo"
              className="h-10 w-10 rounded-full object-contain"
            />
            <span className="font-bold text-xl hidden sm:block">Magic Bus</span>
          </a>

          {/* Search */}
          <div className="hidden lg:block flex-1 max-w-xl mx-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-4 pr-9 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-brand-red text-sm placeholder-gray-400"
              />
              <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* CTAs + mobile button */}
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 rounded-full bg-brand-red text-white text-sm font-semibold hover:bg-brand-red/90 transition">
              Donate Now
            </button>
            <button className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-semibold hover:bg-black hover:text-white hover:border-black transition hidden sm:inline-flex">
              Contact Us
            </button>
            <button className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-semibold hover:bg-black hover:text-white hover:border-black transition hidden sm:inline-flex">
              Partner
            </button>

            <button
              className="lg:hidden w-9 h-9 grid place-items-center rounded-full border border-gray-200"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Secondary row (desktop) */}
        <div className="hidden lg:flex items-center justify-center gap-1 py-2">
          {MENUS.map((m) => (
            <button
              key={m.key}
              onMouseEnter={() => setActiveKey(m.key)}
              onFocus={() => setActiveKey(m.key)}
              className={`px-4 py-1.5 text-sm font-semibold transition-colors rounded-full ${
                activeKey === m.key ? "text-brand-red" : "text-gray-800 hover:text-brand-red"
              } flex items-center gap-1`}
            >
              {m.label}
              <ChevronDown className={`transition-transform ${activeKey === m.key ? "rotate-180" : ""}`} />
            </button>
          ))}
        </div>
      </div>

      {/* Mega menu (desktop) */}
      <AnimatePresence>
        {activeKey && (
          <motion.div
            key={activeKey}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            onMouseEnter={() => setActiveKey(activeKey)}
            className="hidden lg:block absolute left-0 right-0 top-full bg-white shadow-2xl border-t border-gray-100"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
              {/* Render content by key */}
              {activeKey !== "resources" ? (
                <div className="grid grid-cols-5 gap-6">
                  {/* Primary column */}
                  <div className="col-span-2">
                    <h3 className="font-bold text-base mb-4 text-gray-900">
                      {MEGA[activeKey].title}
                    </h3>
                    <ul className="space-y-2">
                      {MEGA[activeKey].items?.map((t) => (
                        <li key={t}>
                          <a href="#" className="text-sm text-gray-700 hover:text-brand-red transition-colors block py-0.5">
                            {t}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Simple filler columns for symmetry */}
                  <div className="col-span-3 grid grid-cols-3 gap-6 opacity-80">
                    {[1,2,3].map((k) => (
                      <div key={k} className="rounded-xl border border-gray-100 p-4 bg-gray-50/60">
                        <div className="text-xs font-semibold text-gray-600 mb-2">Highlight {k}</div>
                        <p className="text-xs text-gray-500">
                          Quick links and key sections relevant to {MEGA[activeKey].title}.
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                // Resources has grouped columns
                <div className="grid grid-cols-3 gap-8">
                  {MEGA.resources.groups.map((g) => (
                    <div key={g.title}>
                      <h4 className="font-semibold text-gray-900 mb-3">{g.title}</h4>
                      <ul className="space-y-2">
                        {g.items.map((t) => (
                          <li key={t}>
                            <a href="#" className="text-sm text-gray-700 hover:text-brand-red transition-colors block py-0.5">
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

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="lg:hidden border-t border-gray-100 bg-white"
          >
            <div className="px-6 py-3">
              {/* Mobile search */}
              <div className="mb-3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-4 pr-9 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-brand-red text-sm"
                  />
                  <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"/>
                </div>
              </div>

              {/* Menu groups */}
              <div className="grid grid-cols-1 divide-y divide-gray-100">
                {MENUS.map((m) => (
                  <details key={m.key} className="py-2">
                    <summary className="list-none flex items-center justify-between py-2 cursor-pointer">
                      <span className="font-semibold">{m.label}</span>
                      <ChevronDown className="shrink-0" />
                    </summary>
                    <div className="pl-1 pt-2 space-y-2">
                      {(MEGA[m.key].items || MEGA[m.key].groups?.flatMap(g => g.items) || []).slice(0, 8).map((t) => (
                        <a key={t} href="#" className="block text-sm text-gray-700 hover:text-brand-red">
                          {t}
                        </a>
                      ))}
                    </div>
                  </details>
                ))}
              </div>

              {/* Mobile CTAs */}
              <div className="mt-4 flex flex-wrap gap-2">
                <button className="px-4 py-2 rounded-full bg-brand-red text-white text-sm font-semibold">Donate Now</button>
                <button className="px-4 py-2 rounded-full border border-gray-200 text-sm font-semibold">Contact Us</button>
                <button className="px-4 py-2 rounded-full border border-gray-200 text-sm font-semibold">Partner</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
