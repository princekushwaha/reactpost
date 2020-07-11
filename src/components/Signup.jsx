import React, { Component } from "react";
import "./Form.css";
import HOSTNAME, { check_loggedin, setToken } from "../api/hostname";
import axios from "axios";

class LoginPage extends Component {
  state = {
    loggedin: false,

    credentials: {
      username: "",
      email: "",
      first_name: "",
      password1: "",
      password2: "",
    },
    errors: {
      username: "",
      email: "",
      password1: "",
      password2: "",
    },
    global_error: "",
    submit_disabled: "True",
    isLoading: false,
  };
  constructor(props) {
    super(props);
    this.state.loggedin = check_loggedin();
  }

  isLoading = () => {
    if (this.state.isLoading) {
      return (
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      );
    } else {
      return "SIGNUP";
    }
  };
  listen_input = (event) => {
    let credentials = { ...this.state.credentials };
    credentials[event.target.id] = event.target.value;
    this.setState({ credentials: credentials });
    this.enable_or_disable_submit(event.target.id, event.target.value);
  };

  enable_or_disable_submit = (ky, value) => {
    let disable = "";
    if (value === "") {
      disable = "True";
    }
    Object.keys(this.state.credentials).map((key, value) => {
      if (key !== ky) {
        if (this.state.credentials[key] === "") {
          disable = "True";
          return;
        }
      }
    });
    this.setState({ submit_disabled: disable });
  };

  handle_signup = (event) => {
    event.preventDefault();
    console.log("Im called");
    this.setState({ isLoading: true });
    let data = {
      username: this.state.credentials.username,
      first_name: this.state.credentials.first_name,
      email: this.state.credentials.email,
      password1: this.state.credentials.password1,
      password2: this.state.credentials.password2,
    };
    let headers = {
      // "Access-Control-Allow-Origin": "*",
    };
    axios
      .post(HOSTNAME + "/account/", data, {
        headers: headers,
      })
      .then((response) => {
        let data = response.data;
        if (response.status === 201) {
          setToken(data.key);
        }
        this.setState({ isLoading: false });
      })
      .catch((errors) => {
        if (errors.response && errors.response.status === 400) {
          let error = {};
          Object.keys(errors.response.data).map((key, value) => {
            if (key === "username") error[key] = "Username Already Exists";
            else if (key === "email")
              error[key] = "Email Already Registered Or Invalid";
            else if (key === "password1")
              error[key] = "Must Contain Atleast 8 Characters";
            else if (key === "non_field_errors")
              error["password2"] = "Password Must Match";
          });
          this.setState({ errors: error });
        } else {
          window.alert(errors.message);
        }
        this.setState({ isLoading: false });
      });
  };

  render() {
    return (
      <div className="d-flex justify-content-center align-items-center full-window-size">
        <div className="" onSubmit={this.handle_login}>
          <fieldset className="d-flex flex-column">
            <div className="d-flex justify-content-center">
              <img
                src="img/twitter.svg"
                alt="Twitter"
                className="form-brand-icon"
              />
            </div>
            <div className="d-flex justify-content-center mt-3 text-danger">
              {this.state.global_error}
            </div>
            <input
              type="text"
              name="username"
              id="username"
              className="input mt-2 border-bottom"
              placeholder="Username"
              onChange={this.listen_input}
              required
            />
            <div className="d-flex justify-content-center mt-3 text-danger">
              {this.state.errors.username}
            </div>
            <input
              type="email"
              name="email"
              id="email"
              className="input mt-2 border-bottom"
              placeholder="Email"
              onChange={this.listen_input}
              required
            />
            <div className="d-flex justify-content-center mt-3 text-danger">
              {this.state.errors.email}
            </div>
            <input
              type="text"
              name="first_name"
              id="first_name"
              className="input mt-2 border-bottom"
              placeholder="First Name"
              onChange={this.listen_input}
              required
            />
            <input
              type="password"
              name="password1"
              id="password1"
              className="input mt-2 border-bottom"
              placeholder="Password"
              onChange={this.listen_input}
              required
            />
            <div className="d-flex justify-content-center mt-3 text-danger">
              {this.state.errors.password1}
            </div>
            <input
              type="password"
              name="password2"
              id="password2"
              className="input mt-2 border-bottom"
              placeholder="Confirm Password"
              onChange={this.listen_input}
              required
            />
            <div className="d-flex justify-content-center mt-3 text-danger">
              {this.state.errors.password2}
            </div>
            <button
              className="mt-3 input bg-brand-color"
              onClick={this.handle_signup}
              disabled={this.state.submit_disabled}
            >
              {this.isLoading()}
            </button>
            <div className="d-flex justify-content-center mt-3">
              <a className="brand-color" href="/login">
                Already a user? Login now
              </a>
            </div>
          </fieldset>
        </div>
      </div>
    );
  }
}

export default LoginPage;
