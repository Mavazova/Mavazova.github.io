import React from 'react';

function Home() {
  return (
<div
className="home-wrapper"
  style={{
    backgroundImage: "url('/Portfolio 1.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Courier New', Courier, monospace",
    animation: 'fadeIn 1.2s ease',
    opacity: 0,
    transform: 'translateY(20px)'
  }}
  onAnimationEnd={(e) => {
    e.currentTarget.style.opacity = 1;
    e.currentTarget.style.transform = 'translateY(0)';
    
  }}
>
      <div style={{
        backgroundColor: "rgba(255, 255, 240, 0.85)", // soft vintage beige
        padding: "2rem",
        borderRadius: "16px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        maxWidth: "600px",
        border: "2px dashed #b2967d", // vintage border
        textAlign: "center"
      }}>
        <h1
          style={{
            fontSize: "2.5rem",
            color: "#5d3a00",
            marginBottom: "1rem",
            letterSpacing: "2px",
            textTransform: "uppercase"
          }}
          className="typewriter"
        >
          
          Welcome to My Portfolio
        </h1>
        <p style={{
          fontSize: "1.2rem",
          color: "#3e3e3e",
          fontStyle: "italic",
        }}>
          I’m Maftuna — a creative software developer with a love for beautiful code, cozy designs, and storytelling through software.
        </p>
      </div>
    </div>
  );
}

export default Home;
