import { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const time = useRef(new Date().toLocaleTimeString())
  useEffect(()=>{
    
    setInterval(()=>{
     time.current+= new Date().toLocaleTimeString();
    },1000)
  })
 
  return (
    <>
     <h1>{time}</h1>
    </>
  );
}

export default App;
