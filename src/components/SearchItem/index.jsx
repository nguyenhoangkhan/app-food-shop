import { useContext, useEffect, useState, memo } from "react";
import { StoreContext } from "../../store";
import { actions } from "../../store";
import styles from "./SearchItem.module.css";
const SearchItem = ({ item }) => {
  const [products, setProducts] = useState();
  const currentProduct = {
    name: item.name,
    id: item.itemId,
    price: item.price,
    imgSrc: item.imgSrc,
    quantity: item.quantity,
  };
  const [, dispatch] = useContext(StoreContext);
  useEffect(() => {
    const productBuyed = [];
    productBuyed.push(products);
    if (products) {
      dispatch(actions.setCart(productBuyed));
    }
  }, [products, dispatch]);

  return (
    <div className={styles.SearchItem} title={item.name}>
      <div className={styles.dishPic}>
        <img src={item.imgSrc} alt="" />{" "}
      </div>
      <p className={styles.dishName}>{item.name}</p>
      <span className={styles.dishPrice}>{item.price} $</span>
      <button
        className={styles.buyBtn}
        onClick={() => {
          setProducts(currentProduct);
        }}
      >
        Buy
      </button>
    </div>
  );
};
export default memo(SearchItem);
