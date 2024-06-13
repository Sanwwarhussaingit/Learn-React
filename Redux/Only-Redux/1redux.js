const redux = require("redux");

const INITIAL_VALUE = {
  counter: 1,
};

const reducer = (store = INITIAL_VALUE, action) => {
  let newStore = store;

  if (action.type === "INCREMENT") {
    newStore = { counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    newStore = { counter: store.counter - 1 };
  } else if (action.type === "ADDITION") {
    newStore = { counter: store.counter + action.payload.number };
  }
  return newStore;
};

const store = redux.createStore(reducer);

//get current value and print
const subscriber = () => {
  const currentStore = store.getState();
  console.log(currentStore);
};
store.subscribe(subscriber);

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "ADDITION", payload: { number: 10 } });
store.dispatch({ type: "DECREMENT" });
