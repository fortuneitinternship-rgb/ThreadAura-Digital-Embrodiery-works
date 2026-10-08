function Checkout() {
  return (
    <div className="container py-5">

      <h1 className="mb-4">
        Checkout
      </h1>

      <div className="row">

        {/* Address */}
        <div className="col-md-7">

          <div className="card p-4">

            <h4>Delivery Address</h4>

            <hr />

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Full Name"
            />

            <input
              type="tel"
              className="form-control mb-3"
              placeholder="Phone Number"
            />

            <textarea
              className="form-control mb-3"
              rows="4"
              placeholder="Complete Address"
            ></textarea>

            <input
              type="text"
              className="form-control mb-3"
              placeholder="City"
            />

            <input
              type="text"
              className="form-control mb-3"
              placeholder="State"
            />

            <input
              type="text"
              className="form-control"
              placeholder="Pincode"
            />

          </div>

        </div>


        {/* Order Summary */}
        <div className="col-md-5">

          <div className="card p-4">

            <h4>Order Summary</h4>

            <hr />

            <p>
              Subtotal: ₹1,299
            </p>

            <p>
              Delivery: ₹100
            </p>

            <hr />

            <h5>
              Total: ₹1,399
            </h5>

            <button className="btn btn-dark w-100 mt-3">
              Continue to Payment
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Checkout;