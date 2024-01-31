import React, { useEffect, useState } from "react";
import Iarray1 from "./coursesarray";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/add.css"; // Import your custom CSS file

function CEdit() {
    const [institudeName, setInstitudeName] = useState("");
    const [institudeDescription, setInstitudeDescription] = useState("");
    const [institudeaddress, setInstitudeAddress] = useState("");
    const [institudeemail, setInstitudeEmail] = useState("");
    const [institudemobile, setInstitudeMobile] = useState("");
    const [id, setId] = useState("");
    const [image, setImage] = useState(""); // State for image
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (institudeName === "" || institudeemail === "") {
            alert("Invalid input");
            return;
        }

        const index = Iarray1.findIndex(item => item.id === id);
        if (index !== -1) {
            Iarray1[index].institudename = institudeName;
            Iarray1[index].institudedescription = institudeDescription;
            Iarray1[index].institudeaddress = institudeaddress;
            Iarray1[index].institudeemail = institudeemail;
            Iarray1[index].institudemobile = institudemobile;
            Iarray1[index].image = image; // Assign image to the item
        }

        navigate("/CHome");
    };

    useEffect(() => {
        const storedId = localStorage.getItem("id");
        const storedInstitudeName = localStorage.getItem("institudename");
        const storedInstitudeDescription = localStorage.getItem("institudedescription");
        const storedInstitudeAddress = localStorage.getItem("institudeaddress");
        const storedInstitudeEmail = localStorage.getItem("institudeemail");
        const storedInstitudeMobile = localStorage.getItem("institudemobile");

        setId(storedId);
        setInstitudeName(storedInstitudeName);
        setInstitudeDescription(storedInstitudeDescription);
        setInstitudeAddress(storedInstitudeAddress);
        setInstitudeEmail(storedInstitudeEmail);
        setInstitudeMobile(storedInstitudeMobile);
    }, []);

    // Function to handle image upload
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result); // Set image state with base64 data
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="moonpic">
            <form
                className="moon-form"
                onSubmit={handleSubmit}
            >
                <div className="moon-form-group mb-3" controlId="formBasicInstitudeName">
                    <input
                        value={institudeName}
                        onChange={(e) => setInstitudeName(e.target.value)}
                        type="text"
                        placeholder="Enter Institute Name"
                    />
                </div>

                <div className="moon-form-group mb-3" controlId="formBasicInstitudeDescription">
                    <input
                        value={institudeDescription}
                        onChange={(e) => setInstitudeDescription(e.target.value)}
                        type="text"
                        placeholder="Enter Institute Description"
                    />
                </div>

                <div className="moon-form-group mb-3" controlId="formBasicInstitudeAddress">
                    <input
                        value={institudeaddress}
                        onChange={(e) => setInstitudeAddress(e.target.value)}
                        type="text"
                        placeholder="Enter Institute Address"
                    />
                </div>

                <div className="moon-form-group mb-3" controlId="formBasicInstitudeEmail">
                    <input
                        value={institudeemail}
                        onChange={(e) => setInstitudeEmail(e.target.value)}
                        type="email"
                        placeholder="Enter Institute Email"
                    />
                </div>

                <div className="moon-form-group mb-3" controlId="formBasicInstitudeMobile">
                    <input
                        value={institudemobile}
                        onChange={(e) => setInstitudeMobile(e.target.value)}
                        type="tel"
                        placeholder="Enter Institute Mobile"
                    />
                </div>

                {/* Input field for image upload */}
                <div className="moon-form-group mb-3" controlId="formBasicInstitudeImage">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                    />
                </div>

                <button
                    className="moon-button primary"
                    type="submit"
                    size="lg"
                >
                    Update
                </button>

                <Link className="moon-form-link" to="/CHome">
                    <button className="moon-button warning" size="lg">
                        Home
                    </button>
                </Link>
            </form>
        </div>
    );
}

export default CEdit;