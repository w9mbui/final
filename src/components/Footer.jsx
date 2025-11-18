
import React from 'react';
import '../index.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-logo-section">
          <div className="logo-icon">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          <h3 className="footer-brand">The Haven Hospital</h3>
        </div>


        <div className="footer-links">
          <div className="footer-column">
            <h4>About Us</h4>
            <ul>
              <li><a href="/about#mission">Mission</a></li>
              <li><a href="/about#team">Team</a></li>
              <li><a href="/newsletter">Newsletter</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/refund">Refund Policy</a></li>
              <li><a href="/faq">FAQ's</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Social</h4>
            <ul>
              <li><a href="https://instagram.com">Instagram</a></li>
              <li><a href="https://linkedin.com">LinkedIn</a></li>
              <li><a href="https://youtube.com">YouTube</a></li>
            </ul>
          </div>
        </div>
      </div>


      <div className="footer-divider"></div>


      <div className="footer-bottom">
        <p>Copyright © The Haven Hopital</p>
        <a href="/terms">Terms of Service</a>
        <a href="#" className="back-to-top">
          Back to top
          <svg viewBox="0 0 24 24" className="arrow-up">
            <path d="M12 5l-7 7h4v8h6v-8h4l-7-7z" fill="currentColor"/>
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;