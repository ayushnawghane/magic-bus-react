import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./index.css";
import Home from './pages/Home'
import OurApproach from './pages/OurApproach'
import DonateNow from './pages/DonateNow';
import ContactUs from './pages/ContactUs';
import PartnerWithUs from './pages/PartnerWithUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-approach" element={<OurApproach />} />
        <Route path="/donate" element={<DonateNow />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/partner" element={<PartnerWithUs />} />
      </Routes>
    </Router>
  )
}

export default App
