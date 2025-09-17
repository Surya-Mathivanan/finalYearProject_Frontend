import React from 'react';

function LoadingAnimation({ message = "Loading...", size = "medium" }) {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <svg
          className="animate-spin"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="31.416"
            strokeDashoffset="31.416"
            className="opacity-25"
          />
          <path
            d="M12 2a10 10 0 0 1 10 10"
            stroke="var(--accent-primary)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="loading-text">{message}</div>
      
      <style jsx>{`
        .loading-spinner {
          margin-bottom: 1rem;
        }
        
        .animate-spin {
          animation: spin 1s linear infinite;
          color: var(--text-secondary);
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default LoadingAnimation;