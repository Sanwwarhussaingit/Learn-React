
import "./App.css";
import { Provider } from "react-redux";
import store from "./ReduxContainer/store";
import BookContainer from './ReduxContainer/BookContainer'

function App() {
  return (
    <Provider store={store}>
      <BookContainer />
    </Provider>
  );
}
export default App;
