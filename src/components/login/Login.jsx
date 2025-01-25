import React, { useEffect } from "react";
import "./Login.css"; 
import McAfee from '../../assets/McAfee.png'
import TawkChat from "./TawkChat";

const Login = () => {
  
  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <>
    <TawkChat/>
    <div className="modal-overlay">
      <div className="modal-container">
        {/* Red Banner */}
        <div className="modal-banner">
          <h2>Your Antivirus Is Not Active!</h2>
        </div>

        {/* Main Content */}
        <div className="modal-content">
          <p className="p">
            Your Antivirus Product Key Is Available Now: <br />
            <strong>UIU7708C-REE4Y7L5-XXXXXXXX</strong>
          </p>

          <p className="form">Please fill the form to download your product key:</p>

          {/* Form */}
          <form className="modal-form" onSubmit={handleSubmit}>
 
              <label>Name:</label>
              <input type="text" placeholder="Your full name" required />
          
              <label>Email:</label>
              <input type="email" placeholder="Your email address" required />
            
              <label>Phone Number:</label>
              <input type="tel" placeholder="Phone number" required />
       
            <button type="submit" className="download-button" >Download</button>
          </form>
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <img
            src={McAfee}
            alt="McAfee"
            className="mcafee-logo"
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
