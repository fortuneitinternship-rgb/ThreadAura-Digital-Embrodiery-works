import { Link } from "react-router-dom";
import products from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";

import "./Home.css";

function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section className="hero-section">

        <div className="container text-center">

          <h1>
            Welcome to ThreadAura
          </h1>

          <p>
            Digital Embroidery Fashion Store
          </p>

          <p>
            Discover beautiful embroidered blouses,
            sarees, kurtis and dupattas.
          </p>

          <Link
            to="/products"
            className="btn btn-dark btn-lg"
          >
            Shop Now
          </Link>

        </div>

      </section>


      {/* Categories */}
      <section className="container py-5">

        <h2 className="text-center mb-4">
          Shop by Category
        </h2>

        <div className="row g-4">

          <div className="col-md-3">
            <div className="category-box">
              <i className="bi bi-stars"></i>
              <h5>Embroidered Blouses</h5>
            </div>
          </div>

          <div className="col-md-3">
            <div className="category-box">
              <i className="bi bi-flower1"></i>
              <h5>Embroidery Sarees</h5>
            </div>
          </div>

          <div className="col-md-3">
            <div className="category-box">
              <i className="bi bi-bag"></i>
              <h5>Kurtis</h5>
            </div>
          </div>

          <div className="col-md-3">
            <div className="category-box">
              <i className="bi bi-gift"></i>
              <h5>Embroidered Dupattas</h5>
            </div>
          </div>

        </div>

      </section>


      {/* Featured Products */}
      <section className="container py-5">

        <h2 className="text-center mb-4">
          Featured Products
        </h2>

        <div className="row g-4">

          {products.map((product) => (
            <div
              className="col-md-3"
              key={product.id}
            >
              <ProductCard product={product} />
            </div>
          ))}

        </div>

      </section>

    </div>
  );
}

export default Home;