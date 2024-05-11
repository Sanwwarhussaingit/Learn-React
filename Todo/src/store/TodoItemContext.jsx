/* eslint-disable react-hooks/rules-of-hooks */
import { createContext } from "react";

export const TodoItemContext = createContext({
    item: [],
    addNewItem: ()=>{},
    deleteItem: ()=>{},
});
