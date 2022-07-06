import { memo } from "react";
import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";
import styles from "./FooterMenuItem.module.css";
const cx = classNames.bind(styles);
const MenuContainer = (props) => {
  return (
    <>
      <NavLink
        className={(nav) => cx("footerItem", { active: nav.isActive })}
        to={props.link}
      >
        {" "}
        <span className={styles.icon}>{props.icon}</span>
      </NavLink>
    </>
  );
};

export default memo(MenuContainer);
