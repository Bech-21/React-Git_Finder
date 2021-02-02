import React, { Component } from "react";
import "./styles.css";
import Navbar from "./components/layout/Navbar";
import UserItem from "./components/layout/users/UserItem";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <UserItem />
      </div>
    );
  }
}
export default App;
