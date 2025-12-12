import { render, screen } from "@testing-library/react";
import ErrorMessage from "../ErrorMessage";

describe("ErrorMessage", () => {
  it("renders an alert role for accessibility", () => {
    render(<ErrorMessage message="Something went wrong" />);
    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  it("renders the provided error message", () => {
    render(<ErrorMessage message="Network error" />);
    expect(screen.getByText("Network error")).toBeInTheDocument();
  });

  it("renders fallback message when none is provided", () => {
    render(<ErrorMessage />);
    expect(
      screen.getByText("Failed to load event data. Please try again.")
    ).toBeInTheDocument();
  });
});
