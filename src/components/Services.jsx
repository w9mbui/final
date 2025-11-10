import React from 'react';
import '../index.css';
import servicesBg from '../assets/other.jpg'; 

const Services = () => {
  return (
    <>
      {/* Navbar - same as Home */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <div className="logo-icon">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
            <span className="logo-text">Daktuuur</span>
          </div>
          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/services">Services</a>
            <a href="/doctors">Doctors</a>
            <a href="/wellness">Wellness</a>
            <a href="/contact">Contact</a>
          </div>
          <button className="book-btn">Book Appointment</button>
          <button className="mobile-menu">Menu</button>
        </div>
      </nav>

      {/* Services Hero with Background Image */}
      <section className="services-modern">
        <div className="services-overlay"></div>
        <img src={servicesBg} alt="Modern Clinic Entrance" className="services-bg-img" />

        <div className="services-modern-content">
          <h1 className="services-main-title">Services</h1>
          <p className="services-main-subtitle">
            Comprehensive healthcare solutions tailored to your needs—delivered by experts, available anytime.
          </p>

          <div className="services-cards-grid">
            {/* Flu Season */}
            <div className="service-modern-card flu-card">
              <span className="card-tag">Flu Season</span>
              <h3>Book Your Stress-Free Flu Shot Today</h3>
              <div className="feature-item">
                <span className="arrow-icon">-</span>
                <div>
                  <strong>Easy Online Booking</strong>
                  <p>Schedule your flu shot in minutes through our user-friendly booking system. No waiting, no hassle.</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="arrow-icon">-</span>
                <div>
                  <strong>Walk-In Appointments Available</strong>
                  <p>Visit us anytime during business hours for a quick and convenient flu shot—no prior booking required.</p>
                </div>
              </div>
              <button className="check-details-btn">Check Details</button>
            </div>

            {/* School Year */}
            <div className="service-modern-card school-card">
              <span className="card-tag">One medical kids</span>
              <h3>A Healthy School Year Starts Here</h3>
              <div className="feature-item">
                <span className="arrow-icon">-</span>
                <div>
                  <strong>Vaccinations For Kids</strong>
                  <p>Protect your child from seasonal illnesses with our back-to-school vaccination packages.</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="arrow-icon">-</span>
                <div>
                  <strong>Annual Health Checkups</strong>
                  <p>Start the school year strong with a comprehensive health checkup for your kids, tailored to their needs.</p>
                </div>
              </div>
              <button className="check-details-btn">Check Details</button>
            </div>

            {/* Pharmacy */}
            <div className="service-modern-card pharmacy-card">
              <span className="card-tag">Amazon pharmacy</span>
              <h3>Finally, A Pharmacy That Really Delivers</h3>
              <div className="feature-item">
                <span className="arrow-icon">-</span>
                <div>
                  <strong>Fast & Reliable Delivery</strong>
                  <p>Get your medications delivered straight to your doorstep with our quick and secure service.</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="arrow-icon">-</span>
                <div>
                  <strong>Easy Prescription Refills</strong>
                  <p>Refill your prescriptions with just a few clicks, ensuring you never run out of essential medicines.</p>
                </div>
              </div>
              <button className="check-details-btn">Check Details</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;