import React from "react";
import "./Input.css";

const Input = props => {
  const {
    id,
    type,
    name,
    value,
    placeholder,
    touched,
    errorText,
    onChange,
    onBlur
  } = props;
  return (
    <div className="form-group">
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
      <div className="error">
        {touched && errorText && <span>{errorText}</span>}
      </div>
    </div>
  );
};

export default Input;
