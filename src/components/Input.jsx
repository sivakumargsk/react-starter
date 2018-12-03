import React from "react";
import "./Input.css";

const Input = props => {
  return (
    <div className="form-group">
      <input
        id={props.id}
        type={props.type}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      {
        touched && errorText && (
          <div>
            <span className="error" >{errorText}</span>
          </div>
        )
      }
    </div>
  );
};

export default Input;
