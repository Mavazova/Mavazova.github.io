import React from "react";
import Layout from "../components/Layout";
import VintageWrapper from '../components/VintageWrapper';


function Projects() {
  return (
    <VintageWrapper>
      <h2 style={{ fontSize: '2rem', color: '#5d3a00', marginBottom: '1rem' }} className="typewriter">My Projects</h2>

      <div style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ color: '#7f5539', marginBottom: '0.5rem' }}>📖 Book of Wisdom</h3>
        <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
          A React app that lets users add, filter, and favorite inspirational quotes.
          Built with React, CSS, and conditional rendering. Fully responsive.
        </p>
        <p>
          🔗 <a href="https://book-of-wisdom.netlify.app/" target="_blank" rel="noreferrer" className="vintage-btn">Live Site</a> |  
          💻 <a href="https://github.com/Mavazova/final-project-book-of-wisdom-Maftuna-Avazova.git" target="_blank" rel="noreferrer" className="vintage-btn">GitHub Repo</a>
        </p>
      </div>
    </VintageWrapper>
  );
}

export default Projects;
