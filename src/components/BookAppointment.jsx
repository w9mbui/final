import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../index.css";
import Footer from "./Footer";
import { Link } from 'react-router-dom';


// images
import doc1 from "../assets/doc11.png";
import doc2 from "../assets/doc2.webp";
import doc3 from "../assets/doc3.jpg";
import doc4 from "../assets/doc4.jpg";
import doc5 from "../assets/doc5.jpg";
import doc6 from "../assets/doc6.jpg";

// firebase
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const doctors = [
  {
    id: 1,
    name: "Dr. Sophie Laurent, MD",
    title: "Senior Ophthalmologist",
    img: doc1,
  },
  {
    id: 2,
    name: "Dr. Martin Schneider, MD",
    title: "Retina Specialist",
    img: doc2,
  },
  { id: 3, name: "Dr. Henrik Olsen, OD", title: "Optometrist", img: doc3 },
  {
    id: 4,
    name: "Dr. Elena Rossi, MD",
    title: "Cornea & Refractive Surgeon",
    img: doc4,
  },
  {
    id: 5,
    name: "Dr. Clara Novak, MD",
    title: "Pediatric Ophthalmologist",
    img: doc5,
  },
  { id: 6, name: "Dr. Lucy Kinoti, OD", title: "Optometrist", img: doc6 },
];

const BookAppointment = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [loading, setLoading] = useState(false);

  const timeSlots = ["10:00am", "12:00pm", "2:00pm"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      // 1️⃣ Create Firebase Auth user
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      // 2️⃣ Save patient profile
      await setDoc(doc(db, "patients", user.uid), {
        name,
        phone,
        email,
        createdAt: new Date(),
        upcomingAppointment: {
          doctor: {
  id: selectedDoctor.id,
  name: selectedDoctor.name,
  title: selectedDoctor.title,
},
          date: selectedDate,
          time: selectedTime,
        },
      });

      // 3️⃣ Save appointment
      await setDoc(doc(db, "appointments", `${user.uid}-${Date.now()}`), {
        patientId: user.uid,
        patientName: name,
        doctor: {
  id: selectedDoctor.id,
  name: selectedDoctor.name,
  title: selectedDoctor.title,
},
        date: selectedDate,
        time: selectedTime,
        bookedAt: new Date(),
      });

      alert(
        "Appointment booked successfully! Redirecting to your dashboard..."
      );
      window.location.href = "/patient-dashboard";
    } catch (error) {
      alert("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <div className="logo-icon">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
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
        </div>
      </nav>

      {/* Booking Form */}
      <section className="booking-page">
        <div className="booking-container">
          <h1 className="booking-title">Book an Appointment</h1>

          <div className="booking-grid">
            {/* LEFT SIDE */}
            <div className="client-details">
              <h2>Client Details</h2>
              <form onSubmit={handleSubmit} className="booking-form">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="+254 700 000 000"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    name="password"
                    type="password"
                    placeholder="Create a password"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Choose Doctor</label>
                  <div className="doctor-options">
                    {doctors.map((doc) => (
                      <button
                        type="button"
                        key={doc.id}
                        className={`doctor-btn ${
                          selectedDoctor?.id === doc.id ? "selected" : ""
                        }`}
                        onClick={() => setSelectedDoctor(doc)}
                      >
                        <img
                          src={doc.img}
                          alt={doc.name}
                          className="doctor-thumb"
                        />
                        <div className="doctor-info-btn">
                          <strong>{doc.name}</strong>
                          <small>{doc.title}</small>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="book-appointment-final"
                  disabled={
                    !selectedDoctor || !selectedDate || !selectedTime || loading
                  }
                >
                  {loading ? "Booking..." : "Book Appointment"}
                </button>
              
              </form>
              <br /> <br /> <br />
              <Link to="/invision-login" className="linking">Are You A Doctor?</Link>

            </div>

            {/* RIGHT SIDE */}
            <div className="date-time-picker">
              <h2>Select Date</h2>

              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                minDate={new Date()}
                inline
              />

              <h2>Select Time</h2>
              <div className="time-slots">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    className={`time-btn ${
                      selectedTime === time ? "selected" : ""
                    }`}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BookAppointment;
