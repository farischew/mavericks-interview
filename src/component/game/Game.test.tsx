import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Game from "./Game";

describe("Game Component", () => {
  it("should render buttons for choices", () => {
    render(<Game />);

    const rockButton = screen.getByText(/rock/i);
    const scissorsButton = screen.getByText(/scissors/i);
    const paperButton = screen.getByText(/paper/i);

    expect(rockButton).toBeInTheDocument();
    expect(scissorsButton).toBeInTheDocument();
    expect(paperButton).toBeInTheDocument();
  });

  it("should should display result when button is clicked", async () => {
    render(<Game />);

    const user = userEvent.setup();
    const rockButton = screen.getByText(/rock/i);

    await user.click(rockButton);

    const result = await screen.findByText(/results:/i); // had to change from getby to find by

    expect(result).toBeInTheDocument();
  });
});
