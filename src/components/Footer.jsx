import React from 'react';

function Footer() {
  return (
    <footer className="footer" style={{ backgroundImage: "url('https://img.freepik.com/free-vector/abstract-blue-light-pipe-speed-zoom-black-background-technology_1142-9980.jpg')" }}>
      <div className="footer-top section">
        <div className="container">
          <div className="footer-brand">
            <a href="#" className="logo">
              DragonsRUs
            </a>
            <p className="footer-text">
              If you have any question, please contact us at{' '}
              <a href="mailto:Dragon_support@gmail.com" className="link">
                Dragon_support@gmail.com
              </a>
            </p>
            <ul className="contact-list">
              <li className="contact-item">
                <i className="fa-solid fa-location-dot"></i>
                <address className="address">
                  1128 Boogieboogie ave OH 45012
                </address>
              </li>
              <li className="contact-item">
                <i className="fa-solid fa-phone"></i>
                <a href="tel:+16234567891011" className="contact-link">
                  (+1) 513-444-5555
                </a>
              </li>
            </ul>
            <ul className="social-list">
              <li>
                <a href="#" className="social-link">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <i className="fa-brands fa-pinterest"></i>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Dragon's Guild</p>
            </li>
            <li>
              <a href="#" className="footer-link">
                Guild Careers
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Contact Us
              </a>
            </li>
            {/* ... other footer list items ... */}
            <li>
              <a href="#" className="footer-link">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Vendors
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Affiliate Program
              </a>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Information</p>
            </li>
            <li>
              <a href="#" className="footer-link">
                Guild's Store
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Refund Policy
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Flying Shipping Policy
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Track Order
              </a>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Services</p>
            </li>
            <li>
              <a href="#" className="footer-link">
                Grooming
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Positive Dragon Training
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Flying Training Services
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                inferno Insurance
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Dragon Adoption
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Resource Center
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2025 Made by <a href="#" className="copyright-link">Ronald Holt.</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;