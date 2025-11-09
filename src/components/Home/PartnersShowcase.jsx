import { motion } from "framer-motion";

const categories = [
  {
    title: "Companies",
    copy: "Big businesses helping make dreams come true!",
    icon: "🏢",
    color: "#87CEEB",
    sticker: "💼",
  },
  {
    title: "Money Helpers",
    copy: "Foundations giving love & support worldwide!",
    icon: "🏛️",
    color: "#98D8C8",
    sticker: "💰",
  },
  {
    title: "Government",
    copy: "State & country teams working together!",
    icon: "🏛️",
    color: "#FFB6C1",
    sticker: "🏅",
  },
  {
    title: "Job Givers",
    copy: "Companies hiring our amazing graduates!",
    icon: "💼",
    color: "#DDA0DD",
    sticker: "⭐",
  },
];

const logos = [
  { label: "TATA" },
  { label: "Infosys" },
  { label: "Microsoft" },
  { label: "Accenture" },
  { label: "Wipro" },
  { label: "HCL" },
  { label: "Capgemini" },
  { label: "AWS" },
  { label: "Meta" },
  { label: "Google" },
];

export default function PartnersShowcase() {
  return (
    <section 
      className="relative py-16 md:py-24 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #FFF9E6 0%, #E8F5E9 50%, #FFE4D6 100%)",
      }}
    >
      {/* Paper texture */}
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating decorative elements */}
      <motion.div
        animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-12 text-6xl opacity-40 hidden lg:block"
      >
        🎨
      </motion.div>

      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-16 text-5xl opacity-40 hidden lg:block"
      >
        🌟
      </motion.div>

      <motion.div
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-24 left-20 text-5xl opacity-40 hidden lg:block"
      >
        🏆
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-flex items-center gap-2 mb-4 px-5 py-2 bg-white rounded-full shadow-lg border-3 border-dashed border-blue-400"
          >
            <span className="text-2xl">🤝</span>
            <span 
              className="text-blue-600 font-bold text-sm tracking-wide uppercase"
              style={{ fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive" }}
            >
              Our Friends
            </span>
          </motion.div>

          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 mb-5"
            style={{ 
              fontFamily: "'Fredoka', 'Baloo 2', 'Comic Sans MS', cursive",
              textShadow: "3px 3px 0 rgba(255,255,255,0.8), -1px -1px 0 rgba(0,0,0,0.05)"
            }}
          >
            <span className="text-orange-500">500+ Amazing</span>{" "}
            <span className="text-purple-500">Partners!</span>
          </h2>
          
          <p 
            className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Quicksand', 'Arial Rounded MT Bold', sans-serif" }}
          >
            So many awesome companies & organizations helping us help kids! 🎉
          </p>
        </div>

        {/* Categories - Crayon Box Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20, rotate: i % 2 === 0 ? -5 : 5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, rotate: i % 2 === 0 ? 2 : -2 }}
              className="relative"
            >
              {/* Crayon-style card */}
              <div 
                className="relative bg-white rounded-3xl p-6 shadow-[6px_6px_0_rgba(0,0,0,0.1)] border-4 overflow-hidden"
                style={{
                  borderColor: cat.color,
                  background: "linear-gradient(135deg, #FFFEF9 0%, #FFF9F0 100%)",
                }}
              >
                {/* Top decorative strip */}
                <div 
                  className="absolute top-0 left-0 right-0 h-3"
                  style={{
                    background: `repeating-linear-gradient(90deg, ${cat.color} 0px, ${cat.color} 10px, transparent 10px, transparent 20px)`,
                  }}
                />

                {/* Sticker badge */}
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-yellow-300 shadow-lg grid place-items-center text-2xl border-3 border-white z-10"
                >
                  {cat.sticker}
                </motion.div>

                {/* Icon */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                  className="text-6xl text-center mb-4 mt-4"
                >
                  {cat.icon}
                </motion.div>

                {/* Content */}
                <div className="text-center relative z-10">
                  <h3 
                    className="text-xl md:text-2xl font-black mb-2 leading-tight"
                    style={{ 
                      fontFamily: "'Fredoka', 'Comic Sans MS', cursive",
                      color: cat.color.replace('C1', '').replace('EB', '').replace('C8', '').replace('DD', ''),
                    }}
                  >
                    {cat.title}
                  </h3>

                  <p 
                    className="text-gray-700 text-sm leading-relaxed"
                    style={{ fontFamily: "'Quicksand', sans-serif" }}
                  >
                    {cat.copy}
                  </p>
                </div>

                {/* Hand-drawn circle decoration */}
                <svg className="absolute bottom-2 right-2 w-10 h-10 opacity-20" viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r="15" fill="none" stroke={cat.color} strokeWidth="2" strokeDasharray="3,2" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logo Wall - Bulletin Board Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-12"
        >
          {/* Push pins at corners */}
          <div className="absolute -top-4 left-8 w-6 h-6 rounded-full bg-red-500 shadow-lg z-20" />
          <div className="absolute -top-4 right-8 w-6 h-6 rounded-full bg-blue-500 shadow-lg z-20" />
          <div className="absolute -bottom-4 left-12 w-6 h-6 rounded-full bg-green-500 shadow-lg z-20" />
          <div className="absolute -bottom-4 right-12 w-6 h-6 rounded-full bg-yellow-500 shadow-lg z-20" />

          {/* Cork board texture */}
          <div 
            className="bg-amber-100 rounded-3xl p-8 md:p-12 shadow-2xl border-8 border-amber-200 relative overflow-hidden"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, #d4a373 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          >
            {/* Title on board */}
            <div className="text-center mb-8">
              <h3 
                className="inline-block text-2xl md:text-3xl font-black text-gray-800 px-6 py-3 bg-white rounded-2xl shadow-lg border-3 border-dashed border-orange-400"
                style={{ 
                  fontFamily: "'Fredoka', cursive",
                  transform: "rotate(-1deg)",
                }}
              >
                Who's Helping Us? 🎯
              </h3>
            </div>

            {/* Scrolling logos */}
            <div className="relative overflow-hidden bg-white rounded-2xl py-8 shadow-inner">
              <div className="flex items-center gap-6 animate-marquee">
                {[...logos, ...logos].map((logo, idx) => (
                  <motion.div
                    key={`${logo.label}-${idx}`}
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    className="shrink-0 h-20 min-w-[180px] rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border-3 border-gray-200 flex items-center justify-center px-6 shadow-md"
                  >
                    <span 
                      className="text-gray-600 font-black text-lg tracking-wide"
                      style={{ fontFamily: "'Fredoka', cursive" }}
                    >
                      {logo.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Cute footer note */}
            <div className="text-center mt-8">
              <p 
                className="text-amber-800 text-sm font-semibold"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                Companies • Foundations • Government • Job Partners 🌈
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA - Sticky Note Style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block relative">
            {/* Tape at top */}
            <div 
              className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-yellow-200/70 backdrop-blur-sm rounded-sm shadow-sm"
              style={{
                transform: "translateX(-50%) rotate(-2deg)",
                boxShadow: "inset 0 1px 2px rgba(0,0,0,0.1)",
              }}
            />

            <motion.button
              whileHover={{ scale: 1.08, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-12 py-6 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 text-white font-black text-xl rounded-3xl shadow-[8px_8px_0_rgba(0,0,0,0.15)] border-4 border-white"
              style={{ fontFamily: "'Fredoka', cursive" }}
            >
              <span className="flex items-center gap-3">
                <span className="text-3xl">🤗</span>
                Join Our Partner Family!
                <span className="text-2xl">→</span>
              </span>

              {/* Sparkles */}
              <motion.div
                animate={{ scale: [0, 1, 0], rotate: [0, 180, 360] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-2 -right-2 text-3xl"
              >
                ✨
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Floating alphabet decorations */}
      {['A', 'B', '1', '2', '⭐', '💡'].map((char, i) => (
        <motion.div
          key={i}
          className="absolute text-5xl font-black opacity-10 hidden xl:block"
          style={{
            fontFamily: "'Fredoka', cursive",
            left: `${10 + i * 15}%`,
            top: `${15 + (i % 2) * 60}%`,
            color: ['#FF6B6B', '#4ECDC4', '#FFE66D', '#95E1D3', '#F38181', '#AA96DA'][i],
          }}
          animate={{
            y: [0, -25, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        >
          {char}
        </motion.div>
      ))}

      {/* Marquee animation */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}