import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from '../reducers';

// configuracion de persistencia
const persistConfig = {
  key: 'root',
  storage
};

// persistimos nuestros reducers con la configuracion definida
const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducer,
  applyMiddleware(reduxThunk) // despues del primer parametro se agregan middlewares
);
const persistor = persistStore(store);

export { store, persistor };
