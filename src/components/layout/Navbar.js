import React, { Component } from "react";

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} />
        {title}
      </h1>
    </nav>
  );
};
Navbar.defaultProps = {
  title: "Git Hub Finder",
  icon: "fab fa-github"
};

export default Navbar;
