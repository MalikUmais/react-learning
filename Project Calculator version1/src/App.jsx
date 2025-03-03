import styles from "./App.module.css"
import Display from "./componenets/Display";
import ButtonsContainer from "./componenets/ButtonsContainer";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className={styles.calculator}>
      <Display></Display>
      <ButtonsContainer></ButtonsContainer>
    </div>
  );
}

export default App;
