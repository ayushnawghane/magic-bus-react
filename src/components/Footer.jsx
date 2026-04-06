import { useState } from "react";
import { Instagram, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setEmail("");
  }

  return (
    <footer className="bg-gray-900 text-gray-300 text-xs">
      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 items-start">

          {/* ABOUT US */}
          <div>
          <h4 className="text-sm font-semibold text-white mb-2 border-b border-white/10 pb-1">
              About Us
            </h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-white transition-colors">Our Approach</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Culture</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Board of Directors</a></li>
            </ul>
          </div>

          {/* PROGRAMMES */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-2 border-b border-white/10 pb-1">
              Programmes
            </h4>

            <p className="font-semibold text-white mt-2">Adolescent Programme</p>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-white transition-colors">Government Partnership Programme</a></li>
              <li><Link to="/youth-for-change-fellowship-programme" className="hover:text-white transition-colors">Youth for Change Fellowship Programme</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">MB Dost</a></li>
            </ul>

            <p className="font-semibold text-white mt-3">Livelihood Programme</p>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-white transition-colors">Standard Skilling</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Digital Skilling</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Rural Youth Livelihoods</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Future X</a></li>
            </ul>

            <p className="font-semibold text-white mt-3"><Link to="/employee-volunteering" className="hover:text-white transition-colors">Employee Volunteering Programme</Link></p>
          </div>

          {/* PARTNERS */}
          <div>
          <h4 className="text-sm font-semibold text-white mb-2 border-b border-white/10 pb-1">
              Partners
            </h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-white transition-colors">Corporate Partners</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Foundations & Institutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Government Partners</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Knowledge Partners</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Employment Partners</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partner Connect</a></li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-2 border-b border-white/10 pb-1">
              Resources
            </h4>

            <p className="font-semibold text-white mt-2">Reports & Publications</p>
            <ul className="space-y-1">
              <li><Link to="/impact-reports" className="hover:text-white transition-colors">Impact Reports</Link></li>
              <li><Link to="/annual-reports" className="hover:text-white transition-colors">Annual Reports</Link></li>
              <li><Link to="/gender-journey-report" className="hover:text-white transition-colors">Gender Journey Report</Link></li>
              <li><Link to="/flfpr-report" className="hover:text-white transition-colors">FLFPR Report</Link></li>
            </ul>

            <p className="font-semibold text-white mt-3">Media & Stories</p>
            <ul className="space-y-1">
              <li><Link to="/news" className="hover:text-white transition-colors">News</Link></li>
              <li><Link to="/blogs" className="hover:text-white transition-colors">Blogs</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Podcast</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Web Stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Awards</a></li>
            </ul>
          </div>

          {/* INTERNATIONAL PRESENCE */}
          <div>
          <h4 className="text-sm font-semibold text-white mb-2 border-b border-white/10 pb-1">
              International Presence
            </h4>
            <ul className="space-y-1 mb-3">
              <li><a href="#" className="hover:text-white transition-colors">Magic Bus USA</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Magic Bus UK</a></li>
            </ul>

            <p className="font-semibold text-white">India Locations</p>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-white transition-colors">Mumbai</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hyderabad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kolkata</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Noida</a></li>
            </ul>
          </div>

          {/* CONNECT WITH US */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-2 border-b border-white/10 pb-1">
              Connect With Us
            </h4>

            <p className="leading-relaxed mb-2">
              <strong>Head Office:</strong><br />
              123 Development Street,<br />
              Mumbai, Maharashtra 400001,<br />
              India
            </p>

            <p className="mb-1">Phone: +91 22 1234 5678</p>
            <p className="mb-3">Email: info@magicbus.org</p>

            <p className="font-semibold text-white mb-1">
              Subscribe for updates
            </p>
            <form onSubmit={handleSubmit} className="space-y-1">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-2 py-1 bg-white/10 border border-white/20 rounded text-xs text-white placeholder-gray-400 focus:outline-none"
              />
              <button className="w-full bg-brand-red hover:bg-brand-red py-1 rounded text-xs font-semibold text-white">
                Subscribe
              </button>
            </form>

            <div className="flex gap-3 mt-3">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:scale-110 hover:text-pink-500 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:scale-110 hover:text-blue-600 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="hover:scale-110 hover:text-red-600 transition-all">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="bg-gray-800 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Magic Bus. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">POSH Policy</a>
            <a href="#" className="hover:text-white transition-colors">Child Protection Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
