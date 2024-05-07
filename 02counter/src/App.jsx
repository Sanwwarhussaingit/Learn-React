import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(1);
  // let counter =10;

  function addValue() {
    setCounter(counter + 1);
    // console.log(counter)
  }
  const btnRef = useRef();

  useEffect(function () {
    btnRef.current.style.color = "cyan";
    btnRef.current.style.backgroundColor = "red";
  });

  return (
    <>
      <button ref={btnRef} onClick={addValue}>
        click me {counter}
      </button>
      <button ref={btnRef}>Delete btn</button>
    </>
  );
}
export default App;
