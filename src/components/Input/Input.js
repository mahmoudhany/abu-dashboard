import React from 'react';
import './Input.scss';

const Input = ({
  value,
  name,
  placeholder,
  error,
  inputType,
  type,
  label,
  onChange,
}) => {
  const hasError = error !== null;
  let formGroup = null

  switch (inputType) {
    case 'text':
      formGroup = (<div className={`form-group ${hasError && 'hasError'} my-2`}>
        <label className='label'>
          {
            hasError ? error : label
          }
        </label>
        <input
          className="form-control"
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={(e) =>
            onChange(e.target.value)}
        />
      </div>)
      break;
    default:
      break;
  }
  return (formGroup)
};

export default Input;
