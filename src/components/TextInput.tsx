import React, { ChangeEvent, useEffect, useState } from "react";

export const useTextInput = (initialValue = "") => {
  const [value, setValue] = useState<string>(initialValue);
  const onChangeText = (newValue: string) => {
    setValue(newValue);
  };
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);
  return {
    value,
    onChangeText,
  };
};

type Props = {
  value: string;
  onChangeText: (value: string) => void;
  id: string;
  label: string;
};

const TextInput = ({ id, onChangeText, value, label }: Props) => {
  const handleOnCHange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onChangeText(value);
  };
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        value={value}
        id={id}
        onChange={handleOnCHange}
      ></input>
    </div>
  );
};

export default TextInput;
