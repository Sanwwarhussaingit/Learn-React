/* eslint-disable react/prop-types */

import style from "./AddTodo.module.css";
import { useRef,useContext } from "react";

import { TodoItemContext } from "../store/TodoItemContext";
export default function AddTodo() {


  const {addNewItem} = useContext(TodoItemContext);
  
  const inputItemElement = useRef(0);


  const addClick = function () {

    const inputItem = inputItemElement.current.value;
    if (inputItem !== "") {
      addNewItem(inputItem);
    }
    inputItemElement.current.value = "";
  };
  return (
    <div className={style.addTodo}>
      <input
        type="text"
        className={style.addTodoInput}
        placeholder="Add a new todo"
        ref={inputItemElement}
      />
      <button className={style.addTodoButton} onClick={addClick}>
        Add
      </button>
    </div>
  );
}
