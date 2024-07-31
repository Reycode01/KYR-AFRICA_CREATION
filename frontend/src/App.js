// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Timeline from './components/Timeline';
import QnA from './components/QnA';
import Home from './pages/Home';
import About from './pages/About'; // Ensure this path is correct
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/qna" element={<QnA />} />
          {/* Add more routes as necessary */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
