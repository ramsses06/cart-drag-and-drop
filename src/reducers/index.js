// Aqui se van a combinar todos lo reducers que iran a la aplicacion
import { combineReducers } from 'redux';

import reduxReducer from './reduxReducer';
import profileReducer from './profileReducer';
import productsReducer from './productsReducer';

export default combineReducers({
  reduxReducer,
  profileReducer,
  productsReducer
});
