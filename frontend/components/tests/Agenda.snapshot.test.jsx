import { render } from "@testing-library/react";
import Agenda from "../Agenda";

it("Agenda matches snapshot", () => {
  const items = [
    { time: "10:00 AM", title: "Coffee", description: "Welcome" },
    { time: "10:30 AM", title: "Keynote", description: "Trends" },
  ];

  const { asFragment } = render(<Agenda items={items} />);
  expect(asFragment()).toMatchSnapshot();
});
