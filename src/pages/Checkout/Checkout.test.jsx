
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Checkout from "./Checkout";

describe("ThreadAura Checkout Component", () => {

  // Test 1: Checkout page rendering
  it("should render Checkout page", () => {
    render(<Checkout />);

    expect(
      screen.getByRole("heading", { name: "Checkout" })
    ).toBeInTheDocument();
  });

  // Test 2: Delivery Address heading
  it("should display Delivery Address heading", () => {
    render(<Checkout />);

    expect(
      screen.getByText("Delivery Address")
    ).toBeInTheDocument();
  });

  // Test 3: Full Name input
  it("should display Full Name input", () => {
    render(<Checkout />);

    expect(
      screen.getByPlaceholderText("Full Name")
    ).toBeInTheDocument();
  });

  // Test 4: Phone Number input
  it("should display Phone Number input", () => {
    render(<Checkout />);

    expect(
      screen.getByPlaceholderText("Phone Number")
    ).toBeInTheDocument();
  });

  // Test 5: Complete Address textarea
  it("should display Complete Address textarea", () => {
    render(<Checkout />);

    expect(
      screen.getByPlaceholderText("Complete Address")
    ).toBeInTheDocument();
  });

  // Test 6: City input
  it("should display City input", () => {
    render(<Checkout />);

    expect(
      screen.getByPlaceholderText("City")
    ).toBeInTheDocument();
  });

  // Test 7: State input
  it("should display State input", () => {
    render(<Checkout />);

    expect(
      screen.getByPlaceholderText("State")
    ).toBeInTheDocument();
  });

  // Test 8: Pincode input
  it("should display Pincode input", () => {
    render(<Checkout />);

    expect(
      screen.getByPlaceholderText("Pincode")
    ).toBeInTheDocument();
  });

  // Test 9: Order Summary
  it("should display Order Summary heading", () => {
    render(<Checkout />);

    expect(
      screen.getByText("Order Summary")
    ).toBeInTheDocument();
  });

  // Test 10: Subtotal
  it("should display subtotal amount", () => {
    render(<Checkout />);

    expect(
      screen.getByText("Subtotal: ₹1,299")
    ).toBeInTheDocument();
  });

  // Test 11: Delivery charge
  it("should display delivery charge", () => {
    render(<Checkout />);

    expect(
      screen.getByText("Delivery: ₹100")
    ).toBeInTheDocument();
  });

  // Test 12: Total amount
  it("should display total amount", () => {
    render(<Checkout />);

    expect(
      screen.getByText("Total: ₹1,399")
    ).toBeInTheDocument();
  });

  // Test 13: Payment button
  it("should display Continue to Payment button", () => {
    render(<Checkout />);

    expect(
      screen.getByRole("button", {
        name: "Continue to Payment"
      })
    ).toBeInTheDocument();
  });

  // Test 14: Enter customer name
  it("should allow user to enter full name", () => {
    render(<Checkout />);

    const name = screen.getByPlaceholderText("Full Name");

    fireEvent.change(name, {
      target: { value: "Srilaxmi" }
    });

    expect(name).toHaveValue("Srilaxmi");
  });

  // Test 15: Enter phone number
  it("should allow user to enter phone number", () => {
    render(<Checkout />);

    const phone = screen.getByPlaceholderText("Phone Number");

    fireEvent.change(phone, {
      target: { value: "9876543210" }
    });

    expect(phone).toHaveValue("9876543210");
  });

  // Test 16: Enter city
  it("should allow user to enter city", () => {
    render(<Checkout />);

    const city = screen.getByPlaceholderText("City");

    fireEvent.change(city, {
      target: { value: "Hyderabad" }
    });

    expect(city).toHaveValue("Hyderabad");
  });

});
