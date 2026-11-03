import { Link } from "react-router-dom";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import "./Home.css";

function Home() {
  const categories = [
    {
      name: "Embroidered Blouses",
      image: "/images/blouses.jpg"
    },
    {
      name: "Embroidery Sarees",
      image: "/images/sarees.jpg"
    },
    {
      name: "Kurtis",
      image: "/images/kurtis.jpg"
    },
    {
      name: "Embroidered Dupattas",
      image: "/images/dupattas.jpg"
    }
  ];

  return (
    <div className="thread-home">

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-background">
          <img
            src="/images/hero-banner.jpg"
            alt="ThreadAura Embroidery Collection"
          />

          <div className="hero-overlay"></div>

          <div className="hero-content">
            <span className="hero-tag">
              🧵 THREADAURA COLLECTION
            </span>

            <p>Elegant Embroidery • Traditional Touch</p>

            <h1>
              Beautiful Embroidery
              <br />
              for Every Occasion
            </h1>

            <p className="hero-description">
              Discover our exclusive collection of embroidered
              blouses, sarees, kurtis and dupattas.
            </p>

            <Link to="/products" className="shop-btn">
              Shop Now →
            </Link>
          </div>
        </div>
      </section>

      {/* SHOP BY CATEGORIES */}
      <section className="home-section">
        <div className="section-heading">
          <span>EXPLORE OUR COLLECTION</span>
          <h2>Shop by Categories</h2>
          <p>Find your favourite traditional embroidery styles.</p>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <Link
              to="/products"
              className="category-box"
              key={category.name}
            >
              <img
                src={category.image}
                alt={category.name}
              />

              <div className="category-overlay">
                <h4>{category.name}</h4>
                <span>Explore Collection →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <FeaturedProducts />

      {/* WHY CHOOSE US */}
      <section className="why-section">
        <div className="section-heading">
          <span>WHY THREADAURA</span>
          <h2>Elegance in Every Stitch</h2>
          <p>Traditional beauty with a touch of modern style.</p>
        </div>

        <div className="why-grid">
          <div className="why-card">
            <i className="bi bi-flower1"></i>
            <h4>Beautiful Designs</h4>
            <p>Unique embroidery styles for every occasion.</p>
          </div>

          <div className="why-card">
            <i className="bi bi-gem"></i>
            <h4>Quality Collection</h4>
            <p>Carefully selected designs and quality fabrics.</p>
          </div>

          <div className="why-card">
            <i className="bi bi-heart"></i>
            <h4>Made with Love</h4>
            <p>Traditional elegance in every beautiful stitch.</p>
          </div>

          <div className="why-card">
            <i className="bi bi-truck"></i>
            <h4>Easy Shopping</h4>
            <p>Enjoy a simple and convenient shopping experience.</p>
          </div>
        </div>
      </section>

      {/* FLASH SALE */}
      <section className="flash-sale">
        <div className="flash-content">
          <span>LIMITED TIME OFFER</span>
          <h2>Festive Special Sale!</h2>
          <h3>UP TO 50% OFF</h3>
          <p>Shop your favourite embroidery collections today.</p>

          <Link to="/products" className="shop-btn">
            Explore Now →
          </Link>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter-section">
        <h2>Join the ThreadAura Family</h2>
        <p>Discover beautiful collections and latest updates.</p>

        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email address"
          />
          <button type="button">Subscribe</button>
        </form>
      </section>

    </div>
  );
}

export default Home;