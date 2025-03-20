import React from "react";
import "./LoginPage.css"; // Ensure this file exists in the same directory

const LoginPage = ({ setPage }) => {
  return (
    <div className="login-container">
      {/* Top Banner */}
      <div className="top-banner">
        Every hour you invest in learning today multiplies your success tomorrow
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Left Section */}
        <div className="left-section">
          <h2 className="heading">Level up smarter with AI-powered mentorship</h2>
        </div>

        {/* Right Section - Login */}
        <div className="right-section">
          <button className="google-signin">
            <span role="img" aria-label="blue circle">🔵</span>
            <span>Sign in with Google</span>
          </button>

          <p className="or-text">OR</p>

          <div className="login-form">
            <label htmlFor="email" className="label">E-MAIL</label>
            <input id="email" type="email" className="input" required />

            <label htmlFor="password" className="label">PASSWORD</label>
            <input id="password" type="password" className="input" required />

            <button className="signin-button" onClick={() => setPage("personalDetails")}>
              SIGN IN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
