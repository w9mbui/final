import React from 'react';
import '../index.css';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <div className="logo-icon">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
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
          <Link to="/book-appointment">
          <button className="book-btn">Book Appointment</button> </Link>
          
        </div>
      </nav>

      <section className="contact-hero">
        <div className="contact-map">
          <iframe
            title="Daktuuur Clinic Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.791761760704!2d36.815541!3d-1.292066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f172d7a8b8b8d%3A0x8b8b8b8b8b8b8b8b!2sThe%20Nairobi%20Hospital!5e0!3m2!1sen!2ske!4v1698765432100"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className="map-overlay">
            <h2>Contact Us</h2>
            <p>Wingy Seachells Road, Nairobi, Kenya</p>
          </div>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-container">
          <h2 className="contact-title">Contacts</h2>

          <div className="contact-grid">
            <div className="contact-form">
              <form>
                <p className="form-instruction">
                  Fill in the form below with your information and inquiry.
                </p>

                <div className="form-group">
                  <input type="text" placeholder="Your Name (required)" required />
                  <span className="required-hint">This field is required</span>
                </div>

                <div className="form-group">
                  <input type="email" placeholder="Your Email (required)" required />
                </div>

                <div className="form-group">
                  <input type="text" placeholder="Subject (required)" required />
                </div>

                <div className="form-group">
                  <textarea placeholder="Your Message (required)" rows="5" required></textarea>
                </div>

                <button type="submit" className="submit-btn">Submit</button>
              </form>
            </div>

            <div className="contact-sidebar">
              <div className="sidebar-card hours-card">
                <div className="card-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13h-1v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                </div>
                <h3>VISITING HOURS</h3>
                <p><strong>Monday - Sunday</strong></p>
                <p><strong>Morning:</strong> 8:00am – 1:00pm</p>
                <p><strong>Afternoon:</strong> 2:00pm – 5:00pm</p>
              </div>


              <div className="sidebar-card appt-card">
                <div className="card-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V8h14v12z"/>
                  </svg>
                </div>
                <h3>APPOINTMENTS</h3>
                <p>
                  To book an appointment please call <strong>0703 666 000</strong> or send an email to
                  <br />
                  <a href="mailto:hospital@daktuuur.co.ke">hospital@thehavenhospital.co.ke</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="how-to-get">
        <div className="how-to-container">
          <h2 className="how-to-title">How to get here</h2>

          <div className="how-to-grid">
            
            <div className="how-to-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12h3m9 0h6M5 7h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z"/>
                  <circle cx="7.5" cy="12" r="1.5"/>
                  <circle cx="16.5" cy="12" r="1.5"/>
                </svg>
              </div>
              <h3>PARKING SPACES</h3>
              <p>We have ample parking space where your car will be safe.</p>
            </div>

            <div className="how-to-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="14" rx="2"/>
                  <path d="M16 8h.01M8 8h.01M7 16h10"/>
                  <circle cx="7" cy="16" r="1"/>
                  <circle cx="17" cy="16" r="1"/>
                </svg>
              </div>
              <h3>BUS ROUTES</h3>
              <p>
                The hospital is accessible by public means.
                <br />
                Board a number <strong>46 bus</strong> from Lutho House along Moana Avenue. The bus will drop you right at the hospital gate.
              </p>
            </div>

            <div className="how-to-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <circle cx="12" cy="12" r="4"/>
                  <path d="M4 12h8m4 0h4"/>
                  <path d="M12 4v4m0 8v4"/>
                </svg>
              </div>
              <h3>ACCESSIBILITY</h3>
              <p>We have ramps around the hospital for easy accessibility.</p>
            </div>
          </div>

         
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
