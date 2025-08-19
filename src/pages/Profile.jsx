import React from "react";
import "./Profile.css";
import profilePic from "../assets/profilePic.png";
import cameraIcon from "../assets/cameraIcon.svg";
function Profile() {
  return (
    <div className="account-card">
      <div className="title-section">
        <h2 className="account-title">Account Settings</h2>
      </div>
      <div className="profile-section">
        <div className="profile-image-container">
          <img src={profilePic} alt="Profile" className="profile-image" />
          <img src={cameraIcon} alt="Profile" className="camera-image" />
        </div>
        <div className="profile-info">
          <h3 className="profile-name">Marry Doe</h3>
          <p className="profile-email">Marry@Gmail.Com</p>
        </div>
      </div>
      <p className="profile-description">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
          <div className="first-dash"></div>
          <div className="second-dash"></div>
    </div>
  );
}

export default Profile;
