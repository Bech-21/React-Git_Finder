import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  GET_REPOS,
  GET_USER,
  CLEAR_USERS,
  SET_LOADING
} from "../types";

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);
  //Search Users

  const searchUsers = async (text) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    });
  };

  //Get User
  //Get a single git user
  const getUser = async (username) => {
    setLoading();

    const res = await axios.get(`https://api.github.com/users/${username}`);

    dispatch({
      type: GET_USER,
      payload: res.data
    });
  };

  //Get Repos

  //Clear Users
  // clear users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  //Set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
