import { useState, useContext, memo } from "react";
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
      if (error === "Firebase: Error (auth/invalid-email).") {
        setErrorMessage("Email đăng nhập không chính xác, vui lòng thử lại");
      } else if (error === "Firebase: Error (auth/wrong-password).") {
        setErrorMessage("Mật khẩu không chính xác, vui lòng thử lại");
      } else if (
        error ===
        "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests)."
      ) {
        setErrorMessage(
          "Điền sai thông tin đăng nhập quá nhiều lần, vui lòng thử lại sau"
        );
        console.log(error);
      }
      if (values) {
        loginUser(values.email, values.password);
      }
    },
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { loginUser, error } = useContext(StoreContext);

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
          <button>Login</button>
        </div>
        <p className={cx("login")}>
          If you don't have an account<Link to="/register"> CLICK ME!</Link>
        </p>
        <p className={cx("forgot")}>
          <Link to="/forgotpassword">Forgot your account ?</Link>
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

export default memo(Login);
