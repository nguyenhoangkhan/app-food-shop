import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const MenuCard = (props) => {
  return (
    <div className={`rowMenuCard ${props.isActive ? "active" : ""}`}>
      <div className="imgBox">
        <img src={props.imgSrc} alt="" />
      </div>
      <h3>{props.name}</h3>
      <i className="loadMenu">
        <ArrowForwardIosIcon />
      </i>
    </div>
  );
};

export default React.memo(MenuCard);
