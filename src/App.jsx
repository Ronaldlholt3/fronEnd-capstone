import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Header from './components/Header'
import Footer from './components/Footer';
import './index.css'; // global styles
import Contact from './components/ContactPage';
import Potions from './components/PotionPage';
import PotionList from './components/PotionList';



function App() {
  return (
    <BrowserRouter>
    <div>
      <Header />
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/potions'element={<PotionList/>} />
      </Routes>
    <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;