import React from 'react';
import oreoDragon from '../assets/oreoDragon.jpg';
import adultdragonfood2 from '../assets/adultdragonfood2.jpg';
import armory from '../assets/armory.jpg';
import dragonwtoy from '../assets/dragonwtoy.jpeg';
import dragoninclothes from '../assets/dragoninclothes.jpg';

function Category() {
  return (
    <section className="section category" aria-label="category">
      <div className="container">
        <h2 className="h2 section-title">
          <span className="span">Popular</span> categories
        </h2>
        <ul className="has-scrollbar">
          <li className="scrollbar-item">
            <div className="category-card">
              <figure className="card-banner img-holder" style={{ '--width': '330px', '--height': '300px' }}>
                <img src={oreoDragon} width="330" height="300" loading="lazy" alt="Baby Dragon Food" className="img-cover" />
              </figure>
              <h3 className="h3">
                <a href="#" className="card-title">
                  Baby Dragon Food
                </a>
              </h3>
            </div>
          </li>
          <li className="scrollbar-item">
            <div className="category-card">
              <figure className="card-banner img-holder" style={{ '--width': '330px', '--height': '300px' }}>
                <img src={adultdragonfood2} width="330" height="300" loading="lazy" alt="Adult Dragon Food" className="img-cover" />
              </figure>
              <h3 className="h3">
                <a href="#" className="card-title">
                  Adult Dragon Food
                </a>
              </h3>
            </div>
          </li>
          <li className="scrollbar-item">
            <div className="category-card">
              <figure className="card-banner img-holder" style={{ '--width': '330px', '--height': '300px' }}>
                <img src={armory} width="330" height="300" loading="lazy" alt="Armory" className="img-cover" />
              </figure>
              <h3 className="h3">
                <a href="#" className="card-title">
                  Armory
                </a>
              </h3>
            </div>
          </li>
          <li className="scrollbar-item">
            <div className="category-card">
              <figure className="card-banner img-holder" style={{ '--width': '330px', '--height': '300px' }}>
                <img src={dragonwtoy} width="330" height="300" loading="lazy" alt="Dragon Toys" className="img-cover" />
              </figure>
              <h3 className="h3">
                <a href="#" className="card-title">
                  Dragon Toys
                </a>
              </h3>
            </div>
          </li>
          <li className="scrollbar-item">
            <div className="category-card">
              <figure className="card-banner img-holder" style={{ '--width': '330px', '--height': '300px' }}>
                <img src={dragoninclothes} width="330" height="300" loading="lazy" alt="Dragon Accesssories" className="img-cover" />
              </figure>
              <h3 className="h3">
                <a href="#" className="card-title">
                  Dragon Accesssories
                </a>
              </h3>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Category;