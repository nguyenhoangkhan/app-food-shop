import {
  SET_USERNAME,
  SET_CART,
  DELETE_ITEM,
  INCREASE_CART_QTY,
  DECREASE_CART_QTY,
} from "./Constant";
export const setUsername = (payload) => ({
  type: SET_USERNAME,
  payload,
});
export const setCart = (payload) => ({
  type: SET_CART,
  payload,
});
export const deleteItem = (payload) => ({
  type: DELETE_ITEM,
  payload,
});
export const increaseCartQty = (payload) => ({
  type: INCREASE_CART_QTY,
  payload,
});
export const decreaseCartQty = (payload) => ({
  type: DECREASE_CART_QTY,
  payload,
});
