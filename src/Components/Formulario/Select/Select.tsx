import React from 'react';

type SelectProps = React.ComponentProps<'select'> & {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  options: Array<string>;
};

const Select = ({
  value,
  setValue,
  options,
  children,
  ...props
}: SelectProps) => {
  return (
    <label>
      {children}
      <select
        value={value}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      >
        <option disabled value="">
          Selecione
        </option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </label>
  );
};

export default Select;
