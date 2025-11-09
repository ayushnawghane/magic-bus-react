import { motion } from "framer-motion";

const stories = [
  {
    tag: "Education",
    title: "Seeds of Confidence",
    body:
      "In Jadipani, Uttarakhand, Reena isn't just growing vegetables—she's growing confidence and a bright future!",
    img:
      "/ngo-images/5.jpeg",
    color: "#98D8C8",
    emoji: "🌱",
  },
  {
    tag: "Learning",
    title: "Water Flows Again!",
    body:
      "Village kids learning together, studying hard to make their dreams come true!",
    img:
      "/ngo-images/6.jpg",
    color: "#87CEEB",
    emoji: "💧",
  },
  {
    tag: "Hope",
    title: "Saving Lives!",
    body:
      "Poor children getting books, uniforms, and hope for a better tomorrow through education.",
    img:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1400&auto=format&fit=crop",
    color: "#FFB6C1",
    emoji: "❤️",
  },
  {
    tag: "Future",
    title: "Keeping Dreams Alive",
    body:
      "Street children finding shelter in schools, getting meals and education every day!",
    img:
      "/ngo-images/2.JPG",
    color: "#DDA0DD",
    emoji: "🎨",
  },
];

/* NEW: two extra cards for the bottom row */
const bottomStories = [
  {
    tag: "Relief",
    title: "Meals That Matter",
    body:
      "Daily nutrition packs keep children healthy and ready to learn.",
    img:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1600&auto=format&fit=crop",
    color: "#FF8A65",
    emoji: "🍲",
  },
  {
    tag: "Care",
    title: "Safe Places, Warm Smiles",
    body:
      "Community shelters offering safety, counselling, and care.",
    img:
      "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1600&auto=format&fit=crop",
    color: "#4FC3F7",
    emoji: "🤝",
  },
];

const stats = [
  { number: "15", label: "States", sublabel: "All Over India!", color: "#FF6B6B", emoji: "🗺️" },
  { number: "2.5M+", label: "Kids Helped", sublabel: "So Many Smiles!", color: "#4ECDC4", emoji: "😊" },
  { number: "850+", label: "Places", sublabel: "Villages & Cities!", color: "#FFE66D", emoji: "🏘️" },
  { number: "25+", label: "Years", sublabel: "Quarter Century!", color: "#95E1D3", emoji: "🎂" },
];

const impact = [
  { number: "185K+", label: "Dream Jobs", sublabel: "Kids working!", color: "#FF6B6B", emoji: "💼" },
  { number: "68%", label: "Girl Power", sublabel: "Girls helping!", color: "#FFD93D", emoji: "👧" },
  { number: "₹2.8Cr", label: "Money Earned", sublabel: "Success stories!", color: "#6BCF7F", emoji: "💰" },
  { number: "95%", label: "Happy Jobs", sublabel: "Still working!", color: "#4D96FF", emoji: "⭐" },
];

