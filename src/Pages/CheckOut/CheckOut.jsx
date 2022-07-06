import { useState, useContext, useMemo } from "react";
import styles from "./CheckOut.module.css";
import { StoreContext } from "../../store";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
const CheckOut = () => {
  const [state] = useContext(StoreContext);
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");

  const subtotal = useMemo(
    () =>
      state.cart.reduce(
        (total, product) => total + Number(product.price) * product.quantity,
        0
      ),
    [state.cart]
  );
  return (
    <div className={styles.wrapper}>
      <div className={styles.checkOutTitle}>
        <h1>Checkout</h1>
      </div>
      <form className={styles.checkOut}>
        <div className={styles.checkOutInputs}>
          <div className={styles.billingDetails}>Billing Details</div>
          <div className={styles.formGroup}>
            <div className={styles.nameInputWrapper}>
              <div className={styles.nameInput}>
                <label htmlFor="">First Name</label>
                <input type="text" />
              </div>
              <div className={styles.nameInput}>
                <label htmlFor="">Last Name</label>
                <input type="text" />
              </div>
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="">Company Name (optional)</label>
            <input type="text" />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="">Email Address </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="">Phone Number </label>
            <input
              type="tel"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="">Address Details</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className={styles.otherOption}>
            <input id="other-address" type="checkbox" />
            <label htmlFor="other-address">Ship to a different address</label>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="">Order notes (Optional) </label>
            <textarea placeholder="Notes about your order, e.g. special notes for delivery" />
          </div>
        </div>
        <div className={styles.checkOutDetails}>
          <div className={styles.checkOutDetailsWrapper}>
            <p>Your order</p>
            <div className={styles.checkOutDetailsContent}>
              <div className={styles.orderInfo}>
                <span className={styles.orderInfoTitle}>Product</span>
                <span className={styles.orderInfoTitle}>Total</span>
              </div>
              <ul className={styles.listItems}>
                {state.cart.map((item, idx) => (
                  <CheckoutItem
                    key={idx}
                    itemName={item.name}
                    itemQuantity={item.quantity}
                    itemPrice={item.price * item.quantity}
                  />
                ))}
              </ul>
              <div className={styles.orderInfo}>
                <span className={styles.orderInfoTitle}>Subtotal</span>
                <span className={styles.orderInfoTitle}>{subtotal}$</span>
              </div>
              <div className={styles.orderInfo}>
                <span className={styles.orderInfoTitle}>Email</span>
                <span className={styles.orderInfoDetail}>
                  {email || "Enter your email to view shipping options"}
                </span>
              </div>
              <div className={styles.orderInfo}>
                <span className={styles.orderInfoTitle}>Phone Number</span>
                <span className={styles.orderInfoDetail}>
                  {number || "Enter your phone number to view shipping options"}
                </span>
              </div>
              <div className={styles.orderInfo}>
                <span className={styles.orderInfoTitle}>Shipping</span>
                <span className={styles.orderInfoDetail}>
                  {address || "Enter your address to view shipping options"}
                </span>
              </div>
              <footer className={styles.checkOutDetailsFooter}>
                Direct bank transfer
                <p className={styles.checkOutDetailsFooterContent}>
                  Make your payment directly into your bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account
                </p>
                <input type="submit" value="Place order" />
              </footer>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
