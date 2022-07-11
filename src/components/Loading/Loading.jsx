import classNames from "classnames/bind";
import styles from "./Loading.module.css";
const cx = classNames.bind(styles);
const Loading = () => {
  return (
    <div className={cx("lds-ring")}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loading;
