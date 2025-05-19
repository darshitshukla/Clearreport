import React from "react";
import "../App.css";
import Navbar from "./navbar.jsx";
import spnews1 from './images/sportsnews1.png'
import spnews2 from './images/spnews2.png'
import htnews1 from './images/htnews1.jpg'
import htnews2 from './images/htnews2.jpg'
import etnews1 from './images/etnews1.jpg'
import etnews2 from './images/etnews2.jpg'
import technews1 from './images/technews1.jpg'
import technews2 from './images/technews2.jpg'
import polinews1 from './images/polinews1.jpg'
import polinews2 from './images/polinews2.jpg'


const AllNews = () => {
  return (
  <>
  
    <Navbar/>
    <div className="all-news-container">
      <h1 className="main-title">All News</h1>

      <section className="news-section">
        <h2>Sports</h2>
        <div className="news-cards">
          <div className="news-card">
            <img src={spnews1} alt="Sports News" />
            <p>India wins T20 series against Australia in thrilling final over!</p>
          </div>
          <div className="news-card">
            <img src={spnews2} alt="Cricket News" />
            <p>Virat Kohli scores a century in World Cup semi-final.</p>
          </div>
        </div>
      </section>

      <section className="news-section">
        <h2>Health</h2>
        <div className="news-cards">
          <div className="news-card">
            <img src={htnews1} alt="Health News" />
            <p>New breakthrough in cancer treatment offers hope to millions.</p>
          </div>
          <div className="news-card">
            <img src={htnews2} alt="Fitness News" />
            <p>Top 5 habits for a longer and healthier life, according to doctors.</p>
          </div>
        </div>
      </section>

      <section className="news-section">
        <h2>Entertainment</h2>
        <div className="news-cards">
          <div className="news-card">
            <img src={etnews1} alt="Entertainment News" />
            <p>SRK announces his next film with Rajkumar Hirani – fans go wild!</p>
          </div>
          <div className="news-card">
            <img src={etnews2} alt="Movies News" />
            <p>Oscars 2025: Indian film makes it to the final nomination list.</p>
          </div>
        </div>
      </section>

      <section className="news-section">
        <h2>Technology</h2>
        <div className="news-cards">
          <div className="news-card">
            <img src={technews1} alt="Tech News" />
            <p>Apple unveils AI-powered iPhone 16 – here’s what’s new!</p>
          </div>
          <div className="news-card">
            <img src={technews2} alt="Robotics News" />
            <p>Robots take over warehouses – future of automation is here.</p>
          </div>
        </div>
      </section>

      <section className="news-section">
        <h2>Politics</h2>
        <div className="news-cards">
          <div className="news-card">
            <img src={polinews1} alt="Politics News" />
            <p>Lok Sabha elections 2025: Major shifts expected in voter base.</p>
          </div>
          <div className="news-card">
            <img src={polinews2} alt="Government News" />
            <p>New economic reforms bill passed in Parliament.</p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default AllNews;
