import { useFormik } from "formik";
import * as Yup from "yup";
import classNames from "classnames/bind";
import styles from "./Register.module.css";
const cx = classNames.bind(styles);
const Register = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("First name is required")
        .min(2, "Must be 2 characters or more"),
      lastName: Yup.string()
        .required("Last name is required")
        .min(2, "Must be 2 characters or more"),
      email: Yup.string()
        .required("Email is required")
        .matches(/\S+@\S+\.\S+/, "Please enter a valid email"),
      phone: Yup.string()
        .required("Phone is required")
        .matches(
          /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
          "Please enter a valid phone number"
        ),
      password: Yup.string()
        .required("Password is required")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          "Password must contain at least 8 characters, one letter, one number and one special character"
        ),
      confirmPassword: Yup.string()
        .required("Confirm password is required")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className={cx("wrapper")}>
      <form action="" className={cx("form")} onSubmit={formik.handleSubmit}>
        <h1 className={cx("register-title")}>Register</h1>
        <div className={cx("name")}>
          <div className={cx("form-control", "first-name")}>
            <label htmlFor="">First Name:</label>
            <input
              name="firstName"
              type="text"
              placeholder="Enter your first name..."
              value={formik.values.firstName}
              onChange={formik.handleChange}
            />
            {formik.errors.firstName && (
              <span className={cx("warning-form")}>
                {formik.errors.firstName}
              </span>
            )}
          </div>
          <div className={cx("form-control", "last-name")}>
            <label htmlFor="">Last Name:</label>
            <input
              name="lastName"
              type="text"
              placeholder="Enter your last name..."
              value={formik.values.lastName}
              onChange={formik.handleChange}
            />
            {formik.errors.lastName && (
              <span className={cx("warning-form")}>
                {formik.errors.lastName}
              </span>
            )}
          </div>
        </div>
        <div className={cx("form-control")}>
          <label htmlFor="">Email:</label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email address..."
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && (
            <span className={cx("warning-form")}>{formik.errors.email}</span>
          )}
        </div>
        <div className={cx("form-control")}>
          <label htmlFor="">Phone Number:</label>
          <input
            name="phone"
            type="tel"
            placeholder="Enter your phone number..."
            value={formik.values.phone}
            onChange={formik.handleChange}
          />
          {formik.errors.phone && (
            <span className={cx("warning-form")}>{formik.errors.phone}</span>
          )}
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
          {formik.errors.password && (
            <span className={cx("warning-form")}>{formik.errors.password}</span>
          )}
        </div>
        <div className={cx("form-control")}>
          <label htmlFor="">Confirm Password:</label>
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password..."
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
          />
          {formik.errors.confirmPassword && (
            <span className={cx("warning-form")}>
              {formik.errors.confirmPassword}
            </span>
          )}
        </div>
        <div className={cx("form-control")}>
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
};

export default Register;
