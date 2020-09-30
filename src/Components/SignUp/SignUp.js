import React from "react";
import { NavLink } from "react-router-dom";
import "./SignUp.css";

const emailPattern = new RegExp(
  /^([a-zA-Z0-9]{2,})+(@[a-zA-Z0-9]{2,})+\.([A-Za-z]{2,})+$/
);
const passwordPattern = new RegExp(/(?=.*[A-Z])(?=.*[a-z])[A-Za-z0-9]{8,}$/);
const namesPattern = new RegExp(/^[A-Z][a-z]{2,}$/);

class SignUp extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    subscribe: false,
  };
  saveInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  rememberMeToggle = (e) => {
    this.setState({ [e.target.name]: e.target.checked });
  };
  onSubmit = () => {
    if (
      !namesPattern.test(this.state.firstName) ||
      !namesPattern.test(this.state.lastName)
    ) {
      
      alert("First name and Last name should be longer than 3 symbols!");
    } else if (!emailPattern.test(this.state.email)) {
      
      alert("Enter valid email!");
    } else if (!passwordPattern.test(this.state.password)) {
      alert(
        "Password should have at least 8 symbols, 1 uppercase and 1 lowercase letters!"
      );
    } else {
      console.log(this.state);
      alert("Check console");
    }
  };
  render() {
    return (
      <div className="main-wrapper__signUp">
        <div className="lock-icon">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/565/565547.svg"
            alt="lock"
          />
          <div className="form-name">Sign up</div>
        </div>
        <div className="input-fields">
          <div className="name">
            <input
              name="firstName"
              className="input-text"
              type="text"
              placeholder="First Name*"
              onChange={this.saveInput}
            ></input>
            <input
              name="lastName"
              className="input-text"
              type="text"
              placeholder="Last Name*"
              onChange={this.saveInput}
            ></input>
          </div>
          <input
            name="email"
            className="input-text"
            type="email"
            placeholder="Email Address*"
            onChange={this.saveInput}
          ></input>
          <input
            name="password"
            className="input-text"
            type="pasword"
            placeholder="Password*"
            onChange={this.saveInput}
          ></input>
          <label>
            <input
              name="subscribe"
              type="checkbox"
              onChange={this.rememberMeToggle}
            ></input>
            I want to receive inspiration, marketing promotions and updates via
            email.
          </label>
        </div>
        <button type="submit" onClick={this.onSubmit}>
          SIGN UP
        </button>
        <div className="link-to-signIn">
          <NavLink to="/signIn">Already have an account? Sign In</NavLink>
        </div>
        <div className="footer">Copyright © Your Website 2020</div>
      </div>
    );
  }
}

export default SignUp;
