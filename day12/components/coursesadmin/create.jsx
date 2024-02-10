import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/add.css";

function ICreate() {
  const [academyName, setAcademyName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("academyName", academyName);
    formData.append("description", description);
    formData.append("address", address);
    formData.append("mobile", mobile);
    formData.append("email", email);

    try {
      const response = await axios.post(
        "http://localhost:8081/api/academies/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Response:", response.data);

      navigate("/IHome");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="moonpic">
      <form className="moon-form">
        <div className="moon-form-group">
          <label htmlFor="academyName">Institute Name:</label>
          <input
            type="text"
            id="academyName"
            value={academyName}
            onChange={(e) => setAcademyName(e.target.value)}
            placeholder="Enter Celestial Institute Name"
            required
          />
        </div>

        <div className="moon-form-group">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter Celestial Institute Description"
            required
          />
        </div>

        <div className="moon-form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter Celestial Institute Address"
            required
          />
        </div>

        <div className="moon-form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Celestial Institute Email"
            required
          />
        </div>

        <div className="moon-form-group">
          <label htmlFor="mobile">Mobile:</label>
          <input
            type="text"
            id="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter Celestial Institute Mobile"
            required
          />
        </div>

        <button
          onClick={handleSubmit}
          className="moon-button primary"
          type="submit"
        >
          Submit
        </button>

        <Link className="moon-form-link" to="/IHome">
          <button className="moon-button info" size="lg">
            Home
          </button>
        </Link>
      </form>
    </div>
  );
}

export default ICreate;
