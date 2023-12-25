import styles from "./Item.module.css";
const Item = ({ foodItem, handleBuyButtonClicked }) => {
  return (
    <li className={`${styles["theitem"]} list-group-item theitem `}>
      <span className={styles["thespan"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={(event) => handleBuyButtonClicked(event)}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;
