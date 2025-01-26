import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import About from './pages/About';
import ContactP from './pages/Contact';
import Quote from './pages/Quote';
import Footer from './components/Footer';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactP />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;