
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { MemoryRouter } from "react-router-dom";
import Cart from "./Cart";

describe("ThreadAura Cart Component", () => {

  const renderCart = () => {
    return render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );
  };

  // Test 1: Cart page rendering
  it("should render Shopping Cart page", () => {
    renderCart();

    expect(
      screen.getByRole("heading", {
        name: "Shopping Cart"
      })
    ).toBeInTheDocument();
  });

  // Test 2: Empty cart message
  it("should display Your Cart is Empty message", () => {
    renderCart();

    expect(
      screen.getByText("Your Cart is Empty")
    ).toBeInTheDocument();
  });

  // Test 3: Cart description
  it("should display cart description", () => {
    renderCart();

    expect(
      screen.getByText(
        "Add ThreadAura products to your cart."
      )
    ).toBeInTheDocument();
  });

  // Test 4: Continue Shopping button
  it("should display Continue Shopping button", () => {
    renderCart();

    expect(
      screen.getByRole("link", {
        name: "Continue Shopping"
      })
    ).toBeInTheDocument();
  });

  // Test 5: Navigation link
  it("should navigate to products page", () => {
    renderCart();

    const link = screen.getByRole("link", {
      name: "Continue Shopping"
    });

    expect(link).toHaveAttribute("href", "/products");
  });

  // Test 6: Empty cart heading
  it("should display empty cart heading correctly", () => {
    renderCart();

    expect(
      screen.getByRole("heading", {
        name: "Your Cart is Empty"
      })
    ).toBeInTheDocument();
  });

  // Test 7: Cart container
  it("should render Bootstrap container", () => {
    const { container } = renderCart();

    expect(
      container.querySelector(".container")
    ).toBeInTheDocument();
  });

  // Test 8: Cart card
  it("should render cart card", () => {
    const { container } = renderCart();

    expect(
      container.querySelector(".card")
    ).toBeInTheDocument();
  });

});
