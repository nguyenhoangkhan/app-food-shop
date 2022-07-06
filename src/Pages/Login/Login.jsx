import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import classNames from "classnames/bind";
import styles from "./Login.module.css";
const cx = classNames.bind(styles);
const Login = () => {
  const formik = useFormik({
    initialValues: {
      infoLogin: "",
      password: "",
    },
    validationSchema: Yup.object({
      infoLogin: Yup.string().required("Email or number phone is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className={cx("wrapper")}>
      <form action="" className={cx("form")} onSubmit={formik.handleSubmit}>
        <h1 className={cx("register-title")}>Login</h1>
        <div className={cx("form-control")}>
          <label htmlFor="">Email or Phone Number:</label>
          <input
            name="infoLogin"
            type="text"
            value={formik.values.infoLogin}
            onChange={formik.handleChange}
            placeholder="Enter your email or phone number..."
          />
          {formik.errors.infoLogin && (
            <span className={cx("warning-form")}>
              {formik.errors.infoLogin}
            </span>
          )}
        </div>
        <div className={cx("form-control")}>
          <label htmlFor="">Password:</label>
          <input
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Enter your password..."
          />
          {formik.errors.password && (
            <span className={cx("warning-form")}>{formik.errors.password}</span>
          )}
        </div>
        <div className={cx("form-control")}>
          <input type="submit" value="Login" />
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
