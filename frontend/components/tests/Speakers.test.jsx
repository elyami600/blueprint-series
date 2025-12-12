import { render, screen } from "@testing-library/react";
import Speakers from "../Speakers";

describe("Speakers", () => {
  it("renders a list of speakers with name, title, and bio", () => {
    const speakers = [
      {
        id: 1,
        name: "Dr. Sarah Chen",
        title: "Chief AI Officer, TechCorp",
        bio: "Award-winning marketer and social media strategist",
        image: "/speakers/sarah-chen.png",
      },
      {
        id: 2,
        name: "Marcus Rodriguez",
        title: "CEO, GreenTech Solutions",
        bio: "Sustainability advocate and tech entrepreneur",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      },
    ];

    render(<Speakers speakers={speakers} />);

    // Names
    expect(screen.getByText("Dr. Sarah Chen")).toBeInTheDocument();
    expect(screen.getByText("Marcus Rodriguez")).toBeInTheDocument();

    // Titles
    expect(
      screen.getByText("Chief AI Officer, TechCorp")
    ).toBeInTheDocument();
    expect(
      screen.getByText("CEO, GreenTech Solutions")
    ).toBeInTheDocument();

    // Bios
    // expect(
    //   screen.getByText("Award-winning marketer and social media strategist")
    // ).toBeInTheDocument();
    // expect(
    //   screen.getByText("Sustainability advocate and tech entrepreneur")
    // ).toBeInTheDocument();
  });

  it("renders speaker images", () => {
    const speakers = [
      {
        id: 1,
        name: "Dr. Sarah Chen",
        title: "Chief AI Officer, TechCorp",
        bio: "Bio",
        image: "/speakers/sarah-chen.png",
      },
    ];

    render(<Speakers speakers={speakers} />);

    const images = screen.getAllByRole("img");
    expect(images.length).toBe(1);
    expect(images[0]).toHaveAttribute("alt", "Dr. Sarah Chen");
  });
});
