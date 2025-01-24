import React from "react";
import "./PopUp.css";
import act1 from "../assets/action_1.gif";
import act2 from "../assets/action_2.gif";
import act3 from "../assets/action_3.gif";

const PopUp = ({ title, risk, details }) => {
  return (
    <div className="popup">
      <div className="heading">
        <h3>{risk}</h3>
        <p>{details}</p>
      </div>
      <div className="middle">
        <div className="first">
          <span className="first1">
            <img src={act1} alt="" />
            <h3>{title}</h3>
          </span>
        </div>
        <div className="second">
          <span className="first1">
            <img src={act2} alt="" />
            <h3>Origin</h3>
          </span>{" "}
          <span>Not available</span>
        </div>
        <div className="third">
          <span className="first1">
            <img src={act3} alt="" />
            <h3>Activity</h3>{" "}
          </span>
          <span>Threat actions performed: 1</span>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
