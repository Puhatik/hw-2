import React from 'react';

type CheckBoxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  disabled?: boolean;
  checked: boolean;
  onChange: (value: boolean) => void;
};

const CheckBox: React.FC<CheckBoxProps> = ({
  disabled,
  checked,
  onChange,
  ...args
}) => {
  return (
    <input
      type="checkbox"
      onChange={() => onChange(!checked)}
      disabled={disabled}
      checked={checked}
      {...args}
    />
  );
};

export default CheckBox;
