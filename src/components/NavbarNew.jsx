import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const _MOTION = motion;
import { Link } from "react-router-dom";
import { Search, Menu, X, ChevronDown, Plus, Globe, Heart } from "lucide-react";

// NOTE: This component follows the styling and behavior of your original
// NavbarNew but renders the mega-dropdown exactly like the wireframe image.
// Programmes uses grouped headings (bold, non-clickable) and sub-links
// appear beneath them. Resources already had groups — those are preserved.

const NAVIGATION_ITEMS = [
  {
    key: "about",
    label: "About Us",
    items: [
      { label: "About Magic Bus", path: "/about-us" },
      { label: "Our Approach", path: "/our-approach" },
      { label: "Who We Are", path: "/who-we-are" },
      { label: "Our Team", path: "/our-team" },
      { label: "Board of Directors", path: "/board-of-directors" },
      { label: "Our Culture", path: "/our-culture" },
    ],
  },
  {
    key: "programmes",
    label: "Programmes",
    // groups: each group has a title which is rendered as a bold heading (NOT a link)
    groups: [
      {
        title: "Adolescent Programme",
        path: "/adolescent-programme",
        items: [
          { label: "Government Partnership Programme", path: "/government-partnership-programme" },
          { label: "Learning & Development", path: "/learning-development" },
          { label: "Youth for Change Fellowship Programme", path: "/youth-for-change-fellowship-programme" },
          { label: "Magic Mitra", path: "/magic-mitra" },
        ],
      },
      {
        title: "Livelihood Programme",
        path: "/livelihood-programme",
        items: [
          { label: "Youth Skilling", path: "/youth-skilling-programme" },
          { label: "Connect With Work", path: "/connect-with-work" },
          { label: "Digital Skilling", path: "/digital-skilling" },
          { label: "Entrepreneurship Development", path: "/entrepreneurship-development-programme" },
          { label: "Rural Empowerment Programme", path: "/livelihood-programme" },
          { label: "MB Dost", path: "/mb-dost" },
          { label: "Future X", path: "/futurex" },
        ],
      },
      {
        title: "Employee Volunteering Programme",
        path: "/employee-volunteering",
        items: [],
      },
    ],
  },
  {
    key: "partners",
    label: "Partners",
    items: [
      { label: "Corporate Partners", path: "#" },
      { label: "Foundations & Institutions", path: "#" },
      { label: "Government Partners", path: "#" },
      { label: "Knowledge Partners", path: "#" },
      { label: "Employment Partners", path: "#" },
      { label: "Partner Connect", path: "/partner" },
    ],
  },
  {
    key: "resources",
    label: "Resources",
    groups: [
      {
        title: "Reports & Publications",
        items: [
          { label: "Impact Reports", path: "/impact-reports" },
          { label: "Gender Journey Report", path: "/gender-journey-report" },
          { label: "Annual Reports", path: "/annual-reports" },
          { label: "FLFPR Report", path: "/flfpr-report" },
        ],
      },
      {
        title: "Media & Stories",
        items: [
          { label: "Gallery", path: "/gallery" },
          { label: "Blogs", path: "/blogs" },
          { label: "News", path: "/news" },
          { label: "Webstories", path: "#" },
          { label: "Awards", path: "#" },
          { label: "Success Stories", path: "#" },
          { label: "Testimonials", path: "#" },
          { label: "Podcast", path: "#" },
        ],
      },
      {
        title: "Policies",
        items: [
          { label: "Privacy", path: "#" },
          { label: "Terms & Conditions", path: "#" },
          { label: "POSH Policy", path: "#" },
          { label: "Child Protection Policy", path: "#" },
        ],
      },
    ],
  },
  {
    key: "life",
    label: "Life @ Magic Bus",
    items: [
      { label: "Work With Us", path: "#" },
      { label: "Certifications", path: "/certifications" },
      { label: "Our Culture", path: "#" },
      { label: "Learning & Development", path: "/learning-development" },
      { label: "MB Academy", path: "#" },
      { label: "Darwin (Employee Login)", path: "#" },
    ],
  },
];

