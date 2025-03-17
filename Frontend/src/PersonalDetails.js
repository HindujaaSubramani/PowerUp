import React, { useState } from "react";
import "./LoginPage.css";

const PersonalDetails = ({ setPage }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    qualification: "",
    institute: "",
    experience: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setPage("trackSelection"); // Navigate to TrackSelection page
  };

  return (
    <div className="personal-details-container">
      <h2>Enter Your Personal Details</h2>

      <div className="form-group">
        <label>First Name</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Last Name</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Date of Birth</label>
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Qualification</label>
        <select name="qualification" value={formData.qualification} onChange={handleChange}>
          <option value="">Select</option>
          <option value="student">Student</option>
          <option value="working">Working Professional</option>
          <option value="awaiting">Awaiting an Offer</option>
        </select>
      </div>

      <div className="form-group">
        <label>Institute</label>
        <input type="text" name="institute" value={formData.institute} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Previous Experience</label>
        <select name="experience" value={formData.experience} onChange={handleChange}>
          <option value="">Select</option>
          <option value="0-3">0-3 years</option>
          <option value="3-5">3-5 years</option>
          <option value="5+">5+ years</option>
        </select>
      </div>

      <button className="submit-button" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default PersonalDetails;
