import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./index.css";
import Home from './pages/Home'
import OurApproach from './pages/OurApproach'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-approach" element={<OurApproach />} />
      </Routes>
    </Router>
  )
}

export default App