export default function NavbarWireframe() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const closeTimerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  const handleMouseEnter = (key) => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => setActiveDropdown(null), 180);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search:", searchQuery);
    setSearchQuery("");
    setIsSearchOpen(false);
  };

  return (
    <_MOTION.nav
      className="fixed top-0 inset-x-0 z-50"
      animate={{
        paddingTop: scrolled ? 0 : 16,
        paddingBottom: scrolled ? 0 : 16,
        paddingLeft: scrolled ? 0 : 24,
        paddingRight: scrolled ? 0 : 24,
      }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
    >
      <_MOTION.div
        animate={{
          borderRadius: scrolled ? 0 : 16,
          boxShadow: scrolled
            ? "0 4px 24px 0 rgba(0,0,0,0.13), 0 1.5px 6px 0 rgba(0,0,0,0.07)"
            : "0 1px 4px 0 rgba(0,0,0,0.06)",
          backgroundColor: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,1)",
        }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        style={{ backdropFilter: scrolled ? "blur(12px)" : "none", borderBottom: scrolled ? "1px solid rgba(226,232,240,0.8)" : "1px solid rgba(226,232,240,0.4)" }}
        className="max-w-[1400px] mx-auto overflow-visible"
      >
        <div className="flex items-center justify-between px-4  py-2">

          {/* Left: Logo */}
          <Link to="/" className="flex-shrink-0 z-40">
            <img
              src="/Magic Bus Logo - Usage As Per Background-01.png"
              alt="Magic Bus Logo"
              className="h-12 md:h-24 w-auto object-contain"
            />
          </Link>

          {/* Right: Content */}
          <div className="flex flex-col items-end justify-between gap-3 h-full">

            {/* Top Row: Utilities & CTAs */}
            <div className="flex items-center gap-4 md:gap-6">
              {isSearchOpen ? (
                <form onSubmit={handleSearchSubmit} className="flex items-center">
                  <input
                    autoFocus
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-32 md:w-48 pl-3 pr-2 py-1 text-sm border-b border-gray-300 focus:outline-none focus:border-brand-red bg-transparent"
                    onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)}
                  />
                  <button type="submit" className="text-brand-red p-1"><Search className="w-4 h-4" /></button>
                </form>
              ) : (
                <button className="text-slate-700 hover:text-brand-red transition-colors" aria-label="Search" onClick={() => setIsSearchOpen(true)}>
                  <Search className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              )}
              {/* Social Icons */}
              <div className="hidden lg:flex items-center justify-center gap-2 mr-2">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="inline-flex items-center justify-center w-6 h-6 rounded-full shadow hover:scale-110 transition-transform" style={{ background: "linear-gradient(45deg, #f58529 0%, #dd2a7b 50%, #8134af 100%)" }}>
                  <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="inline-flex items-center justify-center w-6 h-6 rounded-full shadow hover:scale-110 transition-transform" style={{ background: "#0A66C2" }}>
                  <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="inline-flex items-center justify-center w-6 h-6 rounded-full shadow hover:scale-110 transition-transform" style={{ background: "#FF0000" }}>
                  <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>


              <div className="flex items-stretch rounded-md overflow-hidden shadow-sm border border-slate-200/50">
                <div className="hidden sm:flex bg-[#2D2D2D] text-white px-3 py-2 md:px-4 items-center gap-2 text-xs md:text-sm font-medium">
                  <Globe className="w-3 h-3 md:w-4 md:h-4" />
                  <span>Magic Bus India</span>
                </div>
                <Link to="/donate" className="bg-brand-red text-white px-4 py-2 md:px-5 flex items-center gap-2 text-xs md:text-sm font-semibold hover:bg-brand-red/90 transition-colors">
                  <Heart className="w-3 h-3 md:w-4 md:h-4" />
                  Donate
                </Link>
              </div>

              <button
                className="lg:hidden w-9 h-9 grid place-items-center rounded-full border border-gray-200"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

            {/* Bottom Row: Navigation Links */}
            <div className="hidden lg:flex items-center gap-8 pr-2">
              {NAVIGATION_ITEMS.map((item) => (
                <div
                  key={item.key}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(item.key)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`flex items-center gap-1.5 text-[15px] font-medium pb-2 transition-colors ${activeDropdown === item.key
                        ? "text-brand-red"
                        : "text-slate-700 hover:text-brand-red"
                      }`}
                  >
                    {item.label}
                    <Plus className={`w-4 h-4 text-brand-red transition-transform duration-300 ${activeDropdown === item.key ? "rotate-45" : ""}`} />
                  </button>

                  {/* Underline Animation */}
                  <_MOTION.div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-red origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: activeDropdown === item.key ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  />

                  {/* Dropdown */}
                  <AnimatePresence>
                    {activeDropdown === item.key && (
                      <_MOTION.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.18 }}
                        className={`absolute top-full mt-3 bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden z-50 ${item.key === 'resources' || item.key === 'programmes'
                            ? 'left-1/2 -translate-x-1/2 w-[800px]'
                            : 'left-0 w-72'
                          }`}
                      >
                        {/* If groups exist (multi-column) */}
                        {item.groups ? (
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                            {item.groups.map((group, gi) => (
                              <div key={gi} className="p-4 border-r border-slate-100 last:border-r-0 md:border-b-0 border-b last:border-b-0">
                                {/* Group title rendered as bold heading (not a link) */}
                                {group.path ? (
                                  <Link
                                    to={group.path}
                                    className="block text-sm font-semibold text-slate-700 mb-3 hover:text-brand-red transition-colors"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    {group.title}
                                  </Link>
                                ) : (
                                  <div className="text-sm font-semibold text-slate-700 mb-3">
                                    {group.title}
                                  </div>
                                )}

                                {/* Items under the heading (links) */}
                                <div className="space-y-1">
                                  {group.items && group.items.length > 0 ? (
                                    group.items.map((subItem, si) => (
                                      <Link key={si} to={subItem.path} className="block px-3 py-2 text-sm text-slate-700 hover:text-brand-red hover:bg-slate-50 rounded-lg transition-colors" onClick={() => setActiveDropdown(null)}>
                                        {subItem.label}
                                      </Link>
                                    ))
                                  ) : (
                                    // keep vertical spacing for empty groups so layout matches wireframe
                                    <div className="h-6" />
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          // Single column layout (for About/Partners/Life)
                          <div className="p-2">
                            {item.items.map((subItem, subIndex) => (
                              <Link key={subIndex} to={subItem.path} className="block px-3 py-2 text-sm text-slate-700 hover:text-brand-red hover:bg-slate-50 rounded-lg transition-colors" onClick={() => setActiveDropdown(null)}>
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </_MOTION.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <_MOTION.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="lg:hidden border-t border-slate-200 bg-white rounded-b-2xl overflow-hidden">
              <div className="px-6 py-4 space-y-4">
                <form onSubmit={handleSearchSubmit} className="flex gap-2">
                  <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search..." className="flex-1 px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red" />
                  <button type="submit" className="px-3 py-2 bg-brand-red text-white rounded-lg"><Search className="w-4 h-4" /></button>
                </form>

                <div className="space-y-2">
                  {NAVIGATION_ITEMS.map((item) => (
                    <details key={item.key} className="group">
                      <summary className="flex items-center justify-between py-2 text-sm font-medium text-slate-700 cursor-pointer">
                        {item.label}
                        <Plus className="w-4 h-4 text-brand-red group-open:rotate-45 transition-transform" />
                      </summary>

                      <div className="pl-4 pb-2 space-y-1">
                        {item.groups ? (
                          item.groups.map((group, gidx) => (
                            <div key={gidx} className="mb-3">
                              {group.path ? (
                                <Link
                                  to={group.path}
                                  className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2 hover:text-brand-red"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {group.title}
                                </Link>
                              ) : (
                                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">{group.title}</div>
                              )}
                              {group.items.map((subItem, si) => (
                                <Link key={si} to={subItem.path} className="block py-1 text-sm text-slate-600 hover:text-brand-red" onClick={() => setMobileOpen(false)}>{subItem.label}</Link>
                              ))}
                            </div>
                          ))
                        ) : (
                          item.items.map((subItem, si) => (
                            <Link key={si} to={subItem.path} className="block py-1 text-sm text-slate-600 hover:text-brand-red" onClick={() => setMobileOpen(false)}>{subItem.label}</Link>
                          ))
                        )}
                      </div>
                    </details>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-200 space-y-2">
                  <Link to="/donate" className="block w-full px-4 py-2 bg-brand-red text-white text-center text-sm font-medium rounded-lg" onClick={() => setMobileOpen(false)}>Donate Now</Link>
                  <div className="flex gap-2">
                    <Link to="/contact" className="flex-1 px-4 py-2 border border-slate-300 text-slate-700 text-center text-sm font-medium rounded-lg" onClick={() => setMobileOpen(false)}>Contact Us</Link>
                    <Link to="/partner" className="flex-1 px-4 py-2 border border-slate-300 text-slate-700 text-center text-sm font-medium rounded-lg" onClick={() => setMobileOpen(false)}>Partner</Link>
                  </div>
                </div>
              </div>
            </_MOTION.div>
          )}
        </AnimatePresence>
      </_MOTION.div>
    </_MOTION.nav>
  );
}


