import { useContext } from "react";
import classNames from "classnames/bind";
import { StoreContext } from "../../store";
import styles from "./Account.module.css";
const cx = classNames.bind(styles);
const Account = () => {
  const { user, logoutUser } = useContext(StoreContext);
  const handleLogout = () => {
    logoutUser();
    window.location = "/login";
  };
  return (
    <div className={cx("wrapper")}>
      <ul className={cx("account-options")}>
        <li className={cx("account-item")}>
          {" "}
          Full Name:{" "}
          {user.displayName ? user.displayName : "You are not Sign In"}
        </li>
        <li className={cx("account-item")}>
          {" "}
          Email: {user.email ? user.email : "You are not Sign In"}
        </li>
        <li className={cx("account-item-btn")}>
          {" "}
          <button onClick={handleLogout}>
            {user ? "Log Out" : "Go To Sign In Page"}
          </button>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Account;
