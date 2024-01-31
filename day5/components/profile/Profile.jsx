// Profile1.jsx
import React from "react";
import useSignUpForm from "./useSignUpForm";
import { useNavigate } from "react-router-dom";
import "../../styles/profile.css";
function Profile1({ data, onEdit }) {
  const { inputs } = useSignUpForm();
  const navigate = useNavigate();

  const handleEdit = () => {
    // Navigate to the edit profile page
    navigate("/edit");
  };

  return (
    <>
    <div className="bg4">
      <div className="profile">
        <div className="container">
          <div className="header">
            <h1>Athlete Bio</h1>
          </div>
          <div className="form">
            <div className="mainInfo">
              <img
                src={data?.photo || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}
                alt="Profile"
                className="profile-img"
              />
              <div className="nameLocation">
                <div className="fullName">
                  <p>{data?.firstName || "Annie"}</p>
                  <p>{data?.lastName || "Thorisdottir"}</p>
                </div>
                <div className="location">
                  <p>📍 {data?.location || "Iceland"}</p>
                </div>
              </div>
            </div>
          </div>
          {/* ... other profile information */}
          <div className="interests">
            <p>{data?.bio || "Athlete Bio Placeholder"}</p>
          </div>
          <div className="interests">
            <p>Skills: {data?.skills || "Skills Placeholder"}</p>
          </div>
          <div className="interests">
            <p>Tournaments Attended: {data?.tournamentsattended || "0"}</p>
          </div>
          <div className="interests">
            <p>Tournaments Won: {data?.tournamentswon || "0"}</p>
          </div>
          <div className="interests">
            <p>Tournaments Loss: {data?.tournamentsloss || "0"}</p>
          </div>
          <div className="interests">
            <p>Education: {data?.education || "Athlete School"}</p>
          </div>
          <div className="interests">
            {data?.github && (
              <p>
                GitHub URL:{" "}
                <a href={data.github} target="_blank" rel="noopener noreferrer">
                  {data.github}
                </a>
              </p>
            )}
          </div>
        </div>
      </div>

      <button onClick={handleEdit}>Edit Profile</button>
      </div>
    </>
  );
}

export default Profile1;
