// import React from "react";
import { useSelector } from "react-redux";
import "../assets/css/Profile.css";
import NavBar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Profile = () => {
  const data=useSelector(state=>state.user.user);
  const userEmail=data.email;
  const profileData = {
    name: "John Doe",
    fatherName: "Richard Doe",
    motherName: "Jane Doe",
    gender: "Male",
    age: 25,
    nationality: "American",
    dob: "01-01-1996",
    address: "123 Main St, Anytown, USA",
    mobile: "+1-1234567890",
    sslcMarks: 95,
    hscMarks: 85
  };

  return (
    <div className="whole">
    <header>
      <NavBar />
     
    </header>
    <div className="Landing">
      <div className="showcase">
        <img src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..." />
    <Sidebar/>
    <div className="profile-container">
      <div className="profile-content">
        <h1 className="title">PROFILE</h1>
        <div className="profile-item">
          <span className="label">Email:</span>
          <span className="value">{userEmail}</span>
        </div>
        <div className="profile-item">
          <span className="label">Name:</span>
          <span className="value">{profileData.name}</span>
        </div>
        <div className="profile-item">
          <span className="label">Father Name:</span>
          <span className="value">{profileData.fatherName}</span>
        </div>
        <div className="profile-item">
          <span className="label">Mother Name:</span>
          <span className="value">{profileData.motherName}</span>
        </div>
        <div className="profile-item">
          <span className="label">Gender:</span>
          <span className="value">{profileData.gender}</span>
        </div>
        <div className="profile-item">
          <span className="label">Age:</span>
          <span className="value">{profileData.age}</span>
        </div>
        <div className="profile-item">
          <span className="label">Nationality:</span>
          <span className="value">{profileData.nationality}</span>
        </div>
        <div className="profile-item">
          <span className="label">Date of Birth:</span>
          <span className="value">{profileData.dob}</span>
        </div>
        <div className="profile-item">
          <span className="label">Address:</span>
          <span className="value">{profileData.address}</span>
        </div>
        <div className="profile-item">
          <span className="label">Mobile:</span>
          <span className="value">{profileData.mobile}</span>
        </div>
        <div className="profile-item">
          <span className="label">SSLC Marks:</span>
          <span className="value">{profileData.sslcMarks}</span>
        </div>
        <div className="profile-item">
          <span className="label">HSC Marks:</span>
          <span className="value">{profileData.hscMarks}</span>
        </div>
        <button className="update-btn">UPDATE PROFILE</button>
      </div>
    </div>
    </div>
      </div>
      
    </div>
  );
};

export default Profile;