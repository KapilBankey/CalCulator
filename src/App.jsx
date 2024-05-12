import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";
function App() {
  const [calVal, setValue] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setValue("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setValue(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setValue(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;
