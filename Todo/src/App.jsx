import Container from "./components/Container";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
z// import { useState } from "react";
import { TodoItemContext } from "./store/TodoItemContext";
import { useReducer } from "react";

const todoItemReducer = (currentItem,action) => 
{

  if(action.type === "NEW_ITEM")
  {
    const newTodoItem = [...currentItem,{name: action.payload.todoItem}]

  }
  else if(action.type === "DELETE_ITEM"){}
  return [];
};
function App() {
  // const [item, setItem] = useState([]);
  //reducer
  const [item, dispatch] = useReducer(todoItemReducer, []);

  //add new item
  const addNewItem = (itemName) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName
      },
    };
    dispatch(newItemAction);
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
