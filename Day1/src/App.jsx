// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import Institute from './pages/Institute';
import Course from './pages/Course';
import Aboutus from './pages/Aboutus';
import Login from './pages/Login';
import Registration from './pages/Registration';
import AdminLogin from './pages/Admin_Login';
import Enroll from './pages/Enroll';
import ProfileCreation from './pages/Profile_Creation';
import Profile from './pages/Profile';
import AdminInstitute from './pages/Admin_Institute';
import AdminCourses from './pages/Admin_Course';
import AdminHome from './pages/Admin_Landing';
import Sidebar from './components/Sidebar';
import EnrolledCourses from './pages/Enrolled_Courses';
import AdminAboutus from './pages/Admin_Aboutus';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        
        <Route index path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/institute' element={<Institute/>}/>
        <Route path='/course' element={<Course/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/enroll' element={<Enroll/>}/>
        <Route path='/profilecreation' element={<ProfileCreation/>}/>
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path='/admininstitute' element={<AdminInstitute/>}/>
        <Route path='/admincourse' element={<AdminCourses/>}/>
        <Route path='/adminhome' element={<AdminHome/>}/>
        <Route path='/sidebar' element={<Sidebar/>}/>
        <Route path='/enrolledcourse' element={<EnrolledCourses/>}/>
        <Route path='/adminaboutus' element={<AdminAboutus/>}/>


      </Routes>
    </Router>
    </>
  )
}

export default App
