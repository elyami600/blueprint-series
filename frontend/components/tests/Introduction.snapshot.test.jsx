import { render } from "@testing-library/react";
import Introduction from "../Introduction";

it("Introduction matches snapshot", () => {
  const { asFragment } = render(
    <Introduction content="Intro text here" />
  );
  expect(asFragment()).toMatchSnapshot();
});
