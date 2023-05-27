// redux/actions.js

export const addToSearchHistory = (query) => {
  return {
    type: "searchHistory/addToSearchHistory",
    payload: query,
  };
};
