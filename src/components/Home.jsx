import React from 'react';
import '../index.css';
import heroImage from '../assets/hosi.jpg';

const Home = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <div className="logo-icon">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <span className="logo-text">The Haven Hospital</span>
          </div>

          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/services">Services</a>
            <a href="/doctors">Doctors</a>
            <a href="/contact">Contact</a>
          </div>

          <button className="book-btn">Book Appointment</button>
          <button className="mobile-menu">Menu</button>
        </div>
      </nav>

      <section className="hero">
        <img src={heroImage} alt="Doctor consulting patients" className="hero-bg" />
        <div className="overlay"></div>

        <div className="hero-content">
          <h1 className="hero-title">
            Redefining<br />
            <span>Modern Wellness</span>
          </h1>
          <p className="hero-text">
            Experience a new era of personalized healthcare — from instant doctor consultations 
            to long-term wellness guidance. Wherever you are, The Haven Hospital is with you.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Start Consultation</button>
            <button className="btn-secondary">Explore Wellness Programs</button>
          </div>
        </div>

      </section>
    </>
  );
};

export default Home;