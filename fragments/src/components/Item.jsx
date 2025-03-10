//anything can be written insted of styles for  importing module css
import styles from "./Item.module.css";
//destructuring
// const Item = (props) => {
const Item = ({ items }) => {
  //   let { item } = props.items;
  //   return <li className="list-group-item">{props.items}</li>;
  return (
    <li className={`${styles["um-item"]} ${"list-group-item"}`}>
      <span className={`${styles["um-span"]}`}>{items}</span>
      <button className={`${styles.button} btn btn-info`
      } onClick={()=>console.log(`${items} bought`)}>Buy</button>
    </li>
  );
};
export default Item;
