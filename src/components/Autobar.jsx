import React, { useState, useEffect } from "react";
import "./A1.css";
import PopUp from "./PopUp";
import Warning from "./Warning";

const AutoProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [virus, setVirus] = useState(6782);
  const [popupIndex, setPopupIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const popups = [
    {
      title: "Threat Detected!",
      risk: "High Risk",
      details: "Trojan.Fakealert.356",
    },
    { title: "Warning!", risk: "Medium Risk", details: "Adware.Generic" },
    { title: "Alert!", risk: "High Risk", details: "Malware.Exploit.421" },
    {
      title: "Critical Issue!",
      risk: "Severe Risk",
      details: "Worm.NetSky.776",
    },
    {
      title: "Threat Neutralized!",
      risk: "No Risk",
      details: "Issue Resolved",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
      const virus = setInterval(() => {
        setVirus((prev) => (prev < 112256 ? prev + 4 : 112256));
      }, 20);
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(virus);
    };
  }, []);

  useEffect(() => {
    if (progress % 20 === 0 && progress > 0 && popupIndex < popups.length) {
      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
        setPopupIndex((prev) => prev + 1);
      }, 2400);
    }
  }, [progress, popupIndex]);

  return (
    <>
      {progress >= 100 && <Warning/>}
      <div style={{ width: "100%", padding: "6px 0px 20px 0px" }}>
        <div
          style={{
            width: "100%",
            height: "30px",
            backgroundColor: "#ccc",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            className="bar"
            style={{
              width: `${progress}%`,
              height: "100%",
              backgroundColor: "#C01818",
              transition: "width 0.1s ease",
            }}
          >
            <span className="barLeft">Total item scanned</span>
            <span className="barRight">{virus}</span>
          </div>
        </div>
      </div>
      {showPopup && <PopUp {...popups[popupIndex]} />}
    </>
  );
};

export default AutoProgressBar;
