const URL = process.env.REACT_APP_GITHUB_URL;
const Token = process.env.REACT_APP_GITHUB_TOKEN;
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