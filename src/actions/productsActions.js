import { GET_PRODUCTS, SET_PRODUCTS, SET_CART } from '../redux_types';
import Products from '../services/Products';

export const getProducts = () => async (dispatch, prevState) => {
  const products = await Products.getProducts('videojuego', 1);
  console.log(products);
  dispatch({
    type: GET_PRODUCTS,
    data: products.data.products
  });
};

export const addCart = (prod, productIndex) => async (dispatch, prevState) => {
  const cart = prevState().productsReducer.cart;
  const products = prevState().productsReducer.products;
  console.log(cart);
  let exists = false;
  for (let c of cart) {
    if (c.ID === prod.ID) exists = true;
  }
  if (!exists) {
    cart.push(prod);
    products.splice(productIndex, 1);
  }
  dispatch({
    type: SET_CART,
    cart
  });
  dispatch({
    type: SET_PRODUCTS,
    data: products
  });
};
