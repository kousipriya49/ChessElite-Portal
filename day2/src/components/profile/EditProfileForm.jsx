// EditProfileForm.jsx
import React from "react";
import useSignUpForm from "./useSignUpForm";

function EditProfileForm({ data, onSave, onCancel }) {
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm();

  return (
    <form onSubmit={(e) => { handleSubmit(e); onSave(inputs); }}>
      {/* Input fields for editing profile */}
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
}

export default EditProfileForm;
