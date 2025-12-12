import { render, screen } from "@testing-library/react";
import Loading from "../Loading";

describe("Loading", () => {
  it("renders the loading text", () => {
    render(<Loading />);
    expect(screen.getByText("Loading event…")).toBeInTheDocument();
  });

  it("has a status role for accessibility", () => {
    render(<Loading />);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });
});
