import React from 'react';
import './footer.css'; // Import the CSS file for footer styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="https://github.com/lelisiario" target="_blank" rel="noopener noreferrer" className="footer-link">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/laurenelisiario/" target="_blank" rel="noopener noreferrer" className="footer-link">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://x.com/BeachsideWebDev" target="_blank" rel="noopener noreferrer" className="footer-link">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
      <div className="footer-text">
        &copy; {new Date().getFullYear()} Beachside Web Development. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
