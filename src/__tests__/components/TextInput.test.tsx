import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TextInput, { useTextInput } from "../../components/TextInput";

describe("TextInput", () => {
  it("works with useTextInput and displays value", () => {
    const label = "test-text-input-label";
    const id = "text-input-test-id";
    const userInputText = "hello world";
    const TestComponent = () => {
      const input = useTextInput();
      return <TextInput id={id} label={label} {...input} />;
    };
    render(<TestComponent />);
    const component = screen.getByLabelText(label);
    userEvent.type(component, userInputText);
    expect(component).toHaveDisplayValue(userInputText);
  });
});
