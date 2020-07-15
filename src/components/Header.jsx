import React, { Component } from "react";
import "./Post.css";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="main border-bottom border-black">
        <label className="header-title pt-2 pb-1 pl-3 ">
          {this.props.title}
        </label>
      </div>
    );
  }
}

export default Header;
