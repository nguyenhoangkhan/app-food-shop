import { useContext, useEffect, useState } from "react";
import classNames from "classnames/bind";
import { StoreContext } from "../../store";
import styles from "./Account.module.css";
const cx = classNames.bind(styles);
const Account = () => {
  const { user, logoutUser } = useContext(StoreContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleLogout = () => {
    logoutUser();
    window.location = "/login";
  };
  useEffect(() => {
    if (user) {
      setName(user.displayName);
      setEmail(user.email);
    } else {
      return;
    }
  }, [user]);
  return (
    <div className={cx("wrapper")}>
      <ul className={cx("account-options")}>
        <li className={cx("account-item")}>
          {" "}
          Full Name: {user ? name : "You are not Sign In"}
        </li>
        <li className={cx("account-item")}>
          {" "}
          Email: {user ? email : "You are not Sign In"}
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
