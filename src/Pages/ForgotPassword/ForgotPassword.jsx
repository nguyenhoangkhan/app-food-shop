import { useContext, useRef } from "react";
import { StoreContext } from "../../store";
import className from "classnames/bind";
import styles from "./ForgotPassword.module.css";
const cx = className.bind(styles);
const ForgotPassword = () => {
  const { forgotPassword } = useContext(StoreContext);
  const emailRef = useRef();
  const handleForgotPassword = (e) => {
    const email = emailRef.current.value;
    if (email) {
      forgotPassword(email).then(() => (emailRef.current.value = ""));
    }
  };
  return (
    <div className={cx("wrapper")}>
      <form action="" className={cx("form")}>
        <div className={cx("form-control")}>
          <input ref={emailRef} type="email" placeholder="Enter Your Email" />
          <button type="submit" onClick={handleForgotPassword}>
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
