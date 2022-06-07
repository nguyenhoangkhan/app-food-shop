import React from "react";

const EmptyCart = () => {
  return (
    <div>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2FemptyCart.png?alt=media&token=50b733d4-cdd9-4025-bffe-8efa4066ca24"
        alt=""
        className="emptyCart"
      />
    </div>
  );
};

export default React.memo(EmptyCart);
