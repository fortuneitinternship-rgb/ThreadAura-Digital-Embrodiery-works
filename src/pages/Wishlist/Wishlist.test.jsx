
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, test, expect } from "vitest";
import "@testing-library/jest-dom";

import Wishlist from "./Wishlist";

describe("Wishlist Page Testing", () => {

  test("should render wishlist page successfully", () => {
    render(
      <MemoryRouter>
        <Wishlist />
      </MemoryRouter>
    );

    expect(screen.getByText("My Wishlist")).toBeInTheDocument();
  });

  test("should display wishlist title", () => {
    render(
      <MemoryRouter>
        <Wishlist />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", { name: /My Wishlist/i })
    ).toBeVisible();
  });

  test("should show empty wishlist message", () => {
    render(
      <MemoryRouter>
        <Wishlist />
      </MemoryRouter>
    );

    expect(
      screen.getByText("Your Wishlist is Empty")
    ).toBeInTheDocument();
  });

  test("should display favorite products information", () => {
    render(
      <MemoryRouter>
        <Wishlist />
      </MemoryRouter>
    );

    expect(
      screen.getByText(/Save your favorite ThreadAura products here/i)
    ).toBeVisible();
  });

  test("should display Browse Products button", () => {
    render(
      <MemoryRouter>
        <Wishlist />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("link", { name: /Browse Products/i })
    ).toBeInTheDocument();
  });

  test("should navigate to products page", () => {
    render(
      <MemoryRouter>
        <Wishlist />
      </MemoryRouter>
    );

    const link = screen.getByRole("link", {
      name: /Browse Products/i
    });

    expect(link.getAttribute("href")).toBe("/products");
  });

  test("should have dark Bootstrap button styling", () => {
    render(
      <MemoryRouter>
        <Wishlist />
      </MemoryRouter>
    );

    const link = screen.getByRole("link", {
      name: /Browse Products/i
    });

    expect(link.classList.contains("btn-dark")).toBe(true);
  });

  test("should display card section", () => {
    const { container } = render(
      <MemoryRouter>
        <Wishlist />
      </MemoryRouter>
    );

    expect(
      container.querySelector(".card")
    ).not.toBeNull();
  });

  test("should display Bootstrap container", () => {
    const { container } = render(
      <MemoryRouter>
        <Wishlist />
      </MemoryRouter>
    );

    expect(
      container.querySelector(".container")
    ).not.toBeNull();
  });

  test("should not display product items in empty wishlist", () => {
    render(
      <MemoryRouter>
        <Wishlist />
      </MemoryRouter>
    );

    expect(
      screen.queryByRole("img")
    ).not.toBeInTheDocument();
  });

});
