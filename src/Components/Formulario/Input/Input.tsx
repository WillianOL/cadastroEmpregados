import React from 'react';

type InputProps = React.ComponentProps<'input'> & {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const Input = ({ children, value, setValue, type, ...props}: InputProps) => {
  return (
    <label>
      {children}
      <input
        type={type || 'text'}
        value={value}
        onChange={({target}) => setValue(target.value)}
        {...props}
      />
    </label>
  );
};

export default Input;
