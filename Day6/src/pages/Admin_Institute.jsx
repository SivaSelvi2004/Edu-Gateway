import { useState } from 'react';
import '../assets/css/Institute.css';
import { useNavigate } from 'react-router-dom';
import AdminNavBar from '../components/Admin_Navbar';


  
const AdminInstitute = () => {
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
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [editedInstitute, setEditedInstitute] = useState({});
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [newInstitute, setNewInstitute] = useState({
    name: '',
    location: '',
    contactNumber: '',
    email: '',
    courses: '',
  });

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    const filteredInstitutes = initialInstitutes.filter((institute) =>
      institute.name.toLowerCase().includes(value.toLowerCase())
    );

    setInstitutes(filteredInstitutes);
  };

  const handleAdd = () => {
    setNewInstitute({
      name: '',
      location: '',
      contactNumber: '',
      email: '',
      courses: '',
    });
    setShowAddPopup(true); 
  };
  
  const handleSaveAdd = () => {
    const updatedInstitutes = [...institutes, newInstitute];
    setInstitutes(updatedInstitutes);
    alert('Institute added successfully!');
    setShowAddPopup(false);

  };

  const handleEdit = (id) => {
    const instituteToEdit = initialInstitutes.find((inst) => inst.id === id);
    setEditedInstitute(instituteToEdit);
    setShowEditPopup(true);
  };

  const handleSaveEdit = (newData) => {
    
    console.log('Saving edited data:', newData);
    alert('Institute updated successfully!');
    setShowEditPopup(false);
  };

  const handleDelete = (id) => {
    const updatedInstitutes = [...institutes];
    updatedInstitutes.splice(id, 1);
    setInstitutes(updatedInstitutes);    
    alert('Institute deleted successfully!');
  };

  return (
    <div className="whole">
      <header>
      <AdminNavBar/>
      </header>
      <div className="Landing">
        <div className="showcase">
          <img
            src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="..."
          />
          
          <div className="institute-container">
          
            <h1 style={{ color: 'white', textAlign: 'center' }}>List of Institutes</h1>
            <br></br>
            <input
              type="text"
              placeholder="Search by Institute Name"
              value={searchTerm}
              onChange={handleSearch}
              className="search-bar"
            />
            <br></br><br></br>
            <button className="add-institute-button" onClick={() => handleAdd()}>
            <h4>Add Institute</h4>
            </button>
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
                  
                  <button className="course-btn" onClick={() => navigate('/admincourse')}>
                    Course
                  </button>
                 
                <div className="admin-actions">
                    <button className="admin-edit-btn" onClick={() => handleEdit(institute.id)}>
                    Edit
                    </button>
                    <button className="admin-delete-btn" onClick={() => handleDelete(institute.id)}>
                    Delete
                    </button>
                </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {showEditPopup && (
    <div className='edit-institute-popup-container'>
  <div className="edit-popup">
    <h2>Edit Institute Details</h2>
    <div className="edit-form">
      <label htmlFor="editedName">Name:</label>
      <input
        type="text"
        id="editedName"
        value={editedInstitute.name}
        onChange={(e) => setEditedInstitute({ ...editedInstitute, name: e.target.value })}
      />
      
      <label htmlFor="editedLocation">Location:</label>
      <input
        type="text"
        id="editedLocation"
        value={editedInstitute.location}
        onChange={(e) => setEditedInstitute({ ...editedInstitute, location: e.target.value })}
      />
      
      <label htmlFor="editedContactNumber">Contact Number:</label>
      <input
        type="text"
        id="editedContactNumber"
        value={editedInstitute.contactNumber}
        onChange={(e) => setEditedInstitute({ ...editedInstitute, contactNumber: e.target.value })}
      />
      
      <label htmlFor="editedEmail">Email:</label>
      <input
        type="text"
        id="editedEmail"
        value={editedInstitute.email}
        onChange={(e) => setEditedInstitute({ ...editedInstitute, email: e.target.value })}
      />
      
      <label htmlFor="editedCourses">Courses Available:</label>
      <input
        type="text"
        id="editedCourses"
        value={editedInstitute.courses}
        onChange={(e) => setEditedInstitute({ ...editedInstitute, courses: e.target.value })}
      />
    </div>
    
    <button onClick={() => handleSaveEdit(editedInstitute)}>Update</button>
    <button onClick={() => setShowEditPopup(false)}>Cancel</button>
  </div>
  </div>
)}

{showAddPopup && (
        <div className="add-institute-popup-container">
          <div className="add-popup" >
            <h2>Add New Institute</h2>
            <div className="add-form">
              <label htmlFor="addName">Name:</label>
              <input
                type="text"
                id="addName"
                value={newInstitute.name}
                onChange={(e) => setNewInstitute({ ...newInstitute, name: e.target.value })}
              />

              <label htmlFor="addLocation">Location:</label>
              <input required
                type="text"
                id="addLocation"
                value={newInstitute.location}
                onChange={(e) => setNewInstitute({ ...newInstitute, location: e.target.value })}
              />

              <label htmlFor="addContactNumber">Contact Number:</label>
              <input required
                type="text"
                id="addContactNumber"
                value={newInstitute.contactNumber}
                onChange={(e) => setNewInstitute({ ...newInstitute, contactNumber: e.target.value })}
              />

              <label htmlFor="addEmail">Email:</label>
              <input required
                type="text"
                id="addEmail"
                value={newInstitute.email}
                onChange={(e) => setNewInstitute({ ...newInstitute, email: e.target.value })}
              />

              <label htmlFor="addCourses">Courses Available:</label>
              <input required
                type="text"
                id="addCourses"
                value={newInstitute.courses}
                onChange={(e) => setNewInstitute({ ...newInstitute, courses: e.target.value })}
              />

              <button onClick={handleSaveAdd}>Add</button>
              <button onClick={() => setShowAddPopup(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
    
  );
};

export default AdminInstitute;
