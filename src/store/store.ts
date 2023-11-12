import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/index';

export const store = createStore(
  reducers,
  {}, // initial state
  applyMiddleware(thunk)
);
