import Container from "./components/Container";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import { useState } from "react";
import { TodoItemContext } from "./store/TodoItemContext";

function App() {
  const [item, setItem] = useState([]);

  const addNewItem = (todoItem) => {
    setItem([...item, todoItem]);
  };
  const deleteItem = (itemName) => {
    console.log(itemName);
    const newItems = item.filter((itm) => itm !== itemName);
    setItem(newItems);
  };
  // const defaultItem= [data];
  return (
    <TodoItemContext.Provider
      value={{
        item,
        addNewItem,
        deleteItem,
      }}
    >
      <Container>
        <h1> Today Todo </h1>
        <AddTodo />
        {item.map((todo, index) => (
          <TodoItem key={index} todo={todo} />
        ))}
      </Container>
    </TodoItemContext.Provider>
  );
}
export default App;
