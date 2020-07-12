import React, { Component } from "react";
import "./Post.css";
import "./Navigation.css";
class SinglePost extends Component {
  state = {};

  render() {
    return (
      <div className="d-flex flex-column  mt-2">
        <div className="d-flex pl-3">
          <img src="img/hacker.png" alt="user" className="post-profile-icon" />
          <div className="d-flex flex-row align-items-center">
            <a href="#" className="post-author-link">
              <span className="post-author-name">
                {this.props.post.author_username}
              </span>
            </a>
            <span className="post-time text-muted">
              {this.props.post.uploaded_on}
            </span>
          </div>
        </div>
        <div className="d-flex m-2">{this.props.post.body}</div>

        <div className="d-flex image-responsive">
          <img
            src={this.props.post.image}
            alt=""
            className="post-image flex-grow-1 m-2"
          />
        </div>
        <div className="d-flex flex-row justify-content-center border-bottom border-line mt-2">
          <h5>Like</h5>
        </div>
      </div>
    );
  }
}

export default SinglePost;
