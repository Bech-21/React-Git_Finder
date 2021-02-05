import React, { Component, Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import axios from "axios";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";

import GithubState from "./context/github/GithubState";

const App = () => {
  const [user, setUser] = useState([]);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get("https://api.github.com/users");

  //   this.setState({ users: res.data, loading: false });
  // }

  //Get Users repo
  const getUserRepos = async (username) => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`
    );

    setRepos(res.data);
    setLoading(false);
  };

  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 2000);
  };

  return (
    <GithubState>
      <Router>
        <div>
          <Navbar />

          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search setAlert={showAlert} />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
            </Switch>
            <Route
              exact
              path="/user/:login"
              render={(props) => (
                <Fragment>
                  <User
                    {...props}
                    getUserRepos={getUserRepos}
                    repos={repos}
                    loading={loading}
                  />
                </Fragment>
              )}
            />
          </div>
        </div>
      </Router>
    </GithubState>
  );
};
export default App;
