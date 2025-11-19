import React from "react";
import "../index.css";
import servicesBg from "../assets/123.png";
import eyeExamImage from "../assets/middle.jpg";
import { Link } from "react-router-dom";




const Services = () => {
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
          <Link to="/book-appointment">
          <button className="book-btn">Book Appointment</button> </Link>
          <button className="mobile-menu">Menu</button>
        </div>
      </nav>

      <section className="services-modern">
        <div className="services-overlay"></div>
        <img
          src={servicesBg}
          alt="Modern Clinic Entrance"
          className="services-bg-img"
        />

        <div className="services-modern-content">
          <h1 className="services-main-title">Services</h1>
          <p className="services-main-subtitle">
            Comprehensive healthcare solutions tailored to your needs—delivered
            by experts, available anytime.
          </p>

          <div className="services-cards-grid">
            <div className="service-modern-card school-card">
              <span className="card-tag">Flu Season</span>
              <h3>Book Your Stress-Free Flu Shot Today</h3>
              <div className="feature-item">
                <span className="arrow-icon">-</span>
                <div>
                  <strong>Easy Online Booking</strong>
                  <p>
                    Schedule your flu shot in minutes through our user-friendly
                    booking system. No waiting, no hassle.
                  </p>
                </div>
              </div>
              <div className="feature-item">
                <span className="arrow-icon">-</span>
                <div>
                  <strong>Walk-In Appointments Available</strong>
                  <p>
                    Visit us anytime during business hours for a quick and
                    convenient flu shot—no prior booking required.
                  </p>
                </div>
              </div>
              <button className="check-details-btn">Check Details</button>
            </div>

            <div className="service-modern-card school-card">
              <span className="card-tag">One medical kids</span>
              <h3>A Healthy School Year Starts Here</h3>
              <div className="feature-item">
                <span className="arrow-icon">-</span>
                <div>
                  <strong>Vaccinations For Kids</strong>
                  <p>
                    Protect your child from seasonal illnesses with our
                    back-to-school vaccination packages.
                  </p>
                </div>
              </div>
              <div className="feature-item">
                <span className="arrow-icon">-</span>
                <div>
                  <strong>Annual Health Checkups</strong>
                  <p>
                    Start the school year strong with a comprehensive health
                    checkup for your kids, tailored to their needs.
                  </p>
                </div>
              </div>
              <button className="check-details-btn">Check Details</button>
            </div>

            <div className="service-modern-card school-card">
              <span className="card-tag">Health Checkups</span>
              <h3>Stay on Top of Your Health Today</h3>
              <div className="feature-item">
                <span className="arrow-icon">-</span>
                <div>
                  <strong>Comprehensive Screenings</strong>
                  <p>
                    From blood pressure to cholesterol—get your full health
                    assessment in one visit.
                  </p>
                </div>
              </div>
              <div className="feature-item">
                <span className="arrow-icon">-</span>
                <div>
                  <strong>Personalized Reports</strong>
                  <p>
                    Receive easy-to-understand health insights and
                    recommendations.
                  </p>
                </div>
              </div>
              <button className="check-details-btn">Check Details</button>
            </div>

            <div className="service-modern-card school-card">
              <span className="card-tag">Wellness & Fitness</span>
              <h3>Build Healthy Habits That Last</h3>
              <div className="feature-item">
                <span className="arrow-icon">-</span>
                <div>
                  <strong>Personal Training Sessions</strong>
                  <p>
                    Get tailored fitness programs to meet your unique goals.
                  </p>
                </div>
              </div>
              <div className="feature-item">
                <span className="arrow-icon">-</span>
                <div>
                  <strong>Nutrition Consultations</strong>
                  <p>Learn how to eat right with our expert dieticians.</p>
                </div>
              </div>
              <button className="check-details-btn">Check Details</button>
            </div>

            <div className="service-modern-card school-card">
              <span className="card-tag">Dental Care</span>
              <h3>Bright Smiles Start Here</h3>
              <div className="feature-item">
                <span className="arrow-icon">-</span>
                <div>
                  <strong>Routine Cleanings</strong>
                  <p>Schedule your next dental checkup with ease..</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="arrow-icon">-</span>
                <div>
                  <strong>Teeth Whitening Offers</strong>
                  <p>
                    Get exclusive discounts on cosmetic treatments this month.
                  </p>
                </div>
              </div>
              <button className="check-details-btn">Check Details</button>
            </div>

            <div className="service-modern-card school-card">
              <span className="card-tag">Amazon pharmacy</span>
              <h3>Finally, A Pharmacy That Really Delivers</h3>
              <div className="feature-item">
                <span className="arrow-icon">-</span>
                <div>
                  <strong>Fast & Reliable Delivery</strong>
                  <p>
                    Get your medications delivered straight to your doorstep
                    with our quick and secure service.
                  </p>
                </div>
              </div>
              <div className="feature-item">
                <span className="arrow-icon">-</span>
                <div>
                  <strong>Easy Prescription Refills</strong>
                  <p>
                    Refill your prescriptions with just a few clicks, ensuring
                    you never run out of essential medicines.
                  </p>
                </div>
              </div>
              <button className="check-details-btn">Check Details</button>
            </div>
          </div>
          <section className="eye-care-section">
            <div className="eye-care-container">
              <div className="eye-care-header">
                <h2 className="eye-care-title">Beyond Standard  Health Care</h2>
                <p className="eye-care-subtitle">
                  We combine advanced technology, trusted specialists, and
                  personal care—
                  <br />
                  because your <i>health</i> deserves nothing less.
                </p>
              </div>

              <div className="eye-care-grid">
                <div className="eye-care-features">
                  <div className="feature-card blue-card">
                    <div className="card-icon"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-240q-56.31 0-111.62-4.62-55.3-4.61-110.61-13.07-24.39-4-41.08-21.89Q200-297.46 200-322.08V-345q-47.08-11.69-76.23-49.31Q94.62-431.92 94.62-480q0-47.08 29.15-84.69 29.15-37.62 76.23-50.08v-36.77q0-27.38 20.58-46.77 20.57-19.38 48.19-17.84 22.08 1.53 44.15 5.11 22.08 3.58 44.39 4.81 30.23 2.46 60.84 3.35 30.62.88 61.85.88 26.38 0 52.77-.62 26.38-.61 53-2.84 26.69-2 52.11-5.19 25.43-3.2 52.12-5.5 27.62-2.31 48.81 16.96T760-651.54v36.77q46.85 12.46 76.12 50.08 29.26 37.61 29.26 84.69 0 48.08-29.26 85.58-29.27 37.5-76.12 49.19v22.92q0 24.62-17.19 42.5-17.19 17.89-41.58 22.12Q645.92-249 591-244.5T480-240Zm0-40q54.62 0 108.46-4.62 53.85-4.61 108.46-13.07 10-1.54 16.43-8.35 6.42-6.81 6.65-16.27v-330.77q0-10.77-8.08-18.46-8.07-7.69-18.84-6.15-53.08 8.23-106.54 11.96Q533.08-662 480-662q-54.08 0-107.54-3.73-53.46-3.73-106.31-11.96-11-1.54-18.57 6.27-7.58 7.8-7.58 18.34v330.77q0 9.23 6.15 16.16 6.16 6.92 16.16 8.46 54.61 8.46 108.34 13.07Q424.38-280 480-280Zm0-80q42.23 0 83.19-4.62 40.96-4.61 82.19-16.38 7.77-2.69 11.93-9.38 4.15-6.7 1.46-15-2.69-7.54-9.77-11.81-7.08-4.27-14.62-1.58Q596.62-408 557.69-404q-38.92 4-77.69 4-39.54 0-78.19-4.27-38.66-4.27-76.43-15.27-8.3-2.69-15 1.85-6.69 4.54-9.38 12.07-2.69 8.31 1.58 15 4.27 6.7 12.57 9.39 39.7 12.23 81.04 16.73Q437.54-360 480-360Zm-280-27.15v-185.47q-29.77 11-47.58 36.31-17.8 25.31-17.8 56.31 0 32 17.8 56.92 17.81 24.93 47.58 35.93Zm560 0q28.77-11 47.08-35.93 18.3-24.92 18.3-56.92 0-31-18.3-56.31-18.31-25.31-47.08-36.31v185.47ZM480-520q42.23 0 83.19-4.62 40.96-4.61 82.19-16.38 7.77-2.69 11.93-9.38 4.15-6.7 1.46-15-2.69-7.54-9.77-11.81-7.08-4.27-14.62-1.58Q596.62-568 557.69-564q-38.92 4-77.69 4-39.54 0-78.19-4.38-38.66-4.39-76.43-15.16-8.3-1.92-15 2.23-6.69 4.16-9.38 11.93-2.69 8.3 1.08 15 3.77 6.69 12.3 9.38 40.47 11.77 81.81 16.38Q437.54-520 480-520ZM240-299.77V-680v380.23Z"/></svg></div>
                    <h3>Advanced Technology & Modern Equipment</h3>
                    <p>
                      We use advanced diagnostic tools and modern equipment for
                      every routine or advanced eye exam.
                    </p>
                  </div>

                  <div className="feature-card blue-card">
                    <div className="card-icon"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M680-334.62q-38.46 0-65.38-26.92-26.93-26.92-26.93-65.38 0-38.46 26.93-65.39 26.92-26.92 65.38-26.92 38.46 0 65.38 26.92 26.93 26.93 26.93 65.39t-26.93 65.38q-26.92 26.92-65.38 26.92Zm0-40q21.62 0 36.96-15.34 15.35-15.35 15.35-36.96 0-21.62-15.35-36.96-15.34-15.35-36.96-15.35t-36.96 15.35q-15.35 15.34-15.35 36.96 0 21.61 15.35 36.96 15.34 15.34 36.96 15.34ZM467.69-98.46v-88.31q0-13.74 6.56-25.85 6.56-12.1 18.37-19.3 27.78-16.66 58.59-27.63 30.82-10.96 62.94-16.22L680-190l65.08-85.77q32.49 5.26 63.23 16.22 30.74 10.97 58.84 27.63 11.85 7.15 18.12 19.11 6.27 11.96 7.04 25.27v89.08H467.69Zm39-40h162.23l-70.15-92.16q-24.39 5.74-47.43 14.91-23.03 9.17-44.65 21.25v56Zm184.39 0h161.23v-56q-21.39-12.31-44.42-20.96-23.04-8.66-47.43-14.43l-69.38 91.39Zm-22.16 0Zm22.16 0ZM224.98-160q-27.21 0-46.1-18.98Q160-197.96 160-224.62v-510.76q0-26.66 18.98-45.64T224.62-800h510.76q26.66 0 45.64 18.98T800-735.38v147.69q-9.08-8.46-18.46-15.31-9.39-6.85-21.54-10.54v-121.84q0-10.77-6.92-17.7-6.93-6.92-17.7-6.92H224.62q-10.77 0-17.7 6.92-6.92 6.93-6.92 17.7v510.76q0 10.77 6.92 17.7 6.93 6.92 17.7 6.92h133.69q-.69 3.31-1.04 6.62-.35 3.3-.35 6.61V-160H224.98ZM300-610.77h296.92q14.46-8.46 30.46-12.31 16-3.84 32.62-5.38v-22.31H300v40ZM300-460h180.77q1.54-11 4.11-20.62 2.58-9.61 5.97-19.38H300v40Zm0 150.77h111.85q10.23-8.23 21.19-15.62 10.96-7.38 22.42-12.61v-11.77H300v40ZM200-200v-560 146.23V-630v430Zm480-226.92Z"/></svg></div>
                    <h3>Experienced Specialists</h3>
                    <p>
                      Our board-certified optometrists bring years of proven
                      expertise in protecting vision.
                    </p>
                  </div>

                  <div className="feature-card blue-card">
                    <div className="card-icon"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M346.92-160v-186.92H160v-265.39h186.92V-800h265.39v187.69H800v265.39H612.31V-160H346.92Zm40-40h185.39v-186.92H760v-185.39H572.31V-760H386.92v187.69H200v185.39h186.92V-200ZM480-480Z"/></svg></div>
                    <h3>Holistic Care</h3>
                    <p>
                      From preventive checkups to advanced treatments, we
                      provide continuous support and care designed to protect
                      your eye health.
                    </p>
                  </div>
                </div>

                <div className="eye-exam-image-container">
                  <img
                    src={eyeExamImage}
                    alt="Eye exam specialist"
                    className="eye-exam-image"
                  />
                </div>

                <div className="eye-care-features">
                  <div className="feature-card blue-card">
                    <div className="card-icon"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M85.69-422.62q-22.61-37.53-34.15-76.46Q40-538 40-576q0-93.54 65.23-158.77T264-800q60.69 0 116.54 31.5Q436.38-737 480-677.69q43.62-59.31 99.46-90.81Q635.31-800 696-800q93.54 0 158.77 65.23T920-576q0 36.46-11.54 74.62-11.54 38.15-34.15 78-6.26-8.27-14.78-14.79-8.53-6.52-17.76-10.91 19-33.77 28.61-65.38Q880-546.08 880-576q0-77.23-53.38-130.62Q773.23-760 696-760q-61.77 0-112.19 37.19Q533.38-685.62 480-616q-53.38-69.85-103.81-106.92Q325.77-760 264-760q-77.23 0-130.62 53.38Q80-653.23 80-576q0 31.46 9.62 63.46 9.61 32 27.84 64.23-9.23 5.16-17.31 11.31-8.07 6.15-14.46 14.38ZM40-118.46V-153q0-37.08 39.16-61.27 39.16-24.19 101.63-24.19 11.44 0 21.9.88 10.46.89 19.93 2.89-8.62 15.38-13.31 32.31-4.69 16.93-4.69 36.07v47.85H40Zm240 0v-45q0-49.62 55.48-78.85 55.47-29.23 144.73-29.23 90.1 0 144.94 29.23Q680-213.08 680-163.46v45H280Zm475.38 0v-47.85q0-19.14-4.19-36.07t-12.57-32.31q9.46-2 19.95-2.89 10.49-.88 21.43-.88 63 0 101.5 24.19T920-153v34.54H755.38ZM479.91-231.54q-67.68 0-112.29 18.08-44.62 18.08-46.47 46.54v8.46h317.93v-8.46q-2.08-28.46-46.2-46.54-44.11-18.08-112.97-18.08Zm-299.14-44.61q-23.48 0-40.2-16.73-16.72-16.72-16.72-40.2 0-23.23 16.72-39.69 16.72-16.46 40.2-16.46 23.23 0 40.08 16.46 16.84 16.46 16.84 39.69 0 23.48-16.84 40.2-16.85 16.73-40.08 16.73Zm599.23 0q-23 0-39.96-16.73-16.96-16.72-16.96-40.2 0-23.23 16.96-39.69 16.96-16.46 40.11-16.46 23.85 0 40.31 16.46t16.46 39.69q0 23.48-16.36 40.2-16.37 16.73-40.56 16.73Zm-299.73-25.39q-36.42 0-62.19-25.58-25.77-25.57-25.77-62.11 0-37.27 25.57-62.48 25.58-25.21 62.12-25.21 37.27 0 62.48 25.13 25.21 25.13 25.21 62.29 0 36.42-25.13 62.19-25.13 25.77-62.29 25.77ZM480-436.92q-19.31 0-33.5 13.71-14.19 13.71-14.19 33.98 0 19.31 14.19 33.5 14.19 14.19 33.88 14.19 19.7 0 33.5-14.19 13.81-14.19 13.81-33.89 0-19.69-13.71-33.5-13.71-13.8-33.98-13.8Zm0 47.69Zm.23 230.77Z"/></svg></div>
                    <h3>Personalized Support</h3>
                    <p>
                      Every patient is unique. That's why we create tailored
                      vision care plans and long-term health goals.
                    </p>
                  </div>

                  <div className="feature-card blue-card">
                    <div className="card-icon"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M470-255.38Zm-270 40v-65.85q0-24.77 14.42-46.35 14.43-21.57 38.81-33.5 54.31-25.61 108.31-39.19 54-13.58 108.46-15.11.15 3.84.85 6.92.69 3.08 1.61 6.92-2.54 6.03-3.81 12.9t-1.27 13.26q-50.92 1.76-99.8 14.11-48.89 12.35-95.27 35.27-15.16 8.08-23.73 19.77-8.58 11.69-8.58 25v25.85h286.85l40 40H200Zm280-289.24q-49.5 0-84.75-35.25T360-624.62q0-49.5 35.25-84.75T480-744.62q49.5 0 84.75 35.25T600-624.62q0 49.5-35.25 84.75T480-504.62Zm0-40q33 0 56.5-23.5t23.5-56.5q0-33-23.5-56.5t-56.5-23.5q-33 0-56.5 23.5t-23.5 56.5q0 33 23.5 56.5t56.5 23.5Zm0-80Zm221.38 409.24L582.92-333.85q-11.46-11.46-15.8-23.89-4.35-12.44-4.35-24.88 0-27.19 19.33-48.44 19.33-21.25 49.59-21.25 24.05 0 37.8 11.08 13.74 11.08 31.89 29.23 17.7-17.69 31.63-29 13.94-11.31 38.43-11.31 31.25 0 49.91 21.27Q840-409.77 840-382.56q0 12.75-4.85 25.5-4.84 12.75-15.3 23.21L701.38-215.38Z"/></svg></div>
                    <h3>Comfort & Confidence</h3>
                    <p>
                      We create a welcoming environment so you feel comfortable
                      and confident while receiving world-class eye care from
                      our specialists.
                    </p>
                  </div>

                  <div className="feature-card blue-card">
                    <div className="card-icon"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M255.85-342.31q-24.23 0-41.58-17.4-17.35-17.4-17.35-41.83 0-25.31 17.4-42.27 17.4-16.96 41.83-16.96 24.12 0 41.29 16.96 17.18 16.96 17.18 41.89 0 24.92-17.27 42.27-17.26 17.34-41.5 17.34Zm447.7 0q-24.24 0-41.59-17.4-17.34-17.4-17.34-41.83 0-25.31 17.39-42.27 17.4-16.96 41.84-16.96 24.11 0 41.28 16.96 17.18 16.96 17.18 41.89 0 24.92-17.26 42.27-17.26 17.34-41.5 17.34Zm-222.4-38.46q-32.38 0-55.23-22.75-22.84-22.76-22.84-55.71 0-33.54 22.75-56t55.71-22.46q32 0 55.23 22.46Q560-492.77 560-459.62q0 33.16-23.23 56-23.23 22.85-55.62 22.85ZM310.92-160q13.23-59 60.34-97.58 47.1-38.57 110.19-38.57 63.09 0 109.9 38.57Q638.15-219 651.38-160H310.92ZM120-160q0-56.77 39.69-96.46 39.69-39.69 96.46-39.69 17.22 0 32.41 3.77 15.19 3.76 29.36 11.3-23.73 24.07-39.56 55.19-15.82 31.12-22.43 65.89H120Zm586 0q-6.23-35.54-22-66.5t-40.38-55.35q14-6.77 28.75-10.53 14.75-3.77 31.48-3.77 56.77 0 96.46 39.69Q840-216.77 840-160H706ZM106.46-504.62l-23.38-31.69L481.54-840l159.23 121.23V-800H720v141.69l160 122-24.15 31.69-374.31-285.15-375.08 285.15Z"/></svg></div>
                    <h3>Trusted by Families</h3>
                    <p>
                      Generations of patients rely on us for compassionate,
                      professional eye care. We're known for trust and
                      consistency in every treatment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Services;
