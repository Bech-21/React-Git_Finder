import React, { Component } from "react";

class Navbar extends Component {
  static defaultProps = {
    title: "Git Hub Finder",
    icon: "fab fa-github"
  };
  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className={this.props.icon} />
          {this.props.title}{" "}
        </h1>
      </nav>
    );
  }
}
export default Navbar;
