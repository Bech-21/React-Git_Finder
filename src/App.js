import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";
import Navbar from "./components/layout/Navbar";

import User from "./components/users/User";

import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";

import Home from "./components/pages/Home";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

const App = () => {
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get("https://api.github.com/users");

  //   this.setState({ users: res.data, loading: false });
  // }
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div>
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
              </Switch>
              <Route exact path="/user/:login" component={User} />
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};
export default App;
