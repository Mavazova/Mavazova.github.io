import React from "react";
import Layout from "../components/Layout";
import VintageWrapper from '../components/VintageWrapper';


function Resume() {
  return (
    <VintageWrapper>
      <h2 style={{ fontSize: '2rem', color: '#5d3a00', marginBottom: '1rem' }} className="typewriter">Resume</h2>
      <p>Download my resume <a href="https://docs.google.com/document/d/1XzFTBHT4a-V4PiL-4HWcVDYP5YcoD9V3kiK_znCRYak/edit?usp=sharing" target="_blank" rel="noreferrer" className="vintage-btn">here</a>.</p>
      <ul style={{ marginTop: '1rem' }}>
        <li><strong>Skills:</strong> Java, Spring Boot, React, JavaScript, MYSQL, Git</li>
        <li><strong>Experience:</strong> Customer service, project coordination, translation</li>
        <li><strong>Certification:</strong> LaunchCode Full Stack Web Dev</li>
      </ul>
    </VintageWrapper>
  );
}

export default Resume;

      