import React, { Component } from "react";
import "./Post.css";
import SinglePost from "./SinglePost";
import HOSTNAME, { getToken } from "../api/hostname";
import axios from "axios";

class MultiplePosts extends Component {
  state = {
    posts: [],
    isLoading: true,
  };

  render() {
    return <div className="main">{this.state.posts.map((value) => {})}</div>;
  }

  componentDidMount() {
    console.log("i m fetching");
    // this.fetchPosts();
    this.setState({ isLoading: false });
    lkjflkf;
  }
  fetchPosts = async () => {
    this.setState({ isLoading: false });
    let fetch_url = HOSTNAME + "/post/";
    let header = {
      Authorization: "Token " + getToken(),
    };
    await axios
      .get(fetch_url, {
        headers: header,
      })
      .then((response) => {
        console.log(response.data);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        window.alert(error.message);
      });
  };
}

export default MultiplePosts;
