import { Link } from "react-router-dom";

function Wishlist() {
  return (
    <div className="container py-5">

      <h1>
        <i className="bi bi-heart"></i> My Wishlist
      </h1>

      <div className="card p-4 mt-4">

        <h4>Your Wishlist is Empty</h4>

        <p>
          Save your favorite ThreadAura products here.
        </p>

        <Link
          to="/products"
          className="btn btn-dark"
        >
          Browse Products
        </Link>

      </div>

    </div>
  );
}

export default Wishlist;