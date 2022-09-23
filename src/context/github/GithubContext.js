import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
const GithubContext = createContext();
const URL = process.env.REACT_APP_GITHUB_URL;
const Token = process.env.REACT_APP_GITHUB_TOKEN;
export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user:{},
    repos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);
  const searchUsers = async (text) => {
    dispatch({ type: "SET_LOADING", payload: true });
    const params = new URLSearchParams({
      q: text,
    });
    const response = await fetch(`${URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${Token}`,
      },
    });
    const { items } = await response.json();
    dispatch({ type: "GET_USERS", payload: items });
  };
  const clearUsers = () => {
    dispatch({ type: "CLEAR_USERS" });
  };
  const getUser = async (login) => {
    dispatch({ type: "SET_LOADING", payload: true });
    const response = await fetch(`${URL}/users/${login}`, {
      headers: {
        Authorization: `token ${Token}`,
      },
    });
    const data = await response.json();
    dispatch({ type: "GET_USER", payload: data });
  };
  const getRepos = async (login) => {
    dispatch({ type: "SET_LOADING", payload: true });
    const params = new URLSearchParams({
      sort: "created",
      per_page: 10,
    });
    const response = await fetch(`${URL}/users/${login}/repos?${params}`, {
      headers: {
        Authorization: `token ${Token}`,
      },
    });
    const data = await response.json();
    dispatch({ type: "GET_REPOS", payload: data });
  };
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;