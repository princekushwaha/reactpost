import React, { Component } from "react";
import Navigation from "./Navigation";
import MultiplePosts from "./MultiplePosts";

class Main extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navigation active="profile" />
        <MultiplePosts />
      </div>
    );
  }
}

export default Main;
