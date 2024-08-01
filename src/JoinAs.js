import React, { useState } from 'react';
import './JoinAs.css';

const JoinAs = () => {
  const [role, setRole] = useState('');

  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);
  };

  const handleSubmit = () => {
    if (role === 'client') {
      
      console.log('Joining as a client');
    } else if (role === 'freelancer') {
      
      console.log('Joining as a freelancer');
    }
  };

  return (
    <div className="join-as-container">
      <div className="logo">
        <span className="upwork-text">SolveSphere</span>
      </div>
      <h2>Join as a client or freelancer</h2>
      <div className="role-selection">
        <div 
          className={`role-option ${role === 'client' ? 'selected' : ''}`} 
          onClick={() => handleRoleChange('client')}
        >
          <span className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="80">
              <circle cx="12" cy="8" r="4" fill="#76c2af" />
              <path d="M12 14c-4.418 0-8 3.582-8 8h16c0-4.418-3.582-8-8-8z" fill="#76c2af"/>
            </svg>
          </span>
          <p>I’m a client, hiring for a project</p>
          <span className={`circle ${role === 'client' ? 'circle-selected' : ''}`}></span>
        </div>
        <div 
          className={`role-option ${role === 'freelancer' ? 'selected' : ''}`} 
          onClick={() => handleRoleChange('freelancer')}
        >
          <span className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="90">
              <rect x="2" y="4" width="20" height="14" rx="2" fill="#76c2af"/>
              <rect x="4" y="6" width="16" height="8" rx="1" fill="#ffffff"/>
              <rect x="6" y="16" width="12" height="2" rx="1" fill="#4f5d73"/>
            </svg>
          </span>
          <p>I’m a freelancer, looking for work</p>
          <span className={`circle ${role === 'freelancer' ? 'circle-selected' : ''}`}></span>
        </div>
      </div>
      <button 
        className={`submit-button ${role ? '' : 'disabled'}`} 
        onClick={handleSubmit}
        disabled={!role}
      >
        {role === '' ? 'Create Account' : role === 'client' ? 'Join as a Client' : 'Join as a Freelancer'}
      </button>
      <p>Already have an account? <a href="/login">Log In</a></p>
    </div>
  );
};

export default JoinAs;
