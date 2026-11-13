
import { Link } from "react-router-dom";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import "./Home.css";

function Home() {
  const categories = [
    {
      name: "Embroidery Blouses",
      image:
        "https://images.pexels.com/photos/29873548/pexels-photo-29873548.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Traditional Sarees",
      image:
        "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600",
    },
    {
      name: "Designer Kurtis",
      image:
        "https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?w=600",
    },
    {
      name: "Designer Dresses",
      image:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600",
    },
    {
      name: "Embroidery Dupattas",
      image:
        "https://images.pexels.com/photos/20792010/pexels-photo-20792010.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Embroidered Bags",
      image:
        "https://cdn.shopaccino.com/shubhams/products/239-545275_m.jpg?v=718",
    },
    {
      name: "Embroidered Lehengas",
      image:
        "https://images.pexels.com/photos/14048788/pexels-photo-14048788.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Home Decor",
      image:
        "https://atrangistudio.com/cdn/shop/products/Atrangi_Studio_Elephant_Table_Runner_4.png?v=1628765264&width=1024",
    },
  ];

  return (
    <div className="thread-home">

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-background">

          <img
            src="https://leger.imgix.net/Destinations/GenericStitchImages_D1757/GenericStitchImages_P5862/floral-pattern-of-zardozi-work-on-bridal-dress-41356.jpg?auto=compress%2Cenhance%2Cformat&crop=focal&fit=crop&h=1080&q=72&w=1920"
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
              blouses, sarees, kurtis, dupattas, bags and home decor.
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
          <p>
            Find your favourite traditional embroidery styles.
          </p>
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
                loading="lazy"
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
          <p>
            Traditional beauty with a touch of modern style.
          </p>
        </div>

        <div className="why-grid">

          <div className="why-card">
            <i className="bi bi-flower1"></i>
            <h4>Beautiful Designs</h4>
            <p>
              Unique embroidery styles for every occasion.
            </p>
          </div>

          <div className="why-card">
            <i className="bi bi-gem"></i>
            <h4>Quality Collection</h4>
            <p>
              Carefully selected designs and quality fabrics.
            </p>
          </div>

          <div className="why-card">
            <i className="bi bi-heart"></i>
            <h4>Made with Love</h4>
            <p>
              Traditional elegance in every beautiful stitch.
            </p>
          </div>

          <div className="why-card">
            <i className="bi bi-truck"></i>
            <h4>Easy Shopping</h4>
            <p>
              Enjoy a simple and convenient shopping experience.
            </p>
          </div>

        </div>
      </section>

      {/* FLASH SALE */}
      <section className="flash-sale">

        <div className="flash-content">
          <span>LIMITED TIME OFFER</span>

          <h2>Festive Special Sale!</h2>

          <h3>UP TO 50% OFF</h3>

          <p>
            Shop your favourite embroidery collections today.
          </p>

          <Link to="/products" className="shop-btn">
            Explore Now →
          </Link>
        </div>

      </section>

      {/* NEWSLETTER */}
      <section className="newsletter-section">

        <h2>Join the ThreadAura Family</h2>

        <p>
          Discover beautiful collections and latest updates.
        </p>

        <form
          className="newsletter-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you for subscribing to ThreadAura!");
            e.target.reset();
          }}
        >
          <input
            type="email"
            placeholder="Enter your email address"
            required
          />

          <button type="submit">
            Subscribe
          </button>
        </form>

      </section>

    </div>
  );
}

export default Home;
