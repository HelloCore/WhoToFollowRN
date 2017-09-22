// @flow

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/rootReducers';
import logger from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';

import createFilter from 'redux-persist-transform-filter';

import MySaga from '../sagas';
import PersistTransformer from './persistTransformer';

import type { AppState } from '../reducers/rootReducers';

export default function configureStore() {
  const middleware = [];
  const sagaMiddleware = createSagaMiddleware();

  middleware.push(sagaMiddleware);

  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
      : compose;

  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(...middleware),
      autoRehydrate(),
      // other store enhancers if any
    ),
  );

  sagaMiddleware.run(MySaga);
  persistStore(store, {
    storage: AsyncStorage,
    transforms: PersistTransformer,
  });

  return store;
}

// const store = createStore(
//   rootReducer,
//   composeEnhancers(
//     applyMiddleware(...middleware),
//     autoRehydrate(),
//     // other store enhancers if any
//   ),
// );

// sagaMiddleware.run(MySaga);
// persistStore(store, {
//   storage: AsyncStorage,
//   transforms: PersistTransformer,
// });

// export default store;
