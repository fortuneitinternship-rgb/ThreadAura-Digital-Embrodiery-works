
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Register from "./Register";

describe("Register Component", () => {

  test("renders Register component", () => {
    render(<Register />);

    expect(
      screen.getByRole("heading", { name: "Create Account" })
    ).toBeInTheDocument();
  });

  test("displays Full Name input", () => {
    render(<Register />);

    expect(
      screen.getByPlaceholderText("Full Name")
    ).toBeInTheDocument();
  });

  test("displays Email Address input", () => {
    render(<Register />);

    expect(
      screen.getByPlaceholderText("Email Address")
    ).toBeInTheDocument();
  });

  test("displays Phone Number input", () => {
    render(<Register />);

    expect(
      screen.getByPlaceholderText("Phone Number")
    ).toBeInTheDocument();
  });

  test("displays Password input", () => {
    render(<Register />);

    expect(
      screen.getByPlaceholderText("Password")
    ).toBeInTheDocument();
  });

  test("displays Confirm Password input", () => {
    render(<Register />);

    expect(
      screen.getByPlaceholderText("Confirm Password")
    ).toBeInTheDocument();
  });

  test("displays all five input fields", () => {
    render(<Register />);

    const inputs = document.querySelectorAll("input");

    expect(inputs).toHaveLength(5);
  });

  test("Full Name input has text type", () => {
    render(<Register />);

    expect(
      screen.getByPlaceholderText("Full Name")
    ).toHaveAttribute("type", "text");
  });

  test("Email Address input has email type", () => {
    render(<Register />);

    expect(
      screen.getByPlaceholderText("Email Address")
    ).toHaveAttribute("type", "email");
  });

  test("Phone Number input has tel type", () => {
    render(<Register />);

    expect(
      screen.getByPlaceholderText("Phone Number")
    ).toHaveAttribute("type", "tel");
  });

  test("Password input has password type", () => {
    render(<Register />);

    expect(
      screen.getByPlaceholderText("Password")
    ).toHaveAttribute("type", "password");
  });

  test("Confirm Password input has password type", () => {
    render(<Register />);

    expect(
      screen.getByPlaceholderText("Confirm Password")
    ).toHaveAttribute("type", "password");
  });

  test("displays Register button", () => {
    render(<Register />);

    expect(
      screen.getByRole("button", { name: "Register" })
    ).toBeInTheDocument();
  });

  test("Register button has full width Bootstrap class", () => {
    render(<Register />);

    expect(
      screen.getByRole("button", { name: "Register" })
    ).toHaveClass("w-100");
  });

});
