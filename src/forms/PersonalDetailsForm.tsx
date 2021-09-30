import React from "react";
import Button from "../components/Button";
import Select, { Options, useSelect } from "../components/Select";
import TextInput, { useTextInput } from "../components/TextInput";

const PersonalDetailsForm = () => {
  const url = "some-url";
  const nameInput = useTextInput();
  const genderInput = useSelect();
  const handleSubmit = () => {
    const { value: name } = nameInput;
    const { value: gender } = genderInput;
    const payload = { name, gender };
    const data = new FormData();
    const json = JSON.stringify(payload);
    data.append("json", json);
    fetch(url, {
      method: "POST",
      body: data,
    });
  };
  const genderOptions: Options = [
    {
      value: "MALE",
      label: "Male",
    },
    {
      value: "FEMALE",
      label: "Female",
    },
    {
      value: "OTHER",
      label: "Other",
    },
  ];
  return (
    <div>
      <TextInput {...nameInput} id="personal-details-name-input" label="Name" />
      <Select
        {...genderInput}
        id="personal-details-gender-select"
        label="Gender"
        options={genderOptions}
      />
      <Button
        id="personal-details-submit-button"
        title="Submit"
        onClick={handleSubmit}
      />
    </div>
  );
};

export default PersonalDetailsForm;
