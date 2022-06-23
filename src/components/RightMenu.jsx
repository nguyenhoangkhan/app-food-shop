import { useContext } from "react";
import DebitCard from "./DebitCard";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import RightMenuFooter from "./RightMenuFooter";
import SubMenuContainer from "./SubMenuContainer";
import { StoreContext } from "../store";
const RightMenu = () => {
  const [state] = useContext(StoreContext);
  const cart = state.cart;
  // const localCart = JSON.parse(localStorage.getItem("cart"));
  // const [cart, setCart] = useState(localCart);
  // useEffect(() => {
  //   setCart(localCart);
  // }, [state.cart]);
  return (
    <div className="rightMenu">
      <div className="debitCardContainer">
        <div className="debitCard">
          <DebitCard />
        </div>
      </div>
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="cartCheckOutContainer">
          <SubMenuContainer name={"Carts Items"} />
          <div className="cartContainer">
            <div className="cartItems">
              {cart &&
                cart.map((item, index) => (
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
