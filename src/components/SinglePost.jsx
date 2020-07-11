import React, { Component } from "react";
import "./Post.css";
import "./Navigation.css";
class SinglePost extends Component {
  state = {};
  render() {
    return (
      <div className="d-flex flex-column ">
        <div className="d-flex border-bottom border-line">
          <img src="img/hacker.png" alt="user" className="post-profile-icon" />
          <div className="d-flex flex-row align-items-center">
            <a href="#" className="post-author-link">
              <focus className="post-author-name">Prince Kushwaha</focus>
            </a>
            <span className="post-time text-muted">23min</span>
          </div>
        </div>
        <div className="d-flex m-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis ab sunt
          praesentium magnam deleniti animi ipsam cumque vero corrupti iste
          provident vitae ut impedit, pariatur quo, nemo, eveniet cum
          laboriosam. Tenetur quos consequuntur eaque laborum alias esse optio
          soluta rem non, doloremque aut ducimus recusandae eligendi, quod
          totam, deserunt quis!
        </div>

        <div className="d-flex image-responsive">
          <img
            src="img/hacker.png"
            alt=""
            className="post-image flex-grow-1 m-2"
          />
        </div>
      </div>
    );
  }
}

export default SinglePost;
