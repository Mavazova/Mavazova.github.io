import React from "react";
import Layout from "../components/Layout";
import VintageWrapper from '../components/VintageWrapper';

function Contact() {
  return (
     <VintageWrapper>
      <h2 style={{ fontSize: '2rem', color: '#5d3a00', marginBottom: '1rem' }} className="typewriter" >Contact Me</h2>
      <p>Email: <a href="avazovam386@gnail.com" className="vintage-btn">avazovam386@gmail.com</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/maftuna-avazova-402a19295/" target="_blank" rel="noreferrer" className="vintage-btn">Connect here</a></p>
    </VintageWrapper>
  );
}

export default Contact;
