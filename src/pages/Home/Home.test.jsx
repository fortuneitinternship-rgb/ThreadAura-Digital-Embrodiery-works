
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";

// Mock FeaturedProducts component
vi.mock("../../components/FeaturedProducts/FeaturedProducts", () => ({
  default: () => <div>Featured Products Section</div>,
}));

describe("ThreadAura Home Component", () => {

  const renderHome = () => {
    return render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
  };

  // Test 1: Homepage rendering
  it("should render the homepage", () => {
    renderHome();

    expect(
      screen.getByText("Shop by Categories")
    ).toBeInTheDocument();
  });

  // Test 2: Hero section
  it("should display hero heading", () => {
    renderHome();

    expect(
      screen.getByText(/Beautiful Embroidery/i)
    ).toBeInTheDocument();
  });

  // Test 3: Shop Now button
  it("should display Shop Now button", () => {
    renderHome();

    expect(
      screen.getByText(/Shop Now/i)
    ).toBeInTheDocument();
  });

  // Test 4: Categories
  it("should display all eight categories", () => {
    renderHome();

    const categories = [
      "Embroidery Blouses",
      "Traditional Sarees",
      "Designer Kurtis",
      "Designer Dresses",
      "Embroidery Dupattas",
      "Embroidered Bags",
      "Embroidered Lehengas",
      "Home Decor",
    ];

    categories.forEach((category) => {
      expect(
        screen.getByText(category)
      ).toBeInTheDocument();
    });
  });

  // Test 5: Category images
  it("should display eight category images", () => {
    renderHome();

    const images = screen.getAllByRole("img");

    expect(images).toHaveLength(9);
  });

  // Test 6: Featured products
  it("should display Featured Products section", () => {
    renderHome();

    expect(
      screen.getByText("Featured Products Section")
    ).toBeInTheDocument();
  });

  // Test 7: Why Choose Us
  it("should display Why Choose Us section", () => {
    renderHome();

    expect(
      screen.getByText("Elegance in Every Stitch")
    ).toBeInTheDocument();
  });

  // Test 8: Flash Sale
  it("should display Flash Sale section", () => {
    renderHome();

    expect(
      screen.getByText("Festive Special Sale!")
    ).toBeInTheDocument();
  });

  // Test 9: Newsletter
  it("should display newsletter section", () => {
    renderHome();

    expect(
      screen.getByText("Join the ThreadAura Family")
    ).toBeInTheDocument();
  });

  // Test 10: Newsletter subscription
  it("should show subscription success message", () => {
    renderHome();

    vi.spyOn(window, "alert").mockImplementation(() => {});

    const emailInput = screen.getByPlaceholderText(
      "Enter your email address"
    );

    fireEvent.change(emailInput, {
      target: { value: "test@gmail.com" },
    });

    fireEvent.click(
      screen.getByRole("button", { name: "Subscribe" })
    );

    expect(window.alert).toHaveBeenCalledWith(
      "Thank you for subscribing to ThreadAura!"
    );
  });

});
