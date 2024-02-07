import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for making HTTP requests
import "../../styles/add.css";

function CCreate() {
  const [institudeName, setInstitudeName] = useState("");
  const [institudeDescription, setInstitudeDescription] = useState("");
  const [institudeAddress, setInstitudeAddress] = useState("");
  const [institudeEmail, setInstitudeEmail] = useState("");
  const [institudeMobile, setInstitudeMobile] = useState("");
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      institudeName === "" ||
      institudeDescription === "" ||
      institudeAddress === "" ||
      institudeEmail === "" ||
      institudeMobile === "" 
     
    ) {
      alert("Invalid input");
      return;
    }

    const formData = new FormData();
    formData.append("academyName", institudeName);
    formData.append("description", institudeDescription);
    formData.append("address", institudeAddress);
    formData.append("email", institudeEmail);
    formData.append("mobile", institudeMobile);
  

    try {
      // Make a POST request to the Spring Boot API endpoint
      const response = await axios.post("http://localhost:8081/course", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Handle the response as needed
      console.log("Response:", response.data);

      // Redirect to CHome
      navigate("/CHome");
    } catch (error) {
      console.error("Error:", error);
      // Handle errors as needed
    }
  };

  

  return (
    <div className="moonpic">
      <form className="moon-form">
        {/* ... (existing input fields) */}

       

        <button
          onClick={handleSubmit}
          className="moon-button primary"
          type="submit"
        >
          Submit
        </button>

        <Link className="moon-form-link" to="/CHome">
          <button className="moon-button info" size="lg">
            Home
          </button>
        </Link>
      </form>
    </div>
  );
}

export default CCreate;
