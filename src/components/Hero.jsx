import React from 'react';
import heroBg from '../assets/landingpage4-min.jpg'; // Import the image

function Hero() {
  return (
    <section
      className="section hero has-bg-image"
      id="home"
      aria-label="home"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="container">
        <h1 className="h1 hero-title">
          <span className="span">High Grade</span> Dragon lore
        </h1>
        <p className="hero-text">guild sign up 40% off today</p>
        <a href="#" className="btn">
          explore wears
        </a>
      </div>
    </section>
  );
}

export default Hero;