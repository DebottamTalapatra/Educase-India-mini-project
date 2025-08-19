import React from "react";
import "./LoginScreen.css";
import { useNavigate } from "react-router-dom";

function LoginScreen() {
  const navigate = useNavigate();
  return (
    <div className="login-screen-container">
      <h1 className="page-heading">Signin to your PopX account</h1>
      <h2 className="page-subheading">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </h2>
      <form>
        <div className="input-group email-section">
          <input
            type="email"
            placeholder="Enter email address"
            className="email-input-field"
          />
          <label className="email-label">Email Address</label>
        </div>
        <div className="input-group pasword-section">
          <input
            type="password"
            placeholder="Enter password"
            className="password-input-field"
          />
          <label className="password-label">Password</label>
        </div>

        <button onClick={() => navigate("/account")} className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginScreen;
