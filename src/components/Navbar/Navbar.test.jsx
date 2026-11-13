
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, test, expect } from "vitest";
import Navbar from "./Navbar";

describe("ThreadAura Navbar Component", () => {

  test("renders Navbar component", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  test("displays ThreadAura logo", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByText(/ThreadAura/i)).toBeInTheDocument();
  });

  test("displays Home link", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByRole("link", { name: "Home" }))
      .toHaveAttribute("href", "/");
  });

  test("displays Products link", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByRole("link", { name: "Products" }))
      .toHaveAttribute("href", "/products");
  });

  test("displays Categories link", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByRole("link", { name: "Categories" }))
      .toHaveAttribute("href", "/categories");
  });

  test("displays Wishlist link", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByRole("link", { name: /Wishlist/i }))
      .toHaveAttribute("href", "/wishlist");
  });

  test("displays Cart link", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByRole("link", { name: /Cart/i }))
      .toHaveAttribute("href", "/cart");
  });

  test("displays Login link", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByRole("link", { name: /Login/i }))
      .toHaveAttribute("href", "/login");
  });

  test("displays Search input", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
  });

  test("Search input has search type", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByPlaceholderText("Search"))
      .toHaveAttribute("type", "search");
  });

  test("displays Search button", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const searchButton = document.querySelector(".search-item button");

    expect(searchButton).toBeInTheDocument();
    expect(searchButton).toHaveClass("btn", "btn-light");
  });

  test("displays mobile navigation toggle button", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(document.querySelector(".navbar-toggler"))
      .toBeInTheDocument();
  });

  test("Navbar has Bootstrap dark theme classes", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByRole("navigation")).toHaveClass(
      "navbar",
      "navbar-expand-lg",
      "navbar-dark",
      "bg-dark"
    );
  });

  test("Navbar contains navigation links", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getAllByRole("link")).toHaveLength(7);
  });

});
