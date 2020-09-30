import React from "react";
import { NavLink } from "react-router-dom";
import "./SignIn.css";

const emailPattern = new RegExp(
  /^([a-zA-Z0-9]{2,})+(@[a-zA-Z0-9]{2,})+\.([A-Za-z]{2,})+$/
);
const passwordPattern = new RegExp(/(?=.*[A-Z])(?=.*[a-z])[A-Za-z0-9]{8,}$/);
const namesPattern = new RegExp(/^[A-Z][a-z]{2,}$/);

class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
    rememberMe: false,
  };
  saveInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  rememberMeToggle = (e) => {
    this.setState({ [e.target.name]: e.target.checked });
  };
  onSubmit = () => {
    if (!emailPattern.test(this.state.email)) {
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
      <div className="main-wrapper">
        <div className="lock-icon">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/565/565547.svg"
            alt="lock"
          />
          <div className="form-name">Sign in</div>
        </div>
        <div className="input-fields">
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
              name="rememberMe"
              type="checkbox"
              onChange={this.rememberMeToggle}
            ></input>
            Remember me
          </label>
        </div>
        <button type="submit" onClick={this.onSubmit}>
          SIGN IN
        </button>
        <div className="links">
          <NavLink to="#">Forgot password?</NavLink>
          <NavLink to="/signUp">Don`t have an account? Sign Up</NavLink>
        </div>
        <div className="footer">Copyright © Your Website 2020</div>
      </div>
    );
  }
}

export default SignIn;
