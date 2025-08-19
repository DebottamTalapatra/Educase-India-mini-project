import React from "react";
import "./SignupScreen.css";
import { useNavigate } from "react-router-dom";
function SignupScreen() {
  const navigate = useNavigate();
  return (
    <div className="signup-screen-container">
      <div className="signup-page-heading">Create your PopX account</div>
      <form>
        <div className="signup-full-name-section">
          <input
            placeholder="Marry Doe"
            type="text"
            className="marry-doe signup-full-name-input-field"
          />
          <label className="signup-full-name-label">
            Full Name<span>*</span>
          </label>
        </div>
        <div className="signup-phone-number-section">
          <input
            placeholder="Marry Doe"
            type="tel"
            className="marry-doe signup-phone-number-input-field"
          />
          <label className="signup-phone-number-label">
            Phone number<span>*</span>
          </label>
        </div>
        <div className="signup-email-section">
          <input
            placeholder="Marry Doe"
            type="email"
            className="marry-doe signup-email-input-field"
          />
          <label className="signup-email-label">
            Email address<span>*</span>
          </label>
        </div>
        <div className="signup-password-section">
          <input
            placeholder="Marry Doe"
            type="password"
            className="marry-doe signup-password-input-field"
          />
          <label className="signup-password-label">
            Password<span>*</span>
          </label>
        </div>
        <div className="signup-company-name-section">
          <input
            placeholder="Marry Doe"
            type="text"
            className="marry-doe signup-company-name-input-field"
          />
          <label className="signup-company-name-label">Company name</label>
        </div>

        <div className="signup-agency-section">
          <div className="new-section">
            <p className="signup-agency-section-text">Are you an Agency?</p>
            <span>*</span>
          </div>
          <div className="button-region">
            <label className="radio-btn">
              <input type="radio" name="agency" value="yes" checked required />
              Yes
            </label>
            <label className="radio-btn">
              <input type="radio" name="agency" value="no" required />
              No
            </label>
          </div>
        </div>
        <button
          onClick={() => navigate("/account")}
          className="signup-create-account-btn"
          type="Submit"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default SignupScreen;
