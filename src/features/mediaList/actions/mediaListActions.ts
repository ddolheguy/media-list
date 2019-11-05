import { ActionType, createAsyncAction } from 'typesafe-actions';
import { MediaItem } from '../../../../types';

export const onFetchMediaList = createAsyncAction(
  'mediaGrid/FETCH_MEDIA_LIST',
  'mediaGrid/FETCH_MEDIA_LIST_SUCCESS',
  'mediaGrid/FETCH_MEDIA_LIST_FAILURE'
)<void, MediaItem[], Error>();

export type MediaListActions = ActionType<typeof onFetchMediaList>;