export default function OutreachAndImpact() {
  return (
    <section
      className="py-16 md:py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #FFF9E6 0%, #FFE4D6 50%, #E8F5E9 100%)",
      }}
    >
      {/* Paper texture */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating decorations */}
      <motion.div
        animate={{ rotate: [0, 10, -10, 0], y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-12 text-6xl opacity-30 hidden lg:block"
      >
        📖
      </motion.div>

      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-16 text-5xl opacity-30 hidden lg:block"
      >
        🎪
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-flex items-center gap-2 mb-4 px-5 py-2 bg-white rounded-full shadow-lg border-3 border-dashed border-green-400"
          >
            <span className="text-2xl">🌍</span>
            <span
              className="text-green-600 font-bold text-sm tracking-wide uppercase"
              style={{
                fontFamily:
                  "'Comic Sans MS', 'Chalkboard SE', cursive",
              }}
            >
              Our Story
            </span>
          </motion.div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 mb-5"
            style={{
              fontFamily:
                "'Fredoka', 'Baloo 2', 'Comic Sans MS', cursive",
              textShadow:
                "3px 3px 0 rgba(255,255,255,0.8), -1px -1px 0 rgba(0,0,0,0.05)",
            }}
          >
            <span className="text-orange-500">Amazing Stories</span>{" "}
            <span className="text-purple-500">& Big Impact!</span>
          </h2>

          <p
            className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Quicksand', 'Arial Rounded MT Bold', sans-serif" }}
          >
            See how we're helping kids all over India! 🎈
          </p>
        </div>

        {/* Photo Album Style Stories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Big feature (span 2 cols / 2 rows) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -8, rotate: 1 }}
            className="md:col-span-2 md:row-span-2"
          >
            <div className="relative bg-white p-4 rounded-2xl shadow-xl border-4 border-white h-full">
              {/* tape */}
              <div
                className="absolute -top-3 left-12 w-20 h-8 bg-yellow-200/70 backdrop-blur-sm rounded-sm shadow-sm z-20"
                style={{ transform: "rotate(-8deg)", boxShadow: "inset 0 1px 2px rgba(0,0,0,0.1)" }}
              />
              <div
                className="absolute -top-3 right-12 w-20 h-8 bg-yellow-200/70 backdrop-blur-sm rounded-sm shadow-sm z-20"
                style={{ transform: "rotate(5deg)", boxShadow: "inset 0 1px 2px rgba(0,0,0,0.1)" }}
              />
              <div className="relative rounded-xl overflow-hidden h-full min-h-[400px]">
                <img src={stories[0].img} alt={stories[0].title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div
                  className="absolute top-4 left-4 px-4 py-2 rounded-full shadow-lg border-3 border-white flex items-center gap-2 z-10"
                  style={{ backgroundColor: stories[0].color }}
                >
                  <span className="text-xl">{stories[0].emoji}</span>
                  <span className="text-white font-bold text-sm" style={{ fontFamily: "'Fredoka', cursive" }}>
                    {stories[0].tag}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                  <h3
                    className="text-3xl md:text-4xl font-black mb-3 leading-tight"
                    style={{ fontFamily: "'Fredoka', cursive", textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
                  >
                    {stories[0].title}
                  </h3>
                  <p className="text-white/95 text-base md:text-lg" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                    {stories[0].body}
                  </p>
                </div>
              </div>
              <svg className="absolute bottom-2 right-2 w-12 h-12 opacity-30" viewBox="0 0 50 50">
                <path d="M 10 25 Q 25 10, 40 25 Q 25 40, 10 25" fill="none" stroke={stories[0].color} strokeWidth="2" strokeDasharray="3,2" />
              </svg>
            </div>
          </motion.div>

          {/* Right column small cards (3 items) */}
          {stories.slice(1).map((story, i) => (
            <motion.div
              key={i + 1}
              initial={{ opacity: 0, scale: 0.9, rotate: i % 2 === 0 ? 3 : -3 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i + 1) * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, rotate: i % 2 === 0 ? -1 : 1 }}
            >
              <SmallCard story={story} />
            </motion.div>
          ))}

          {/* NEW: bottom row fillers (2 items) */}
          {bottomStories.map((story, i) => (
            <motion.div
              key={`bottom-${i}`}
              initial={{ opacity: 0, scale: 0.9, rotate: i % 2 ? 2 : -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, rotate: i % 2 ? -1 : 1 }}
            >
              <SmallCard story={story} />
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, rotate: 2 }}
            >
              <div
                className="relative bg-white rounded-3xl p-6 shadow-lg border-4 text-center overflow-hidden"
                style={{ borderColor: stat.color }}
              >
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `repeating-linear-gradient(45deg, ${stat.color}, ${stat.color} 10px, transparent 10px, transparent 20px)`,
                  }}
                />
                <div className="text-4xl mb-2">{stat.emoji}</div>
                <div className="text-4xl md:text-5xl font-black mb-2 relative z-10" style={{ fontFamily: "'Fredoka', cursive", color: stat.color }}>
                  {stat.number}
                </div>
                <h4 className="font-black text-lg mb-1 relative z-10" style={{ fontFamily: "'Fredoka', cursive" }}>
                  {stat.label}
                </h4>
                <p className="text-gray-600 text-xs relative z-10" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                  {stat.sublabel}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-16 flex justify-center">
          <svg width="200" height="20" viewBox="0 0 200 20">
            <motion.path
              d="M 0 10 L 20 2 L 40 10 L 60 2 L 80 10 L 100 2 L 120 10 L 140 2 L 160 10 L 180 2 L 200 10"
              stroke="#FFB6C1"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            />
          </svg>
        </div>

        {/* Impact header */}
        <div className="text-center mb-12">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} className="inline-block mb-6">
            <div className="px-8 py-3 bg-gradient-to-r from-pink-300 via-yellow-300 to-blue-300 rounded-full shadow-lg">
              <span className="text-gray-800 font-black text-lg tracking-wide uppercase flex items-center gap-2" style={{ fontFamily: "'Fredoka', cursive" }}>
                <span className="text-2xl">📊</span>
                Numbers Tell Stories!
                <span className="text-2xl">📈</span>
              </span>
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-800" style={{ fontFamily: "'Fredoka', cursive", textShadow: "3px 3px 0 rgba(255,255,255,0.8)" }}>
            Look at Our <span className="text-green-500">Super Impact!</span>
          </h2>
        </div>

        {/* Impact cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {impact.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, rotate: i % 2 === 0 ? -5 : 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
            >
              <div
                className="relative rounded-3xl p-8 shadow-xl border-4 border-white text-center"
                style={{ background: `linear-gradient(135deg, ${item.color}40, ${item.color}20)` }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 w-14 h-14 rounded-full bg-white shadow-lg grid place-items-center text-3xl border-4 z-10"
                  style={{ borderColor: item.color }}
                >
                  {item.emoji}
                </motion.div>
                <div className="text-5xl md:text-6xl font-black mb-3" style={{ fontFamily: "'Fredoka', cursive", color: item.color }}>
                  {item.number}
                </div>
                <h4 className="font-black text-xl mb-2" style={{ fontFamily: "'Fredoka', cursive", color: item.color }}>
                  {item.label}
                </h4>
                <p className="text-gray-700 text-sm" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                  {item.sublabel}
                </p>
                <div className="absolute top-4 left-4 text-2xl opacity-40">✨</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <div className="inline-block relative">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-red-500 shadow-lg z-20" />
            <motion.button
              whileHover={{ scale: 1.08, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white font-black text-xl rounded-3xl shadow-[8px_8px_0_rgba(0,0,0,0.15)] border-4 border-white"
              style={{ fontFamily: "'Fredoka', cursive" }}
            >
              <span className="flex items-center gap-3">
                <span className="text-3xl">📊</span>
                See All Our Numbers!
                <span className="text-2xl">→</span>
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Floating emojis */}
      {["📚", "✏️", "🎯", "💡"].map((emoji, i) => (
        <motion.div
          key={i}
          className="absolute text-5xl opacity-20 hidden xl:block"
          style={{ left: `${20 + i * 20}%`, top: `${30 + (i % 2) * 40}%` }}
          animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
        >
          {emoji}
        </motion.div>
      ))}
    </section>
  );
}

