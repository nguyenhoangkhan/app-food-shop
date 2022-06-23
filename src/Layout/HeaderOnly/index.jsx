import React from "react";
import Header from "../../components/Header";
const HeaderOnly = (props) => {
  return (
    <div>
      {props.children}
      <Header />
    </div>
  );
};

export default HeaderOnly;
