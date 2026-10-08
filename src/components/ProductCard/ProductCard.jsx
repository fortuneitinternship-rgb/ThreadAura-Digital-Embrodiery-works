import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="card product-card h-100">

      <img
        src={product.image}
        className="card-img-top"
        alt={product.name}
      />

      <div className="card-body">

        <h5 className="card-title">
          {product.name}
        </h5>

        <p className="text-muted">
          {product.category}
        </p>

        <p>
          ⭐ {product.rating}
        </p>

        <h5>
          ₹{product.price}
        </h5>

        <div className="product-buttons">

          <Link
            to={`/products/${product.id}`}
            className="btn btn-dark"
          >
            View
          </Link>

          <button className="btn btn-outline-dark">
            <i className="bi bi-cart"></i>
          </button>

          <button className="btn btn-outline-danger">
            <i className="bi bi-heart"></i>
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;