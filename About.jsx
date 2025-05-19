import React from 'react';
import '../App.css';
import Navbar from './navbar';

const About = () => {
  return (
    <>
    <Navbar/>
    <div className="about-page">
      <div className="about-container">
        <h1>About ClearReport</h1>
        <p>
          Welcome to <strong>ClearReport</strong> — your destination for reliable, unbiased, and up-to-date news from around the world.
        </p>
        <p>
          At ClearReport, our mission is to deliver clear, concise, and verified news in categories like Politics, Health, Technology, Sports, and Entertainment. Our team of journalists and analysts work around the clock to ensure you stay informed with integrity.
        </p>
        <p>
          Whether it’s a breaking headline or an in-depth report, ClearReport believes in empowering readers with facts, not opinions. We are independent, reader-focused, and committed to journalistic ethics.
        </p>
        <h2>Our Vision</h2>
        <p>
          To become the most trusted news platform for citizens who value transparency, accountability, and clarity in journalism.
        </p>
        <h2>Contact Us</h2>
        <p>Email: support@clearreport.com</p>
        <p>Phone: +91-99999-99999</p>
      </div>
    </div>
    </>
  );
};

export default About;
