import { render, screen } from "@testing-library/react";
import EventDetails from "../EventDetails";

describe("EventDetails", () => {
  const previousEvents = [
    {
      id: 1,
      title: "Tech Innovation Summit 2024",
      image: "https://example.com/main.jpg",
    },
    {
      id: 2,
      title: "AI & Future Work Conference",
      image: "https://example.com/left.jpg",
    },
    {
      id: 3,
      title: "Digital Transformation Expo",
      image: "https://example.com/right.jpg",
    },
  ];

 it("renders the tall main past-events image using the first previous event", () => {
  render(<EventDetails details="hello" previousEvents={previousEvents} />);

  // Two images share the same alt (tall + center). Tall one comes first in the DOM.
  const [tallImg] = screen.getAllByAltText(previousEvents[0].title);

  expect(tallImg).toBeInTheDocument();
  expect(tallImg).toHaveAttribute("src", previousEvents[0].image);
});

it("renders the collage images using previousEvents[1], previousEvents[0], previousEvents[2]", () => {
  render(<EventDetails details="hello" previousEvents={previousEvents} />);

  // left collage image uses previousEvents[1]
  const left = screen.getByAltText(previousEvents[1].title);
  expect(left).toHaveAttribute("src", previousEvents[1].image);

  // main title appears twice (tall + center). Center is the SECOND match.
  const [, center] = screen.getAllByAltText(previousEvents[0].title);
  expect(center).toHaveAttribute("src", previousEvents[0].image);

  // right collage image uses previousEvents[2]
  const right = screen.getByAltText(previousEvents[2].title);
  expect(right).toHaveAttribute("src", previousEvents[2].image);
});
});