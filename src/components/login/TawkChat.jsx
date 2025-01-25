import React, { useEffect } from "react";

const TawkChat = () => {
  useEffect(() => {
    // Initialize the Tawk.to script
    var Tawk_API = Tawk_API || {};
    var Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script");
      s1.async = true;
      s1.src = "https://embed.tawk.to/678e27323a84273260719a0f/1ii1ki7ou";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      var s0 = document.getElementsByTagName("script")[0];
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []); // Runs only once when the component is mounted

  return null; // No UI required for the chat widget
};

export default TawkChat;
