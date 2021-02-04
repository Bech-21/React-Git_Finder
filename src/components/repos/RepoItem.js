import React from "react";
import { Link } from "react-router-dom";

const RepoItem = ({ repo }) => {
  return (
    <div className="card">
      <a href={repo.html_url}>{repo.name}</a>
    </div>
  );
};
export default RepoItem;
