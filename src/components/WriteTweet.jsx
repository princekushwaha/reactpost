import React, { Component } from "react";
import "./Post.css";
import "./Form.css";
import HOSTNAME, { getToken } from "../api/hostname";
import axios from "axios";
class WriteTweet extends Component {
  state = {
    btn_disabled: "True",
    body: "",
    image: null,
  };
  listen_change = (event) => {
    if (event.target.name === "body") {
      this.setState({ body: event.target.value });
      if (event.target.value.length > 0) {
        this.setState({ btn_disabled: "" });
      } else if (this.state.btn_disabled === "") {
        this.setState({ btn_disabled: "True" });
      }
    } else if (event.target.name === "image") {
      this.setState({ image: event.target.files[0] });
    }
  };

  handle_upload = async (event) => {
    let url = HOSTNAME + "/post/";
    let header = {
      Authorization: "Token " + getToken(),
    };
    let data = new FormData();
    data.append("body", this.state.body);
    data.append("image", this.state.image);
    await axios
      .post(url, data, {
        headers: header,
      })
      .then((response) => {
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  render() {
    return (
      <div className="d-flex main">
        <div
          action=""
          className="d-flex flex-column m-3 flex-grows-1 tweet-form"
        >
          <textarea
            type="text"
            name="body"
            className="tweet-text-area pt-3 pl-3"
            placeholder="What's Happening"
            onChange={this.listen_change}
          />
          <input
            type="file"
            name="image"
            id="image"
            className="tweet-image-upload mt-5"
            accept="image/*"
            onChange={this.listen_change}
          />

          <button
            onClick={this.handle_upload}
            className="mt-5 bg-brand-color p-2 rounded-pill"
            disabled={this.state.btn_disabled}
            onClick={this.handle_upload}
          >
            Tweet
          </button>
        </div>
      </div>
    );
  }
}

export default WriteTweet;
