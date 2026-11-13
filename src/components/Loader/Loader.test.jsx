
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Loader from "./Loader";

describe("Loader Component", () => {

  test("renders Loader component", () => {
    render(<Loader />);

    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  test("displays Loading text", () => {
    render(<Loader />);

    expect(
      screen.getAllByText("Loading...")
    ).toHaveLength(2);
  });

  test("displays loading message inside spinner", () => {
    render(<Loader />);

    expect(
      screen.getByText("Loading...", {
        selector: ".visually-hidden"
      })
    ).toBeInTheDocument();
  });

  test("displays loading paragraph", () => {
    render(<Loader />);

    expect(
      screen.getByText("Loading...", {
        selector: "p"
      })
    ).toBeInTheDocument();
  });

  test("spinner has Bootstrap spinner-border class", () => {
    const { container } = render(<Loader />);

    expect(
      container.querySelector(".spinner-border")
    ).toBeInTheDocument();
  });

  test("loader has Bootstrap text-center class", () => {
    const { container } = render(<Loader />);

    expect(
      container.querySelector(".text-center")
    ).toBeInTheDocument();
  });

  test("loader has Bootstrap padding class", () => {
    const { container } = render(<Loader />);

    expect(
      container.querySelector(".py-5")
    ).toBeInTheDocument();
  });

  test("loading paragraph has margin class", () => {
    render(<Loader />);

    expect(
      screen.getByText("Loading...", { selector: "p" })
    ).toHaveClass("mt-2");
  });

});
