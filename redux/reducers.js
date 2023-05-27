// redux/reducers.js
import { createSlice } from "@reduxjs/toolkit";

const searchHistorySlice = createSlice({
  name: "searchHistory",
  initialState: [],
  reducers: {
    addToSearchHistory: (state, action) => {
      state.push({ id: Date.now(), query: action.payload });
    },
  },
});

export const { addToSearchHistory } = searchHistorySlice.actions;

const rootReducer = {
  searchHistory: searchHistorySlice.reducer,
};

export default rootReducer;
