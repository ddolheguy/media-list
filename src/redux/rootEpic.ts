import { combineEpics } from 'redux-observable';
import { mediaEpics } from '../features/mediaList';

const epicRegistry = [...mediaEpics];

export default combineEpics(...epicRegistry);
