import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";
function App() {
  const [claVal, setCalVal] = useState("");

  const onButtonClick = function (buttonText) {
    if (buttonText ==='C') {
      setCalVal("");
    } else if (buttonText === '=') {
      const result = eval(claVal);
      setCalVal(result);    
    } else {
      const newDisplayValue = claVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <div className={styles.calculator}>

      <Display displayValue={claVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>

    </div>
  );
}

export default App;
