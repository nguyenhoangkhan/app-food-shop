import {
  SET_CART,
  DELETE_ITEM,
  INCREASE_CART_QTY,
  DECREASE_CART_QTY,
} from "./Constant";
export const initialState = {
  cart: [],
  cartQty: 0,
};
const Reducer = (state, action) => {
  const cartQty = state.cartQty;
  const cart = [...state.cart];
  switch (action.type) {
    case SET_CART:
      const product = action.payload;
      const productInCart = cart.find((item) => item.id === product[0].id);
      if (!productInCart) {
        return {
          ...state,
          cartQty: state.cartQty + 1,
          cart: [...state.cart, ...action.payload],
        };
      } else {
        const newCart = [...state.cart];
        const ObjIndex = newCart.findIndex((item) => item.id === product[0].id);
        return {
          ...state,
          cartQty: cartQty + 1,
          cart: state.cart.map((item, idx) =>
            idx === ObjIndex
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item
          ),
        };
      }

    case INCREASE_CART_QTY:
      return {
        ...state,
        cartQty: cartQty + 1,
        cart: cart.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        ),
      };

    case DECREASE_CART_QTY:
      return {
        ...state,
        cartQty: cartQty - 1,
        cart: cart.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        ),
      };

    case DELETE_ITEM:
      let newCart = state.cart.filter((item) => item.id !== action.payload);
      return {
        ...state,
        cart: newCart,
      };

    default:
      throw new Error("Invalid action type");
  }
};
export default Reducer;
