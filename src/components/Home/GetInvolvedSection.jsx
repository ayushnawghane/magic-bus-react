import { motion } from "framer-motion";

const cards = [
  {
    id: 1,
    title: "Corporate Partners",
    desc: "Join us in changing lives! Your company can help kids learn & grow through fun CSR programs.",
    emoji: "🏢",
    color: "#FFB6C1",
    bgPattern: "from-pink-100 to-pink-50",
  },
  {
    id: 2,
    title: "Give Money & Love",
    desc: "Every rupee helps! Support our programs and bring smiles to thousands of children.",
    emoji: "💝",
    color: "#87CEEB",
    bgPattern: "from-blue-100 to-blue-50",
  },
  {
    id: 3,
    title: "Teaching & Training",
    desc: "Share your skills! Help us teach kids awesome things and prepare them for success.",
    emoji: "🎓",
    color: "#98D8C8",
    bgPattern: "from-teal-100 to-teal-50",
  },
  {
    id: 4,
    title: "Tech Friends",
    desc: "Love technology? Help us use cool tech to reach more kids and make bigger impact!",
    emoji: "💻",
    color: "#DDA0DD",
    bgPattern: "from-purple-100 to-purple-50",
  },
];

export default function GetInvolvedSection() {
  return (
    <section 
      className="py-16 md:py-24 relative overflow-hidden bg-white"
    >
      {/* Colorful watercolor background blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-96 h-96 bg-yellow-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-pink-200/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl" />
      </div>

      {/* Scattered hand-drawn elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-16 text-6xl opacity-30 hidden lg:block"
      >
        🎨
      </motion.div>

      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 right-24 text-5xl opacity-30 hidden lg:block"
      >
        🖍️
      </motion.div>

      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-12 text-4xl opacity-30 hidden lg:block"
      >
        ✏️
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header with hand-drawn style */}
        <div className="text-center mb-16">
          {/* Badge with crayon underline */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-block mb-6"
          >
            <div className="relative inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full border-4 border-orange-400 shadow-lg">
              <span className="text-3xl">👋</span>
              <span 
                className="text-orange-600 font-black text-base tracking-wide uppercase"
                style={{ fontFamily: "'Fredoka', cursive" }}
              >
                Join The Fun!
              </span>
              
              {/* Squiggly underline */}
              <svg className="absolute -bottom-3 left-0 w-full h-4" viewBox="0 0 200 10">
                <motion.path
                  d="M 5 5 Q 25 2, 50 5 T 100 5 T 150 5 T 195 5"
                  stroke="#FF6B6B"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
              </svg>
            </div>
          </motion.div>

          {/* Main heading with sticker effect */}
          <motion.h2 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
            style={{ fontFamily: "'Fredoka', cursive" }}
          >
            <span className="inline-block px-4 py-2 bg-yellow-300 -rotate-2 shadow-lg">
              Let's Work
            </span>
            <br />
            <span className="inline-block px-4 py-2 bg-pink-300 rotate-1 shadow-lg mt-2">
              Together!
            </span>
          </motion.h2>
          
          <p 
            className="text-gray-700 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            Pick your favorite way to help! 🌟
          </p>
        </div>

        {/* Cards with unique layout - 2x2 grid with center CTA */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {cards.map((card, i) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, scale: 0.8, rotate: i % 2 === 0 ? -5 : 5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, type: "spring" }}
                whileHover={{ 
                  y: -12, 
                  rotate: i % 2 === 0 ? 2 : -2,
                  transition: { duration: 0.2 }
                }}
                className="relative group cursor-pointer"
              >
                {/* Polaroid-style card */}
                <div 
                  className={`bg-gradient-to-br ${card.bgPattern} rounded-3xl p-6 pb-8 shadow-xl border-8 border-white relative overflow-hidden`}
                  style={{
                    transform: `rotate(${i % 2 === 0 ? '-2deg' : '2deg'})`,
                  }}
                >
                  {/* Top corner sticker with number */}
                  <div 
                    className="absolute -top-4 -right-4 w-16 h-16 rounded-full grid place-items-center shadow-xl border-4 border-white z-10"
                    style={{ backgroundColor: card.color }}
                  >
                    <span 
                      className="text-2xl font-black text-white"
                      style={{ fontFamily: "'Fredoka', cursive" }}
                    >
                      {card.id}
                    </span>
                  </div>

                  {/* Large emoji with shadow */}
                  <motion.div
                    animate={{ 
                      y: [0, -8, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 3 + i * 0.5, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="text-8xl text-center mb-6 drop-shadow-2xl"
                  >
                    {card.emoji}
                  </motion.div>

                  {/* Content with handwritten style */}
                  <div className="text-center relative z-10">
                    <h3 
                      className="text-2xl md:text-3xl font-black mb-4 leading-tight"
                      style={{ 
                        fontFamily: "'Fredoka', cursive",
                        color: card.color.replace('C1', '').replace('EB', '').replace('C8', '').replace('DD', ''),
                        textShadow: "2px 2px 0 rgba(255,255,255,0.8)",
                      }}
                    >
                      {card.title}
                    </h3>

                    <p 
                      className="text-gray-700 text-base leading-relaxed"
                      style={{ fontFamily: "'Quicksand', sans-serif" }}
                    >
                      {card.desc}
                    </p>
                  </div>

                  {/* Decorative doodles in corners */}
                  <svg className="absolute bottom-3 left-3 w-10 h-10 opacity-20" viewBox="0 0 40 40">
                    <motion.path
                      d="M 5 20 Q 10 5, 20 10 T 35 20"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: i * 0.2 }}
                    />
                  </svg>

                  <svg className="absolute top-3 left-3 w-8 h-8 opacity-20" viewBox="0 0 40 40">
                    <motion.circle
                      cx="20"
                      cy="20"
                      r="15"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="3,3"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center CTA - Notebook paper style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative max-w-2xl mx-auto"
          >
            {/* Push pins */}
            <div className="absolute -top-6 left-20 w-8 h-8 rounded-full bg-red-500 shadow-xl z-20" />
            <div className="absolute -top-6 right-20 w-8 h-8 rounded-full bg-blue-500 shadow-xl z-20" />

            {/* Notebook paper */}
            <div 
              className="bg-yellow-50 rounded-2xl p-8 md:p-12 shadow-2xl border-l-4 border-red-300 relative overflow-hidden"
              style={{
                backgroundImage: "repeating-linear-gradient(transparent, transparent 35px, #fbbf24 35px, #fbbf24 36px)",
              }}
            >
              {/* Margin line */}
              <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-red-300" />

              <div className="relative z-10 text-center pl-8">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-block mb-4 text-6xl"
                >
                  🎉
                </motion.div>

                <h3 
                  className="text-3xl md:text-4xl font-black mb-4 text-gray-800"
                  style={{ 
                    fontFamily: "'Fredoka', cursive",
                  }}
                >
                  Ready to Make Magic? ✨
                </h3>

                <p 
                  className="text-gray-700 text-lg mb-8"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  Join hundreds of amazing partners helping kids! 🌟
                </p>

                <motion.button
                  whileHover={{ scale: 1.1, rotate: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 text-white font-black text-xl rounded-full shadow-[8px_8px_0_rgba(0,0,0,0.2)] border-4 border-white hover:shadow-[12px_12px_0_rgba(0,0,0,0.25)] transition-all"
                  style={{ fontFamily: "'Fredoka', cursive" }}
                >
                  <span className="text-2xl">🚀</span>
                  Become a Partner!
                  <span className="text-2xl">💪</span>
                </motion.button>
              </div>

              {/* Doodle decorations on paper */}
              <div className="absolute top-4 right-4 text-3xl opacity-30">⭐</div>
              <div className="absolute bottom-4 left-24 text-2xl opacity-30">💖</div>
              <div className="absolute bottom-8 right-8 text-3xl opacity-30">🌈</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scattered alphabet letters */}
      {['A', 'B', 'C', '1', '2', '3'].map((letter, i) => (
        <motion.div
          key={i}
          className="absolute text-6xl font-black opacity-10 hidden xl:block"
          style={{
            fontFamily: "'Fredoka', cursive",
            left: `${15 + i * 15}%`,
            top: `${10 + (i % 2) * 70}%`,
            color: ['#FF6B6B', '#4ECDC4', '#FFE66D', '#95E1D3', '#F38181', '#AA96DA'][i],
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        >
          {letter}
        </motion.div>
      ))}
    </section>
  );
}