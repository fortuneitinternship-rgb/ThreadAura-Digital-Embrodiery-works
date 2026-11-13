
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { MemoryRouter } from "react-router-dom";
import Login from "./Login";

describe("ThreadAura Login Component", () => {

  const renderLogin = () => {
    return render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
  };

  // Test 1: Login page rendering
  it("should render the Login page", () => {
    renderLogin();

    expect(
      screen.getByRole("heading", { name: "Login" })
    ).toBeInTheDocument();
  });

  // Test 2: Email input
  it("should display email input", () => {
    renderLogin();

    expect(
      screen.getByPlaceholderText("Enter your email")
    ).toBeInTheDocument();
  });

  // Test 3: Password input
  it("should display password input", () => {
    renderLogin();

    expect(
      screen.getByPlaceholderText("Enter your password")
    ).toBeInTheDocument();
  });

  // Test 4: Login button
  it("should display Login button", () => {
    renderLogin();

    expect(
      screen.getByRole("button", { name: "Login" })
    ).toBeInTheDocument();
  });

  // Test 5: Register link
  it("should display Register link", () => {
    renderLogin();

    expect(
      screen.getByRole("link", { name: "Register" })
    ).toHaveAttribute("href", "/register");
  });

  // Test 6: Email input type
  it("should have email input type", () => {
    renderLogin();

    expect(
      screen.getByPlaceholderText("Enter your email")
    ).toHaveAttribute("type", "email");
  });

  // Test 7: Password input type
  it("should have password input type", () => {
    renderLogin();

    expect(
      screen.getByPlaceholderText("Enter your password")
    ).toHaveAttribute("type", "password");
  });

  // Test 8: Enter email
  it("should allow user to enter email", () => {
    renderLogin();

    const email = screen.getByPlaceholderText(
      "Enter your email"
    );

    fireEvent.change(email, {
      target: { value: "test@gmail.com" },
    });

    expect(email).toHaveValue("test@gmail.com");
  });

  // Test 9: Enter password
  it("should allow user to enter password", () => {
    renderLogin();

    const password = screen.getByPlaceholderText(
      "Enter your password"
    );

    fireEvent.change(password, {
      target: { value: "Test@123" },
    });

    expect(password).toHaveValue("Test@123");
  });

});
