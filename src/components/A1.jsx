import React, { useEffect, useState } from "react";
import McAfee from "../assets/favicon.png";
import "./A1.css";
import AutoProgressBar from "./Autobar";
import Virus from "./Virus";

const A1 = () => {
  const [number, setNumber] = useState(0);
  const [popupIndex, setPopupIndex] = useState(0);
  const [showPopup, setShowPopup] = useState([]);

  const numberVirus = [
    {
      title: "1. Threat!",
      risk: "Risk level: High",
      details: "Trojan.Fakealert.356",
    },
    { title: "2. Virus!", risk: "Risk level: Medium", details: "Adware.Generic" },
    { title: "3. Alert!", risk: "Risk level: High", details: "Malware.Exploit.421" },
    {
      title: "4. Adware!",
      risk: "Risk level: Medium",
      details: "Worm.NetSky.776",
    },
    {
      title: "5. Threat!",
      risk: "Risk level: Low",
      details: "Issue Resolved",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((prev) => {
        const newNumber = prev + 1;
        return newNumber <= numberVirus.length ? newNumber : numberVirus.length;
      });

      setShowPopup((prev) => {
        const nextIndex = prev.length;
        if (nextIndex < numberVirus.length) {
          return [...prev, numberVirus[nextIndex]];
        }
        return prev;
      });

      setPopupIndex((prev) => (prev + 1 < numberVirus.length ? prev + 1 : prev));
      if (popupIndex >= numberVirus.length - 1) {
        clearInterval(interval);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [popupIndex]);
  

  return (
    <>
      <div className="container conatinerA1">
        <div className="nav">
          <div className="left">
            <img src={McAfee} alt="" />
            <h2>McAfee Total Protection</h2>
          </div>
          <div className="right">
            <h2>_</h2>
            <h2>X</h2>
          </div>
        </div>
        <hr />
        <div className="main main1">
          <h1>Quick Scan</h1>
          <p>Scanning commonly infected areas and startup files...</p>
          <AutoProgressBar className="bar" />
          <div className="message p1">
            <div className="top">
              <p>Total security risks detected: </p>
              <p className="number">{number}</p>
            </div>
            <div className="midd">
              {showPopup.map((virus, index) => (
                <Virus key={index} {...virus} />
              ))}
            </div>
          </div>
          <div className="message">
            <p>[+] Total security risks resolved.</p>
            <p>0</p>
          </div>
          <div className="message">
            <p>Total security risks requiring attention</p>
            <p className="number">{number}</p>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default A1;
