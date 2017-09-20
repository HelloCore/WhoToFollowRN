// @flow

import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducers';
import { composeWithDevTools } from 'remote-redux-devtools';
import logger from 'redux-logger';

// import type { AppState } from '../reducers/rootReducers';

// export default function configureStore(initialState: AppState) {
//   return createStore(rootReducer, initialState, devToolsEnhancer());
// }

const middleware = [logger];

export default function configureStore() {
  return createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(...middleware)
      // other store enhancers if any
    )
  );
}
