import React from "react";
import { NavLink } from "react-router-dom";
import "./SignUp.css";

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
    console.log(this.state);
    alert("Check console");
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
