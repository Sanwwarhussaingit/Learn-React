import { useRef , useState } from "react";
export default function App() {
  const inputElement = useRef();
  const [pex,setPex] = useState(100);

  const handleClick = function () {
    setPex(pex+30);
    console.log(inputElement.current);
    inputElement.current.style.width = `${pex}px`;
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={handleClick}>Click here</button>
    </>
  );
}
