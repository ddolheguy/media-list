import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';
import { DeepReadonly } from '../utils';
import * as mediaList from '../features/mediaList';

const rootReducer = combineReducers({
  mediaList: mediaList.mediaListReducer
});

export type RootState = DeepReadonly<StateType<typeof rootReducer>>;

export default rootReducer;
