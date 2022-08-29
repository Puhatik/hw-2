import React from 'react';

import classNames from 'classnames';

import styles from './Input.module.scss';

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  value?: string;
  disabled?: boolean;
  className?: string;
  onChange?: (value: string) => void;
};

const Input: React.FC<InputProps> = ({
  value,
  disabled,
  className,
  onChange,
  ...args
}) => {
  const cn = classNames({
    [`${styles.className}`]: className,
    [styles.disabled]: disabled,
    [styles.input]: true,
  });

  return (
    <input
      className={cn}
      type="text"
      value={value}
      disabled={disabled}
      {...args}
    />
  );
};

export default Input;
