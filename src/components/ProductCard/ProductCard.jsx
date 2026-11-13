
import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <div className="product-info">
        <h3>{product.name}</h3>
        <p>Category: {product.category}</p>
        <p>Price: ₹{product.price}</p>
        <p>⭐ {product.rating}</p>

        <Link
          to={`/products/${product.id}`}
          className="view-btn"
        >
          View Product
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
