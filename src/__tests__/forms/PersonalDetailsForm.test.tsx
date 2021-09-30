import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PersonalDetailsForm from "../../forms/PersonalDetailsForm";

describe("PersonalDetailsForm", () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({}),
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("calls fetch with form data", () => {
    render(<PersonalDetailsForm />);
    const testname = "Joe Blogs";
    const testGender = "MALE";
    const nameInput = screen.getByLabelText("Name");
    const genderSelect = screen.getByLabelText("Gender");
    const submitButton = screen.getByText("Submit");
    userEvent.type(nameInput, testname);
    userEvent.selectOptions(genderSelect, [testGender]);
    userEvent.click(submitButton);
    expect(global.fetch).toBeCalledWith("some-url", expect.objectContaining({ method: 'POST', body: expect.any(FormData) }));
  });
});
