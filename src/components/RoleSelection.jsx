import React, { useState } from 'react';

function RoleSelection({ setCurrentView, setInterviewData }) {
  const [role, setRole] = useState('');
  const [difficulty, setDifficulty] = useState('');

  const roles = [
    { value: 'frontend-developer', label: 'Frontend Developer' },
    { value: 'backend-developer', label: 'Backend Developer' },
    { value: 'fullstack-developer', label: 'Full Stack Developer' },
    { value: 'data-scientist', label: 'Data Scientist' },
    { value: 'product-manager', label: 'Product Manager' },
    { value: 'ui-ux-designer', label: 'UI/UX Designer' },
    { value: 'devops-engineer', label: 'DevOps Engineer' },
    { value: 'mobile-developer', label: 'Mobile Developer' },
    { value: 'qa-engineer', label: 'QA Engineer' },
    { value: 'data-analyst', label: 'Data Analyst' }
  ];

  const handleStartInterview = () => {
    if (!role || !difficulty) {
      alert('Please select both role and difficulty level');
      return;
    }

    setInterviewData({
      mode: 'role',
      role: role,
      difficulty: difficulty,
      keywords: []
    });

    setCurrentView('interview-setup');
  };

  return (
    <div className="form-container">
      <h2 className="section-title">Choose Your Career Path</h2>
      
      <div className="form-group">
        <label className="form-label">Target Position</label>
        <select 
          className="form-select"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">What role are you preparing for?</option>
          {roles.map(roleOption => (
            <option key={roleOption.value} value={roleOption.value}>
              {roleOption.label}
            </option>
          ))}
        </select>
      </div>
      
      <div className="form-group">
        <label className="form-label">Experience Level</label>
        <select 
          className="form-select"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="">What's your experience level?</option>
          <option value="beginner">Beginner - Just starting out</option>
          <option value="intermediate">Intermediate - Some experience</option>
          <option value="advanced">Advanced - Senior level</option>
        </select>
      </div>
      
      <button 
        className="btn-primary" 
        onClick={handleStartInterview}
        disabled={!role || !difficulty}
      >
        Launch Interview Experience
      </button>
      
      <button 
        className="btn-secondary" 
        onClick={() => setCurrentView('mode-selection')}
      >
        ← Back to Options
      </button>
    </div>
  );
}

export default RoleSelection;