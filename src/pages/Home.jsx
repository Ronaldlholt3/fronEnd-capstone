import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Category from '../components/Category';
import Offer from '../components/Offer';
import Product from '../components/Product';
import Service from '../components/Service';
import CTA from '../components/CTA'; // Correct import


function Home() {
  return (
    <div>
   
      <main>
        <Header />
        <Hero />
        <Category />
        <Offer />
        <Product />
        <Service />
        <CTA /> {/* Correct Usage */}
      </main>
      
    </div>
  );
}

export default Home;