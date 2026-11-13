
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

import Products from "./Products";
import products from "../../Data/products";

describe("Products Component", () => {

  const renderProducts = () => {
    return render(
      <MemoryRouter>
        <Products />
      </MemoryRouter>
    );
  };

  test("renders Products component", () => {
    renderProducts();

    expect(
      screen.getByRole("heading", {
        name: "Our Embroidery Collection"
      })
    ).toBeInTheDocument();
  });

  test("displays products banner subtitle", () => {
    renderProducts();

    expect(
      screen.getByText("Discover elegance in every stitch")
    ).toBeInTheDocument();
  });

  test("displays Explore Our Products heading", () => {
    renderProducts();

    expect(
      screen.getByRole("heading", {
        name: "Explore Our Products"
      })
    ).toBeInTheDocument();
  });

  test("displays product section description", () => {
    renderProducts();

    expect(
      screen.getByText(
        "Beautiful handcrafted embroidery for every occasion."
      )
    ).toBeInTheDocument();
  });

  test("displays all products", () => {
    renderProducts();

    products.forEach((product) => {
      expect(
        screen.getByRole("heading", {
          name: product.name
        })
      ).toBeInTheDocument();
    });
  });

  test("displays product images", () => {
    renderProducts();

    products.forEach((product) => {
      const image = screen.getByAltText(product.name);

      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("src", product.image);
    });
  });

  test("displays product categories", () => {
    renderProducts();

    products.forEach((product) => {
      expect(
        screen.getAllByText(product.category).length
      ).toBeGreaterThan(0);
    });
  });

  test("displays product ratings", () => {
    renderProducts();

    products.forEach((product) => {
      expect(
        screen.getByText(`⭐ ${product.rating}`)
      ).toBeInTheDocument();
    });
  });

  test("displays product prices", () => {
    renderProducts();

    products.forEach((product) => {
      expect(
        screen.getByText(`₹${product.price}`)
      ).toBeInTheDocument();
    });
  });

  test("displays New Collection tag for products", () => {
    renderProducts();

    expect(
      screen.getAllByText("New Collection")
    ).toHaveLength(products.length);
  });

  test("displays View Details buttons for all products", () => {
    renderProducts();

    expect(
      screen.getAllByRole("link", {
        name: "View Details"
      })
    ).toHaveLength(products.length);
  });

  test("View Details links navigate to correct product pages", () => {
    renderProducts();

    const detailsLinks = screen.getAllByRole("link", {
      name: "View Details"
    });

    products.forEach((product, index) => {
      expect(detailsLinks[index]).toHaveAttribute(
        "href",
        `/products/${product.id}`
      );
    });
  });

  test("product images link to correct product details", () => {
    renderProducts();

    products.forEach((product) => {
      const image = screen.getByAltText(product.name);
      const imageLink = image.closest("a");

      expect(imageLink).toHaveAttribute(
        "href",
        `/products/${product.id}`
      );
    });
  });

  test("displays one product card for each product", () => {
    const { container } = renderProducts();

    expect(
      container.querySelectorAll(".thread-product-card")
    ).toHaveLength(products.length);
  });

  test("displays product information section", () => {
    const { container } = renderProducts();

    expect(
      container.querySelectorAll(".product-info")
    ).toHaveLength(products.length);
  });

});
