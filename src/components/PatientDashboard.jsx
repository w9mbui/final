// src/components/PatientDashboard.jsx
import React, { useState, useEffect } from 'react';
import '../index.css';
import Footer from './Footer';
import { format } from 'date-fns';

const PatientDashboard = () => {
  const [patient, setPatient] = useState(null);
  const [tasks, setTasks] = useState([]);

  // Modal States
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [showMedicalModal, setShowMedicalModal] = useState(false);
  const [modalType, setModalType] = useState(''); // 'diagnostic', 'drug', 'test'
  const [editingTask, setEditingTask] = useState(null);

  // Form states for modals
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [taskTime, setTaskTime] = useState('');
  const [medicalEntry, setMedicalEntry] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('currentPatient');
    if (saved) {
      const data = JSON.parse(saved);
      setPatient(data);

      if (data.upcomingAppointment) {
        const apptTask = {
          id: Date.now(),
          title: `Appointment with ${data.upcomingAppointment.doctor.name.split(',')[0]}`,
          date: format(new Date(data.upcomingAppointment.date), 'dd.MM.yyyy'),
          time: data.upcomingAppointment.time,
        };
        setTasks([apptTask]);
      }
    }
  }, []);

  // Open Task Modal (Add or Edit)
  const openTaskModal = (task = null) => {
    setEditingTask(task);
    if (task) {
      setTaskTitle(task.title);
      setTaskDate(task.date);
      setTaskTime(task.time);
    } else {
      setTaskTitle('');
      setTaskDate('');
      setTaskTime('');
    }
    setShowTaskModal(true);
  };

  // Save Task
  const saveTask = () => {
    if (!taskTitle || !taskDate || !taskTime) return;

    if (editingTask) {
      setTasks(tasks.map(t => t.id === editingTask.id 
        ? { ...t, title: taskTitle, date: taskDate, time: taskTime }
        : t
      ));
    } else {
      setTasks([...tasks, {
        id: Date.now(),
        title: taskTitle,
        date: taskDate,
        time: taskTime,
      }]);
    }
    setShowTaskModal(false);
    resetTaskForm();
  };

  const resetTaskForm = () => {
    setTaskTitle('');
    setTaskDate('');
    setTaskTime('');
    setEditingTask(null);
  };

  // Medical Entry Modal
  const openMedicalModal = (type) => {
    setModalType(type);
    setMedicalEntry('');
    setShowMedicalModal(true);
  };

  const saveMedicalEntry = () => {
    if (medicalEntry.trim()) {
      // In real app: save to backend
      console.log(`Added ${modalType}:`, medicalEntry);
      setShowMedicalModal(false);
    }
  };

  if (!patient) return <div className="loading">Loading dashboard...</div>;

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">{/* your navbar */}</nav>

      <section className="patient-dashboard">
        <div className="dashboard-container">
          <div className="greeting-section">
            <h1>Hello, {patient.name}!</h1>
            <p>How are you feeling today?</p>
            <div className="notification-icons">
              <div className="notif-bell"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3"><path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/></svg></div>
              <div className="notif-phone"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg></div>
            </div>
          </div>

          <div className="dashboard-grid">
            <div className="dash-card doctor-card">
              <div className="card-header"><h3>Your Doctor</h3></div>
              <div className="doctor-profile">
                <div className="doctor-avatar">
                  {/* <img src={patient.upcomingAppointment.doctor.img} alt="Doctor" /> */}
                </div>
                <div>
                  <strong>{patient.upcomingAppointment.doctor.name}</strong>
                  <p>{patient.upcomingAppointment.doctor.title}</p>
                </div>
              </div>
              <div className="action-buttons">
                <button>Message</button>
                <button>Call</button>
              </div>
            </div>

            {/* Vitals - READ ONLY */}
            <div className="dash-card data-card">
              <div className="card-header"><h3>Your Data</h3></div>
              <div className="vital-stats">
                <div className="stat"><strong>Weight</strong><p>{patient.vitals.weight || "Not set"}</p></div>
                <div className="stat"><strong>Height</strong><p>{patient.vitals.height || "Not set"}</p></div>
                <div className="stat"><strong>Blood Type</strong><p>{patient.vitals.bloodType || "Not set"}</p></div>
              </div>
            </div>

            {/* Remind Me - ADD & EDIT */}
            <div className="dash-card tasks-card">
              <div className="card-header">
                <h3>Remind Me</h3>
                <button onClick={() => openTaskModal()} className="add-task-btn">+ Add Task</button>
              </div>
              <div className="progress-container">
                <div className="progress-bar"><div className="progress-fill" style={{width: `${tasks.length * 10}%`}}></div></div>
                <span>{tasks.length} reminder{tasks.length !== 1 ? 's' : ''}</span>
              </div>
              <div className="task-list">
                {tasks.map(task => (
                  <div key={task.id} className="task-item highlight">
                    <span>
                      <strong>{task.title}</strong><br />
                      <small>{task.date} • {task.time}</small>
                    </span>
                    <button onClick={() => openTaskModal(task)} className="change-task">Edit</button>
                  </div>
                ))}
                {tasks.length === 0 && <p className="no-tasks">No reminders yet</p>}
              </div>
            </div>
          </div>

          {/* Medical Sections */}
          <div className="bottom-dashboard">
            {/* <div className="doctor-illustration">
              <img src="https://cdn.pixabay.com/photo/2024/02/28/07/42/ai-generated-8601940_1280.png" alt="Welcome" />
            </div> */}

            <div className="medical-sections">
              <div className="medical-card">
                <div className="med-icon"><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e3"><path d="M320-486.67v-66.66h320v66.66H320Zm0-160v-66.66h320v66.66H320Zm-93.33 253.34H540q27.29 0 50.81 12.16Q614.33-369 630.67-348l102.66 134v-599.33H226.67v420Zm0 246.66h474L578.33-307q-7.04-9.26-17.02-14.46-9.98-5.21-21.31-5.21H226.67v180ZM733.33-80H226.67q-27 0-46.84-19.83Q160-119.67 160-146.67v-666.66q0-27 19.83-46.84Q199.67-880 226.67-880h506.66q27 0 46.84 19.83Q800-840.33 800-813.33v666.66q0 27-19.83 46.84Q760.33-80 733.33-80Zm-506.66-66.67v-666.66 666.66Zm0-180v-66.66 66.66Z"/></svg></div>
                <h3>Diagnostic</h3>
                <p>List of diseases</p>
                <button onClick={() => openMedicalModal('Diagnostic')} className="add-btn">+</button>
              </div>
              <div className="medical-card">
                <div className="med-icon"><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e3"><path d="M688.67-124.67 739.33-176 656-259.33l-51.33 50.66q-18 18-17.67 42 .33 24 17.67 42 18 17.34 42 17.67 24 .33 42-17.67ZM785.33-222l51.34-50.67q18-18 17.66-42-.33-24-18.33-42t-41.52-18q-23.52 0-41.81 18L702-305.33 785.33-222ZM735.67-77.67q-37 37-89 37t-89-37q-37-37-37-89t37-89l148-148q37-37 89-37t89 37q37 37 37 89t-37 89l-148 148Zm-549-109V-773.33v586.66Zm0 66.67q-27.5 0-47.09-19.58Q120-159.17 120-186.67v-586.66q0-27.5 19.58-47.09Q159.17-840 186.67-840h192.66q7.67-35.33 35.84-57.67Q443.33-920 480-920t64.83 22.33Q573-875.33 580.67-840h192.66q27.5 0 47.09 19.58Q840-800.83 840-773.33v271q-16.67-4.34-33.33-5-16.67-.67-33.34 1.66v-267.66H186.67v586.66H455q-1.67 16.67-.67 33.34 1 16.66 5.34 33.33h-273ZM480-794.67q13.67 0 23.5-9.83t9.83-23.5q0-13.67-9.83-23.5t-23.5-9.83q-13.67 0-23.5 9.83t-9.83 23.5q0 13.67 9.83 23.5t23.5 9.83ZM280-613.33V-680h400v66.67H280Zm0 166.66v-66.66h400v44q-4.67 3-9.5 7.16-4.83 4.17-9.5 8.84l-6.67 6.66H280ZM280-280v-66.67h274.33L510-302.33q-6 6-10.5 11.16Q495-286 490.67-280H280Z"/></svg></div>
                <h3>Drugs</h3>
                <p>Prescribed medicine</p>
                <button onClick={() => openMedicalModal('Drug')} className="add-btn">+</button>
              </div>
              <div className="medical-card">
                <div className="med-icon"><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e3"><path d="M320-293.33V-360h102.33q-5 16-6.83 32.67-1.83 16.66-1.83 34H320ZM320-80q-83 0-141.5-58.5T120-280v-360q-33 0-56.5-23.5T40-720v-80q0-33 23.5-56.5T120-880h400q33 0 56.5 23.5T600-800v80q0 33-23.5 56.5T520-640v140.33q-14 9.67-26 21.34-12 11.66-22.33 25H320V-520h133.33v-120H186.67v360q0 55.56 38.89 94.44 38.88 38.89 94.44 38.89 34 0 62.5-15.66 28.5-15.67 46.83-42 6.67 17.14 15 32.57 8.34 15.43 19.67 30.43-27.67 28.66-64.35 45Q362.97-80 320-80ZM106.67-706.67h426.66v-106.66H106.67v106.66Zm559.9 520q44.76 0 75.76-30.9 31-30.91 31-75.67 0-44.76-30.9-75.76-30.91-31-75.67-31Q622-400 591-369.09q-31 30.9-31 75.66t30.91 75.76q30.9 31 75.66 31Zm204.1 144L763.33-150q-22 14.67-46.21 22.33Q692.9-120 666.67-120q-72.23 0-122.78-50.58-50.56-50.58-50.56-122.83 0-72.26 50.58-122.76t122.84-50.5q72.25 0 122.75 50.56Q840-365.56 840-293.33q0 26.23-7.67 50.45-7.66 24.21-22.33 46.21L917.33-89.33l-46.66 46.66Zm-764-664v-106.66 106.66Z"/></svg></div>
                <h3>Tests</h3>
                <p>Archive of tests</p>
                <button onClick={() => openMedicalModal('Test')} className="add-btn">+</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Task Modal */}
      {showTaskModal && (
        <div className="modal-overlay" onClick={() => setShowTaskModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>{editingTask ? 'Edit Reminder' : 'Add New Reminder'}</h3>
            <input type="text" placeholder="Task title" value={taskTitle} onChange={e => setTaskTitle(e.target.value)} />
            <input type="text" placeholder="Date (dd.mm.yyyy)" value={taskDate} onChange={e => setTaskDate(e.target.value)} />
            <input type="text" placeholder="Time (e.g. 2:00pm)" value={taskTime} onChange={e => setTaskTime(e.target.value)} />
            <div className="modal-actions">
              <button onClick={saveTask} className="save-btn">Save</button>
              <button onClick={() => setShowTaskModal(false)} className="cancel-btn">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Medical Entry Modal */}
      {showMedicalModal && (
        <div className="modal-overlay" onClick={() => setShowMedicalModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>Add {modalType}</h3>
            <textarea 
              placeholder={`Enter ${modalType.toLowerCase()} details...`} 
              value={medicalEntry} 
              onChange={e => setMedicalEntry(e.target.value)}
              rows="5"
            />
            <div className="modal-actions">
              <button onClick={saveMedicalEntry} className="save-btn">Save</button>
              <button onClick={() => setShowMedicalModal(false)} className="cancel-btn">Cancel</button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default PatientDashboard;