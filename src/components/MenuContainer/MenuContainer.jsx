import React from "react";
import { Link } from "react-router-dom";
const MenuContainer = (props) => {
  return (
    <li className={props.isHome ? "active" : ""}>
      {" "}
      <Link to={props.link}>
        {" "}
        <span className="icon">{props.icon}</span>
      </Link>
    </li>
  );
};

export default React.memo(MenuContainer);
