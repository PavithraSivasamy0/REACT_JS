import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact US page", () => {
  it("should render component", () => {
    render(<Contact />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("Contact us");
  });
});
