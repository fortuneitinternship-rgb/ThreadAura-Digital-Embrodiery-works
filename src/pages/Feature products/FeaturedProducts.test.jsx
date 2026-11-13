
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

// Correct component import path
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";

describe("ThreadAura FeaturedProducts Component", () => {

  it("should render Featured Products heading", () => {
    render(<FeaturedProducts />);

    expect(
      screen.getByText("Featured Products")
    ).toBeInTheDocument();
  });

  it("should display collection heading", () => {
    render(<FeaturedProducts />);

    expect(
      screen.getByText("THREADAURA COLLECTION")
    ).toBeInTheDocument();
  });

  it("should display all four products", () => {
    render(<FeaturedProducts />);

    const products = [
      "Floral Embroidered Blouse",
      "Traditional Silk Saree",
      "Designer Embroidery Kurti",
      "Elegant Party Dress"
    ];

    products.forEach((product) => {
      expect(screen.getByText(product)).toBeInTheDocument();
    });
  });

  it("should display product categories", () => {
    render(<FeaturedProducts />);

    expect(screen.getByText("Blouses")).toBeInTheDocument();
    expect(screen.getByText("Sarees")).toBeInTheDocument();
    expect(screen.getByText("Kurtis")).toBeInTheDocument();
    expect(screen.getByText("Dresses")).toBeInTheDocument();
  });

  it("should display product prices", () => {
    render(<FeaturedProducts />);

    expect(screen.getByText("₹1299")).toBeInTheDocument();
    expect(screen.getByText("₹2499")).toBeInTheDocument();
    expect(screen.getByText("₹1599")).toBeInTheDocument();
    expect(screen.getByText("₹1999")).toBeInTheDocument();
  });

  it("should display product ratings", () => {
    render(<FeaturedProducts />);

    expect(screen.getByText("⭐ 4.5")).toBeInTheDocument();
    expect(screen.getByText("⭐ 4.8")).toBeInTheDocument();
    expect(screen.getByText("⭐ 4.6")).toBeInTheDocument();
    expect(screen.getByText("⭐ 4.7")).toBeInTheDocument();
  });

  it("should display four Explore Collection buttons", () => {
    render(<FeaturedProducts />);

    const buttons = screen.getAllByRole("button", {
      name: "Explore Collection"
    });

    expect(buttons).toHaveLength(4);
  });

  it("should display Handcrafted Elegance text four times", () => {
    render(<FeaturedProducts />);

    expect(
      screen.getAllByText("Handcrafted Elegance")
    ).toHaveLength(4);
  });

  it("should render four product cards", () => {
    const { container } = render(<FeaturedProducts />);

    const cards = container.querySelectorAll(".featured-card");

    expect(cards).toHaveLength(4);
  });

});
