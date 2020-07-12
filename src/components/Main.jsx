import React, { Component } from "react";
import Navigation from "./Navigation";
import MultiplePosts from "./MultiplePosts";
import HOSTNAME, { check_loggedin } from "../api/hostname";
import axios from "axios";

class Main extends Component {
  state = {
    is_loggedin: false,
  };

  constructor(props) {
    super(props);
    this.state.is_loggedin = check_loggedin();
  }
  render() {
    // if (!this.state.loggedin) {
    //   window.location.href = "/login";
    //   return <div></div>;
    // }
    return (
      <div>
        <Navigation active="profile" />

        <MultiplePosts />
      </div>
    );
  }
  componentDidMount() {}
}

export default Main;
