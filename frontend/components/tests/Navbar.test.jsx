import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NavBar from "../Navbar";

describe("NavBar", () => {
  it("toggles mobile menu", async () => {
    const user = userEvent.setup();
    render(<NavBar />);

    // open
    await user.click(screen.getByLabelText(/open navigation menu/i));
    expect(screen.getByRole("button", { name: /get tickets \(mobile\)/i })).toBeInTheDocument();

    // close
    await user.click(screen.getByLabelText(/close navigation menu/i));
    expect(screen.queryByRole("button", { name: /get tickets \(mobile\)/i })).not.toBeInTheDocument();
  });
});
