import React from 'react';
// import ctaBg from '../assets/images/cta-bg.jpg';
// import potion2 from '../assets/potion2.jpg';
// import mushrooms from '../assets/mushrooms.jpeg';

function CTA() {
  return (
    <section className="cta has-bg-image" aria-label="cta">
      <div className="container">
        <figure className="cta-banner">
          {/* <img src={potion2} width="900" height="660" loading="lazy" alt="cat" className="w-100" /> */}
        </figure>
        <div className="cta-content">
          {/* <img src={mushrooms} width="120" height="35" loading="lazy" alt="taste guarantee" className="img" /> */}
          <h2 className="h2 section-title">Potions, potions we have freshly made potions for your dragon</h2>
          <p className="section-text">
            This is the ingredients menu to show the organic herbs and mushrooms we use to create the best potions for your dragon. The picture to the left is our master magician who's dedicated to providing quality mixtures. You can also request a custom set of ingredients to mix.
          </p>
          <a href="#" className="btn">
            Find out more
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;