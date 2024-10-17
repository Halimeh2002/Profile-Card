import React from "react";
import "./UserProfileCard.css";
import profile_icon from "../Assets/Halimeh.jpg";

const UserProfileCard = () => {
  return (
    <div className="upc">
      <div className="gradiant"></div>
      <div className="profile-down">
        <img src={profile_icon} alt="" />
        <div className="profile-title">Halimeh Nawrozi</div>
        <div className="profile-description">
          I’m a passionate Frontend Developer specializing in building dynamic,
          responsive, and scalable web applications using React and JavaScript.
          My journey into programming began at university, where I developed a
          love for technology through continuous learning and research.
        </div>
        <div className="profile-button">
          <a href="mailto:halimeh@gmail.com">Contact me</a>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
