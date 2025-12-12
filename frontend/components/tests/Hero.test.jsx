import { render, screen } from "@testing-library/react";
import Hero from "../Hero";

// Mock next/image to render a normal img tag in tests
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ priority, fill, ...props }) => {
    // remove Next.js-only props before rendering img
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...props} />;
  },
}));


describe("Hero", () => {
  const event = {
    title: "The BluePrint Series",
    date: "March 20, 2025",
    location: "New York, NY",
  };

  it("renders event title, date, and location", () => {
    render(<Hero event={event} />);

    expect(screen.getByText("The BluePrint Series")).toBeInTheDocument();
    expect(screen.getByText("March 20, 2025")).toBeInTheDocument();
    expect(screen.getByText("New York, NY")).toBeInTheDocument();
  });

  it("renders the background image with correct alt text", () => {
    render(<Hero event={event} />);

    const img = screen.getByAltText("The BluePrint Series");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/images/hero-background.png");
  });

  it("renders fallback text when event prop is missing", () => {
    render(<Hero />);

    expect(screen.getByText("The BluePrint Series")).toBeInTheDocument();
    expect(screen.getByText("Date TBA")).toBeInTheDocument();
    expect(screen.getByText("Location TBA")).toBeInTheDocument();
  });
});
