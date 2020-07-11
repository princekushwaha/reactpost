import React, { Component } from "react";
import "./Post.css";
import SinglePost from "./SinglePost";

class MultiplePosts extends Component {
  state = {};
  render() {
    return (
      <div className="main">
        <SinglePost />
        <SinglePost />

        <SinglePost />
      </div>
    );
  }
}

export default MultiplePosts;
