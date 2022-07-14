import { useContext, useEffect, useState } from "react";
import DebitCard from "../DebitCard";
import CartItem from "../CartItem";
import EmptyCart from "../EmptyCart/EmptyCart";
import RightMenuFooter from "../RightMenuFooter";
import SubMenuContainer from "../SubMenuContainer/SubMenuContainer";
import { StoreContext } from "../../store";
const RightMenu = () => {
  const { state } = useContext(StoreContext);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));
  useEffect(() => {
    if (cart?.length) {
      setCart(state.cart);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    }
  }, [state.cart, cart]);
  return (
    <div className="rightMenu">
      <div className="debitCardContainer">
        <div className="debitCard">
          <DebitCard />
        </div>
      </div>
      {state.cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="cartCheckOutContainer">
          <SubMenuContainer name={"Carts Items"} />
          <div className="cartContainer">
            <div className="cartItems">
              {state.cart &&
                state.cart.map((item, index) => (
                  <CartItem
                    key={index}
                    id={item.id}
                    name={item.name}
                    imgSrc={item.imgSrc}
                    price={item.price}
                    qty={item.quantity}
                    product={item}
                  />
                ))}
            </div>
          </div>
          <RightMenuFooter />
        </div>
      )}
    </div>
  );
};

export default RightMenu;
