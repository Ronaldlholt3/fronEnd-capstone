import React from 'react';
import { useState } from 'react'; // Import useState
import { Link } from 'react-router-dom'



function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // State for mobile nav

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header" data-header>
      <div className="container">
        <button
          className="nav-toggle-btn"
          aria-label="toggle manu"
          data-nav-toggler
          onClick={toggleNav}
        >
          <i
            className={`fa-solid ${
              isNavOpen ? 'fa-xmark' : 'fa-bars'
            } menu-icon`}
          ></i>
        </button>

        <a href="#" className="logo">
          DragonsRUs🐉
        </a>

        <nav className={`navbar ${isNavOpen ? 'active' : ''}`} data-navbar>
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="/" className="navbar-link" data-nav-link>
                Home 🛕 
              </a>
            </li>
            <li className="navbar-item">
              <a href="PotionsList" className="navbar-link" data-nav-link>
                Dragon Buddies 🐲
              </a>
            </li>
            {/* ... other navbar items ... */}
            <li className="navbar-item">
              <Link to="/potions" className="navbar-link" data-nav-link>
                Potion Shop 🫙
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/contact" className="navbar-link" data-nav-link>
                Contact 📨
              </Link>
            </li>
          </ul>
          <a href="#" className="navbar-action-btn">
            Log In
          </a>
        </nav>

        <div className="header-actions">
          <button className="action-btn" aria-label="Search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <button className="action-btn user" aria-label="User">
            <i className="fa-solid fa-user"></i>
          </button>
          <button className="action-btn" aria-label="cart">
            <i className="fa-solid fa-bag-shopping"></i>
            <span className="btn-badge">0</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;