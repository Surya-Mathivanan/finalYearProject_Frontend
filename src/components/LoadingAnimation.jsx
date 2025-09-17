import React from 'react';

function LoadingAnimation({ message = "Loading...", size = "medium" }) {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <div className="loading-text">{message}</div>
    </div>
  );
}

export default LoadingAnimation;