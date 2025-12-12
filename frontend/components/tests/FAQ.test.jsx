import { render, screen } from "@testing-library/react";
import FAQ from "../FAQ";

describe("FAQ", () => {
  it("renders a list of questions", () => {
    const questions = [
      { id: 1, question: "Is it free?", answer: "Yes." },
      { id: 2, question: "Will it be recorded?", answer: "Maybe." },
    ];

    render(<FAQ questions={questions} />);

    expect(screen.getByText("Is it free?")).toBeInTheDocument();
    expect(screen.getByText("Will it be recorded?")).toBeInTheDocument();
  });
});
