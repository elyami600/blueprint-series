import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer", () => {
  it("renders the footer title", () => {
    render(<Footer />);
    expect(
      screen.getByRole("heading", { name: /the blueprint series/i })
    ).toBeInTheDocument();
  });

  it("renders the copyright text", () => {
    render(<Footer />);
    expect(
      screen.getByText(/© 2025 the gradient group, llc/i)
    ).toBeInTheDocument();
  });

  it("renders a footer landmark", () => {
    render(<Footer />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});
