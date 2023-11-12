import { combineReducers } from 'redux';
import mediaReducer from './mediaReducer';

const reducers = combineReducers({
  media: mediaReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
