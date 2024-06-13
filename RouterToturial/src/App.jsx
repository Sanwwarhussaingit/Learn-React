import { useEffect, useRef, useState } from "react";

const App = () => {
  const [c,setC] = useState(0);
  const count = useRef(0);


  useEffect(() => {
    count.current +=1;
    console.log("Ref: "+count.current);
    console.log("State:"+c);
  });



  function increment(){
    setC(c+1);
  }
  return (
    <>
      <button onClick={increment}>Increment: </button>
      <h1>{count.current}: {c}</h1>
    
    </>
  );
};

export default App;
