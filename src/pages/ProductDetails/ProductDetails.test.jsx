
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter, Routes, Route } from "react-router-dom";

import ProductDetails from "./ProductDetails";
import products from "../../Data/products";

describe("ProductDetails Component", () => {

  const firstProduct = products[0];

  const renderProductDetails = (id) => {
    return render(
      <MemoryRouter initialEntries={[`/product/${id}`]}>
        <Routes>
          <Route
            path="/product/:id"
            element={<ProductDetails />}
          />
        </Routes>
      </MemoryRouter>
    );
  };

  test("renders ProductDetails component", () => {
    renderProductDetails(firstProduct.id);

    expect(
      screen.getByRole("heading", { name: firstProduct.name })
    ).toBeInTheDocument();
  });

  test("displays product name", () => {
    renderProductDetails(firstProduct.id);

    expect(
      screen.getByText(firstProduct.name)
    ).toBeInTheDocument();
  });

  test("displays product image", () => {
    renderProductDetails(firstProduct.id);

    const image = screen.getByAltText(firstProduct.name);

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", firstProduct.image);
  });

  test("displays product category", () => {
    renderProductDetails(firstProduct.id);

    expect(
      screen.getByText(`Category: ${firstProduct.category}`)
    ).toBeInTheDocument();
  });

  test("displays product price", () => {
    renderProductDetails(firstProduct.id);

    expect(
      screen.getByRole("heading", {
        name: `₹${firstProduct.price}`
      })
    ).toBeInTheDocument();
  });

  test("displays product rating", () => {
    renderProductDetails(firstProduct.id);

    expect(
      screen.getByText(`⭐ ${firstProduct.rating}`)
    ).toBeInTheDocument();
  });

  test("displays product description", () => {
    renderProductDetails(firstProduct.id);

    expect(
      screen.getByText(/Beautifully designed embroidery product/)
    ).toBeInTheDocument();
  });

  test("displays Select Size label", () => {
    renderProductDetails(firstProduct.id);

    expect(
      screen.getByText("Select Size", { selector: "label" })
    ).toBeInTheDocument();
  });

  test("displays all size options", () => {
    renderProductDetails(firstProduct.id);

    expect(
      screen.getByRole("option", { name: "Select Size" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("option", { name: "S" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("option", { name: "M" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("option", { name: "L" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("option", { name: "XL" })
    ).toBeInTheDocument();
  });

  test("displays Add to Cart button", () => {
    renderProductDetails(firstProduct.id);

    expect(
      screen.getByRole("button", { name: /Add to Cart/i })
    ).toBeInTheDocument();
  });

  test("displays Wishlist button", () => {
    renderProductDetails(firstProduct.id);

    expect(
      screen.getByRole("button", { name: /Wishlist/i })
    ).toBeInTheDocument();
  });

  test("displays Product Not Found for invalid ID", () => {
    renderProductDetails("999999");

    expect(
      screen.getByRole("heading", { name: "Product Not Found" })
    ).toBeInTheDocument();
  });

  test("displays Back to Products link for invalid ID", () => {
    renderProductDetails("999999");

    expect(
      screen.getByRole("link", { name: "Back to Products" })
    ).toHaveAttribute("href", "/products");
  });

  test("does not display Add to Cart for invalid product", () => {
    renderProductDetails("999999");

    expect(
      screen.queryByRole("button", { name: /Add to Cart/i })
    ).not.toBeInTheDocument();
  });

  test("does not display product image for invalid ID", () => {
    renderProductDetails("999999");

    expect(
      screen.queryByRole("img")
    ).not.toBeInTheDocument();
  });

});
