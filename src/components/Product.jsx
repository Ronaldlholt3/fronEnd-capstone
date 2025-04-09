import React from 'react';
import blackgreenDragon from '../assets/blackgreenDragon.jpg';
import pinkDragon from '../assets/pinkDragon.jpg';
import toothless from '../assets/toothless.jpg';
import yinYangDragon from '../assets/yin yangDragon.jpg';
import regalroyalDragon from '../assets/regalroyalDragon.jpg';
import crystalDragon from '../assets/crystalDragon.jpg';
import exotic from '../assets/exotic.jpg';
import Blaze from '../assets/Blaze.jpg';

function Product() {
  return (
    <section className="section product" id="shop" aria-label="product">
      <div className="container">
        <h2 className="h2 section-title">
          <span className="span">Dragon</span> Buddies
        </h2>
        <ul className="grid-list">
          <li>
            <div className="product-card">
              <div className="card-banner img-holder" style={{ '--width': '360px', '--height': '360px' }}>
                <img src={blackgreenDragon} width="360" height="360" loading="lazy" alt="Diaval" className="img-cover default" />
                <img src={blackgreenDragon} width="360" height="360" loading="lazy" alt="Diaval" className="img-cover hover" />
                <button className="card-action-btn" aria-label="add to card" title="Add To Card">
                  <i className="fa-solid fa-bag-shopping"></i>
                </button>
              </div>
              <div className="card-content">
                <div className="wrapper">
                  <div className="rating-wrapper">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <span className="span">(1)</span>
                </div>
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Diaval
                  </a>
                </h3>
                <data className="card-price" value="80">
                  $80.00
                </data>
              </div>
            </div>
          </li>
          <li>
            <div className="product-card">
              <div className="card-banner img-holder" style={{ '--width': '360px', '--height': '360px' }}>
                <img src={pinkDragon} width="360" height="360" loading="lazy" alt="Alina" className="img-cover default" />
                <img src={pinkDragon} width="360" height="360" loading="lazy" alt="Alina" className="img-cover hover" />
                <button className="card-action-btn" aria-label="add to card" title="Add To Card">
                  <i className="fa-solid fa-bag-shopping"></i>
                </button>
              </div>
              <div className="card-content">
                <div className="wrapper">
                  <div className="rating-wrapper gray">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <span className="span">(5)</span>
                </div>
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Alina
                  </a>
                </h3>
                <data className="card-price" value="150.00">
                  $150.00
                </data>
              </div>
            </div>
          </li>
          <li>
            <div className="product-card">
              <div className="card-banner img-holder" style={{ '--width': '360px', '--height': '360px' }}>
                <img src={toothless} width="360" height="360" loading="lazy" alt="Toothless" className="img-cover default" />
                <img src={toothless} width="360" height="360" loading="lazy" alt="Toothless" className="img-cover hover" />
                <button className="card-action-btn" aria-label="add to card" title="Add To Card">
                  <i className="fa-solid fa-bag-shopping"></i>
                </button>
              </div>
              <div className="card-content">
                <div className="wrapper">
                  <div className="rating-wrapper gray">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <span className="span">(0)</span>
                </div>
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Toothless
                  </a>
                </h3>
                <data className="card-price" value="125.00">
                  $125.00
                </data>
              </div>
            </div>
          </li>
          <li>
            <div className="product-card">
              <div className="card-banner img-holder" style={{ '--width': '360px', '--height': '360px' }}>
                <img src={yinYangDragon} width="360" height="360" loading="lazy" alt="Mindy & Longwei" className="img-cover default" />
                <img src={yinYangDragon} width="360" height="360" loading="lazy" alt="Mindy & Longwei" className="img-cover hover" />
                <button className="card-action-btn" aria-label="add to card" title="Add To Card">
                  <i className="fa-solid fa-bag-shopping"></i>
                </button>
              </div>
              <div className="card-content">
                <div className="wrapper">
                  <div className="rating-wrapper gray">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <span className="span">(0)</span>
                </div>
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Mindy & Longwei
                  </a>
                </h3>
                <data className="card-price" value="245.00">
                  $245.00
                </data>
              </div>
            </div>
          </li>
          <li>
            <div className="product-card">
              <div className="card-banner img-holder" style={{ '--width': '360px', '--height': '360px' }}>
                <img src={regalroyalDragon} width="360" height="360" loading="lazy" alt="Smaug" className="img-cover default" />
                <img src={regalroyalDragon} width="360" height="360" loading="lazy" alt="Smaug" className="img-cover hover" />
                <button className="card-action-btn" aria-label="add to card" title="Add To Card">
                  <i className="fa-solid fa-bag-shopping"></i>
                </button>
              </div>
              <div className="card-content">
                <div className="wrapper">
                  <div className="rating-wrapper gray">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <span className="span">(0)</span>
                </div>
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Smaug
                  </a>
                </h3>
                <data className="card-price" value="1,125">
                  $1,125.00
                </data>
              </div>
            </div>
          </li>
          <li>
            <div className="product-card">
              <div className="card-banner img-holder" style={{ '--width': '360px', '--height': '360px' }}>
                <img src={crystalDragon} width="360" height="360" loading="lazy" alt="Crystal" className="img-cover default" />
                <img src={crystalDragon} width="360" height="360" loading="lazy" alt="Crystal" className="img-cover hover" />
                <button className="card-action-btn" aria-label="add to card" title="Add To Card">
                  <i className="fa-solid fa-bag-shopping"></i>
                </button>
              </div>
              <div className="card-content">
                <div className="wrapper">
                  <div className="rating-wrapper gray">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <span className="span">(0)</span>
                </div>
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Crystal
                  </a>
                </h3>
                <data className="card-price" value="2,213">
                  $2,213.00
                </data>
              </div>
            </div>
          </li>
          <li>
            <div className="product-card">
              <div className="card-banner img-holder" style={{ '--width': '360px', '--height': '360px' }}>
                <img src={exotic} width="360" height="360" loading="lazy" alt="Bluey" className="img-cover default" />
                <img src={exotic} width="360" height="360" loading="lazy" alt="Bluey" className="img-cover hover" />
                <button className="card-action-btn" aria-label="add to card" title="Add To Card">
                  <i className="fa-solid fa-bag-shopping"></i>
                </button>
              </div>
              <div className="card-content">
                <div className="wrapper">
                  <div className="rating-wrapper gray">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <span className="span">(0)</span>
                </div>
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Bluey
                  </a>
                </h3>
                <data className="card-price" value="100,000">
                  $100,000.00
                </data>
              </div>
            </div>
          </li>
          <li>
            <div className="product-card">
              <div className="card-banner img-holder" style={{ '--width': '360px', '--height': '360px' }}>
                <img src={Blaze} width="360" height="360" loading="lazy" alt="Blaze" className="img-cover default" />
                <img src={Blaze} width="360" height="360" loading="lazy" alt="Blaze" className="img-cover hover" />
                <button className="card-action-btn" aria-label="add to card" title="Add To Card">
                  <i className="fa-solid fa-bag-shopping"></i>
                </button>
              </div>
              <div className="card-content">
                <div className="wrapper">
                  <div className="rating-wrapper gray">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <span className="span">(0)</span>
                </div>
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Blaze
                  </a>
                </h3>
                <data className="card-price" value="100,000">
                  $1,000,000.00
                </data>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Product;