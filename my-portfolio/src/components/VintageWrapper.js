import React from 'react';
import './VintageWrapper.css'; // For animation only

function VintageWrapper({ children }) {
  return (
    <div
      className="fade-in"
      style={{
        backgroundImage: "url('/Portfolio 1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem"
      }}
    >
      <div style={{
        backgroundColor: "rgba(255, 255, 240, 0.9)",
        padding: "2rem",
        borderRadius: "16px",
        maxWidth: "800px",
        width: "100%",
        border: "2px dashed #b2967d",
        boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        fontFamily: "'Courier New', Courier, monospace"
      }}>
        {children}
      </div>
    </div>
  );
}

export default VintageWrapper;
