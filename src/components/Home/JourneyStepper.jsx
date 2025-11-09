import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Building Strong Roots",
    desc: "Fun learning for kids aged 11–18! We teach life skills & help them grow confident.",
    emoji: "🌱",
    color: "#FFB6C1",
    crayon: "#FF1493",
  },
  {
    id: 2,
    title: "Learning Super Skills",
    desc: "Communication, leadership & becoming awesome at everything!",
    emoji: "🎯",
    color: "#87CEEB",
    crayon: "#1E90FF",
  },
  {
    id: 3,
    title: "Tech & Job Training",
    desc: "Learning cool computer skills and getting ready for amazing careers!",
    emoji: "💻",
    color: "#98D8C8",
    crayon: "#20B2AA",
  },
  {
    id: 4,
    title: "Finding Dream Jobs",
    desc: "Career help & finding the perfect job that makes them happy!",
    emoji: "💼",
    color: "#FFD700",
    crayon: "#FF8C00",
  },
  {
    id: 5,
    title: "Forever Friends",
    desc: "Joining our family of successful graduates who help each other always!",
    emoji: "🌟",
    color: "#DDA0DD",
    crayon: "#9370DB",
  },
];

const fade = (i) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px -10% 0px" },
  transition: { delay: 0.1 * i, duration: 0.5, ease: "easeOut" },
});

