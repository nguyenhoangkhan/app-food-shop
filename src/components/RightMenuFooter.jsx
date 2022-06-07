import { Link } from "react-router-dom";
import { useContext, useMemo, memo } from "react";
import { StoreContext } from "../store/";

const RightMenuFooter = () => {
  const [state] = useContext(StoreContext);
  const cart = state.cart;
  const totalPrice = useMemo(
    () =>
      cart.reduce(
        (total, product) => total + Number(product.price) * product.quantity,
        0
      ),
    [cart]
  );
  return (
    <div className="rightMenuFooter">
      <div className="totalSection">
        <h3>Total</h3>
        <p>
          <span>{totalPrice} $</span>
        </p>
      </div>
      <Link to="/checkout" className="checkOut">
        Check Out
      </Link>
    </div>
  );
};

export default memo(RightMenuFooter);
