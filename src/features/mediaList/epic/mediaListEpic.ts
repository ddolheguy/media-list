import { ActionsObservable, Epic } from 'redux-observable';
import { catchError, filter, map, mergeMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { api } from '../../../services';
import {
  MediaListActions,
  onFetchMediaList
} from '../actions/mediaListActions';
import { from, of, throwError } from 'rxjs';
import { MediaItem } from '../../../../types';

// NOTE: We should add a production based .env config to inject the base web domain for the API.

export const onFetchMediaEpic: Epic = (
  action$: ActionsObservable<MediaListActions>
) =>
  action$.pipe(
    filter(isActionOf(onFetchMediaList.request)),
    mergeMap(() => {
      return from(
        api.http<MediaItem[]>(
          new Request('http://localhost:3003/files', {
            method: 'get'
          })
        )
      ).pipe(
        map(mediaItems => {
          if (mediaItems.parsedBody) {
            return onFetchMediaList.success(mediaItems.parsedBody);
          }

          throwError('Error retrieving data from api');
        }),
        catchError(err => of(onFetchMediaList.failure(err)))
      );
    })
  );

export default [onFetchMediaEpic];
