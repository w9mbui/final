
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Doctors from './components/Doctors';
import Contact from './components/Contact';
import BookAppointment from './components/BookAppointment';
import PatientDashboard from './components/PatientDashboard';
import PatientCalendar from './components/PatientCalendar';
import InvisionLogin from './components/InvisionLogin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services /> } />
        <Route path="/doctors" element={<Doctors/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path= "/book-appointment" element={<BookAppointment/>} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="/calendar" element={<PatientCalendar />} />
        <Route path='/invision-login' element={<InvisionLogin />}/>
      </Routes>
    </Router>
  );
}

export default App;
