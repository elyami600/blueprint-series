import { render, screen } from "@testing-library/react";
import Agenda from "../Agenda";

describe("Agenda", () => {
  it("renders a list of agenda items with time, title, and description", () => {
    const items = [
      {
        time: "10:00 AM",
        title: "Registration & Morning Coffee",
        description: "Welcome and check-in",
      },
      {
        time: "10:30 AM",
        title: "Keynote: Future of Marketing",
        description: "Digital trends for 2025",
      },
    ];

    render(<Agenda items={items} />);

    // time
    expect(screen.getByText("10:00 AM")).toBeInTheDocument();
    expect(screen.getByText("10:30 AM")).toBeInTheDocument();

    // titles
    expect(screen.getByText("Registration & Morning Coffee")).toBeInTheDocument();
    expect(screen.getByText("Keynote: Future of Marketing")).toBeInTheDocument();

    // descriptions
    expect(screen.getByText("Welcome and check-in")).toBeInTheDocument();
    expect(screen.getByText("Digital trends for 2025")).toBeInTheDocument();
  });
});
