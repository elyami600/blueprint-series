import { render, screen } from "@testing-library/react";
import Introduction from "../Introduction";

describe("Introduction", () => {
  it("renders the section with intro id", () => {
    render(<Introduction content="Test introduction content" />);
    const section = document.querySelector("#intro");
    expect(section).toBeInTheDocument();
  });

  it("renders the heading text", () => {
    render(<Introduction content="Test introduction content" />);
    expect(
      screen.getByText(/introduction of this event/i)
    ).toBeInTheDocument();
  });

  it("renders the provided content", () => {
    const content = "This is a test introduction paragraph.";
    render(<Introduction content={content} />);
    expect(screen.getByText(content)).toBeInTheDocument();
  });

  it("renders nothing for body text when content is undefined", () => {
    render(<Introduction />);
    const paragraphs = screen.getAllByText(
      /introduction of this event/i
    );
    expect(paragraphs.length).toBe(1);
  });
});
