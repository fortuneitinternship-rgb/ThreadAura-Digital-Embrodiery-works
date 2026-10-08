import "./Footer.css";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5">

      <div className="container py-5">

        <div className="row">

          {/* About */}
          <div className="col-md-3">
            <h4>ThreadAura</h4>

            <p>
              Digital Embroidery Fashion Store.
            </p>

            <p>
              Beautiful embroidery designs for
              modern fashion.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3">
            <h5>Quick Links</h5>

            <p>Home</p>
            <p>Products</p>
            <p>Wishlist</p>
            <p>Cart</p>
          </div>

          {/* Customer Service */}
          <div className="col-md-3">
            <h5>Customer Service</h5>

            <p>Help Center</p>
            <p>Shipping</p>
            <p>Returns</p>
            <p>Order Tracking</p>
          </div>

          {/* Contact */}
          <div className="col-md-3">
            <h5>Contact</h5>

            <p>
              <i className="bi bi-envelope"></i>
              {" "}threadaura@example.com
            </p>

            <p>
              <i className="bi bi-telephone"></i>
              {" "}+91 98765 43210
            </p>

            <p>
              <i className="bi bi-instagram"></i>
              {" "}Instagram
            </p>
          </div>

        </div>

        <hr />

        <div className="text-center">
          <p>
            © 2026 ThreadAura. All Rights Reserved.
          </p>
        </div>

      </div>

    </footer>
  );
}

export default Footer;