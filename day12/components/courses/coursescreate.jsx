import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/add.css";

function CCreate() {
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseDuration, setCourseDuration] = useState("");
  const [photo, setPhoto] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (courseName === "" || courseDescription === "" || courseDuration === "") {
      alert("Invalid input");
      return;
    }

    const formData = new FormData();
    formData.append("courseEntity", JSON.stringify({
        courseName: courseName,
        courseDescription: courseDescription,
        courseDuration: courseDuration,
    }));
    formData.append("file", photo);

    try {
      const response = await axios.post("http://localhost:8081/api/courses/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Response:", response.data);
      navigate("/CHome");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handlePhotoURLChange = (e) => {
    setPhoto(e.target.value);
  };

  return (
    <div className="moonpic">
      <form className="moon-form">
        <div className="moon-form-group mb-3">
          <input
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            type="text"
            placeholder="Enter Course Name"
          />
        </div>

        <div className="moon-form-group mb-3">
          <input
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
            type="text"
            placeholder="Enter Course Description"
          />
        </div>

        <div className="moon-form-group mb-3">
          <input
            value={courseDuration}
            onChange={(e) => setCourseDuration(e.target.value)}
            type="text"
            placeholder="Enter Course Duration"
          />
        </div>

        <div className="moon-form-group mb-3">
          <input
            value={photo}
            onChange={handlePhotoURLChange}
            type="url"
            name="photoURL"
            placeholder="Enter Photo URL"
          />
        </div>

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
