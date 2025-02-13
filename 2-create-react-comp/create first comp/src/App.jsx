//component define using function so it is functional component
//another one is class component which become less usable now
// import UBtn from "./UBtn";
import Hello from "./Hello";
import Random from "./Random";
function App(){
  //JSX not HTML
  return<div> 
            <h1>
              hello world
            </h1>
            {/* <UBtn></UBtn> */}
            <Hello></Hello>
            <Random></Random>
        </div>
  
}
export default App;