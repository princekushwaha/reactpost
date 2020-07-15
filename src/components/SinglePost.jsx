import React, { Component } from "react";
import "./Post.css";
import "./Navigation.css";
class SinglePost extends Component {
  state = {};

  get_time = () => {
    let uploaded_on = this.props.post.uploaded_on;
    let date = new Date(uploaded_on);
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${date.getDate()}-${months[date.getMonth()]}-${date.getFullYear()}`;
  };
  handle_likes = (event) => {
    console.log(event);
  };
  render() {
    return (
      <div className="d-flex flex-column  mt-2">
        <div className="d-flex pl-2">
          <img src="img/hacker.png" alt="user" className="post-profile-icon" />
          <div className="d-flex flex-row align-items-center">
            <a
              href={this.props.post.author_username}
              className="post-author-link"
            >
              <span className="post-author-name">
                {this.props.post.author_username}
              </span>
            </a>
            <span className="post-time text-muted">{this.get_time()}</span>
          </div>
        </div>
        <div className="d-flex m-2">{this.props.post.body}</div>
        {this.props.post.image && (
          <div className="d-flex image-responsive">
            <img
              src={this.props.post.image}
              alt=""
              className="post-image flex-grow-1 m-2"
            />
          </div>
        )}

        <div className="d-flex flex-row justify-content-center border-bottom border-line mt-2">
          <button onClick={this.handle_likes} onMouseEnter={this.handle_likes}>
            <img src="img/heart.svg" alt="like" className="like-btn" />
          </button>
        </div>
      </div>
    );
  }
}

export default SinglePost;
