import React from 'react';
import '../index.css';
import img1 from '../assets/about1.jpg';
import img2 from '../assets/abour2.jpg';
import img3 from '../assets/abour3.jpg';
import img4 from '../assets/hosi.jpg';
import img5 from '../assets/about5.jpg';

import g1 from '../assets/gal1.jpg';
import g2 from '../assets/gal2.jpg';
import g3 from '../assets/gal3.jpg';
import g4 from '../assets/gal4.jpg';
import g5 from '../assets/gal5.jpg';
import g6 from '../assets/gal6.jpg';
import g7 from '../assets/gal7.jpg';
import g8 from '../assets/gal8.jpg';
import g9 from '../assets/gal9.jpg';
import g10 from '../assets/gal10.jpg';
import g11 from '../assets/gal11.jpg';
import g12 from '../assets/gal12.jpg';
import g13 from '../assets/gal13.jpg';
// import g14 from '../assets/gallery/g14.jpg';
// import g15 from '../assets/gallery/g15.jpg';
// import g16 from '../assets/gallery/g16.jpg';
// import g17 from '../assets/gallery/g17.jpg';
// import g18 from '../assets/gallery/g18.jpg';

const About = () => {
  return (
    <>
      {/* Navbar */}
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
          <button className="book-btn">Book Appointment</button>
          <button className="mobile-menu">Menu</button>
        </div>
      </nav>

      <section className="about-story-section">
        <div className="about-story-container">
          <div className="story-left">
            <h1 className="story-title">Our Story</h1>
            <p className="story-text">
              The Haven Hospital is dedicated to providing top-tier medical care with a focus on patient-centered services. Our experienced team is committed to ensuring your health and well-being. With state-of-the-art facilities and innovative treatments, we deliver comprehensive care tailored to your needs.
            </p>
            <button className="values-btn">See Our Values</button>
          </div>

          <div className="story-images">
            <img src={img1} alt="Doctor with tablet" className="story-img story-img-1" />
            <img src={img2} alt="Doctor checking patient" className="story-img story-img-2" />
          </div>
        </div>
      </section>

      <section className="vision-mission-section">
        <div className="vm-container">
          <div className="vm-images">
            <img src={img3} alt="Nurse with patient" className="vm-img vm-img-left" />
            <img src={img4} alt="Doctor with patient" className="vm-img vm-img-right" />
          </div>

          <div className="vm-cards">
            <div className="vm-card">
              <div className="vm-icon"><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#ffff"><path d="M680-326.67q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-66.66q22.67 0 38-15.34 15.33-15.33 15.33-38 0-22.66-15.33-38Q702.67-500 680-500t-38 15.33q-15.33 15.34-15.33 38 0 22.67 15.33 38 15.33 15.34 38 15.34ZM440-46.67v-116q0-21 10-39.5t28-29.5q29.33-17.66 61.17-30.16 31.83-12.5 65.5-19.84L680-186l75.33-95.67q33.67 7.34 65 19.84 31.34 12.5 60.67 30.16 18 11 28.5 29.5t10.5 39.5v116H440Zm66.33-66.66H652L579.33-206q-19.33 7-37.66 16-18.34 9-35.34 19.33v57.34Zm201.67 0h145.33v-57.34q-16.66-10.66-34.66-19.5-18-8.83-37.34-15.83L708-113.33Zm-56 0Zm56 0ZM186.67-120q-27.5 0-47.09-19.58Q120-159.17 120-186.67v-586.66q0-27.5 19.58-47.09Q159.17-840 186.67-840h586.66q27.5 0 47.09 19.58Q840-800.83 840-773.33V-542q-12.67-20-29-37.33-16.33-17.34-37.67-28v-166H186.67v586.66h188.66q-1 6-1.5 12t-.5 12V-120H186.67ZM280-613.33h320.67q18-10 38.22-15 20.23-5 41.11-5V-680H280v66.67Zm0 166.66h213.33q0-17 3.17-34t9.17-32.66H280v66.66ZM280-280h151.33q15-11.67 31.84-19.67 16.83-8 34.5-15.33v-31.67H280V-280Zm-93.33 93.33v-586.66 165.66-25.66V-186.67Zm493.33-260Z"/></svg></div>
              <h3>Vision</h3>
              <p>
                To be the leading healthcare provider, recognized for exceptional patient care,
                advanced medical technologies, and commitment to improving the health of our
                community.
              </p>
            </div>

            <div className="vm-card">
              <div className="vm-icon"><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#ffff"><path d="M253.27-80Q198-80 159-119.05q-39-39.05-39-94.28v-333q-25-24-52.5-50.5T40-660.67q0-24.27 17.53-41.8Q75.06-720 99.33-720q16.67 0 29.84 8.33 13.16 8.34 24.16 20 11-11.66 24.5-20 13.5-8.33 29.5-8.33 24.28 0 41.81 17.53t17.53 41.8q0 37.34-27.5 63.84t-52.5 50.5v333q0 27.77 19.42 47.22 19.42 19.44 47.16 19.44 27.75 0 47.25-19.44 19.5-19.45 19.5-47.22v-470q0-81.62 57.54-139.15Q435.07-880 516.7-880t139.13 57.52q57.5 57.53 57.5 139.15v6q71 12 118.84 67.49Q880-554.34 880-480v200q0 83-58.5 141.5T680-80q-83 0-141.5-58.5T480-280v-200q0-74.34 47.83-129.84 47.84-55.49 118.84-67.49v-6q0-54.67-37.67-92.34-37.67-37.66-92.33-37.66-54.67 0-92.34 37.66-37.66 37.67-37.66 92.34v470q0 55.23-39.07 94.28Q308.53-80 253.27-80Zm426.57-66.67q55.49 0 94.49-38.89 39-38.88 39-94.44v-200q0-55.56-38.84-94.44-38.84-38.89-94.33-38.89-55.49 0-94.49 38.89-39 38.88-39 94.44v200q0 55.56 38.84 94.44 38.84 38.89 94.33 38.89ZM680-360q-33 0-56.5 23.5T600-280q0 33 23.5 56.5T680-200q33 0 56.5-23.5T760-280q0-33-23.5-56.5T680-360Zm0 80Z"/></svg></div>
              <h3>Mission</h3>
              <p>
                To provide compassionate, high-quality healthcare services that are accessible to
                all. We strive to enhance the well-being of our patients through innovative
                treatments, personalized care, and a patient-centered approach.
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr />

      <section className="about-gallery-section">
        <h1 className="story-title">Our <i>Hospital</i></h1>

        <div className="gallery-container">
          <div className="gallery-grid">
            <img src={g1} alt="" className="gallery-img g1" />
            <img src={g2} alt="" className="gallery-img g2" />
            <img src={g3} alt="" className="gallery-img g3" />
            <img src={g4} alt="" className="gallery-img g4" />
            <img src={g5} alt="" className="gallery-img g5" />
            <img src={g6} alt="" className="gallery-img g6" />
            <img src={g7} alt="" className="gallery-img g7" />
            <img src={g8} alt="" className="gallery-img g8" />
            <img src={g9} alt="" className="gallery-img g9" />
            <img src={g10} alt="" className="gallery-img g10" />
            <img src={g11} alt="" className="gallery-img g11" />
            <img src={g12} alt="" className="gallery-img g12" />
            <img src={g13} alt="" className="gallery-img g13" /> 
            <img src={g14} alt="" className="gallery-img g14" />
            <img src={g15} alt="" className="gallery-img g15" />
            <img src={g16} alt="" className="gallery-img g16" />
            <img src={g17} alt="" className="gallery-img g17" />
            <img src={g18} alt="" className="gallery-img g18" /> 
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
