import { GET_PRODUCTS, SET_PRODUCTS, SET_CART } from '../redux_types';

const INITIAL_STATE = {
  products: null,
  cart: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.data };
    case SET_PRODUCTS:
      return { ...state, products: action.data };
    case SET_CART:
      return { ...state, cart: action.cart };
    default: return state;
  }
};
