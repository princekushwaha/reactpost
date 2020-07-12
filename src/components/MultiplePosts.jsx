import React, { Component } from "react";
import "./Post.css";
import SinglePost from "./SinglePost";
import HOSTNAME, { getToken } from "../api/hostname";
import Loader from "./Loader";
import axios from "axios";

class MultiplePosts extends Component {
  state = {
    posts: [],
    isLoading: true,
  };

  render() {
    return (
      <div className="main">
        <div className="d-flex justify-content-center">
          <Loader isActive={this.state.isLoading} />
        </div>

        {this.state.posts.map((value) => (
          <SinglePost post={value} key={value.image}></SinglePost>
        ))}
      </div>
    );
  }

  componentDidMount() {
    console.log("i m fetching");
    this.fetchPosts();
  }
  fetchPosts = async () => {
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
    this.setState({ isLoading: false });
  };
}

export default MultiplePosts;
