import React from 'react';

interface InputFieldProps {
  variant?: 'filled' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  placeholder?: string;
  error?: boolean;
  disabled?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  variant = 'outlined',
  size = 'md',
  label,
  placeholder,
  error = false,
  disabled = false,
}) => {
  return (
    <div className={`input-field ${variant} ${size} ${error ? 'error' : ''}`}>
      {label && <label>{label}</label>}
      <input
        type="text"
        placeholder={placeholder}
        disabled={disabled}
      />
      {error && <span className="error-message">Error message</span>}
    </div>
  );
};