import React from 'react';
import treasure2 from '../assets/treasure2.jpg';
import potion from '../assets/potion.jpg';
import magicStaff from '../assets/magic staff.jpg';

function Offer() {
  return (
    <section className="section offer" aria-label="offer">
      <div className="container">
        <ul className="grid-list">
          <li>
            <div className="offer-card has-bg-image img-holder"
              style={{ backgroundImage: `url(${treasure2})`, '--width': '540px', '--height': '374px' }}>
              <p className="card-subtitle">Collected Items. At Guild Only</p>
              <h3 className="h3 card-title">
                Fresh out the dungeon <span className="span">Deals</span>
              </h3>
              <a href="#" className="btn">Read More</a>
            </div>
          </li>
          <li>
            <div className="offer-card has-bg-image img-holder"
              style={{ backgroundImage: `url(${potion})`, '--width': '540px', '--height': '374px' }}>
              <p className="card-subtitle">Treats & Potions</p>
              <h3 className="h3 card-title">
                Treat your dragon with <span className="span">love</span>
              </h3>
              <a href="#" className="btn">Read More</a>
            </div>
          </li>
          <li>
            <div className="offer-card has-bg-image img-holder"
              style={{ backgroundImage: `url(${magicStaff})`, '--width': '540px', '--height': '374px' }}>
              <p className="card-subtitle">High Quality Equipment</p>
              <h3 className="h3 card-title">
                Crafted by the best <span className="span">smiths</span>
              </h3>
              <a href="#" className="btn">Read More</a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Offer;