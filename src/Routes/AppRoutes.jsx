import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Cart from "../pages/Cart/Cart";
import Wishlist from "../pages/Wishlist/Wishlist";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Checkout from "../pages/Checkout/Checkout";

function AppRoutes() {
  return (
    <Routes>

      {/* Home */}
      <Route
        path="/"
        element={<Home />}
      />

      {/* Products */}
      <Route
        path="/products"
        element={<Products />}
      />

      {/* Product Details */}
      <Route
        path="/products/:id"
        element={<ProductDetails />}
      />

      {/* Cart */}
      <Route
        path="/cart"
        element={<Cart />}
      />

      {/* Wishlist */}
      <Route
        path="/wishlist"
        element={<Wishlist />}
      />

      {/* Login */}
      <Route
        path="/login"
        element={<Login />}
      />

      {/* Register */}
      <Route
        path="/register"
        element={<Register />}
      />

      {/* Checkout */}
      <Route
        path="/checkout"
        element={<Checkout />}
      />

    </Routes>
  );
}

export default AppRoutes;