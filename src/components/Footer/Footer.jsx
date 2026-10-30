
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Column 1 */}
        <div className="footer-section">
          <h2>ThreadAura</h2>
          <p>Digital Embroidery Fashion Store</p>
          <p>Celebrate Tradition. Wear Elegance.</p>
        </div>

        {/* Column 2 */}
        <div className="footer-section">
          <h3>About Us</h3>
          <Link to="/about">Our Story</Link>
          <Link to="/about">Our Mission</Link>
          <Link to="/about">Our Vision</Link>
        </div>

        {/* Column 3 */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Column 4 */}
        <div className="footer-section">
          <h3>Our Categories</h3>
          <Link to="/products">Embroidered Blouses</Link>
          <Link to="/products">Embroidery Sarees</Link>
          <Link to="/products">Kurtis</Link>
          <Link to="/products">Dupattas</Link>
        </div>

        {/* Column 5 */}
        <div className="footer-section">
          <h3>Customer Service</h3>
          <Link to="/contact">Contact Us</Link>
          <Link to="/faq">FAQs</Link>
          <Link to="/shipping">Shipping Policy</Link>
          <Link to="/returns">Return Policy</Link>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 ThreadAura. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;
