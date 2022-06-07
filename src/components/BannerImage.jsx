import React from "react";
const BannerImage = (props) => {
  return <img src={props.src} alt="" className="deliveryPic" />;
};
export default React.memo(BannerImage);
