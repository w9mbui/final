import React from "react";
import "../index.css";
import doc1 from "../assets/doc11.png";
import doc2 from "../assets/doc2.webp";
import doc3 from "../assets/doc3.jpg";
import doc4 from "../assets/doc4.jpg";
import doc5 from "../assets/doc5.jpg";
import doc6 from "../assets/doc6.jpg";
import dentistImg from "../assets/1234.jpg";

const Doctors = () => {
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

      <section className="doctors-hero">
        <div className="doctors-container">
          <div className="doctors-header">
            <p className="doctors-subtitle">OUR EXPERTS</p>
            <h1 className="doctors-title">Meet Our Trusted Specialists</h1>
            <p className="doctors-desc">
              Our team of certified ophthalmologists and optometrists is
              dedicated to delivering expert care with compassion and precision.
            </p>
          </div>

          <div className="doctors-grid">
            <div className="doctor-card">
              <img src={doc1} alt="Dr. Sophie Laurent" className="doctor-img" />
              <div className="doctor-info">
                <h3>Dr. Sophie Laurent, MD</h3>
                <p className="doctor-title">Senior Ophthalmologist</p>
                <p className="doctor-bio">
                  15+ years of experience in cataract and LASIK surgery. Known
                  for her patient-first approach and commitment to excellence in
                  surgical outcomes.
                </p>
              </div>
            </div>
            <div className="doctor-card">
              <img
                src={doc2}
                alt="Dr. Martin Schneider"
                className="doctor-img"
              />
              <div className="doctor-info">
                <h3>Dr. Martin Schneider, MD</h3>
                <p className="doctor-title">Retina Specialist</p>
                <p className="doctor-bio">
                  Expert in diagnosing and treating retinal diseases. Dedicated
                  to advanced care in diabetic eye health and macular
                  degeneration.
                </p>
              </div>
            </div>
            <div className="doctor-card">
              <img src={doc3} alt="Dr. Henrik Olsen" className="doctor-img" />
              <div className="doctor-info">
                <h3>Dr. Henrik Olsen, OD</h3>
                <p className="doctor-title">Optometrist</p>
                <p className="doctor-bio">
                  Specialist in comprehensive eye exams and contact lens
                  fitting. Passionate about helping patients achieve clarity in
                  everyday life.
                </p>
              </div>
            </div>
            <div className="doctor-card">
              <img src={doc4} alt="Dr. Elena Rossi" className="doctor-img" />
              <div className="doctor-info">
                <h3>Dr. Elena Rossi, MD</h3>
                <p className="doctor-title">Cornea & Refractive Surgeon</p>
                <p className="doctor-bio">
                  Focused on corneal transplants and refractive surgery.
                  Recognized for precise treatments that restore clear and
                  lasting vision.
                </p>
              </div>
            </div>
            <div className="doctor-card">
              <img src={doc5} alt="Dr. Clara Novak" className="doctor-img" />
              <div className="doctor-info">
                <h3>Dr. Clara Novak, MD</h3>
                <p className="doctor-title">Pediatric Ophthalmologist</p>
                <p className="doctor-bio">
                  Dedicated to children's vision health with early detection
                  expertise. Provides compassionate care that supports healthy
                  eye development.
                </p>
              </div>
            </div>
            <div className="doctor-card">
              <img src={doc6} alt="Dr. Lukas Meyer" className="doctor-img" />
              <div className="doctor-info">
                <h3>Dr. Lucy Kinoti, OD</h3>
                <p className="doctor-title">Optometrist</p>
                <p className="doctor-bio">
                  Experienced in personalized vision correction and preventive
                  care. Committed to guiding patients toward long-term eye
                  health.
                </p>
              </div>
            </div>
          </div>

          <div className="doctors-cta">
            <button className="book-appointment-btn">
              Book an Appointment
            </button>
          </div>
        </div>
      </section>

      <section className="why-choose-section">
        <div className="why-choose-container">
          <h2 className="why-choose-title">
            Why Choose Us?
            <span className="title-underline"></span>
          </h2>

          <div className="why-choose-content">
            <div className="features-list">
              <div className="feature-card">
                <div className="feature-icon chair">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="40px"
                    viewBox="0 -960 960 960"
                    width="40px"
                    fill="#"
                  >
                    <path d="M433.33-353.33h93.34v-100h100v-93.34h-100v-100h-93.34v100h-100v93.34h100v100ZM480-80.67q-139.67-35-229.83-161.5Q160-368.67 160-520.67v-240l320-120 320 120v240q0 152-90.17 278.5Q619.67-115.67 480-80.67Zm0-69.33q111.33-36.33 182.33-139.67 71-103.33 71-231v-193.66L480-809.67l-253.33 95.34v193.66q0 127.67 71 231Q368.67-186.33 480-150Zm0-330Z" />
                  </svg>
                </div>
                <h3>Exceptional Patient Care</h3>
                <p>
                  The Haven Hospital is known for its compassionate and
                  patient-centered approach, ensuring every individual receives
                  personalized attention and support throughout their recovery
                  journey.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon tooth">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="40px"
                    viewBox="0 -960 960 960"
                    width="40px"
                    fill="#000"
                  >
                    <path d="M146.67-80q-27 0-46.84-19.83Q80-119.67 80-146.67v-466.66q0-27 19.83-46.84Q119.67-680 146.67-680H380v-133.33q0-27 19.83-46.84Q419.67-880 446.94-880h66.12q27.27 0 47.11 19.83Q580-840.33 580-813.33V-680h233.33q27 0 46.84 19.83Q880-640.33 880-613.33v466.66q0 27-19.83 46.84Q840.33-80 813.33-80H146.67Zm0-66.67h666.66v-466.66H580v20q0 29.66-19.83 48.16-19.84 18.5-47.11 18.5h-66.12q-27.27 0-47.11-18.5Q380-563.67 380-593.33v-20H146.67v466.66Zm88-98H474V-260q0-17.67-9.17-31.83Q455.67-306 440.67-312q-28-10.33-46.84-14.17Q375-330 356-330q-20.33 0-41.5 4.5T268.67-312q-15.67 6-24.84 20.17-9.16 14.16-9.16 31.83v15.33Zm330.66-64.66H732v-53.34H565.33v53.34ZM356-362.67q23.33 0 39.67-16.33Q412-395.33 412-418.67q0-23.33-16.33-39.66-16.34-16.34-39.67-16.34-23.33 0-39.67 16.34Q300-442 300-418.67q0 23.34 16.33 39.67 16.34 16.33 39.67 16.33Zm209.33-62H732V-478H565.33v53.33ZM446.67-593.33h66.66v-220h-66.66v220ZM480-380Z" />
                  </svg>
                </div>
                <h3>Highly Qualified Medical Staff</h3>
                <p>
                  The hospital’s team includes experienced doctors, nurses, and
                  specialists who are dedicated to delivering top-quality
                  healthcare using the latest medical practices.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon tooth-red">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="40px"
                    viewBox="0 -960 960 960"
                    width="40px"
                    fill="#000"
                  >
                    <path d="M146.67-226.67v-320V-529v-204.33 506.66Zm569.33 100-140-140q-13-13-18.5-28t-5.5-30q0-32 23-57t59-25q28 0 44 13t38 35q20-20 36.5-34t45.5-14q37 0 59.5 25.5t22.5 57.5q0 15-6 30t-18 27l-140 140ZM146.67-634h666.66v-99.33H146.67V-634ZM457-160H146.67q-27 0-46.84-19.83Q80-199.67 80-226.67v-506.66q0-27 19.83-46.84Q119.67-800 146.67-800h666.66q27 0 46.84 19.83Q880-760.33 880-733.33v239.66q-35-25-76.5-39t-87.5-14q-44.33 0-85.17 13.84Q590-519 556.67-494.67h-410v268H439q2.33 17.56 7 34.28 4.67 16.72 11 32.39Z" />
                  </svg>
                </div>
                <h3>Affordable, Transparent Pricing</h3>
                <p>
                  It offers quality healthcare at fair prices, with clear
                  billing and flexible payment options to make medical care
                  accessible to all.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon smile">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="40px"
                    viewBox="0 -960 960 960"
                    width="40px"
                    fill="#000"
                  >
                    <path d="M640-402q-50.67 0-84.67-34t-34-84.67q0-50.66 34-84.66t84.67-34q50.67 0 84.67 34t34 84.66q0 50.67-34 84.67T640-402ZM400-160v-69.33q0-19.58 9.33-37.29 9.34-17.71 25.34-26.05 45-30.33 97.5-45.16 52.5-14.84 107.83-14.84t107.5 15.84q52.17 15.83 97.83 44.16 15.34 10.34 25 27Q880-249 880-229.33V-160H400Zm65.33-74v7.33h349.34V-234Q777-258 730-272t-90-14q-43 0-90.33 14-47.34 14-84.34 38ZM640-468.67q23 0 37.5-14.5t14.5-37.5q0-23-14.5-37.5t-37.5-14.5q-23 0-37.5 14.5t-14.5 37.5q0 23 14.5 37.5t37.5 14.5Zm0-52Zm0 294Zm-520-180v-66.66h310.67v66.66H120Zm0-326.66V-800h475.33v66.67H120ZM460.67-570H120v-66.67h373.33q-12 14.34-19.98 30.95-7.99 16.61-12.68 35.72Z" />
                  </svg>
                </div>
                <h3>Excellent Patient Experience</h3>
                <p>
                  The hospital emphasizes comfort, clear communication, and
                  quick service, ensuring patients and families feel valued and
                  informed at all times.
                </p>
              </div>
            </div>

            <div className="treatment-image">
              <img src={dentistImg} alt="Dentist treating patient" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Doctors;
