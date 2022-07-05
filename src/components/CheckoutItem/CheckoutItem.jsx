import React from "react";
import styles from "./CheckoutItem.module.css";
const CheckoutItem = (props) => {
  return (
    <li className={styles.itemOrder}>
      <div className={styles.item}>
        <div className={styles.itemName}>{props.itemName}</div>
        <span className={styles.itemQuantity}> x{props.itemQuantity}</span>
      </div>
      <span className={styles.itemPrice}>{props.itemPrice}$</span>
    </li>
  );
};

export default CheckoutItem;
