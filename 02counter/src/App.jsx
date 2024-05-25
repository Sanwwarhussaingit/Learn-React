import {useReducer } from "react";
import "./App.css";

const initialstate = 0;
const method = (state,action)=>{    

      switch(action){
        case "Increment":
          return state+1;
        case "Decrement":
          return state-1;
        default:
          return state;
      }
}



export default function App() {

  const [count,dispatch]= useReducer(method,initialstate);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=>dispatch("Increment")}>Click+1</button>
    </>
  );
}
