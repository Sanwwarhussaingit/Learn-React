/* eslint-disable react/prop-types */
import { BiSolidBox } from "react-icons/bi";
import style from "./TodoItem.module.css";
import { useContext } from "react";
import { TodoItemContext } from "../store/TodoItemContext";



export default function TodoItem({todo}) {
  const {deleteItem} = useContext(TodoItemContext);

  return (
    <div className={style.Item}>
      <li>{todo}</li>
      <button onClick={() => deleteItem(todo)}>
        <BiSolidBox />
      </button>
    </div>
  );
}
