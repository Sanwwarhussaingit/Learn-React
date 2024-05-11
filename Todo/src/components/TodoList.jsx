import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
export default function TodoList() {
    
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <AddTodo sendInputValue={addTodo} />
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index }todoTextItem={todo} />
        ))}
      </ul>
    </div>
  );
}
