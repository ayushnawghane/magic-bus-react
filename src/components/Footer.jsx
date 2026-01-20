import { useState } from "react";
import { Instagram, Linkedin, Youtube } from "lucide-react";

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
              <li>Our Approach</li>
              <li>Our Team</li>
              <li>Our Culture</li>
              <li>Board of Directors</li>
            </ul>
          </div>

          {/* PROGRAMMES */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-2 border-b border-white/10 pb-1">
              Programmes
            </h4>

            <p className="font-semibold text-white mt-2">Adolescent Programme</p>
            <ul className="space-y-1">
              <li>Government Partnership Programme</li>
              <li>Youth for Change Fellowship Programme</li>
              <li>MB Dost</li>
            </ul>

            <p className="font-semibold text-white mt-3">Livelihood Programme</p>
            <ul className="space-y-1">
              <li>Standard Skilling</li>
              <li>Digital Skilling</li>
              <li>Rural Youth Livelihoods</li>
              <li>Employee Volunteering Program</li>
              <li>Future X</li>
            </ul>
          </div>

          {/* PARTNERS */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-2 border-b border-white/10 pb-1">
              Partners
            </h4>
            <ul className="space-y-1">
              <li>Corporate Partners</li>
              <li>Foundations & Institutions</li>
              <li>Government Partners</li>
              <li>Knowledge Partners</li>
              <li>Employment Partners</li>
              <li>Partner Connect</li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-2 border-b border-white/10 pb-1">
              Resources
            </h4>

            <p className="font-semibold text-white mt-2">Reports & Publications</p>
            <ul className="space-y-1">
              <li>Impact Reports</li>
              <li>Annual Reports</li>
              <li>Gender Journey Report</li>
              <li>FLFPR Report</li>
            </ul>

            <p className="font-semibold text-white mt-3">Media & Stories</p>
            <ul className="space-y-1">
              <li>News</li>
              <li>Blogs</li>
              <li>Podcast</li>
              <li>Web Stories</li>
              <li>Success Stories</li>
              <li>Testimonials</li>
              <li>Awards</li>
            </ul>
          </div>

          {/* INTERNATIONAL PRESENCE */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-2 border-b border-white/10 pb-1">
              International Presence
            </h4>
            <ul className="space-y-1 mb-3">
              <li>Magic Bus USA</li>
              <li>Magic Bus UK</li>
            </ul>

            <p className="font-semibold text-white">India Locations</p>
            <ul className="space-y-1">
              <li>Mumbai</li>
              <li>Hyderabad</li>
              <li>Kolkata</li>
              <li>Noida</li>
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
              <Instagram className="w-4 h-4" />
              <Linkedin className="w-4 h-4" />
              <Youtube className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="bg-gray-800 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Magic Bus. All rights reserved.</p>
          <div className="flex gap-4">
            <a>Privacy Policy</a>
            <a>Terms & Conditions</a>
            <a>POSH Policy</a>
            <a>Child Protection Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
