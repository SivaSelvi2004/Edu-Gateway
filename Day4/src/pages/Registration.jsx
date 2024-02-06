// import React from 'react';
import '../assets/css/Registration.css';
import { Checkbox} from "@mui/material";
import { useNavigate } from 'react-router-dom';
function Registration() {
  const navigate = useNavigate();
  return (
    <>
    <div className="whole">
      <div className="Landing">
          <center>
        <div className="showcase">
          <img
            src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="..."
          />
      
        <div className='rd2'>
        
          <form >
            <br></br>
            <h2>Welcome onboard!!!</h2>
  
            <div className="input-box1">
                <input  required />
                <label>Name</label>
              </div>

              <div className="input-box1">
                <input type="email" required />
                <label>Email</label>
              </div>

              <div className="input-box">
                <input type="password" required />
                <label>Password</label>
              </div>

              <div className="input-box">
                <input type="password" required />
                <label>Confirm Password</label>
              </div>
              
            <div className="register-link">
            <Checkbox />
              {" "}
              By agreeing to the Terms of Service and Privacy Policy
            </div>
           
            
            <button type="Submit" onClick={() => navigate("/login")}>Register</button>          
            <div className="register-link">
                <p>Already have an account? <a href="/login">Login</a></p>
                
              </div>
          </form>
          </div>
      </div>
          </center>
      </div>
      </div>
    
    </>
  );
}

export default Registration;