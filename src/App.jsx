import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ErrorPage from './pages/error';
import Footer from './components/footer'; // Importing the Footer component

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer /> {/* Adding the Footer component */}
      </div>
    </Router>
  );
}

export default App;
