import React from "react";
const SubMenuContainer = (props) => {
  return (
    <div className="SubMenuContainer">
      <h3>{props.name}</h3>
    </div>
  );
};

export default React.memo(SubMenuContainer);
