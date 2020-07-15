import React, { Component } from "react";
import "./Post.css";

class Profile extends Component {
  state = {};
  render() {
    return (
      <div className="main d-flex flex-column align-items-center mt-4 border-bottom pb-3">
        <img
          src="img/hacker.png"
          alt="profile_pic"
          className="profile-avatar-image rounded-circle border border-black"
        />
        <span className="post-author-name mt-2">Prince Kushwaha</span>
        <span className="text-muted post-time">@princekushwaha</span>

        <div className="mt-2">
          <span>
            <img
              src="img/calendar.svg"
              alt=""
              className="profile-joined-icon ml-2 "
            />
            <span className="ml-2 text-muted">12 oct 2008</span>
          </span>
        </div>
      </div>
    );
  }
}

export default Profile;
