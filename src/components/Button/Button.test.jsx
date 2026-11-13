
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import Button from "./Button";

describe("Button Component", () => {

  test("renders Button component", () => {
    render(<Button>Click Me</Button>);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("displays button text", () => {
    render(<Button>Submit</Button>);

    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  test("has default button type", () => {
    render(<Button>Click Me</Button>);

    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
  });

  test("accepts custom button type", () => {
    render(<Button type="submit">Submit</Button>);

    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
  });

  test("has Bootstrap dark button classes", () => {
    render(<Button>Click Me</Button>);

    expect(screen.getByRole("button")).toHaveClass("btn", "btn-dark");
  });

  test("calls onClick when button is clicked", () => {
    const handleClick = vi.fn();

    render(<Button onClick={handleClick}>Click Me</Button>);

    fireEvent.click(screen.getByRole("button"));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("renders children correctly", () => {
    render(
      <Button>
        Add to Cart
      </Button>
    );

    expect(screen.getByRole("button")).toHaveTextContent("Add to Cart");
  });

  test("renders button without onClick function", () => {
    render(<Button>Continue</Button>);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

});
