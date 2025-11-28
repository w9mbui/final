import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import '../index.css';


const InvisionLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!email || !password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      alert('Login successful! Welcome to Invision HMS');
    } catch (err: any) {
      setLoading(false);

      const code = err?.code;

      if (
        code === 'auth/user-not-found' ||
        code === 'auth/wrong-password' ||
        code === 'auth/invalid-credential'
      ) {
        setError('Invalid email or password.');
      } else if (code === 'auth/invalid-email') {
        setError('Please enter a valid email address.');
      } else if (code === 'auth/too-many-requests') {
        setError('Too many failed attempts. Try again later.');
      } else {
        setError('Login failed. Please try again.');
        console.error('Login error:', err);
      }
    }
  };

  return (
    <div className="login-container">
      <div className="left-panel">
        <div className="doctor-image">
          <img
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&h=1000&fit=crop"
            alt="Doctor"
          />
        </div>

        <div className="welcome-box">
          <h1>
            Welcome to <span className="highlight">Haven Hospital</span>
            <br />
            Hospital Management System
          </h1>
          
        </div>
      </div>

      <div className="right-panel">
        <div className="login-form">
          <div className="logo">
            <span className="logo-text">The Haven Hospital</span>
          </div>

          <h2>Login</h2>
          <p className="subtitle">Enter your credentials to access your account</p>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="name@invision.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
            </div>

            <button type="submit" className="sign-in-btn" disabled={loading}>
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          <p className="signup-text">
            Restricted access • Only authorized doctors can log in
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvisionLogin;