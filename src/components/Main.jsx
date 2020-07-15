import React, { Component } from "react";
import Navigation from "./Navigation";
import MultiplePosts from "./MultiplePosts";
import WriteTweet from "./WriteTweet";
import Profile from "./Profile";
import Header from "./Header";
import HOSTNAME, { check_loggedin } from "../api/hostname";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Main extends Component {
  state = {
    is_loggedin: false,
  };

  constructor(props) {
    super(props);
    this.state.is_loggedin = check_loggedin();
  }
  render() {
    if (this.state.is_loggedin == false) {
      window.location.href = "/login";
      return <React.Fragment></React.Fragment>;
    }
    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <Navigation active="home" />
            <Header title="Home" />

            <MultiplePosts />
          </Route>
          <Route path="/profile" exact>
            <Navigation active="profile" />
            <Header title="Profile" />
            <Profile />
          </Route>
          <Route path="/tweet" exact>
            <Navigation active="" />
            <Header title="Tweet" />
            <WriteTweet />
          </Route>
        </Switch>
      </Router>
    );
  }
  componentDidMount() {}
}

export default Main;
