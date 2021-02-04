import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import axios from "axios";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";

class App extends Component {
  state = {
    users: [],
    repos: [],
    user: {},
    loading: false,
    alert: null
  };
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get("https://api.github.com/users");

  //   this.setState({ users: res.data, loading: false });
  // }

  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );

    this.setState({ users: res.data.items, loading: false });
  };

  //Get a single git user
  getUser = async (username) => {
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/users/${username}`);

    this.setState({ user: res.data, loading: false });
  };
  //Get Users repo
  getUserRepos = async (username) => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`
    );

    this.setState({ repos: res.data, loading: false });
  };

  // clear users
  clearUsers = () => this.setState({ users: [], loading: false });

  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });
    setTimeout(() => this.setState({ alert: null }), 2000);
  };

  render() {
    const { users, user, loading, repos } = this.state;
    return (
      <Router>
        <div>
          <Navbar />

          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users loading={loading} users={users} />
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
                    user={user}
                    getUser={this.getUser}
                    getUserRepos={this.getUserRepos}
                    repos={repos}
                    loading={loading}
                  />
                </Fragment>
              )}
            />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
