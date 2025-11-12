import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // replace with real subscription logic (API call)
    console.log("subscribe:", email);
    setEmail("");
    alert("Thanks — you are subscribed!");
  }

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">

          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              {/* Put the image in public/ so src="/Magic Bus Logo - Usage As Per Background-01.png" works */}
              <img
                src="/Magic Bus Logo - Usage As Per Background-01.png"
                alt="Magic Bus Logo"
                className="w-auto h-16 object-contain"
              />
              <span className="font-bold text-xl">Magic Bus</span>
            </div>
            <p className="text-gray-300 mb-6">
              Transforming lives through tech-led youth development programs across India.
            </p>
            <div className="flex gap-4">
              <div
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition cursor-pointer"
                role="button"
                aria-label="facebook"
              >
                <span className="text-sm">📘</span>
              </div>
              <div
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition cursor-pointer"
                role="button"
                aria-label="twitter"
              >
                <span className="text-sm">🐦</span>
              </div>
              <div
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition cursor-pointer"
                role="button"
                aria-label="instagram"
              >
                <span className="text-sm">📷</span>
              </div>
              <div
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition cursor-pointer"
                role="button"
                aria-label="linkedin"
              >
                <span className="text-sm">💼</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Our Programs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Impact Stories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Partner With Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-lg mb-6">Programs</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Adolescent Program</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Livelihood Program</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Digital Skilling</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Magic Mitra AI</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Youth Fellowship</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Employee Volunteering</a></li>
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-brand-yellow mt-1">📍</span>
                <div>
                  <p className="text-gray-300 text-sm">Magic Bus India Foundation</p>
                  <p className="text-gray-300 text-sm">Mumbai, Maharashtra, India</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-brand-yellow">📞</span>
                <p className="text-gray-300 text-sm">+91 22 6749 3200</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-brand-yellow">✉️</span>
                <p className="text-gray-300 text-sm">info@magicbus.org</p>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h5 className="font-semibold mb-3">Stay Updated</h5>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:border-brand-yellow"
                  aria-label="email"
                />
                {/* <button
                  type="submit"
                  className="px-4 py-2 bg-brand-red text-white rounded-lg text-sm font-semibold hover:bg-brand-red/90 transition"
                >
                  Subscribe
                </button> */}
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Magic Bus India Foundation. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}