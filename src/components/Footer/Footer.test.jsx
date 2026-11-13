
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, test, expect } from "vitest";
import Footer from "./Footer";

describe("ThreadAura Footer Component", () => {

  test("renders Footer component", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  test("displays ThreadAura heading", () => {
    render(<MemoryRouter><Footer /></MemoryRouter>);

    expect(
      screen.getByRole("heading", { name: "ThreadAura" })
    ).toBeInTheDocument();
  });

  test("displays store description", () => {
    render(<MemoryRouter><Footer /></MemoryRouter>);

    expect(
      screen.getByText("Digital Embroidery Fashion Store")
    ).toBeInTheDocument();
  });

  test("displays store tagline", () => {
    render(<MemoryRouter><Footer /></MemoryRouter>);

    expect(
      screen.getByText("Celebrate Tradition. Wear Elegance.")
    ).toBeInTheDocument();
  });

  test("displays About Us section", () => {
    render(<MemoryRouter><Footer /></MemoryRouter>);

    expect(
      screen.getByRole("heading", { name: "About Us" })
    ).toBeInTheDocument();
  });

  test("displays About Us links", () => {
    render(<MemoryRouter><Footer /></MemoryRouter>);

    expect(screen.getByRole("link", { name: "Our Story" }))
      .toHaveAttribute("href", "/about");

    expect(screen.getByRole("link", { name: "Our Mission" }))
      .toHaveAttribute("href", "/about");

    expect(screen.getByRole("link", { name: "Our Vision" }))
      .toHaveAttribute("href", "/about");
  });

  test("displays Quick Links section", () => {
    render(<MemoryRouter><Footer /></MemoryRouter>);

    expect(
      screen.getByRole("heading", { name: "Quick Links" })
    ).toBeInTheDocument();
  });

  test("displays Home, Products, About and Contact links", () => {
    render(<MemoryRouter><Footer /></MemoryRouter>);

    expect(screen.getByRole("link", { name: "Home" }))
      .toHaveAttribute("href", "/");

    expect(screen.getByRole("link", { name: "Products" }))
      .toHaveAttribute("href", "/products");

    expect(screen.getByRole("link", { name: "About", exact: true }))
      .toHaveAttribute("href", "/about");

    expect(screen.getByRole("link", { name: "Contact", exact: true }))
      .toHaveAttribute("href", "/contact");
  });

  test("displays Our Categories section", () => {
    render(<MemoryRouter><Footer /></MemoryRouter>);

    expect(
      screen.getByRole("heading", { name: "Our Categories" })
    ).toBeInTheDocument();
  });

  test("displays all product category links", () => {
    render(<MemoryRouter><Footer /></MemoryRouter>);

    expect(screen.getByRole("link", { name: "Embroidered Blouses" }))
      .toHaveAttribute("href", "/products");

    expect(screen.getByRole("link", { name: "Embroidery Sarees" }))
      .toHaveAttribute("href", "/products");

    expect(screen.getByRole("link", { name: "Kurtis" }))
      .toHaveAttribute("href", "/products");

    expect(screen.getByRole("link", { name: "Dupattas" }))
      .toHaveAttribute("href", "/products");
  });

  test("displays Customer Service section", () => {
    render(<MemoryRouter><Footer /></MemoryRouter>);

    expect(
      screen.getByRole("heading", { name: "Customer Service" })
    ).toBeInTheDocument();
  });

  test("displays customer service links", () => {
    render(<MemoryRouter><Footer /></MemoryRouter>);

    expect(screen.getByRole("link", { name: "Contact Us" }))
      .toHaveAttribute("href", "/contact");

    expect(screen.getByRole("link", { name: "FAQs" }))
      .toHaveAttribute("href", "/faq");

    expect(screen.getByRole("link", { name: "Shipping Policy" }))
      .toHaveAttribute("href", "/shipping");

    expect(screen.getByRole("link", { name: "Return Policy" }))
      .toHaveAttribute("href", "/returns");
  });

  test("displays copyright information", () => {
    render(<MemoryRouter><Footer /></MemoryRouter>);

    expect(
      screen.getByText("© 2026 ThreadAura. All Rights Reserved.")
    ).toBeInTheDocument();
  });

  test("renders five footer sections", () => {
    const { container } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    expect(
      container.querySelectorAll(".footer-section")
    ).toHaveLength(5);
  });

  test("renders footer container and bottom section", () => {
    const { container } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    expect(container.querySelector(".footer-container"))
      .toBeInTheDocument();

    expect(container.querySelector(".footer-bottom"))
      .toBeInTheDocument();
  });

});
