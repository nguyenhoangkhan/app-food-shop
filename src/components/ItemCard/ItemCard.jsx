import { useState, useEffect, useContext, memo } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { StoreContext } from "../../store";
import { actions } from "../../store";

const ItemCard = (props) => {
  const rating = props.ratings;
  const [, dispatch] = useContext(StoreContext);
  const [isFavorite, setFavorite] = useState(false);
  const [currentValue, setCurrentValue] = useState(Math.floor(rating));
  const [isCart, setCart] = useState();
  const currentProduct = {
    name: props.name,
    id: props.itemId,
    price: props.price,
    imgSrc: props.imgSrc,
    quantity: props.qty,
  };

  useEffect(() => {
    const productBuyed = [];
    productBuyed.push(isCart);
    if (isCart) {
      dispatch(actions.setCart(productBuyed));
    }
  }, [isCart, dispatch]);
  const handleClick = (value) => {
    setCurrentValue(value);
  };
  return (
    <div className="itemCard" id={props.itemId}>
      <div
        className={`isFavourite ${isFavorite ? "active" : ""}`}
        onClick={() => setFavorite(!isFavorite)}
      >
        <FavoriteIcon />
      </div>
      <div className="imgBox">
        <img src={props.imgSrc} alt="" />
      </div>
      <div className="itemContent">
        <h3>{props.name}</h3>
        <div className="bottom">
          <div className="ratings">
            {Array.apply(null, { length: 5 }).map((element, index) => (
              <i
                key={index}
                className={`rating ${currentValue > index ? "orange" : "gray"}`}
                onClick={() => handleClick(index + 1)}
              >
                <StarIcon />
              </i>
            ))}
            <h3 className="price">
              <span>$ </span>
              {props.price}{" "}
            </h3>
          </div>
          <i className="addtoCard" onClick={() => setCart(currentProduct)}>
            <ShoppingCartIcon />
          </i>
        </div>
      </div>
    </div>
  );
};

export default memo(ItemCard);
