import React from "react";
import { useNavigate } from "react-router-dom";
import useSignUpForm from "./useSignUpForm";
import"../../styles/profile1.css";
function Profileex({ onSubmit }) {
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm();
  const navigate = useNavigate();

  const handleProfileSubmit = () => {
    console.log(inputs); // Check if the form data is logged correctly
    onSubmit(inputs);
    navigate("/edit");
  };
  

  return (
   
    <div className="profile1">
      <div className="container">
        <div className="header">
          <h1>Athlete Registration Form</h1>
        </div>
        <div className="form" onSubmit={handleSubmit}>
          <input
            onChange={handleInputChange}
            type="text"
            name="firstName"
            value={inputs.firstName || ""}
            placeholder="First Name"
          />
          <input
            onChange={handleInputChange}
            type="text"
            name="lastName"
            value={inputs.lastName || ""}
            placeholder="Last Name"
          />
          <input
            onChange={handleInputChange}
            type="text"
            name="interests"
            value={inputs.interests || ""}
            placeholder="Short Bio"
          />
          <input
            onChange={handleInputChange}
            type="text"
            name="skills"
            value={inputs.skills || ""}
            placeholder="Skills"
          />
          <input
            onChange={handleInputChange}
            type="number"
            name="tournamentsattended"
            value={inputs.tournamentsattended || ""}
            placeholder="Tournaments attended"
          />
          <input
            onChange={handleInputChange}
            type="number"
            name="tournamentswon"
            value={inputs.tournamentswon || ""}
            placeholder="Tournaments won"
          />
          <input
            onChange={handleInputChange}
            type="number"
            name="tournamentsloss"
            value={inputs.tournamentsloss || ""}
            placeholder="Tournaments loss"
          />
          <input
            onChange={handleInputChange}
            type="text"
            name="education"
            value={inputs.education || ""}
            placeholder="Education"
          />
          <input
            onChange={handleInputChange}
            type="url"
            name="github"
            value={inputs.github || ""}
            placeholder="GitHub URL"
          />
          
          <input
            onChange={handleInputChange}
            type="url"
            name="photo"
            value={inputs.photo || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}
            placeholder="Photo URL"
          />
          <input
            onChange={handleInputChange}
            type="text"
            name="location"
            value={inputs.location || ""}
            placeholder="📍 Location"
          />
          <input
            onChange={handleInputChange}
            type="text"
            name="rating"
            value={inputs.rating || ""}
            placeholder="ratings"
          />
            <input
            onChange={handleInputChange}
            type="text"
            name="club"
            value={inputs.club || ""}
            placeholder="chess club"
          />
           <input
            onChange={handleInputChange}
            type="text"
            name="exp"
            value={inputs.exp || ""}
            placeholder="chess experience"
          />
          <button type="submit">Submit</button>
        </div>
      </div>
        <div className="pp1">
      {/* <div className="container"> */}
        <div className="header">
          <h1>Athlete Bio</h1>
        </div>
        <div className="form">
          <div className="mainInfo">
            <img
              src={inputs.photo || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}
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
            Chess Rating: {inputs.rating || ""}
          </p>
        </div>
        <div className="interests">
          <p>
            Chess Club: {inputs.club|| ""}
          </p>
        </div>
       
        <div className="interests">
          <p>
            Tournament Experience: {inputs.exp || ""}
          </p>
        </div>
      </div>
      </div>
    // </div>
  );
}

export default Profileex;