import React from "react";
import "../App.css";
import Navbar from "./navbar.jsx";
import Ai from "./images/ai.jpg";
import olympic from "./images/olympic.png";
import mars from "./images/mars.jpg";
import startup from "./images/startup.jpeg";
import bitcoin from "./images/bitcoin.jpg";
import bolly from "./images/bolly.jpg";


const Trending = () => {
  return (
    <>
    <Navbar/>
    <div className="trending-container">
      <h1 className="trending-title">🔥 Trending News</h1>

      <div className="trending-grid">
        <div className="trend-card">
          <img src={Ai} alt="AI News" />
          <h3>AI Revolution: How GPT-5 Is Changing Everything</h3>
          <p>The latest AI model is setting new standards across industries...</p>
        </div>

        <div className="trend-card">
          <img src={olympic} alt="Olympics" />
          <h3>Paris Olympics 2025: Records Broken in the Opening Week</h3>
          <p>New world records and surprises dominate the first week of events.</p>
        </div>

        <div className="trend-card">
          <img src={mars} alt="Space News" />
          <h3>NASA Confirms Human Mars Mission for 2030</h3>
          <p>NASA plans to send humans to Mars for exploration and research.</p>
        </div>

        <div className="trend-card">
          <img src={bolly} alt="Bollywood" />
          <h3>Top Bollywood Celebs Unite for Climate Change Awareness</h3>
          <p>Movie stars support a global campaign to fight climate crisis.</p>
        </div>

        <div className="trend-card">
          <img src={bitcoin} alt="Crypto" />
          <h3>Bitcoin Hits New Highs: What This Means for Investors</h3>
          <p>The crypto market is booming again with major coins surging.</p>
        </div>

        <div className="trend-card">
          <img src={startup} alt="Startup" />
          <h3>Indian Startups Raise Record Funding in First Quarter</h3>
          <p>Tech-based ventures attract massive global investment.</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Trending;
