import React from "react";
import LandingScreen from "./pages/LandingScreen";
import SignupScreen from "./pages/SignupScreen";
import LoginScreen from "./pages/LoginScreen";
import Profile from "./pages/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app-wraper">
      <Router>
        <Routes>
          <Route path="/" element={<LandingScreen />} />
          <Route path="/signin" element={<LoginScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
          <Route path="/account" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
