// src/components/PatientDashboard.jsx
import React, { useState, useEffect } from 'react';
import '../index.css';
import { auth, db } from '../firebase';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import { format } from 'date-fns';

const PatientDashboard = () => {
  const [patient, setPatient] = useState(null);
  const [upcomingAppointment, setUpcomingAppointment] = useState(null);
  const [reminders, setReminders] = useState([]);
  const [diagnostics, setDiagnostics] = useState([]);
  const [drugs, setDrugs] = useState([]);
  const [tests, setTests] = useState([]);

  // Reminder modal
  const [showReminderModal, setShowReminderModal] = useState(false);
  const [editingReminder, setEditingReminder] = useState(null);
  const [reminderText, setReminderText] = useState('');

  // Medical modal (for add/edit)
  const [showMedicalModal, setShowMedicalModal] = useState(false);
  const [medicalType, setMedicalType] = useState('');
  const [editingMedical, setEditingMedical] = useState(null);
  const [medicalText, setMedicalText] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        window.location.href = '/book-appointment';
        return;
      }

      setPatient({ name: user.displayName || "Patient", email: user.email });

      const patientRef = doc(db, "patients", user.uid);
      const unsub = onSnapshot(patientRef, (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          setUpcomingAppointment(data.upcomingAppointment || null);
          setReminders(data.reminders || []);
          setDiagnostics(data.diagnostics || []);
          setDrugs(data.drugs || []);
          setTests(data.tests || []);
        }
      });

      return () => unsub();
    });

    return () => unsubscribe();
  }, []);

  const saveToFirestore = async (updates) => {
    if (!auth.currentUser) return;
    await setDoc(doc(db, "patients", auth.currentUser.uid), updates, { merge: true });
  };

  // --- REMINDERS ---
  const openReminderModal = (reminder = null) => {
    setEditingReminder(reminder);
    setReminderText(reminder ? reminder.text : '');
    setShowReminderModal(true);
  };

  const saveReminder = () => {
    if (!reminderText.trim()) return;

    const newReminder = {
      id: editingReminder?.id || Date.now().toString(),
      text: reminderText,
      date: format(new Date(), 'dd.MM.yyyy'),
      done: editingReminder?.done || false
    };

    const updated = editingReminder
      ? reminders.map(r => r.id === editingReminder.id ? newReminder : r)
      : [...reminders, newReminder];

    setReminders(updated);
    saveToFirestore({ reminders: updated });
    setShowReminderModal(false);
    setReminderText('');
    setEditingReminder(null);
  };

  const deleteReminder = (id) => {
    const updated = reminders.filter(r => r.id !== id);
    setReminders(updated);
    saveToFirestore({ reminders: updated });
  };

  const toggleReminderDone = (id) => {
    const updated = reminders.map(r =>
      r.id === id ? { ...r, done: !r.done } : r
    );
    setReminders(updated);
    saveToFirestore({ reminders: updated });
  };

  // --- MEDICAL ENTRIES ---
  const openMedicalModal = (type, entry = null) => {
    setMedicalType(type);
    setEditingMedical(entry);
    setMedicalText(entry ? entry.text : '');
    setShowMedicalModal(true);
  };

  const saveMedicalEntry = () => {
    if (!medicalText.trim()) return;

    const newEntry = {
      id: editingMedical?.id || Date.now().toString(),
      text: medicalText,
      date: editingMedical?.date || format(new Date(), 'dd.MM.yyyy')
    };

    let updated;
    if (medicalType === 'diagnostic') {
      updated = editingMedical
        ? diagnostics.map(d => d.id === editingMedical.id ? newEntry : d)
        : [...diagnostics, newEntry];
      setDiagnostics(updated);
      saveToFirestore({ diagnostics: updated });
    }

    if (medicalType === 'drug') {
      updated = editingMedical
        ? drugs.map(d => d.id === editingMedical.id ? newEntry : d)
        : [...drugs, newEntry];
      setDrugs(updated);
      saveToFirestore({ drugs: updated });
    }

    if (medicalType === 'test') {
      updated = editingMedical
        ? tests.map(t => t.id === editingMedical.id ? newEntry : t)
        : [...tests, newEntry];
      setTests(updated);
      saveToFirestore({ tests: updated });
    }

    setShowMedicalModal(false);
    setEditingMedical(null);
    setMedicalText('');
  };

  if (!patient) return <div className="loading-screen">Loading your dashboard...</div>;

  return (
    <>
      <div className="patient-portal-final">
        {/* Sidebar */}
        <aside className="portal-sidebar-final">
          <div className="sidebar-profile-final">
            <div>
              <strong>{patient.name}</strong>
              <p>{patient.email}</p>
            </div>
          </div>
          <nav className="sidebar-menu-final">
            <a href="#" className="active">Dashboard</a>
            <a href="/book-appointment">Appointment</a>
            <a href="/calendar">Calendar</a>
            <div className="menu-divider"></div>
          </nav>
        </aside>

        {/* Main */}
        <main className="portal-main-final">
          <header className="portal-header-final">
            <div>
              <h1>Hello, {patient.name.split(' ')[0]}!</h1>
              <p>How are you feeling today?</p>
            </div>
          </header>

          <div className="portal-cards-final">
            {/* Doctor */}
            <div className="portal-card-final">
              <div className="card-header-final"><h3>Your doctor</h3></div>
              <div className="doctor-info-final">
                {upcomingAppointment ? (
                  <>
                    <strong>{upcomingAppointment.doctor.name}</strong>
                    <p className="specialty">{upcomingAppointment.doctor.title}</p>
                  </>
                ) : <p className="no-data">No doctor assigned yet</p>}
              </div>
            </div>

            {/* Your Data (doctor editable only) */}
            <div className="portal-card-final">
              <div className="card-header-final"><h3>Your data</h3></div>
              <div className="data-grid-final">
                <div><strong>Weight</strong><p>—</p></div>
                <div><strong>Height</strong><p>—</p></div>
                <div><strong>Blood</strong><p>—</p></div>
              </div>
            </div>

            {/* Remind Me */}
            <div className="portal-card-final remind-card-final">
              <div className="card-header-final"><h3>Remind me</h3></div>
              <div className="progress-bar-final">
                <div className="progress-fill-final" style={{width: `${Math.min(reminders.filter(r => r.done).length * 10, 100)}%`}}></div>
              </div>
              <span className="progress-label-final">
                {reminders.filter(r => r.done).length} task{reminders.filter(r => r.done).length !== 1 ? 's' : ''} completed out of 10
              </span>
              <div className="remind-list-final">
                {reminders.length === 0 ? (
                  <p className="no-tasks-final">No reminders yet</p>
                ) : reminders.map(task => (
                  <div key={task.id} className="remind-item-final">
                    <div>
                      <strong style={{ textDecoration: task.done ? 'line-through' : 'none' }}>{task.text}</strong>
                      <small>{task.date}</small>
                    </div>
                    <div className="task-actions-final">
                       <br /><hr />
                      <button onClick={() => openReminderModal(task)}>Edit</button>
                      <button onClick={() => toggleReminderDone(task.id)}>
                        {task.done ? 'Undo' : 'Done'}
                      </button>
                      <button onClick={() => deleteReminder(task.id)} className="delete-task-final">Delete</button>
                    </div>
                  </div>
                ))}
                <button onClick={() => openReminderModal()} className="add-reminder-btn">+ Add Reminder</button>
              </div>
            </div>
          </div>

          {/* Medical Sections (Editable for patient) */}
          <div className="medical-area-final">
            <div className="medical-grid-final">
              {['diagnostic','drug','test'].map(type => {
                const dataMap = { diagnostic: diagnostics, drug: drugs, test: tests };
                const displayName = type.charAt(0).toUpperCase() + type.slice(1);
                return (
                  <div key={type} className="medical-box-final">
                    <div className="box-header-final">
                      <div className="box-icon-final"></div>
                      <h4>{displayName}</h4>
                    </div>
                    <p><i><u>Entries</u></i></p>
                    <div className="entry-list-final">
                      {dataMap[type].length === 0 ? <p className="no-entry">No entries yet</p> :
                        dataMap[type].map(e => (
                          <div key={e.id} className="entry-item-final" onClick={() => openMedicalModal(type, e)}>
                            <span>{e.text}</span>
                          </div>
                        ))
                      }
                    </div>
                    <button onClick={() => openMedicalModal(type)} className="plus-btn-final">+</button>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>

      {/* Reminder Modal */}
      {showReminderModal && (
        <div className="modal-overlay-final">
          <div className="modal-content-final">
            <h3>{editingReminder ? 'Edit Reminder' : 'Add Reminder'}</h3>
            <input type="text" value={reminderText} onChange={e => setReminderText(e.target.value)} placeholder="Reminder text"/>
            <div className="modal-actions-final">
              <button onClick={saveReminder}>Save</button>
              <button onClick={() => setShowReminderModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Medical Modal */}
      {showMedicalModal && (
        <div className="modal-overlay-final">
          <div className="modal-content-final">
            <h3>{editingMedical ? `Edit ${medicalType}` : `Add ${medicalType}`}</h3>
            <input type="text" value={medicalText} onChange={e => setMedicalText(e.target.value)} placeholder="Enter details"/>
            <div className="modal-actions-final">
              <button onClick={saveMedicalEntry}>Save</button>
              <button onClick={() => setShowMedicalModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PatientDashboard;

