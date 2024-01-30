// Profile.jsx
import React from "react";
import useSignUpForm from "./useSignUpForm";
import"../../styles/profile.css";
import EditProfile from "./EditProfile"; // Import EditProfile component if needed

function Profile() {
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm();
  const name = "Aphrodita";
  const aboutAthlete = "Hi, my name is " + name;

  return (
    <>
      <div className="profile">
        <div className="container">
          <div className="header">
            <h1>Athlete Registration Form</h1>
          </div>
          <div className="form" onSubmit={handleSubmit}>
            {/* ... input fields for registration form */}
            <button type="submit">Submit</button>
          </div>
        </div>
      </div>
      <div className="pp">
        <div className="header">
          <h1>Athlete Bio</h1>
        </div>
        <div className="form">
          <div className="mainInfo">
            <img
              src={inputs.photo || "https://image.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg"}
              alt="Profile"
              className="profile-img"
            />
            <div className="nameLocation">
              <div className="fullName">
                <p>{inputs.firstName || "Annie"}</p>
                <p>{inputs.lastName || "Thorisdottir"}</p>
              </div>
              <div className="location">
                <p>📍 {inputs.location || "Iceland"}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="interests">
          <p>
            {inputs.interests ||
              "Anníe is a professional CrossFit athlete from Reykjavík, Iceland. Anníe is the first woman to win the CrossFit Games twice. She placed second in the 2010 and 2014 CrossFit Games"}
          </p>
        </div>
        <div className="interests">
          <p>
            {inputs.skills ||
              "Anníe is a professional CrossFit athlete from Reykjavík, Iceland. Anníe is the first woman to win the CrossFit Games twice. She placed second in the 2010 and 2014 CrossFit Games"}
          </p>
        </div>
        <div className="interests">
          <p>
            Tournaments Attended: {inputs.tournamentsattended || ""}
          </p>
        </div>
        <div className="interests">
          <p>
            Tournaments Won: {inputs.tournamentswon || ""}
          </p>
        </div>
        <div className="interests">
          <p>
            Tournaments Loss: {inputs.tournamentsloss || ""}
          </p>
        </div>
        <div className="interests">
          <p>
            Education: {inputs.education || "Athlete School"}
          </p>
        </div>
        <div className="interests">
          <p>
            {inputs.github && (
              <a href={inputs.github} target="_blank" rel="noopener noreferrer">
                GitHub Profile
              </a>
            )}
          </p>
        </div>
        <div className="interests">
          <p>
            Chess Rating: {inputs.chessRating || ""}
          </p>
        </div>
        <div className="interests">
          <p>
            Chess Club: {inputs.chessClub || ""}
          </p>
        </div>
        <div className="interests">
          <p>
            Favorite Chess Opening: {inputs.favoriteOpening || ""}
          </p>
        </div>
        <div className="interests">
          <p>
            Tournament Experience: {inputs.tournamentExperience || ""}
          </p>
        </div>
      </div>
    </>
  );
}

export default Profile;
