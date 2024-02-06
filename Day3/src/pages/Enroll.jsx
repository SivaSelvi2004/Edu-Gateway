import { useState } from 'react';
import '../assets/css/Enroll.css';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../components/Navbar';
import PropTypes from 'prop-types';
import Sidebar from '../components/Sidebar';
function PaymentConfirmationPopup({ onClose, onConfirm }) {
  
  return (
    <div className="popup-container">
      <div className="popup">
        <p>Do you want to proceed with the payment?</p>
        <button onClick={onConfirm}>Confirm</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}
PaymentConfirmationPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};


function PaymentDetailsPopup({ onClose, onPay }) {
  return (
    <div className="payment-details-popup-container">
      <div className="payment-details-popup">
        <p>Payment Details:</p>
        <div className="form-group">
          <label style={{color:'black'}} htmlFor="cardNumber">Card Number:</label>
          <input type="text" id="cardNumber" name="cardNumber" placeholder="1234 5678 9012 3456" />
        </div>
        <div className="form-group">
          <label style={{color:'black'}} htmlFor="expirationDate">Expiration Date:</label>
          <input type="text" id="expirationDate" name="expirationDate" placeholder="MM/YYYY" />
        </div>
        <div className="form-group">
          <label style={{color:'black'}} htmlFor="cvv">CVV:</label>
          <input type="text" id="cvv" name="cvv" placeholder="123" />
        </div>
        <div className="form-group">
          <label style={{color:'black'}} htmlFor="amount">Amount:</label>
          <input type="number" id="amount" name="amount" placeholder="Enter amount" />
        </div>
        <div className="button-container">
          <button onClick={onPay} className="pay-button">Pay</button>
          <button onClick={onClose} className="cancel-button">Cancel</button>
        </div>
      </div>
    </div>
  );
}
PaymentDetailsPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  onPay: PropTypes.func.isRequired,
};




function Enroll() {
  const navigate = useNavigate();
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [showPaymentConfirmationPopup, setShowPaymentConfirmationPopup] = useState(false);
  const [showPaymentDetailsPopup, setShowPaymentDetailsPopup] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Enrollment form submitted');
    setIsEnrolled(true);
    alert('Enrollment successful!');
  };

  const handleMakePayment = () => {
    setShowPaymentConfirmationPopup(true);
  };

  const handlePaymentConfirmation = (confirmed) => {
    if (confirmed) {
      setShowPaymentConfirmationPopup(false);
      setShowPaymentDetailsPopup(true);
    }
  };

  const handlePaymentDetailsConfirmation = () => {
    setShowPaymentDetailsPopup(false);
    alert('Payment successful');
    navigate('/course');
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
          <div className="enroll-box">
            <form onSubmit={handleSubmit} className="enroll-form">
              <br></br>
              <br></br>
              <h2 style={{ color: 'white', textAlign: 'center' }}>ENROLLMENT FORM</h2>
              <br></br>
              <div className="form-group">
                <label htmlFor="studentName">StudentName:</label>
                <input type="text" id="studentName" name="studentName" />
              </div>
              <div className="form-group">
                <label htmlFor="collegeName">CollegeName:</label>
                <input type="text" id="collegeName" name="collegeName" />
              </div>
              <div className="form-group">
                <label htmlFor="courseName">CourseName:</label>
                <input type="text" id="courseName" name="courseName" />
              </div>
              <div className="form-group">
                <label htmlFor="courseFee">CourseFee:   </label>
                <input type="number" id="courseFee" name="courseFee" />
              </div>
              <br></br>
              
              <button type="submit" className="enroll-button">
                Enroll
              </button>
              <br></br>
              {isEnrolled && (
                <>
                <br></br>
                <button type="button" onClick={handleMakePayment} className="make-payment-button">
                  Make Payment
                </button>
                </>
              )}
              <br></br>
              <Link to="/profile" style={{ color: 'blueviolet' }}>
                Go to Profile
              </Link>
            </form>
            {showPaymentConfirmationPopup && (
              <PaymentConfirmationPopup
                onClose={() => setShowPaymentConfirmationPopup(false)}
                onConfirm={() => handlePaymentConfirmation(true)}
              />
            )}
            {showPaymentDetailsPopup && (
              <PaymentDetailsPopup
                onClose={() => setShowPaymentDetailsPopup(false)}
                onPay={handlePaymentDetailsConfirmation}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Enroll;
