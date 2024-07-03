// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Interaction from './components/Interaction';
import Blog from './components/Blog';
import Contact from './components/Contact';
import About from './components/About'; // Import the About component
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/interaction" element={<Interaction />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} /> {/* Add About route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
