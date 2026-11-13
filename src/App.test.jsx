
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import App from "./App";

// Mock MainLayout component
vi.mock("./layouts/MainLayout", () => ({
  default: () => (
    <div>
      <h1>ThreadAura Main Layout</h1>
    </div>
  ),
}));

describe("App Component", () => {
  test("renders App component", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: "ThreadAura Main Layout" })
    ).toBeInTheDocument();
  });

  test("renders MainLayout component", () => {
    render(<App />);

    expect(screen.getByText("ThreadAura Main Layout")).toBeInTheDocument();
  });

  test("renders heading inside MainLayout", () => {
    render(<App />);

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });
});
