import React from 'react';
import "../App.css";
import Navbar from './navbar';
import BN1 from './images/bn1.jpg'
import BN2 from './images/bn2.jpg'
import BN3 from './images/bn3.jpg'
const HomePage = () => {
  return (
    <>
    <Navbar/>
    <div className="homepage">
      {/* Headline Slider Section */}
      <section className="headline-slider">
        <div className="breaking-news-section">
  <h2>🔥 Breaking News</h2>
  <div className="breaking-news-items">
    <div className="news-card">
      <img src={BN1} alt="News 1" />
      <h3>EOS-09 mission: What ISRO said on the failed satellite launch</h3>
    </div>
    <div className="news-card">
      <img src={BN2} alt="News 2" />
      <h3>BJP, Congress clash as Tharoor gets to lead Centre's ‘expose Pak’ mission | Who said what</h3>
    </div>
    <div className="news-card">
      <img src={BN3} alt="News 3" />
      <h3>India was ready for round II, Pakistan begged US for intervention on May 10</h3>
    </div>
  </div>
</div>
      </section>

      {/* Trending Topics Carousel */}
      <section className="trending-carousel">
        <h2>Trending Now</h2>
        <div className="carousel">
          <div className="card">#WorldCup2025</div>
          <div className="card">#TechSummit</div>
          <div className="card">#BudgetTalks</div>
          <div className="card">#SpaceXLaunch</div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Get daily updates straight to your inbox</p>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      {/* Weather and Market Ticker */}
      <section className="ticker">
        <div className="weather">Weather: 27°C, Sunny</div>
        <div className="market">Market: Sensex ▲ 1.2% | Nifty ▼ 0.8%</div>
      </section>

      {/* Poll and Opinion Voting */}
      <section className="poll-section">
        <h2>What's Your Take?</h2>
        <p>Do you think the government should reduce fuel prices?</p>
        <div className="poll-options">
          <button>Yes</button>
          <button>No</button>
          <button>Not Sure</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="quick-links">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/terms">Terms of Use</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
        <div className="social-media">
          <a href="https://facebook.com">Facebook</a>
          <a href="https://twitter.com">Twitter</a>
          <a href="https://instagram.com">Instagram</a>
        </div>
        <p>© 2025 ClearReport. All rights reserved.</p>
      </footer>
    </div>
    </>
  );
};

export default HomePage;
