import { useContext, memo } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { StoreContext } from "../../store";
import Search from "../Search";
const Header = () => {
  const [state] = useContext(StoreContext);
  return (
    <header>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Flogo.png?alt=media&token=fc228623-ef27-4af4-8ea5-b9ebeeaf47dc"
        alt=""
        className="logo"
      />
      <Search />
      <div className="profileContainer">
        <div className="imgBox">
          <img
            src="https://cdn4.iconfinder.com/data/icons/instagram-ui-twotone/48/Paul-18-512.png"
            className="profilePic"
            alt=""
          />
        </div>
        <h2 className="userName">GUEST</h2>
      </div>
      <div className="shoppingCart">
        <ShoppingCartIcon className="cart" />
        {state.cartQty !== 0 ? (
          <div className="cart_content">
            <p>{state.cartQty}</p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </header>
  );
};

export default memo(Header);
