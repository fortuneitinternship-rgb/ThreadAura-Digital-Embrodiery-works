
import { describe, test, expect } from "vitest";
import products from "./products";

describe("ThreadAura Products Data", () => {

  test("exports products as an array", () => {
    expect(Array.isArray(products)).toBe(true);
  });

  test("contains four products", () => {
    expect(products).toHaveLength(4);
  });

  test("first product is Floral Embroidered Blouse", () => {
    expect(products[0].name).toBe("Floral Embroidered Blouse");
  });

  test("second product is Traditional Embroidery Sarees", () => {
    expect(products[1].name).toBe("Traditional Embroidery Sarees");
  });

  test("third product is Designer Embroidered Kurtis", () => {
    expect(products[2].name).toBe("Designer Embroidered Kurtis");
  });

  test("fourth product is Embroidered Dupattas", () => {
    expect(products[3].name).toBe("Embroidered Dupattas");
  });

  test("all products have unique IDs", () => {
    const ids = products.map((product) => product.id);

    expect(new Set(ids).size).toBe(products.length);
  });

  test("all products have required properties", () => {
    products.forEach((product) => {
      expect(product).toHaveProperty("id");
      expect(product).toHaveProperty("name");
      expect(product).toHaveProperty("category");
      expect(product).toHaveProperty("price");
      expect(product).toHaveProperty("rating");
      expect(product).toHaveProperty("image");
    });
  });

  test("all product prices are positive numbers", () => {
    products.forEach((product) => {
      expect(typeof product.price).toBe("number");
      expect(product.price).toBeGreaterThan(0);
    });
  });

  test("all product ratings are between 0 and 5", () => {
    products.forEach((product) => {
      expect(product.rating).toBeGreaterThanOrEqual(0);
      expect(product.rating).toBeLessThanOrEqual(5);
    });
  });

  test("all product images have valid URL format", () => {
    products.forEach((product) => {
      expect(() => new URL(product.image)).not.toThrow();
      expect(new URL(product.image).protocol).toBe("https:");
    });
  });

  test("all product categories are available", () => {
    const categories = products.map((product) => product.category);

    expect(categories).toEqual([
      "Blouses",
      "Sarees",
      "Kurtis",
      "Dupattas"
    ]);
  });

  test("all product names are not empty", () => {
    products.forEach((product) => {
      expect(product.name.trim()).not.toBe("");
    });
  });

});
