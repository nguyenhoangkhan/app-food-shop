import { useState, useContext, memo, useEffect } from "react";
import { StoreContext } from "../../store";
import { useFormik } from "formik";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Login.module.css";
const cx = classNames.bind(styles);
const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      if (values) {
        loginUser(values.email, values.password);
      }
    },
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { loginUser, error, signInGoogle, signInFacebook } =
    useContext(StoreContext);
  const handleSignInGoogle = () => {
    signInGoogle();
  };
  const handleSignInFacebook = () => {
    signInFacebook();
  };
  useEffect(() => {
    if (error) {
      setErrorMessage("Thông tin đăng nhập không chính xác, vui lòng thử lại");
    }
  }, []);
  return (
    <div className={cx("wrapper")}>
      <form action="" className={cx("form")} onSubmit={formik.handleSubmit}>
        <h1 className={cx("login-title")}>Login</h1>
        {errorMessage ? (
          <p className={cx("login-warning")}>{errorMessage}</p>
        ) : (
          ""
        )}
        <div className={cx("form-control")}>
          <label htmlFor="">Email:</label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email..."
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </div>
        <div className={cx("form-control")}>
          <label htmlFor="">Password:</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password..."
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </div>
        <div className={cx("form-control")}>
          <button type="submit">Login</button>
        </div>
        <p className={cx("login")}>
          If you don't have an account<Link to="/register"> CLICK ME!</Link>
        </p>
        <p className={cx("forgot")}>
          <Link to="/forgotpassword">Forgot your account ?</Link>
        </p>
        <p className={cx("or")}>Or</p>
        <div className={cx("social-networks")}>
          <p onClick={handleSignInFacebook}>
            {" "}
            <FacebookIcon /> <span>Login with Facebook</span>
          </p>
          <p onClick={handleSignInGoogle}>
            <GoogleIcon />
            <span>Login with Google</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default memo(Login);
