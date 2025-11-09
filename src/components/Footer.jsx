import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  function handleSubmit() {
    if (email && email.includes('@')) {
      console.log("subscribe:", email);
      setEmail("");
      alert("Thanks — you are subscribed!");
    } else {
      alert("Please enter a valid email address!");
    }
  }

  return (
    <footer className="relative bg-gray-800 text-white overflow-hidden">
      {/* Playful Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 text-6xl rotate-12">✏️</div>
        <div className="absolute top-32 right-32 text-5xl -rotate-12">📚</div>
        <div className="absolute bottom-20 left-40 text-4xl rotate-45">🖍️</div>
        <div className="absolute bottom-40 right-20 text-5xl -rotate-6">✨</div>
        <div className="absolute top-1/2 left-1/4 text-3xl">🎨</div>
        <div className="absolute top-1/3 right-1/4 text-4xl rotate-12">📝</div>
      </div>

      {/* Torn Paper Effect Top Border */}
      <div className="w-full h-4 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300" 
           style={{
             clipPath: 'polygon(0 0, 5% 100%, 10% 0, 15% 100%, 20% 0, 25% 100%, 30% 0, 35% 100%, 40% 0, 45% 100%, 50% 0, 55% 100%, 60% 0, 65% 100%, 70% 0, 75% 100%, 80% 0, 85% 100%, 90% 0, 95% 100%, 100% 0, 100% 100%, 0 100%)'
           }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">

          {/* Company Info with Crayon Style */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border-2 border-dashed border-yellow-400/50 transform -rotate-1">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/Magic Bus Logo - Usage As Per Background-02.png"
                  alt="Magic Bus Logo"
                  className="w-auto h-20 object-contain"
                />
                <span className="font-black text-2xl tracking-tight" 
                      style={{fontFamily: 'Comic Sans MS, cursive'}}>
                  Magic Bus
                </span>
              </div>
              <p className="text-gray-200 text-sm leading-relaxed"
                 style={{fontFamily: 'Comic Sans MS, cursive'}}>
                Transforming lives through tech-led youth development programs across India! 🚌✨
              </p>
            </div>

            {/* Social Icons with Playful Style */}
            <div className="flex gap-3 flex-wrap">
              {[
                { icon: "📘", label: "facebook", bg: "bg-blue-500" },
                { icon: "🐦", label: "twitter", bg: "bg-sky-400" },
                { icon: "📷", label: "instagram", bg: "bg-pink-500" },
                { icon: "💼", label: "linkedin", bg: "bg-blue-600" }
              ].map((social, idx) => (
                <div
                  key={idx}
                  className={`w-12 h-12 ${social.bg} rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-lg border-3 border-white transform ${idx % 2 === 0 ? 'rotate-6' : '-rotate-6'}`}
                  role="button"
                  aria-label={social.label}
                >
                  <span className="text-xl">{social.icon}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links with Notebook Style */}
          <div className="bg-gradient-to-br from-yellow-50/10 to-yellow-100/10 p-6 rounded-lg border-l-4 border-red-400 transform rotate-1">
            <h4 className="font-black text-2xl mb-6 text-yellow-300 relative inline-block"
                style={{fontFamily: 'Comic Sans MS, cursive'}}>
              Quick Links
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-yellow-300 transform -skew-x-12"></span>
            </h4>
            <ul className="space-y-3">
              {["About Us", "Our Programs", "Impact Stories", "Partner With Us", "Careers", "Contact"].map((link, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-yellow-400 font-bold">→</span>
                  <a href="#" 
                     className="text-gray-200 hover:text-yellow-300 transition-colors text-sm font-medium"
                     style={{fontFamily: 'Comic Sans MS, cursive'}}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs with Crayon Box Style */}
          <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 p-6 rounded-lg border-2 border-dashed border-orange-400 transform -rotate-1">
            <h4 className="font-black text-2xl mb-6 text-orange-300 relative"
                style={{fontFamily: 'Comic Sans MS, cursive'}}>
              Our Programs 🎯
            </h4>
            <ul className="space-y-3">
              {[
                "Adolescent Program",
                "Livelihood Program", 
                "Digital Skilling",
                "Magic Mitra AI",
                "Youth Fellowship",
                "Employee Volunteering"
              ].map((program, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-2xl">{["🌟", "💼", "💻", "🤖", "🎓", "🤝"][idx]}</span>
                  <a href="#" 
                     className="text-gray-200 hover:text-orange-300 transition-colors text-sm font-medium"
                     style={{fontFamily: 'Comic Sans MS, cursive'}}>
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter with Post-it Style */}
          <div className="space-y-6">
            <div className="bg-yellow-200 text-gray-800 p-6 rounded-lg shadow-xl transform rotate-2 border-b-4 border-yellow-400">
              <h4 className="font-black text-2xl mb-5 text-gray-800"
                  style={{fontFamily: 'Comic Sans MS, cursive'}}>
                Get In Touch! 📬
              </h4>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📍</span>
                  <div style={{fontFamily: 'Comic Sans MS, cursive'}}>
                    <p className="font-bold">Magic Bus India Foundation</p>
                    <p>Mumbai, Maharashtra, India</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📞</span>
                  <p style={{fontFamily: 'Comic Sans MS, cursive'}}>+91 22 6749 3200</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✉️</span>
                  <p style={{fontFamily: 'Comic Sans MS, cursive'}}>info@magicbus.org</p>
                </div>
              </div>
            </div>

            {/* Newsletter with Handwritten Style */}
            <div className="bg-white/10 backdrop-blur-sm p-5 rounded-lg border-2 border-green-400 transform -rotate-1">
              <h5 className="font-black text-lg mb-3 text-green-300"
                  style={{fontFamily: 'Comic Sans MS, cursive'}}>
                Stay Updated! 📰
              </h5>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email here..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                  className="w-full px-4 py-3 bg-white text-gray-800 border-3 border-gray-800 rounded-lg text-sm font-medium placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-yellow-400"
                  style={{fontFamily: 'Comic Sans MS, cursive'}}
                  aria-label="email"
                />
                <button
                  onClick={handleSubmit}
                  className="w-full px-4 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg font-black hover:from-red-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg border-2 border-white"
                  style={{fontFamily: 'Comic Sans MS, cursive'}}
                >
                  Subscribe Now! 🎉
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Doodle Style */}
        <div className="border-t-4 border-dashed border-white/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-300 text-sm font-medium"
               style={{fontFamily: 'Comic Sans MS, cursive'}}>
              © {new Date().getFullYear()} Magic Bus India Foundation. Made with 💛
            </p>
            <div className="flex gap-6 text-sm flex-wrap justify-center">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link, idx) => (
                <a key={idx}
                   href="#" 
                   className="text-gray-300 hover:text-yellow-300 transition-colors font-medium underline decoration-wavy decoration-yellow-400"
                   style={{fontFamily: 'Comic Sans MS, cursive'}}>
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Crayon Border */}
      <div className="w-full h-3 bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-400"></div>
    </footer>
  );
}