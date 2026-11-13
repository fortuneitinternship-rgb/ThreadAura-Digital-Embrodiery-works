
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, test, expect, vi } from "vitest";
import MainLayout from "./MainLayout";

// Mock Navbar
vi.mock("../components/Navbar/Navbar", () => ({
  default: () => <nav>ThreadAura Navbar</nav>,
}));

// Mock Footer
vi.mock("../components/Footer/Footer", () => ({
  default: () => <footer>ThreadAura Footer</footer>,
}));

// Mock AppRoutes
vi.mock("../Routes/AppRoutes", () => ({
  default: () => <div>ThreadAura App Routes</div>,
}));

describe("MainLayout Component", () => {
  test("renders MainLayout component", () => {
    render(
      <MemoryRouter>
        <MainLayout />
      </MemoryRouter>
    );

    expect(screen.getByText("ThreadAura App Routes")).toBeInTheDocument();
  });

  test("renders Navbar component", () => {
    render(
      <MemoryRouter>
        <MainLayout />
      </MemoryRouter>
    );

    expect(screen.getByRole("navigation")).toHaveTextContent("ThreadAura Navbar");
  });

  test("renders Footer component", () => {
    render(
      <MemoryRouter>
        <MainLayout />
      </MemoryRouter>
    );

    expect(screen.getByRole("contentinfo")).toHaveTextContent("ThreadAura Footer");
  });

  test("renders main element", () => {
    render(
      <MemoryRouter>
        <MainLayout />
      </MemoryRouter>
    );

    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  test("renders Navbar before main content and Footer after main content", () => {
    const { container } = render(
      <MemoryRouter>
        <MainLayout />
      </MemoryRouter>
    );

    const navbar = screen.getByRole("navigation");
    const main = screen.getByRole("main");
    const footer = screen.getByRole("contentinfo");

    expect(
      navbar.compareDocumentPosition(main) &
        Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy();

    expect(
      main.compareDocumentPosition(footer) &
        Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy();
  });
});
