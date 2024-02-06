import { useState } from 'react';
import '../assets/css/Institute.css';
import NavBar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Institute = () => {
  const navigate = useNavigate();
  const initialInstitutes = [
    {
      name: "ABC Institute",
      location: "City A",
      contactNumber: "123-456-7890",
      email: "abc@example.com",
      courses: 10,
    },
    {
      name: "XYZ Institute",
      location: "City A",
      contactNumber: "123-456-7890",
      email: "abc@example.com",
      courses: 10,
    },
    {
      name: "SSS Institute",
      location: "City A",
      contactNumber: "123-456-7890",
      email: "abc@example.com",
      courses: 10,
    },
    // Add more institutes as needed
  ];

  const [institutes, setInstitutes] = useState(initialInstitutes);
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle search
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    // Filter institutes based on search term
    const filteredInstitutes = initialInstitutes.filter((institute) =>
      institute.name.toLowerCase().includes(value.toLowerCase())
    );

    setInstitutes(filteredInstitutes);
  };

  return (
    <div className="whole">
      <header>
        <NavBar />
      </header>
      <div className="Landing">
        <div className="showcase">
          <img
            src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="..."
          />
          <Sidebar/>
          <div className="institute-container">
            <h1 style={{ color: 'white', textAlign: 'center' }}>List of Institutes</h1>
            <br></br>
            {/* Search bar */}
            <input
              type="text"
              placeholder="Search by Institute Name"
              value={searchTerm}
              onChange={handleSearch}
              className="search-bar"
            />
            <br></br><br></br>
            <div className="institute-list">
              {institutes.map((institute, index) => (
                <div key={index} className="institute-item">
                  <h2>{institute.name}</h2>
                  <p>
                    <strong>Location:</strong> {institute.location}
                  </p>
                  <p>
                    <strong>Contact Number:</strong> {institute.contactNumber}
                  </p>

                  <p>
                    <strong>Email:</strong> {institute.email}
                  </p>
                  <p>
                    <strong>Courses Available:</strong> {institute.courses}
                  </p>
                  <br></br>
                  <button className="course-btn" onClick={() => navigate('/course')}>
                    Course
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Institute;
