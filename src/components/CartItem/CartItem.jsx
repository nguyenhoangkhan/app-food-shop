import React, { useState, useEffect, useContext, memo } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { StoreContext } from "../../store";
import { actions } from "../../store";
const CartItem = (props) => {
  const [, dispatch] = useContext(StoreContext);
  const [price, setPrice] = useState();
  useEffect(() => {
    setPrice(Math.round(props.qty) * parseFloat(props.price));
  }, [props.qty, props.price]);
  const updateQuantity = (action, id) => {
    if (action === "add") {
      dispatch(actions.increaseCartQty(id));
    } else if (action === "remove") {
      dispatch(actions.decreaseCartQty(id));
      if (props.qty === 1) {
        dispatch(actions.deleteItem(id));
      }
    }
  };
  return (
    <div className="cartItem">
      <div className="imgBox">
        <img src={props.imgSrc} alt="" />
      </div>
      <div className="itemSection">
        <h2 className="itemName">{props.name}</h2>
        <div className="itemQuantity">
          <span>x {props.qty}</span>
          <div className="quantity">
            <RemoveIcon
              className="itemRemove"
              onClick={() => updateQuantity("remove", props.id)}
            />
            <AddIcon
              className="itemAdd"
              onClick={() => updateQuantity("add", props.id)}
            />
          </div>
        </div>
      </div>
      <div className="itemPrice">
        <span className="dolorSign">$</span>
        <div className="itemPriceValue">{price}</div>
      </div>
    </div>
  );
};

export default memo(CartItem);