export default function JourneyZigzagAnimated() {
  return (
    <section 
      className="py-16 md:py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #F5F3E8 0%, #E8F5E9 50%, #FFE4D6 100%)",
      }}
    >
      {/* Paper texture */}
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative elements */}
      <motion.div
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-16 text-6xl hidden xl:block opacity-60"
      >
        📚
      </motion.div>

      <motion.div
        animate={{ rotate: [0, -5, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-20 text-5xl hidden xl:block opacity-60"
      >
        ✏️
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-flex items-center gap-2 mb-4 px-5 py-2 bg-white rounded-full shadow-lg border-3 border-dashed border-green-400"
          >
            <span className="text-2xl">🚀</span>
            <span 
              className="text-green-600 font-bold text-sm tracking-wide uppercase"
              style={{ fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive" }}
            >
              Our Journey
            </span>
          </motion.div>

          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 mb-5"
            style={{ 
              fontFamily: "'Fredoka', 'Baloo 2', 'Comic Sans MS', cursive",
              textShadow: "3px 3px 0 rgba(255,255,255,0.8), -1px -1px 0 rgba(0,0,0,0.05)"
            }}
          >
            <span className="text-orange-500">From Kids</span>{" "}
            <span className="text-blue-500">To Champions!</span>
          </h2>
          
          <p 
            className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Quicksand', 'Arial Rounded MT Bold', sans-serif" }}
          >
            Follow our 5-step adventure that helps young minds grow into successful adults! 🎈
          </p>
        </div>

        {/* Journey Steps */}
        <div className="relative">
        {/* Connecting path - positioned to align with circle centers */}
        <svg
          className="pointer-events-none absolute inset-0 w-full hidden lg:block"
          style={{ height: "520px", top: "20px", zIndex: 0 }} // moved up further and taller
          viewBox="0 0 1000 450" // increased viewBox height to give room
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <motion.path
            // raised Y coordinates and extended start/end to the sides
            d="M 40 40
              Q 160 20, 240 70
              Q 320 140, 420 90
              Q 560 10, 660 120
              Q 700 150, 750 120
              Q 820 80, 900 40"
            stroke="#FF69B4"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="10 6"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.55 }}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 0.45 }}
            style={{ willChange: "stroke-dashoffset, opacity" }}
          />
        </svg>



          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative pt-6">
            {steps.map((s, i) => {
              const isDown = i % 2 === 1;
              return (
                <motion.div
                  key={s.id}
                  {...fade(i)}
                  className={`relative flex flex-col items-center ${
                    isDown ? "lg:mt-20" : "lg:mt-0"
                  }`}
                >
                  {/* Tape at top */}
                  <div 
                    className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-6 bg-yellow-200/70 backdrop-blur-sm rounded-sm z-30 shadow-sm"
                    style={{
                      transform: `translateX(-50%) rotate(${i % 2 === 0 ? '-2deg' : '2deg'})`,
                      boxShadow: "inset 0 1px 2px rgba(0,0,0,0.1)",
                    }}
                  />

                  {/* Circle badge with icon - centered alignment */}
                  <div className="relative z-20 mb-4 flex items-center justify-center">
                    {/* Dashed circle border */}
                    <svg className="absolute w-[130px] h-[130px]" viewBox="0 0 100 100">
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="44"
                        fill="none"
                        stroke={s.crayon}
                        strokeWidth="2.5"
                        strokeDasharray="4,4"
                        initial={{ pathLength: 0, rotate: -90 }}
                        whileInView={{ pathLength: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15, duration: 0.8, ease: "easeOut" }}
                      />
                    </svg>

                    {/* Main icon circle */}
                    <motion.div
                      whileHover={{ scale: 1.08, rotate: 3 }}
                      animate={{ y: [0, -6, 0] }}
                      transition={{ 
                        y: { duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut" },
                        hover: { duration: 0.2 }
                      }}
                      className="relative w-[90px] h-[90px] rounded-full grid place-items-center shadow-[5px_5px_0_rgba(0,0,0,0.12)] border-4 border-white"
                      style={{
                        backgroundColor: s.color,
                      }}
                    >
                      <span className="text-4xl" style={{ marginTop: "-2px" }}>{s.emoji}</span>
                      
                      {/* Step number badge - top right */}
                      <div 
                        className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-white border-3 grid place-items-center shadow-md"
                        style={{ 
                          borderColor: s.crayon,
                        }}
                      >
                        <span 
                          className="font-black text-base"
                          style={{ 
                            color: s.crayon,
                            fontFamily: "'Fredoka', cursive"
                          }}
                        >
                          {s.id}
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="w-full bg-white rounded-2xl p-5 shadow-[4px_4px_0_rgba(0,0,0,0.08)] border-3 relative overflow-hidden"
                    style={{
                      background: "linear-gradient(135deg, #FFFEF9 0%, #FFF9F0 100%)",
                      borderColor: s.color,
                    }}
                  >
                    {/* Content */}
                    <div className="relative z-10">
                      <h3 
                        className="text-lg md:text-xl font-black mb-2 leading-tight text-center"
                        style={{ 
                          fontFamily: "'Fredoka', 'Comic Sans MS', cursive",
                          color: s.crayon,
                        }}
                      >
                        {s.title}
                      </h3>

                      <p 
                        className="text-gray-700 text-sm leading-relaxed text-center"
                        style={{ fontFamily: "'Quicksand', sans-serif" }}
                      >
                        {s.desc}
                      </p>

                      {/* Arrow to next step */}
                      {i < steps.length - 1 && (
                        <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 z-30">
                          <motion.svg 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
                          >
                            <path
                              d="M5 12h14m-6-6l6 6-6 6"
                              stroke={s.crayon}
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </motion.svg>
                        </div>
                      )}
                    </div>

                    {/* Corner fold */}
                    <div 
                      className="absolute bottom-0 right-0 w-7 h-7"
                      style={{
                        background: "linear-gradient(225deg, #D1D5DB 0%, #E5E7EB 100%)",
                        clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
                      }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12 md:mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.06, rotate: -1 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-orange-400 via-pink-500 to-orange-500 text-white font-black text-lg rounded-full shadow-[6px_6px_0_rgba(0,0,0,0.15)] border-4 border-white hover:shadow-[8px_8px_0_rgba(0,0,0,0.2)] transition-all"
              style={{ fontFamily: "'Fredoka', cursive" }}
            >
              <span className="text-2xl">🎉</span>
              See How It Works!
              <span className="text-2xl">→</span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative crayons */}
      <div className="absolute bottom-10 left-8 hidden lg:block">
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-20 h-4 bg-red-500 rounded-full shadow-lg"
          style={{ transform: "rotate(25deg)" }}
        />
      </div>
      
      <div className="absolute bottom-16 right-12 hidden lg:block">
        <motion.div
          animate={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-16 h-4 bg-blue-500 rounded-full shadow-lg"
          style={{ transform: "rotate(-35deg)" }}
        />
      </div>
    </section>
  );
}