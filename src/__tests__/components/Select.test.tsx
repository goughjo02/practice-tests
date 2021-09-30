import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Select, { Options, useSelect } from "../../components/Select";

describe("Select", () => {
  it("only allows one option to be sleected", () => {
    const labelOne = "label-one";
    const labelTwo = "label-two";
    const labelThree = "label-three";
    const valueOne = "value-one";
    const valueTwo = "value-two";
    const valueThree = "value-three";
    const options: Options = [
      {
        value: valueOne,
        label: labelOne,
      },
      {
        value: valueTwo,
        label: labelTwo,
      },
      {
        value: valueThree,
        label: labelThree,
      },
    ];
    const id = "test-select-id";
    const label = "test-select-label";
    const TestComponent = () => {
      const select = useSelect();
      return <Select id={id} label={label} options={options} {...select} />;
    };
    render(<TestComponent />);
    const component = screen.getByRole("combobox");
    const testSelectValue = (value: string) => {
      userEvent.selectOptions(component, [value]);
      expect(
        (screen.getByRole("option", { name: labelOne }) as HTMLOptionElement)
          .selected
      ).toBe(valueOne === value);
      expect(
        (screen.getByRole("option", { name: labelTwo }) as HTMLOptionElement)
          .selected
      ).toBe(valueTwo === value);
      expect(
        (screen.getByRole("option", { name: labelThree }) as HTMLOptionElement)
          .selected
      ).toBe(valueThree === value);
    };
    testSelectValue(valueOne);
    testSelectValue(valueTwo);
    testSelectValue(valueThree);
  });
});
