import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  render() {
    const name = "John";
    return (
      <div className="App">
        <h1>Hello {name} </h1>
      </div>
    );
  }
}
export default App;
