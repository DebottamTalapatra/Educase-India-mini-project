import React from "react";
import "./LandingScreen.css";
import { useNavigate } from "react-router-dom";

function LandingScreen() {
  const navigate = useNavigate();
  return (
    <div className="landing-screen-container">
      <h1 className="landing-screen-heading">Welcome to PopX</h1>
      <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h2>
      <button
        onClick={() => navigate("/signup")}
        className="create-account-btn"
      >
        Create Account
      </button>
      <button
        onClick={() => navigate("/signin")}
        className="already-registered-btn"
      >
        Already Registered? Login
      </button>
    </div>
  );
}

export default LandingScreen;
