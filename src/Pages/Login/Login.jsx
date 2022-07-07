import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Login.module.css";
import { useState, useEffect } from "react";
const cx = classNames.bind(styles);
const Login = () => {
  const [infoLogin, setInfoLogin] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [path, setPath] = useState("");
  useEffect(() => {
    if (infoLogin === "admin" && password === "admin") {
      setLogin(true);
    } else {
      setLogin(false);
    }
    login ? setPath("/") : setPath("/login");
  }, [login, password, infoLogin]);
  return (
    <div className={cx("wrapper")}>
      <form action="" className={cx("form")}>
        <h1 className={cx("login-title")}>Login</h1>
        <div className={cx("form-control")}>
          <label htmlFor="">Email or Phone Number:</label>
          <input
            name="infoLogin"
            type="text"
            placeholder="Enter your email or phone number..."
            value={infoLogin}
            onChange={(e) => setInfoLogin(e.target.value)}
          />
        </div>
        <div className={cx("form-control")}>
          <label htmlFor="">Password:</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={cx("form-control")}>
          <Link to={path}>Login</Link>
        </div>
        <p className={cx("register")}>
          If you don't have an account<Link to="/register"> CLICK ME!</Link>
        </p>
        <p className={cx("forgot")}>
          <Link to="#">Forgot your account ?</Link>
        </p>
        <p className={cx("or")}>Or</p>
        <div className={cx("social-networks")}>
          <p>
            {" "}
            <FacebookIcon /> <span>Login with Facebook</span>
          </p>
          <p>
            <GoogleIcon />
            <span>Login with Facebook</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
