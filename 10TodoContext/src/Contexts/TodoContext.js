/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";
export const TodoContext = createContext({
  todos: [
    {
        id: 1,
        todo: "todo mas",
        completed: false, 
    },
  ],
  addTodo:(todo)=>{},
  updatedTodo:(id,todo)=>{},
  deleteTodo:(id)=>{},
  toggleComplete:(id)=>{}
 


});
export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
  return useContext(TodoContext);
};
