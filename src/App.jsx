import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./index.css";
import Home from './pages/Home'
import AboutUs from './pages/AboutUs';
import WhoWeAre from './pages/WhoWeAre';
import OurTeam from './pages/OurTeam';
import OurCulture from './pages/OurCulture';
import OurApproach from './pages/OurApproach'
import DonateNow from './pages/DonateNow';
import ContactUs from './pages/ContactUs';
import PartnerWithUs from './pages/PartnerWithUs';
import Blogs from './pages/Blogs';
import News from './pages/News';
import Certifications from './pages/Certifications';
import Reports from './pages/Reports';
import ImpactReports from './pages/ImpactReports';
import AnnualReports from './pages/AnnualReports';
import GenderJourneyReport from './pages/GenderJourneyReport';
import FLFPRReport from './pages/FLFPRReport';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/our-culture" element={<OurCulture />} />
        {/* <Route path="/our-approach" element={<OurApproach />} />
        <Route path="/donate" element={<DonateNow />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/partner" element={<PartnerWithUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/news" element={<News />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/impact-reports" element={<ImpactReports />} />
        <Route path="/annual-reports" element={<AnnualReports />} />
        <Route path="/gender-journey-report" element={<GenderJourneyReport />} />
        <Route path="/flfpr-report" element={<FLFPRReport />} />
        <Route path="/gallery" element={<Gallery />} /> */}
      </Routes>
    </Router>
  )
}

export default App
