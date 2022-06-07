import React from "react";
import FooterMenu from "../../components/FooterMenu";
import Header from "../../components/Header";

const DefaultLayout = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <FooterMenu />
    </div>
  );
};

export default DefaultLayout;
