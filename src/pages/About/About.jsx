
import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page">

      {/* About Hero Section */}
      <section className="about-hero">
        <h1>About ThreadAura</h1>
        <p>Where Tradition Meets Modern Fashion</p>
      </section>

      {/* About Content */}
      <section className="about-content">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            Welcome to ThreadAura, your destination for
            beautiful digital embroidery fashion.
            We believe every design tells a story and
            every outfit deserves a special touch.
          </p>

          <p>
            Our collection includes beautifully designed
            embroidered blouses, sarees, kurtis and
            dupattas. We combine traditional embroidery
            styles with modern fashion trends.
          </p>
        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=700"
            alt="Traditional Indian fashion"
          />
        </div>
      </section>

      {/* Our Mission */}
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide beautiful,
          high-quality embroidery fashion products
          that make every customer feel special,
          confident and elegant.
        </p>
      </section>

      {/* Categories */}
      <section className="about-categories">
        <h2>What We Offer</h2>

        <div className="about-cards">
          <div className="about-card">
            <h3>Embroidered Blouses</h3>
            <p>Beautiful traditional blouse designs.</p>
          </div>

          <div className="about-card">
            <h3>Embroidery Sarees</h3>
            <p>Elegant sarees with attractive embroidery.</p>
          </div>

          <div className="about-card">
            <h3>Kurtis</h3>
            <p>Stylish kurtis for every occasion.</p>
          </div>

          <div className="about-card">
            <h3>Embroidered Dupattas</h3>
            <p>Unique designs with beautiful patterns.</p>
          </div>
        </div>
      </section>

      {/* Footer Message */}
      <section className="about-footer">
        <h2>Thank You for Choosing ThreadAura!</h2>
        <p>Celebrate tradition. Wear elegance.</p>
      </section>

    </div>
  );
}

export default About;
