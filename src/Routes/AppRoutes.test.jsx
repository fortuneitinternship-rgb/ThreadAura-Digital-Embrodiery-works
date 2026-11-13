
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

import AppRoutes from "./AppRoutes";

describe("AppRoutes Component", () => {

  const renderRoutes = (initialPath) => {
    return render(
      <MemoryRouter initialEntries={[initialPath]}>
        <AppRoutes />
      </MemoryRouter>
    );
  };

  test("renders Home page for root path", () => {
  renderRoutes("/");

  const heading = screen.getByRole("heading", { level: 1 });

  expect(heading.textContent).toBe("Beautiful Embroideryfor Every Occasion");
});


  test("renders Products page", () => {
    renderRoutes("/products");

    expect(
      screen.getByRole("heading", {
        name: "Explore Our Products"
      })
    ).toBeInTheDocument();
  });

  test("renders Categories page", () => {
    renderRoutes("/categories");

    expect(
      screen.getByRole("heading", {
        name: /Shop By Categories/i
      })
    ).toBeInTheDocument();
  });

  test("renders Product Details page", () => {
    renderRoutes("/products/1");

    expect(
      screen.getByRole("heading", { level: 1 })
    ).toBeInTheDocument();
  });

  test("renders Cart page", () => {
    renderRoutes("/cart");

    expect(
      screen.getByRole("heading", {
        name: "Shopping Cart"
      })
    ).toBeInTheDocument();
  });

  test("renders Wishlist page", () => {
    renderRoutes("/wishlist");

    expect(
      screen.getByRole("heading", {
        name: /My Wishlist/i
      })
    ).toBeInTheDocument();
  });

  test("renders Login page", () => {
    renderRoutes("/login");

    expect(
      screen.getByRole("heading", {
        name: /Login/i
      })
    ).toBeInTheDocument();
  });

  test("renders Register page", () => {
    renderRoutes("/register");

    expect(
      screen.getByRole("heading", {
        name: "Create Account"
      })
    ).toBeInTheDocument();
  });

  test("renders Checkout page", () => {
    renderRoutes("/checkout");

    expect(
      screen.getByRole("heading", {
        name: /Checkout/i
      })
    ).toBeInTheDocument();
  });

  test("does not render Products page on Home route", () => {
    renderRoutes("/");

    expect(
      screen.queryByRole("heading", {
        name: "Explore Our Products"
      })
    ).not.toBeInTheDocument();
  });

  test("does not render Login page on Register route", () => {
    renderRoutes("/register");

    expect(
      screen.queryByRole("button", {
        name: /Login/i
      })
    ).not.toBeInTheDocument();
  });

  test("does not render Cart page on Wishlist route", () => {
    renderRoutes("/wishlist");

    expect(
      screen.queryByText("Your Cart is Empty")
    ).not.toBeInTheDocument();
  });

});
