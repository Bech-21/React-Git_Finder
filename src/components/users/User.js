import React, { Component } from "react";

export class User extends Component {
  state = {
    text: ""
  };

  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      htm_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    } = this.props.user;
    const { loading } = this.props;
    return <div>{name}</div>;
  }
}
export default User;
