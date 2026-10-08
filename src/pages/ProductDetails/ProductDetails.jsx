import { useParams, Link } from "react-router-dom";
import products from "../../data/products";

function ProductDetails() {

  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h2>Product Not Found</h2>

        <Link
          to="/products"
          className="btn btn-dark mt-3"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">

      <div className="row">

        <div className="col-md-6">

          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded"
          />

        </div>

        <div className="col-md-6">

          <h1>{product.name}</h1>

          <p className="text-muted">
            Category: {product.category}
          </p>

          <h2>
            ₹{product.price}
          </h2>

          <p>
            ⭐ {product.rating}
          </p>

          <p>
            Beautifully designed embroidery product
            from ThreadAura.
          </p>

          <label className="form-label fw-bold">
            Select Size
          </label>

          <select className="form-select mb-3">
            <option>Select Size</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>

          <div className="d-flex gap-2">

            <button className="btn btn-dark">
              <i className="bi bi-cart"></i>
              {" "}Add to Cart
            </button>

            <button className="btn btn-outline-danger">
              <i className="bi bi-heart"></i>
              {" "}Wishlist
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;