import React from "react";

type Option = {
  value: string;
  label: string;
};

export type Options = Option[];

type Props = {
  id: string;
  label: string;
  options: Options;
};

const Select = ({ id, label, options }: Props) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select id={id}>
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
