import { createStore } from "redux";
import BookReducer from "./BookReducer";

// Create the Redux store with the BookReducer
const store = createStore(BookReducer);

export default store;