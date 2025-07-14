import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';

function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <h1>Maftuna Avazova</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Maftuna Avazova</p>
      </footer>
    </div>
  );
}

export default Layout;
