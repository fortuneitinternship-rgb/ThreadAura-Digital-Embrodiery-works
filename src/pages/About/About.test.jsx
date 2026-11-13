
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "./About";

describe("About Component", () => {

  test("renders About component", () => {
    render(<About />);
    expect(screen.getByText("About ThreadAura")).toBeInTheDocument();
  });

  test("displays hero section subtitle", () => {
    render(<About />);
    expect(
      screen.getByText("Where Tradition Meets Modern Fashion")
    ).toBeInTheDocument();
  });

  test("displays Our Story heading", () => {
    render(<About />);
    expect(screen.getByRole("heading", { name: "Our Story" })).toBeInTheDocument();
  });

  test("displays first story paragraph", () => {
    render(<About />);
    expect(
      screen.getByText(/Welcome to ThreadAura/)
    ).toBeInTheDocument();
  });

  test("displays second story paragraph", () => {
    render(<About />);
    expect(
      screen.getByText(/Our collection includes beautifully designed/)
    ).toBeInTheDocument();
  });

  test("displays traditional fashion image", () => {
    render(<About />);
    const image = screen.getByAltText("Traditional Indian fashion");

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "src",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=700"
    );
  });

  test("displays Our Mission heading", () => {
    render(<About />);
    expect(screen.getByRole("heading", { name: "Our Mission" })).toBeInTheDocument();
  });

  test("displays mission paragraph", () => {
    render(<About />);
    expect(
      screen.getByText(/Our mission is to provide beautiful/)
    ).toBeInTheDocument();
  });

  test("displays What We Offer heading", () => {
    render(<About />);
    expect(screen.getByRole("heading", { name: "What We Offer" })).toBeInTheDocument();
  });

  test("displays Embroidered Blouses category", () => {
    render(<About />);
    expect(screen.getByText("Embroidered Blouses")).toBeInTheDocument();
  });

  test("displays Embroidery Sarees category", () => {
    render(<About />);
    expect(screen.getByText("Embroidery Sarees")).toBeInTheDocument();
  });

  test("displays Kurtis category", () => {
    render(<About />);
    expect(screen.getByText("Kurtis")).toBeInTheDocument();
  });

  test("displays Embroidered Dupattas category", () => {
    render(<About />);
    expect(screen.getByText("Embroidered Dupattas")).toBeInTheDocument();
  });

  test("displays thank you message", () => {
    render(<About />);
    expect(
      screen.getByText("Thank You for Choosing ThreadAura!")
    ).toBeInTheDocument();
  });

  test("displays footer tagline", () => {
    render(<About />);
    expect(
      screen.getByText("Celebrate tradition. Wear elegance.")
    ).toBeInTheDocument();
  });

});
