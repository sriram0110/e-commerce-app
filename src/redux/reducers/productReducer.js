import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [],
  singleProduct: {},
  cartItems: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCTS:
      return { ...state, singleProduct: payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCTS:
      return { ...state, singleProduct: {} };
    default:
      return state;
  }
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, payload],
      };
    default:
      return state;
  }
};
