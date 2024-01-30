// ProfilePage.jsx
import React, { useState } from "react";
import ViewProfile from "./ViewProfile";
import EditProfile from "./EditProfile";

function ProfilePage() {
  const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: "Aphrodita",
    lastName: "Thorisdottir",
    // Add other profile fields here
  });

  const handleSave = (data) => {
    setProfileData(data);
    setEditMode(false);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
  };

  return (
    <div>
      {editMode ? (
        <EditProfile data={profileData} onSave={handleSave} onCancel={handleCancelEdit} />
      ) : (
        <ViewProfile data={profileData} onEdit={handleEdit} />
      )}
    </div>
  );
}

export default ProfilePage;
