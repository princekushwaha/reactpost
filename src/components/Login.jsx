import React, { Component } from "react";
import "./Form.css";
import HOSTNAME, { check_loggedin, setToken } from "../api/hostname";
import axios from "axios";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

class LoginPage extends Component {
  state = {
    loggedin: false,
    username: "",
    password: "",
    username_error: "",
    password_error: "",
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
      return "Login";
    }
  };

  listen_input = (event) => {
    if (event.target.id === "username") {
      this.setState({ username: event.target.value });
      this.enable_or_disable_submit(event.target.value, this.state.password);
    } else if (event.target.id === "password") {
      this.setState({ password: event.target.value });
      this.enable_or_disable_submit(event.target.value, this.state.username);
    }
  };

  enable_or_disable_submit = (value, other) => {
    if (value === "" || other === "")
      this.setState({ submit_disabled: "True" });
    else this.setState({ submit_disabled: "" });
  };

  handle_login = (event) => {
    event.preventDefault();
    this.setState({ isLoading: true });

    let data = {
      username: this.state.username,
      password: this.state.password,
    };
    let headers = {
      // "Access-Control-Allow-Origin": "*",
    };
    axios
      .post(HOSTNAME + "/account/login/", data, {
        headers: headers,
      })
      .then((response) => {
        let data = response.data;
        setToken(data.key);
        this.setState({ isLoading: false });
      })
      .catch((error) => {
        if (error.response && error.response.status === 400)
          this.setState({ global_error: "Invalid Username Or Password" });
        else window.alert(error.message);
        this.setState({ isLoading: false });
      });
  };

  render() {
    if (this.state.loggedin) {
      window.location.href = "/";
      return;
    }
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
            <input
              type="password"
              name="password"
              id="password"
              className="input mt-2 border-bottom"
              placeholder="Password"
              onChange={this.listen_input}
              required
            />
            <button
              className="mt-3 input bg-brand-color"
              onClick={this.handle_login}
              disabled={this.state.submit_disabled}
            >
              {this.isLoading()}
            </button>
            <div className="d-flex justify-content-center mt-3">
              <a className="brand-color" href="/signup ">
                Not a User? Signup Now
              </a>
            </div>
          </fieldset>
        </div>
      </div>
    );
  }
}

export default LoginPage;
