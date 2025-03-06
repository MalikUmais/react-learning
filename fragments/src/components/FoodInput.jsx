import styles from "./FoodInput.module.css"
const FoodInput=()=>{
    return <input type="text" placeholder="Enter Food Item here" className={styles.foodItem} onChange={(event)=>{console.log(event.target.value)}}/>
}
export default FoodInput;