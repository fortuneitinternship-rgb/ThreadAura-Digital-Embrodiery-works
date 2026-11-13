
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import ShopByCategories from "./Categories";

describe("ThreadAura ShopByCategories Component", () => {

  // Test 1: Component rendering
  it("should render Shop By Categories section", () => {
    render(<ShopByCategories />);

    expect(
      screen.getByRole("heading", {
        name: "Shop By Categories"
      })
    ).toBeInTheDocument();
  });

  // Test 2: Description
  it("should display category description", () => {
    render(<ShopByCategories />);

    expect(
      screen.getByText(
        "Explore our beautiful traditional collections"
      )
    ).toBeInTheDocument();
  });

  // Test 3: Category names
  it("should display all five categories", () => {
    render(<ShopByCategories />);

    const categories = [
      "Embroidery Blouses",
      "Traditional Sarees",
      "Designer Kurtis",
      "Party Wear Dresses",
      "Embroidered silk Dupattas"
    ];

    categories.forEach((category) => {
      expect(
        screen.getByText(category)
      ).toBeInTheDocument();
    });
  });

  // Test 4: Category images
  it("should display five category images", () => {
    render(<ShopByCategories />);

    const images = screen.getAllByRole("img");

    expect(images).toHaveLength(5);
  });

  // Test 5: Image alt attributes
  it("should display correct image alt text", () => {
    render(<ShopByCategories />);

    expect(
      screen.getByAltText("Embroidery Blouses")
    ).toBeInTheDocument();

    expect(
      screen.getByAltText("Traditional Sarees")
    ).toBeInTheDocument();

    expect(
      screen.getByAltText("Designer Kurtis")
    ).toBeInTheDocument();

    expect(
      screen.getByAltText("Party Wear Dresses")
    ).toBeInTheDocument();

    expect(
      screen.getByAltText("Embroidered silk Dupattas")
    ).toBeInTheDocument();
  });

  // Test 6: Category cards
  it("should render five category cards", () => {
    const { container } = render(<ShopByCategories />);

    const cards = container.querySelectorAll(".category-card");

    expect(cards).toHaveLength(5);
  });

  // Test 7: Category container
  it("should render category container", () => {
    const { container } = render(<ShopByCategories />);

    expect(
      container.querySelector(".category-container")
    ).toBeInTheDocument();
  });

  // Test 8: Category section
  it("should render shop-category section", () => {
    const { container } = render(<ShopByCategories />);

    expect(
      container.querySelector(".shop-category")
    ).toBeInTheDocument();
  });

});
