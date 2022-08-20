import React from 'react';
import classNames from 'classnames';

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  value: string;
  disabled?: boolean;
  className?: string;
  onChange: (value: string) => void;
};

export const Input: React.FC<InputProps> = ({ 
    value,
    disabled,
    className,
    onChange,
    ...args
  }) => {
    const cn = classNames(
      {
        [`${className}`]: className,
        'input_disabled': disabled
      }
    )

    return (
      <input 
        className ={cn}
        type = 'text'
        value={value}
        disabled ={disabled}
        onChange={(e) => onChange(e.target.value)}
        {...args}/>
    )
};