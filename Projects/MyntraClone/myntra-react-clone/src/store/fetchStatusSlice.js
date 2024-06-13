/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false, //false: PENDING and true: COMPLETED/DONE
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
    },
    markFetchingStarted: (state) => {
      state.currentlyFetching = true;
    },
    markFetchingFnished: (state) => {
      state.currentlyFetching = false;
    },
  },
});
export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;
