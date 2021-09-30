import React, { ChangeEvent, useState } from "react";

type Option = {
  value: string;
  label: string;
};

export type Options = Option[];

type Props = {
  id: string;
  label: string;
  options: Options;
  onSelect: (value: string | undefined) => void;
  value: string | undefined;
};

export const useSelect = () => {
  const [value, setValue] = useState<string | undefined>();
  const onSelect = (newValue: string | undefined) => {
    setValue(newValue);
  };
  return {
    value,
    onSelect,
  };
};

const Select = ({ id, label, options, onSelect, value }: Props) => {
  const handleOnSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.currentTarget;
    onSelect(value);
  };
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select id={id} onChange={handleOnSelect} value={value}>
        {options.map((e: Option, index: number) => {
          return (
            <option key={`option-${index}-for-select-${id}`} value={e.value}>
              {e.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
