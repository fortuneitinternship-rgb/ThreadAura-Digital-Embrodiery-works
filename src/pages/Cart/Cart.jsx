import { Link } from "react-router-dom";

function Cart() {
  return (
    <div className="container py-5">

      <h1>Shopping Cart</h1>

      <div className="card p-4 mt-4">

        <h4>Your Cart is Empty</h4>

        <p>
          Add ThreadAura products to your cart.
        </p>

        <Link
          to="/products"
          className="btn btn-dark"
        >
          Continue Shopping
        </Link>

      </div>

    </div>
  );
}

export default Cart;