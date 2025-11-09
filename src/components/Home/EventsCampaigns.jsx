import { motion } from "framer-motion";

/** Reusable card wrapper with hover effects */
function EventCard({ className = "", children }) {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      {children}
    </motion.div>
  );
}

export default function EventsCampaignsPlayful() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-24">
      {/* Playful background elements */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-[5%] top-[10%] h-16 w-16 rounded-full bg-red-300 blur-2xl" />
        <div className="absolute right-[10%] top-[20%] h-24 w-24 rounded-full bg-yellow-300 blur-3xl" />
        <div className="absolute bottom-[15%] left-[15%] h-20 w-20 rounded-full bg-blue-300 blur-2xl" />
        <div className="absolute bottom-[25%] right-[8%] h-32 w-32 rounded-full bg-green-300 blur-3xl" />
        <svg className="absolute left-[2%] top-[5%] h-12 w-12 rotate-45 text-red-400 opacity-30" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z"/>
        </svg>
        <svg className="absolute right-[5%] top-[15%] h-10 w-10 -rotate-12 text-blue-400 opacity-25" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z"/>
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-4 inline-block rounded-full border-2 border-dashed border-orange-400 bg-white px-6 py-2 shadow-sm">
              <span className="text-sm font-bold uppercase tracking-wider text-orange-600" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                ✨ What's Happening ✨
              </span>
            </div>
            <h2
              className="mb-4 text-5xl font-black text-gray-900 md:text-6xl lg:text-7xl"
              style={{ fontFamily: 'Comic Sans MS, cursive', textShadow: '3px 3px 0px rgba(251, 191, 36, 0.3)' }}
            >
              Events & Campaigns
            </h2>
            <div className="mx-auto h-1 w-32 rounded-full bg-gradient-to-r from-red-400 via-yellow-400 to-green-400" />
          </motion.div>
        </div>

        {/* FIXED LAYOUT: 12 cols / 2 rows */}
        <div className="grid gap-6 lg:grid-cols-12 lg:grid-rows-2">
          {/* FEATURED (left) spans 7 cols & 2 rows */}
          <EventCard className="lg:col-span-7 lg:row-span-2">
            <div className="group relative h-full min-h-[32rem] overflow-hidden rounded-3xl border-4 border-white shadow-2xl">
              <img
                src="/ngo-images/4.JPG"
                alt="Annual Fundraiser Gala 2025"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/60 via-pink-500/50 to-purple-500/60" />
              <div
                className="absolute inset-0 opacity-20 mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}
              />
              <div className="absolute right-6 top-6 z-20 rotate-3 rounded-2xl border-3 border-yellow-600 bg-yellow-400 px-4 py-2 shadow-lg" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                <span className="text-sm font-black text-yellow-900">🎉 UPCOMING</span>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-8">
                <div className="mb-3 inline-block rounded-full bg-white/20 px-4 py-1 backdrop-blur-sm">
                  <span className="text-sm font-bold text-white" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                    📅 December 15, 2025
                  </span>
                </div>
                <h3
                  className="mb-4 text-4xl font-black leading-tight text-white transition-colors md:text-5xl"
                  style={{ fontFamily: 'Comic Sans MS, cursive', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
                >
                  Annual Fundraiser Gala 2025
                </h3>
                <p className="mb-6 max-w-xl text-lg font-medium leading-relaxed text-white/90" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                  Join us for an evening celebrating youth empowerment and innovation. Together, we're building brighter futures! 🌟
                </p>
                <button className="group/btn inline-flex items-center gap-2 rounded-full bg-yellow-400 px-8 py-4 font-bold text-gray-900 shadow-lg transition-all hover:bg-yellow-300 hover:shadow-xl hover:scale-105" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                  Register Now!
                  <svg className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          </EventCard>

          {/* RIGHT RAIL (5 cols, 2 rows) => inner 2-col grid = 2×2 */}
          <div className="lg:col-span-5 lg:row-span-2 grid gap-6 md:grid-cols-2">
            {/* Card 1 */}
            <EventCard>
              <div className="group h-full overflow-hidden rounded-3xl border-4 border-white bg-white shadow-xl">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/ngo-images/5.jpeg"
                    alt="Digital Skills Campaign"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/70 to-green-500/70" />
                  <svg className="absolute left-4 top-4 h-16 w-16 text-white/30" viewBox="0 0 100 100">
                    <path d="M 10,50 Q 30,20 50,50 T 90,50" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
                  </svg>
                  <div className="absolute right-4 top-4 -rotate-6 rounded-xl border-2 border-white bg-green-400 px-3 py-1 shadow-md">
                    <span className="text-xs font-black text-white" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                      🔥 ACTIVE
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-2 inline-block rounded-full bg-blue-100 px-3 py-1">
                    <span className="text-xs font-bold text-blue-700" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                      Nov – Dec 2025
                    </span>
                  </div>
                  <h3 className="mb-3 text-2xl font-black text-gray-900 transition-colors group-hover:text-blue-600" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                    Digital Skills Campaign 💻
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-700" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                    Help us train 5,000 youth in digital skills this quarter!
                  </p>
                  <button className="inline-flex items-center gap-1 font-bold text-blue-600 transition-colors hover:text-blue-700" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                    Support Campaign →
                  </button>
                </div>
              </div>
            </EventCard>

            {/* Card 2 */}
            <EventCard>
              <div className="group h-full overflow-hidden rounded-3xl border-4 border-white bg-white shadow-xl">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/ngo-images/6.jpeg"
                    alt="Mentor-A-Youth Program"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/70 to-red-500/70" />
                  <svg className="absolute bottom-4 right-4 h-20 w-20 text-white/20" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="6" fill="none" strokeDasharray="5,5" />
                  </svg>
                  <div className="absolute right-4 top-4 rotate-3 rounded-xl border-2 border-yellow-600 bg-yellow-400 px-3 py-1 shadow-md">
                    <span className="text-xs font-black text-gray-900" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                      🙋 VOLUNTEER
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-2 inline-block rounded-full bg-orange-100 px-3 py-1">
                    <span className="text-xs font-bold text-orange-700" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                      Ongoing
                    </span>
                  </div>
                  <h3 className="mb-3 text-2xl font-black text-gray-900 transition-colors group-hover:text-orange-600" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                    Mentor-A-Youth Program 🌱
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-700" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                    Share your expertise and guide the next generation of leaders!
                  </p>
                  <button className="inline-flex items-center gap-1 font-bold text-orange-600 transition-colors hover:text-orange-700" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                    Become a Mentor →
                  </button>
                </div>
              </div>
            </EventCard>

            {/* Card 3 */}
            <EventCard>
              <div className="group h-full overflow-hidden rounded-3xl border-4 border-white bg-white shadow-xl">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src="/ngo-images/3.JPG"
                    alt="FutureX Tech Summit"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/70 to-pink-500/70" />
                  <div className="absolute right-3 top-3 -rotate-6 rounded-lg border-2 border-white bg-pink-400 px-2 py-1 shadow-md">
                    <span className="text-xs font-black text-white" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                      ⭐ NEW
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="mb-2 inline-block rounded-full bg-purple-100 px-3 py-1">
                    <span className="text-xs font-bold text-purple-700" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                      Jan 2026
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-black text-gray-900 transition-colors group-hover:text-purple-600" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                    FutureX Tech Summit 🚀
                  </h3>
                  <p className="mb-3 text-sm leading-relaxed text-gray-700" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                    AI innovation in NGO sector!
                  </p>
                  <button className="text-sm font-bold text-purple-600 transition-colors hover:text-purple-700" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                    Learn More →
                  </button>
                </div>
              </div>
            </EventCard>

            {/* Card 4 */}
            <EventCard>
              <div className="group h-full overflow-hidden rounded-3xl border-4 border-white bg-gradient-to-br from-green-400 to-teal-500 shadow-xl">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src="/ngo-images/1.JPG"
                    alt="Youth Leadership Week"
                    className="h-full w-full object-cover opacity-60 transition-all duration-500 group-hover:scale-110 group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600/50 to-teal-600/50" />
                </div>
                <div className="p-5 text-white">
                  <div className="mb-2 inline-block rounded-full bg-white/30 px-3 py-1 backdrop-blur-sm">
                    <span className="text-xs font-bold" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                      Feb 2026
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-black transition-transform group-hover:scale-105" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                    Youth Leadership Week 🏆
                  </h3>
                  <p className="mb-3 text-sm leading-relaxed opacity-95" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                    Workshops & community projects!
                  </p>
                  <button className="text-sm font-bold transition-colors hover:text-yellow-300" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                    See Schedule →
                  </button>
                </div>
              </div>
            </EventCard>

          </div>
        </div>

        {/* View All Button */}
        <motion.div className="mt-12 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <button
            className="inline-flex items-center gap-2 rounded-full border-4 border-dashed border-orange-400 bg-white px-10 py-4 font-black text-orange-600 shadow-lg transition-all hover:scale-105 hover:border-orange-500 hover:bg-orange-50 hover:shadow-xl"
            style={{ fontFamily: 'Comic Sans MS, cursive' }}
          >
            View All Events
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/40 to-transparent" />
    </section>
  );
}
