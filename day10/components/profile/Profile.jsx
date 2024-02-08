import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../styles/profile.css";

function Profile1() {
  const [profileData, setProfileData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get("http://localhost:8081/api/profiles/");
        setProfileData(response.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, []);

  const handleEdit = ( firstName, lastName, location,  tournamentsAttended, tournamentsWon, tournamentsLoss, github) => {
    // localStorage.setItem("id", id);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("location", location);
   
    
    localStorage.setItem("tournamentsattended", tournamentsAttended);
    localStorage.setItem("tournamentswon", tournamentsWon);
    localStorage.setItem("tournamentsloss", tournamentsLoss);
    
    localStorage.setItem("github", github);

    navigate("/edit");
  };

  return (
    <div className="bg4">
      <div className="profile">
        <div className="container">
          <div className="header">
            <h1>Athlete Bio</h1>
          </div>
          <div className="form">
            <div className="mainInfo">
              {profileData.map((profile) => (
                <div key={profile.id} className="profile-record">
                  <img
                    src={profile.photo || ""}
                    alt="Profile"
                    className="profile-img"
                  />
                  <div className="nameLocation">
                    <div className="fullName">
                      <p>{profile.firstName }</p>
                      <p>{profile.lastName }</p>
                    </div>
                    <div className="location">
                      <p>📍 {profile.location || "Iceland"}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* ... other profile information */}
          
          
          <div className="interests">
            {profileData.map((profile) => (
              <p key={profile.id}>Tournaments Attended: {profile.tournamentsAttended || "0"}</p>
            ))}
          </div>
          <div className="interests">
            {profileData.map((profile) => (
              <p key={profile.id}>Tournaments Won: {profile.tournamentsWon || "0"}</p>
            ))}
          </div>
          <div className="interests">
            {profileData.map((profile) => (
              <p key={profile.id}>Tournaments Loss: {profile.tournamentsLoss || "0"}</p>
            ))}
          </div>
       
          <div className="interests">
            {profileData.map((profile) => (
              <div key={profile.id}>
                {profile.github && (
                  <p>
                    GitHub URL:{" "}
                    <a href={profile.github} target="_blank" rel="noopener noreferrer">
                      {profile.github}
                    </a>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <button onClick={() => handleEdit(profileData[0].id, profileData[0].firstName, profileData[0].lastName, profileData[0].location, profileData[0].tournamentsAttended, profileData[0].tournamentsWon, profileData[0].tournamentsLoss,  profileData[0].github)}>Edit Profile</button>
    </div>
  );
}

export default Profile1;
