import React from 'react';

type Option = {
  key: string;
  value: string;
};

type MultiDropdownProps = {
  options: Option[];
  value: Option[];
  onChange: (value: Option[]) => void;
  disabled?: boolean;
  pluralizeOptions: (value: Option[]) => string;
};

const MultiDropdown: React.FC<MultiDropdownProps> = ({
  options,
  value,
  disabled,
  pluralizeOptions,
  onChange,
  ...args
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <button disabled={disabled} onClick={() => setOpen(!open)} {...args}>
        {pluralizeOptions(value)}
      </button>
      {open && !disabled && (
        <div>
          {options.map((it) => (
            <button
              key={it.key}
              onClick={() =>
                onChange(
                  value.indexOf(it)
                    ? [...value, it]
                    : value.filter((item) => item.key !== it.key)
                )
              }
            >
              {it.value}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiDropdown;
