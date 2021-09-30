import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../../components/Button";

describe("Button", () => {
  it("Fires callback when clicked", () => {
    const id = "test-button-id";
    const title = "test-button";
    const mockFn = jest.fn();
    render(<Button id={id} title={title} onClick={mockFn} />);
    userEvent.click(screen.getByText(title));
    expect(mockFn).toBeCalled();
  });
});
