import React, { useState } from "react";
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
  it("updates the displayed txt when initalText value changes", () => {
    const label = "test-text-input-label";
    const id = "text-input-test-id";
    const userInputText = "hello world";
    const newValue = "new value";
    const buttonLabel ="Click Me"
    const TestComponent = () => {
      const [initialValue, setInitialValue] = useState<string>("");
      const textInput = useTextInput(initialValue);
      return (
        <div>
          <TextInput id={id} label={label} {...textInput} />
          <button onClick={() => setInitialValue(newValue)}>{buttonLabel}</button>
        </div>
      );
    };
    render(<TestComponent />);
    const component = screen.getByLabelText(label);
    userEvent.type(component, userInputText);
    expect(component).toHaveDisplayValue(userInputText);
    const changeButton = screen.getByText(buttonLabel)
    userEvent.click(changeButton)
    expect(component).toHaveDisplayValue(newValue);
  });
});
