import React, { Component } from "react";
import RepoItem from "./RepoItem";
import Spinner from "../layout/Spinner";

const Repos = ({ repos, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    );
  }
};
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};
export default Repos;
