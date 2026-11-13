
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, test, expect } from "vitest";
import ProductCard from "./ProductCard";

const product = {
  id: 1,
  name: "Floral Embroidered Blouse",
  category: "Blouses",
  price: 1299,
  rating: 4.5,
  image: "/images/blouse.jpg"
};

describe("ProductCard Component", () => {

  test("renders ProductCard component", () => {
    render(
      <MemoryRouter>
        <ProductCard product={product} />
      </MemoryRouter>
    );

    expect(screen.getByText("Floral Embroidered Blouse")).toBeInTheDocument();
  });

  test("displays product name", () => {
    render(
      <MemoryRouter>
        <ProductCard product={product} />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", {
      name: "Floral Embroidered Blouse"
    })).toBeInTheDocument();
  });

  test("displays product category", () => {
    render(
      <MemoryRouter>
        <ProductCard product={product} />
      </MemoryRouter>
    );

    expect(screen.getByText("Category: Blouses")).toBeInTheDocument();
  });

  test("displays product price", () => {
    render(
      <MemoryRouter>
        <ProductCard product={product} />
      </MemoryRouter>
    );

    expect(screen.getByText("Price: ₹1299")).toBeInTheDocument();
  });

  test("displays product rating", () => {
    render(
      <MemoryRouter>
        <ProductCard product={product} />
      </MemoryRouter>
    );

    expect(screen.getByText("⭐ 4.5")).toBeInTheDocument();
  });

  test("displays product image", () => {
    render(
      <MemoryRouter>
        <ProductCard product={product} />
      </MemoryRouter>
    );

    const image = screen.getByRole("img", {
      name: "Floral Embroidered Blouse"
    });

    expect(image).toHaveAttribute("src", "/images/blouse.jpg");
  });

  test("displays View Product link", () => {
    render(
      <MemoryRouter>
        <ProductCard product={product} />
      </MemoryRouter>
    );

    expect(screen.getByRole("link", {
      name: "View Product"
    })).toHaveAttribute("href", "/products/1");
  });

});