/* Small-card renderer reused for original + new bottom cards */
function SmallCard({ story }) {
  return (
    <div className="relative bg-white p-4 rounded-2xl shadow-xl border-4 border-white h-full">
      <div
        className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-8 bg-yellow-200/70 backdrop-blur-sm rounded-sm shadow-sm z-20"
        style={{ transform: "translateX(-50%) rotate(-4deg)", boxShadow: "inset 0 1px 2px rgba(0,0,0,0.1)" }}
      />
      <div className="relative rounded-xl overflow-hidden h-64">
        <img src={story.img} alt={story.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div
          className="absolute top-4 left-4 px-3 py-1.5 rounded-full shadow-lg border-3 border-white flex items-center gap-1.5 z-10"
          style={{ backgroundColor: story.color }}
        >
          <span className="text-lg">{story.emoji}</span>
          <span className="text-white font-bold text-xs" style={{ fontFamily: "'Fredoka', cursive" }}>
            {story.tag}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10">
          <h3 className="text-xl font-black mb-2 leading-tight" style={{ fontFamily: "'Fredoka', cursive", textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}>
            {story.title}
          </h3>
          <p className="text-white/95 text-sm" style={{ fontFamily: "'Quicksand', sans-serif" }}>
            {story.body}
          </p>
        </div>
      </div>
      <svg className="absolute bottom-2 right-2 w-10 h-10 opacity-30" viewBox="0 0 50 50">
        <path d="M 10 25 Q 25 10, 40 25 Q 25 40, 10 25" fill="none" stroke={story.color} strokeWidth="2" strokeDasharray="3,2" />
      </svg>
    </div>
  );
}
