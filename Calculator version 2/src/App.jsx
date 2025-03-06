import styles from "./App.module.css";
import Display from "./componenets/Display";
import ButtonsContainer from "./componenets/ButtonsContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    console.log(buttonText);
    if(buttonText==='C'){
      setCalVal("");
    }else if(buttonText==='='){
      const result=eval(calVal);
      setCalVal(result);
    }else{
      const newDispValue = calVal + buttonText;
      setCalVal(newDispValue);
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
