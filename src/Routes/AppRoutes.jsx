
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Categories from "../pages/Categories/Categories";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Cart from "../pages/Cart/Cart";
import Wishlist from "../pages/Wishlist/Wishlist";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Checkout from "../pages/Checkout/Checkout";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/products" element={<Products />} />

      <Route path="/categories" element={<Categories />} />

      <Route path="/products/:id" element={<ProductDetails />} />

      <Route path="/cart" element={<Cart />} />

      <Route path="/wishlist" element={<Wishlist />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default AppRoutes;
