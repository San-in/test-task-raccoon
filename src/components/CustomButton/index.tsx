import React from 'react';
import './styles.scss';

interface Props {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  priority?: 'primary' | 'secondary';
  type?: 'button' | 'reset' | 'submit';
}

const CustomButton: React.FC<Props> = ({
  label,
  priority = 'primary',
  type = 'button',
  disabled,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`button button__${priority}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default CustomButton;
