import { Link } from "react-router-dom";
import products from "../../Data/products";
import "./Products.css";

function Products() {
  return (
    <div className="thread-products">

      <section className="products-banner">
        <h1>Our Embroidery Collection</h1>
        <p>Discover elegance in every stitch</p>
      </section>

      <div className="container py-5">

        <div className="text-center mb-5">
          <h2>Explore Our Products</h2>
          <p>Beautiful handcrafted embroidery for every occasion.</p>
        </div>

        <div className="row g-4">

          {products.map((product) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={product.id}>

              <div className="thread-product-card">

                <Link to={`/products/${product.id}`}>
                  <div className="product-image-box">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                    />
                    <span className="product-tag">
                      New Collection
                    </span>
                  </div>
                </Link>

                <div className="product-info">
                  <p className="product-category">
                    {product.category}
                  </p>

                  <h5>{product.name}</h5>

                  <p className="product-rating">
                    ⭐ {product.rating}
                  </p>

                  <h5 className="product-price">
                    ₹{product.price}
                  </h5>

                  <Link
                    to={`/products/${product.id}`}
                    className="product-btn"
                  >
                    View Details
                  </Link>
                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Products;