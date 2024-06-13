import { createStore } from "redux";

const INITIAL_VALUE = {
  counter: 100,
  privacy: false,
};

//createstore it take the reducer and add it to the store
// eslint-disable-next-line no-unused-vars
const counterReducer = (store = INITIAL_VALUE, action) => {
  if (action.type === "INCREMENT") {
    return { ...store, counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    return { ...store, counter: store.counter - 1 };
  } else if (action.type === "ADD") {
    return { ...store, counter: store.counter + Number(action.payload.num) };
  } else if (action.type === "SUBSTRACT") {
    return { ...store, counter: store.counter - Number(action.payload.num) };
  } else if (action.type === "TOGGLE_PRIVACY") {
    return { ...store, privacy: !store.privacy };
  }

  return store;
};

const counterStore = createStore(counterReducer);

export default counterStore;
