import { createStore } from "react-redux";

import counterReducer from "../reducer";
const store = createStore(counterReducer);
export default store;
