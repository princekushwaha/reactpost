import React, { Component } from "react";
import "./Navigation.css";
import "./Form.css";

class Navigation extends Component {
  state = {
    active: "home",
  };
  constructor(props) {
    super(props);
    this.state.active = props.active;
  }
  isActive = (item) => {
    if (item === this.state.active) return "active";
  };
  item_className = "sidebar-link d-flex justify-content-center";
  render() {
    return (
      <aside className="d-flex flex-column sidebar border-right border-line">
        <ul className="d-flex flex-column pr-5 align-items-center">
          <a
            href="#"
            className="pt-5 d-flex justify-content-center"
            title="twitter"
          >
            <img
              src="img/twitter.svg"
              alt="Twitter"
              className="sidebar-brand-icon"
            />
          </a>

          <a
            href="#"
            className={this.item_className + " " + this.isActive("home")}
            title="home"
          >
            <img src="img/home.svg" alt="" className="sidebar-image" />{" "}
            <span className="sidebar-item-label">Home</span>
          </a>
          <a
            href="#"
            className={this.item_className + " " + this.isActive("profile")}
            title="profile"
          >
            <img src="img/user.svg" alt="" className="sidebar-image" />
            <span className="sidebar-item-label">Profile</span>
          </a>
          <a
            href="#"
            className={this.item_className + " " + this.isActive("my_posts")}
          >
            <img src="img/poster.svg" alt="" className="sidebar-image" />
            <span className="sidebar-item-label">My Posts</span>
          </a>
          <a
            href="#"
            className="sidebar-link sidebar-button d-flex justify-content-center"
            title="my posts"
          >
            <img src="img/write.svg" alt="" className="sidebar-image" />
            <span className="sidebar-item-label">Tweet</span>
          </a>
        </ul>
      </aside>
    );
  }
}

export default Navigation;
