// src/components/PatientCalendar.jsx
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { auth, db } from '../firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import '../index.css';

const PatientCalendar = () => {
  const [patient, setPatient] = useState(null);
  const [appointments, setAppointments] = useState([]); // Full appointment objects
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged(user => {
      if (!user) {
        window.location.href = '/book-appointment';
        return;
      }

      setPatient({
        name: user.displayName || user.email.split('@')[0],
        email: user.email
      });

      const patientRef = doc(db, "patients", user.uid);
      const unsubscribeData = onSnapshot(patientRef, (docSnap) => {
        setLoading(false);
        if (docSnap.exists()) {
          const data = docSnap.data();
          const appts = [];

          // Handle single upcoming appointment
          if (data.upcomingAppointment) {
            const { date, time, doctor } = data.upcomingAppointment;
            const [hours, minutes] = time.split(':');
            const [amPm] = time.split(' ');
            let hour24 = parseInt(hours);
            if (amPm === 'PM' && hour24 !== 12) hour24 += 12;
            if (amPm === 'AM' && hour24 === 12) hour24 = 0;

            const fullDate = new Date(date);
            fullDate.setHours(hour24, parseInt(minutes || 0), 0, 0);

            appts.push({
              date: fullDate,
              doctor: doctor?.name || doctor || "Your Doctor",
              time: time
            });
          }

          setAppointments(appts);
        } else {
          setAppointments([]);
        }
      });

      return () => unsubscribeData();
    });

    return () => unsubscribeAuth && unsubscribeAuth();
  }, []);

  // Highlight dates with appointments
  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const hasAppt = appointments.some(appt => 
        appt.date.toDateString() === date.toDateString()
      );
      if (hasAppt) {
        return <div className="appointment-dot"></div>;
      }
    }
    return null;
  };

  if (loading) {
    return <div className="loading-screen">Loading your calendar...</div>;
  }

  return (
    <div className="patient-portal-final">
      {/* Sidebar */}
      <aside className="portal-sidebar-final">
        <div className="sidebar-profile-final">
          <div>
            <strong>Calendar</strong>
            <p>{patient?.name || "Patient"}</p>
          </div>
        </div>

        <nav className="sidebar-menu-final">
          <a href="/patient-dashboard">Dashboard</a>
          <a href="/book-appointment">Appointment</a>
          <a href="/calendar" className="active">Calendar</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="portal-main-final">
        <header className="portal-header-final">
          <h1>Your Calendar</h1>
          <p>View all your upcoming appointments</p>
        </header>

        <div className="portal-card-final" style={{ padding: '2rem' }}>
          <div className="calendar-container">
            <Calendar
              tileContent={tileContent}
              className="modern-calendar"
              locale="en-US"
              minDetail="month"
              prev2Label={null}
              next2Label={null}
            />
          </div>

          <div className="appointment-list-final" style={{ marginTop: '3rem' }}>
            <h3>Upcoming Appointments</h3>
            {appointments.length === 0 ? (
              <div className="no-appointments">
                <p>No appointments booked yet</p>
                <a href="/book-appointment" className="book-btn-final" style={{ display: 'inline-block', marginTop: '1rem' }}>
                  Book Appointment
                </a>
              </div>
            ) : (
              <div className="appointments-grid">
                {appointments.map((appt, idx) => (
                  <div key={idx} className="appointment-item">
                    <div className="appt-date">
                      <strong>{appt.date.toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</strong>
                    </div>
                    <div className="appt-details">
                      <p><strong>{appt.doctor}</strong></p>
                      <p>Time: {appt.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PatientCalendar;
