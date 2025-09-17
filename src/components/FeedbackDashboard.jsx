import React from 'react';

function FeedbackDashboard({ feedbackData, setCurrentView }) {
  if (!feedbackData) {
    return (
      <div className="dashboard-main">
        <div className="page-header">
          <h1 className="page-title">No Feedback Available</h1>
          <p className="page-subtitle">Complete an interview to see your results</p>
        </div>
        <button className="btn btn-secondary" onClick={() => setCurrentView('mode-selection')}>
          Start New Interview
        </button>
      </div>
    );
  }

  const {
    overall_score = 0,
    category_scores = {},
    strengths = [],
    improvements = [],
    detailed_feedback = ''
  } = feedbackData;

  return (
    <div className="dashboard-main">
      <div className="feedback-layout">
        <div className="page-header">
          <h1 className="page-title">Interview Results</h1>
          <p className="page-subtitle">Here's how you performed</p>
        </div>

        <div className="score-grid">
          <div className="score-card">
            <div className="score-value">{overall_score}%</div>
            <div className="score-label">Overall Performance</div>
          </div>
          
          <div className="score-card">
            <div className="score-value">{category_scores.hr_performance || 0}%</div>
            <div className="score-label">Behavioral Skills</div>
          </div>
          
          <div className="score-card">
            <div className="score-value">{category_scores.technical_performance || 0}%</div>
            <div className="score-label">Technical Expertise</div>
          </div>
          
          <div className="score-card">
            <div className="score-value">{category_scores.cultural_fit || 0}%</div>
            <div className="score-label">Culture Alignment</div>
          </div>
        </div>

        <div className="feedback-section">
          <div className="feedback-header">
            <span className="feedback-icon">🌟</span>
            <h3 className="feedback-title">What You Excelled At</h3>
          </div>
          <ul className="feedback-list">
            {strengths.length > 0 ? (
              strengths.map((strength, index) => (
                <li key={index}>{strength}</li>
              ))
            ) : (
              <li>No specific strengths identified in this session</li>
            )}
          </ul>
        </div>

        <div className="feedback-section">
          <div className="feedback-header">
            <span className="feedback-icon">🎯</span>
            <h3 className="feedback-title">Growth Opportunities</h3>
          </div>
          <ul className="feedback-list">
            {improvements.length > 0 ? (
              improvements.map((improvement, index) => (
                <li key={index}>{improvement}</li>
              ))
            ) : (
              <li>Keep up the excellent work!</li>
            )}
          </ul>
        </div>

        <div className="feedback-section">
          <div className="feedback-header">
            <span className="feedback-icon">📝</span>
            <h3 className="feedback-title">Detailed Analysis</h3>
          </div>
          <div className="feedback-content">
            {detailed_feedback || 'Great job completing the interview! Keep practicing to improve your skills.'}
          </div>
        </div>
      </div>
    </div>
  );
}

        <div className="feedback-actions">
          <button 
            className="btn btn-secondary" 
            onClick={() => window.print()}
          >
            Save Results
          </button>
          <button 
            className="btn btn-primary" 
            onClick={() => setCurrentView('mode-selection')}
          >
            Take Another Interview
          </button>
        </div>
export default FeedbackDashboard;