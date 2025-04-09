import React from 'react';
import dragonSolid from '../assets/svg/dragon-solid.svg';
import wandSparkles from '../assets/svg/wand-sparkles-solid (1).svg';
import ringSolid from '../assets/svg/ring-solid (1).svg';
import scrollSolid from '../assets/svg/scroll-solid (1).svg';
import skullCrossbones from '../assets/svg/skull-crossbones-solid (1).svg';

function Service() {
  return (
    <section className="section service" aria-label="service">
      <div className="container">
        <img src={dragonSolid} width="122" height="136" loading="lazy" alt="" className="img" />
        <h2 className="h2 section-title">
          <span className="span">What your Dragon need,</span> when they need it.
        </h2>
        <ul className="grid-list">
          <li>
            <div className="service-card">
              <figure className="card-icon">
                <img src={wandSparkles} width="70" height="70" loading="lazy" alt="service icon" />
              </figure>
              <h3 className="h3 card-title">Free Same-Day Transportation</h3>
              <p className="card-text">
                With the flick of a wand what you order here on site depending on size of item, will be transported at your front door!
              </p>
            </div>
          </li>
          <li>
            <div className="service-card">
              <figure className="card-icon">
                <img src={ringSolid} width="70" height="70" loading="lazy" alt="service icon" />
              </figure>
              <h3 className="h3 card-title">30 Day Return</h3>
              <p className="card-text">
                With any armor or equipment you buy, with the guild membership we have a 30 day return policy with the flick of a wand. No traveling for you.
              </p>
            </div>
          </li>
          <li>
            <div className="service-card">
              <figure className="card-icon">
                <img src={scrollSolid} width="70" height="70" loading="lazy" alt="service icon" />
              </figure>
              <h3 className="h3 card-title">Guild fee</h3>
              <p className="card-text">
                There's a guild fee for each new application. We have a special, sign up today that's 40% off!
              </p>
            </div>
          </li>
          <li>
            <div className="service-card">
              <figure className="card-icon">
                <img src={skullCrossbones} width="70" height="70" loading="lazy" alt="service icon" />
              </figure>
              <h3 className="h3 card-title">24/7 Health line</h3>
              <p className="card-text">
                Your dragon's feeling ill? You got questions about a new breed you haven't had before? No problem we offer 24/7 health tips and care recommendations for your new dragon.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Service;