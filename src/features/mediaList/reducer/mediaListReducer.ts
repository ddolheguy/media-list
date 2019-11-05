import { createReducer } from 'typesafe-actions';
import {
  MediaListActions,
  onFetchMediaList
} from '../actions/mediaListActions';
import { MediaGridState } from './mediaList';

export const defaultState: Readonly<MediaGridState> = {
  state: 'PENDING'
};

// NOTE: No tests?  This is because the reducer is typesafe and a huge benefit of TypeScript...
// See the typing of "action.payload" in the below handlers.  Each has a type based on the "state".

const reducer = createReducer<MediaGridState, MediaListActions>(defaultState)
  .handleAction(onFetchMediaList.request, (state, action) => ({
    state: 'PENDING'
  }))
  .handleAction(onFetchMediaList.success, (state, action) => ({
    state: 'SUCCESS',
    data: action.payload
  }))
  .handleAction(onFetchMediaList.failure, (state, action) => ({
    state: 'ERROR',
    error: action.payload
  }));

export default reducer;
