// @flow

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/rootReducers';
import { composeWithDevTools } from 'remote-redux-devtools';
import logger from 'redux-logger';

import MySaga from '../sagas';

// import type { AppState } from '../reducers/rootReducers';

// export default function configureStore(initialState: AppState) {
//   return createStore(rootReducer, initialState, devToolsEnhancer());
// }

const sagaMiddleware = createSagaMiddleware();

const middleware = [logger];
middleware.push(sagaMiddleware);

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middleware),
    // other store enhancers if any
  ),
);
sagaMiddleware.run(MySaga);

export default store;

// export default function configureStore() {
//   return createStore(
//     rootReducer,
//     composeWithDevTools(
//       applyMiddleware(...middleware),
//       // other store enhancers if any
//     ),
//   );
// }
