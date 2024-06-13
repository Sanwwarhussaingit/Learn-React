import {configureStore } from "@reduxjs/toolkit"
import counterSlice from "./counter";
import privactSlice from "./privacy";

const counterStore = configureStore({reducer: {
  counter: counterSlice.reducer,
  privacy: privactSlice.reducer,
}});

export default counterStore;































// const INITIAL_VALUE = {
  //   counter: 100,
  //   privacy: false,
  // };
  //createstore it take the reducer and add it to the store
// const counterReducer = (store = INITIAL_VALUE, action) => {
//   if (action.type === "INCREMENT") {
//     return { ...store, counter: store.counter + 1 };
//   } else if (action.type === "DECREMENT") {
//     return { ...store, counter: store.counter - 1 };
//   } else if (action.type === "ADD") {
//     return { ...store, counter: store.counter + Number(action.payload.num) };
//   } else if (action.type === "SUBSTRACT") {
//     return { ...store, counter: store.counter - Number(action.payload.num) };
//   } else if (action.type === "TOGGLE_PRIVACY") {
//     return { ...store, privacy: !store.privacy };
//   }

//   return store;
// };