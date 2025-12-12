import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FAQItem from "../FAQItem";

describe("FAQItem", () => {
  it("renders the question", () => {
    render(<FAQItem question="Is it free?" answer="Yes." />);
    expect(screen.getByText("Is it free?")).toBeInTheDocument();
  });

  it("toggles the answer when clicked", async () => {
    const user = userEvent.setup();
    render(<FAQItem question="Is it free?" answer="Yes." />);

    // answer hidden initially
    expect(screen.queryByText("Yes.")).not.toBeInTheDocument();

    // open
    await user.click(screen.getByRole("button"));
    expect(screen.getByText("Yes.")).toBeInTheDocument();

    // close
    await user.click(screen.getByRole("button"));
    expect(screen.queryByText("Yes.")).not.toBeInTheDocument();
  });
});
