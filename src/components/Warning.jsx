import React from "react";
import "./Warning.css";
import warn from '../assets/atten.png'
import { useNavigate } from "react-router-dom";

const Warning = () => {

  const navigate = useNavigate()

  const handleNextPage = () => {
    navigate('/login')
  }

  return (
    <>
    <div className="warning">
      <div className="containerWar">
        <div className="heading">
          <div className="left">
            <img src={warn} alt="" />
            <h1>Your PC is infected with 5 viruses!</h1>
          </div>
          <div className="right">
            <h1>-</h1>
            <h1>X</h1>
          </div>
        </div>
        <div className="body">
          <h2>IMMEDIATE ACTION IS REQUIRED!</h2>
          <p>
            Viruses found on this PC most likely track internet activity to
            collect banking
            details and login credentials. Unprotected PCs are 93% more
            vulnerable to 
            suffer from malware.
          </p>
          <button onClick={handleNextPage}>Clean Up Now</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Warning;
