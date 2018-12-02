import React, { Component } from "react";
import Input from "../components/Input";

const isValidEmail = value =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value);

const validator = values => {
  const { firstName, lastName, password, confirmPassword, email } = values;
  const errors = {};

  if (!firstName) {
    errors.firstName = "Field is required";
  }

  if (!lastName) {
    errors.lastName = "Field is required";
  }

  if (!email) {
    errors.email = "Field is required";
  } else if (!isValidEmail(email)) {
    errors.email = "Please enter valid email";
  }

  if (!password) {
    errors.password = "Field is required";
  } else if (!(password.length > 7)) {
    errors.password = "Password should contains minimum 8 characters";
  }

  if (!confirmPassword) {
    errors.confirmPassword = "Field is required";
  } else if (!(password === confirmPassword)) {
    errors.confirmPassword = "Confirm password and password must be same";
  }

  return errors;
};

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
      },
      touched: {
        firstName: false,
        lastName: false,
        email: false,
        password: false,
        confirmPassword: false
      }
    };
  }

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ values: { ...this.state.values, [name]: value } });
  };

  handleInputOnBlur = e => {
    const { name } = e.target;
    this.setState({ touched: { ...this.state.touched, [name]: true } });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const errors = validator(this.state.values);
    const keys = Object.keys(errors);
    if (keys.length > 0) {
      // By using errors keys array
      // this.setState({touched: keys.reduce((a, k) => ({ ...a, [k]: true }), {})});

      // or

      // Simple : update all touched properties to true
      this.setState({
        touched: {
          firstName: true,
          lastName: true,
          email: true,
          password: true,
          confirmPassword: true
        }
      });
    } else {
      alert(JSON.stringify(this.state.values));
    }
  };

  render() {
    const { values, touched } = this.state;
    const errors = validator(values);
    return (
      <div>
        {/* <p>{JSON.stringify(this.state)}</p> */}
        <form onSubmit={this.handleFormSubmit}>
          <Input
            id={"firstName"}
            type={"text"}
            name={"firstName"}
            value={values.firstName}
            touched={touched.firstName}
            placeholder={"Enter first name"}
            errorText={errors.firstName}
            onChange={this.handleInputChange}
            onBlur={this.handleInputOnBlur}
          />
          <Input
            id={"lastName"}
            type={"text"}
            name={"lastName"}
            value={values.lastName}
            touched={touched.lastName}
            placeholder={"Enter last name"}
            errorText={errors.lastName}
            onChange={this.handleInputChange}
            onBlur={this.handleInputOnBlur}
          />

          <Input
            id={"email"}
            type={"email"}
            name={"email"}
            value={values.email}
            touched={touched.email}
            placeholder={"Enter email"}
            errorText={errors.email}
            onChange={this.handleInputChange}
            onBlur={this.handleInputOnBlur}
          />
          <Input
            id={"password"}
            type={"password"}
            name={"password"}
            value={values.password}
            touched={touched.password}
            placeholder={"Enter password"}
            errorText={errors.password}
            onChange={this.handleInputChange}
            onBlur={this.handleInputOnBlur}
          />
          <Input
            id={"confirmPassword"}
            type={"password"}
            name={"confirmPassword"}
            value={values.confirmPassword}
            touched={touched.confirmPassword}
            placeholder={"Enter confirm password"}
            errorText={errors.confirmPassword}
            onChange={this.handleInputChange}
            onBlur={this.handleInputOnBlur}
          />
          <div>
            <button type="submit"> Signup </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;
