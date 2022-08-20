import React from 'react';
import classNames from 'classnames';
import { Loader } from '../Loader/Loader';

export enum ButtonColor {
    primary = 'primary',
    secondary = 'secondary'
}

export type ButtonProps = React.PropsWithChildren<{
    loading?: boolean;
    color?: ButtonColor;
    className?: string;
    disabled?: boolean;
    children: React.ReactNode;
    onClick?: React.MouseEventHandler;
}> & React.ButtonHTMLAttributes<HTMLButtonElement>;


export const Button: React.FC<ButtonProps> = ({
    loading = false,
    color = ButtonColor.primary,
    className,
    disabled,
    children,
    onClick,
    ...args
  }) => {

    const cn = classNames(
      {
        [`${className}`]: className,
        [`button_color-${color}`]: color,
        'button_disabled': loading || disabled,
      }
    )

    return (
      <div>
        <button 
          {...args }
          color={color}
          className={cn}
          onClick = {onClick}
          disabled={disabled || loading}
        >
          {loading && <Loader/>}
          {children}
        </button>
      </div>
    ) 
};
