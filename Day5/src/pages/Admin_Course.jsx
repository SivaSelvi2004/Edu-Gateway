import { useState } from 'react';
import '../assets/css/Course.css';
import AdminNavBar from '../components/Admin_Navbar';

const AdminCourses = () => {

  const initialCourses = [
    {
      name: "Computer Science",
      duration: "4 years",
      department: "Engineering",
      institutesOffering: 20,
    },
    {
      name: "Computer Science",
      duration: "4 years",
      department: "Engineering",
      institutesOffering: 20,
    },
    {
      name: "Computer Science",
      duration: "4 years",
      department: "Engineering",
      institutesOffering: 20,
    },

  ];

  const [courses, setCourses] = useState(initialCourses);
  const [searchTerm, setSearchTerm] = useState('');
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [editedCourse, setEditedCourse] = useState({});
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [newCourse, setNewCourse] = useState({
    name: '',
    duration: '',
    department: '',
    institutesOffering: '',
  });


  // Function to handle search
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    const filteredCourses = initialCourses.filter((course) =>
      course.name.toLowerCase().includes(value.toLowerCase())
    );

    setCourses(filteredCourses);
  };
  const handleAdd = () => {
    setNewCourse({
      name: '',
      duration: '',
      department: '',
      institutesOffering: '',
    });
    setShowAddPopup(true);
  };

  const handleSaveAdd = () => {
    const updatedCourses = [...courses, newCourse];
    setCourses(updatedCourses);
    alert('Course added successfully!');
    setShowAddPopup(false);
  };
  const handleEdit = (index) => {
    const courseToEdit = initialCourses[index];
    setEditedCourse(courseToEdit);
    setShowEditPopup(true);
  };

  const handleSaveEdit = () => {
    console.log('Saving edited course:', editedCourse);
    alert('Course updated successfully!');
    setShowEditPopup(false);
  };

  const handleDelete = (index) => {
    const updatedCourses = [...courses];
    updatedCourses.splice(index, 1);
    setCourses(updatedCourses);
    alert('Course deleted successfully!');
  };

  return (
    <div className="whole">
      <header>
        <AdminNavBar />
      </header>
      <div className="Landing">
        <div className="showcase">
          <img
            src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="..."
          />
          <div className="courses-container">
            <h1 style={{ color: 'white', textAlign: 'center' }}>List of Courses</h1>
            <br></br>
            <input
              type="text"
              placeholder="Search by Course Name"
              value={searchTerm}
              onChange={handleSearch}
              className="search-bar"
            />
            <br></br>
            <button className="add-institute-button" onClick={() => handleAdd()}>
            Add Institute
            </button>
            <br></br><br></br><br></br>
            <div className="courses-list">
              {courses.map((course, index) => (
                <div key={index} className="course-item">
                  <h2>{course.name}</h2>
                  <p><strong>Duration:</strong> {course.duration}</p>
                  <p><strong>Department:</strong> {course.department}</p>
                  <p><strong>Institutes Offering:</strong> {course.institutesOffering}</p>
                  <div className="admin-actions">
                <button className="admin-edit-btn" onClick={() => handleEdit(index)}>
                  Edit
                </button>
                <button className="admin-delete-btn" onClick={() => handleDelete(index)}>
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
  <div className="edit-course-popup-container">
    <div className="edit-popup">
      <h4>Edit Course Details</h4>
      <div className="edit-form">
        <label htmlFor="editedName">Name:</label>
        <input
          type="text"
          id="editedName"
          value={editedCourse.name}
          onChange={(e) => setEditedCourse({ ...editedCourse, name: e.target.value })}
        />

        <label htmlFor="editedDuration">Duration:</label>
        <input
          type="text"
          id="editedDuration"
          value={editedCourse.duration}
          onChange={(e) => setEditedCourse({ ...editedCourse, duration: e.target.value })}
        />

        <label htmlFor="editedDepartment">Department:</label>
        <input
          type="text"
          id="editedDepartment"
          value={editedCourse.department}
          onChange={(e) => setEditedCourse({ ...editedCourse, department: e.target.value })}
        />

        <label htmlFor="editedInstitutesOffering">Institutes Offering:</label>
        <input
          type="text"
          id="editedInstitutesOffering"
          value={editedCourse.institutesOffering}
          onChange={(e) => setEditedCourse({ ...editedCourse, institutesOffering: e.target.value })}
        />
      </div>
      <button onClick={handleSaveEdit}>Update</button>
      <button onClick={() => setShowEditPopup(false)}>Cancel</button>
    </div>
  </div>
)}

{showAddPopup && (
        <div className="add-course-popup-container">
          <div className="add-popup">
            <h4>Add New Course</h4>
            <div className="add-form">
              <label htmlFor="addName">Name:</label>
              <input
                type="text"
                id="addName"
                value={newCourse.name}
                onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
              />

              <label htmlFor="addDuration">Duration:</label>
              <input
                type="text"
                id="addDuration"
                value={newCourse.duration}
                onChange={(e) => setNewCourse({ ...newCourse, duration: e.target.value })}
              />

              <label htmlFor="addDepartment">Department:</label>
              <input
                type="text"
                id="addDepartment"
                value={newCourse.department}
                onChange={(e) => setNewCourse({ ...newCourse, department: e.target.value })}
              />

              <label htmlFor="addInstitutesOffering">Institutes Offering:</label>
              <input
                type="text"
                id="addInstitutesOffering"
                value={newCourse.institutesOffering}
                onChange={(e) => setNewCourse({ ...newCourse, institutesOffering: e.target.value })}
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

export default AdminCourses;