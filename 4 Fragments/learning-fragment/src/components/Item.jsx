import styles from "./Item.module.css";
const Item = ({ foodItem }) => {
  const handleBuyButtonClicked = (event) => {
    console.log(event);
    console.log(`${foodItem} being bought `);
  };
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
