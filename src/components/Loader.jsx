import React, { Component } from "react";

class Loader extends Component {
  state = {
    isActive: true,
  };
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.isActive)
      return (
        <div className="pt-5">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    else return <React.Fragment></React.Fragment>;
  }
}

export default Loader;
