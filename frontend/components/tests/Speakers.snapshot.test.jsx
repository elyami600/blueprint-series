import { render } from "@testing-library/react";
import Speakers from "../Speakers";

it("Speakers matches snapshot", () => {
  const speakers = [
    { id: 1, name: "Dr. Sarah Chen", title: "Chief AI Officer", image: "/speakers/sarah-chen.png" },
    { id: 2, name: "Marcus Rodriguez", title: "CEO", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop" },
  ];

  const { asFragment } = render(<Speakers speakers={speakers} />);
  expect(asFragment()).toMatchSnapshot();
});
