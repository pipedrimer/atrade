import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Link } from 'react-router';

const KYCVerified = () => {
  return (
    <div className="d-flex pb-4  container justify-content-center align-items-center vh-100 ">
      {/* Card Container */}
      <div className="card shadow-lg p-4 text-center" style={{ maxWidth: '500px', width: '100%' }}>
        {/* Checkmark SVG with Animation */}
        <div className="mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="green"
            width="80px"
            height="80px"
            className="animate-checkmark"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
        </div>

        {/* Main Heading */}
        <h3 className="mb-3">Congratulations! <span role="img" aria-label="wink">😉</span></h3>

        {/* Subtitle */}
        <p className="text-muted mb-4">
          Your KYC verification has been successfully completed. You’re all set to explore our platform and enjoy its benefits.
        </p>

        {/* Proceed Button */}
        <Link to="/app/dashboard">
        <button className="btn btn-success btn-lg w-100">
            
          Continue to Dashboard
       
        </button>
        </Link>
      </div>
    </div>
  );
};

export default KYCVerified;

// Add some CSS for animations
const styles = `
  @keyframes scaleCheckmark {
    0% { transform: scale(0); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }

  .animate-checkmark {
    animation: scaleCheckmark 0.6s ease-in-out;
  }
`;

// Inject styles into the document
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);