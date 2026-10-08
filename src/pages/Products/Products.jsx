import products from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";

import "./Products.css";

function Products() {
  return (
    <div className="container py-5">

      <h1 className="text-center mb-5">
        Our Products
      </h1>

      <div className="row">

        {/* Filters */}
        <div className="col-md-3">

          <div className="filter-box">

            <h4>Filters</h4>

            <hr />

            <label className="form-label">
              Category
            </label>

            <select className="form-select mb-3">
              <option>All Categories</option>
              <option>Blouses</option>
              <option>Sarees</option>
              <option>Kurtis</option>
              <option>Dupattas</option>
            </select>

            <label className="form-label">
              Price
            </label>

            <select className="form-select mb-3">
              <option>All Prices</option>
              <option>Under ₹1000</option>
              <option>₹1000 - ₹2000</option>
              <option>Above ₹2000</option>
            </select>

            <label className="form-label">
              Size
            </label>

            <select className="form-select">
              <option>All Sizes</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>

          </div>

        </div>


        {/* Products */}
        <div className="col-md-9">

          <div className="row g-4">

            {products.map((product) => (
              <div
                className="col-md-4"
                key={product.id}
              >
                <ProductCard product={product} />
              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Products;