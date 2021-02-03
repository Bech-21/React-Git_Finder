import React, { Component } from "react";
import "./styles.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/layout/users/Users";
import axios from "axios";

class App extends Component {
  state = {
    users: [],
    loading: false
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get("https://api.github.com/users");
    console.log(res.data);
    this.setState({ users: res.data, loading: false });
  }
  render() {
    return (
      <div>
        j
        <Navbar />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}
export default App;
