import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand fw-bold" to="/">
          🧵 ThreadAura
        </Link>

        {/* Mobile Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation */}
        <div
          className="collapse navbar-collapse"
          id="mainNavbar"
        >
          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
          

<Link to="/categories" className="nav-link">
  Categories
</Link>

            {/* Search */}
            <li className="nav-item search-item">
              <form className="d-flex">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                />

                <button className="btn btn-light ms-1">
                  <i className="bi bi-search"></i>
                </button>
              </form>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/wishlist">
                <i className="bi bi-heart"></i>
                {" "}Wishlist
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <i className="bi bi-cart"></i>
                {" "}Cart
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/login">
                <i className="bi bi-person"></i>
                {" "}Login
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;