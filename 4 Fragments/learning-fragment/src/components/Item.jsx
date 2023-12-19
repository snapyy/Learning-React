import styles from "./Item.module.css";
const Item = ({ foodItem }) => {
  console.log(styles);
  return (
    <li className={`${styles["theitem"]} list-group-item theitem `}>
      <span className={`${styles["thespan"]} thespan `}>{foodItem} </span>
    </li>
  );
};

export default Item;
