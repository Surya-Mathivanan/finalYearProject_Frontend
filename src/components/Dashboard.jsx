import React, { useState } from 'react';
import ResumeUpload from './ResumeUpload';
import RoleSelection from './RoleSelection';
import InterviewSession from './InterviewSession';
import FeedbackDashboard from './FeedbackDashboard';
import LoadingAnimation from './LoadingAnimation';
import { getApiUrl } from '../api';

function Dashboard({ user, setUser }) {
  const [currentView, setCurrentView] = useState('mode-selection');
  const [interviewData, setInterviewData] = useState(null);
  const [feedbackData, setFeedbackData] = useState(null);

  const handleLogout = async () => {
    try {
      const response = await fetch(getApiUrl('/logout'), {
        credentials: 'include'
      });

      if (response.redirected) {
        // Backend redirected to frontend, check user status
        const userResponse = await fetch(getApiUrl('/api/user-info'), {
          credentials: 'include'
        });

        if (!userResponse.ok) {
          setUser(null);
        }
      } else {
        // Direct response, assume logout successful
        setUser(null);
      }
    } catch (error) {
      console.error('Logout error:', error);
      // Force logout on frontend even if backend call fails
      setUser(null);
    }
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'mode-selection':
        return (
          <div className="dashboard-main">
            <div className="page-header">
              <h1 className="page-title">Choose Your Path</h1>
              <p className="page-subtitle">Select how you'd like to practice your interview skills</p>
            </div>
            <div className="mode-grid">
              <div 
                className="mode-card"
                onClick={() => setCurrentView('resume-upload')}
              >
                <div className="mode-icon">📋</div>
                <div className="mode-title">Resume-Based Interview</div>
                <div className="mode-description">Upload your resume for personalized questions tailored to your experience and background</div>
              </div>
              <div 
                className="mode-card"
                onClick={() => setCurrentView('role-selection')}
              >
                <div className="mode-icon">🚀</div>
                <div className="mode-title">Role-Based Interview</div>
                <div className="mode-description">Select a specific job role for targeted questions and industry-specific scenarios</div>
              </div>
            </div>
          </div>
        );
      
      case 'resume-upload':
        return (
          <ResumeUpload 
            setCurrentView={setCurrentView} 
            setInterviewData={setInterviewData}
          />
        );
      
      case 'role-selection':
        return (
          <RoleSelection 
            setCurrentView={setCurrentView} 
            setInterviewData={setInterviewData}
          />
        );
      
      case 'interview-setup':
      case 'interview-session':
        return (
          <InterviewSession 
            interviewData={interviewData}
            setCurrentView={setCurrentView}
            setFeedbackData={setFeedbackData}
          />
        );
      
      case 'feedback':
        return (
          <FeedbackDashboard 
            feedbackData={feedbackData}
            setCurrentView={setCurrentView}
          />
        );
      
      default:
        return <LoadingAnimation message="Loading..." size="medium" />;
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="header-brand">
          <div className="brand-logo">Interview Assistant</div>
        </div>
        <div className="user-info">
          <div className="user-avatar">
            {user.username ? user.username.charAt(0).toUpperCase() : 'U'}
          </div>
          <span className="username">{user.username}</span>
          <button className="logout-button" onClick={handleLogout}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16,17 21,12 16,7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
            Logout
          </button>
        </div>
      </div>
      {renderCurrentView()}
    </div>
  );
}

export default Dashboard;