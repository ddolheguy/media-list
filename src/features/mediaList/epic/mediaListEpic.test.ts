import { ActionsObservable, StateObservable } from 'redux-observable';
import { toArray } from 'rxjs/operators';

import { onFetchMediaList } from '../actions/mediaListActions';
import { RootState } from '../../../redux/rootReducer';
import { onFetchMediaEpic } from './mediaListEpic';
import { api } from '../../../services';

describe('onFetchMediaEpic', () => {
  it('should fetch a list of media items from API', done => {
    const action$ = ActionsObservable.of(onFetchMediaList.request());
    api.http = jest.fn().mockReturnValue(Promise.resolve({ parsedBody: [] }));

    const state$ = {} as StateObservable<RootState>;
    onFetchMediaEpic(action$, state$, undefined)
      .pipe(toArray())
      .subscribe(outputActions => {
        expect(outputActions).toHaveLength(1);

        const outputAction1 = outputActions[0];
        expect(outputAction1.type).toBe('mediaGrid/FETCH_MEDIA_LIST_SUCCESS');

        done();
      });
  });

  it('should error if API returns HTTP code 500', done => {
    const action$ = ActionsObservable.of(onFetchMediaList.request());
    api.http = jest.fn().mockReturnValue(Promise.reject({ status: 500 }));

    const state$ = {} as StateObservable<RootState>;
    onFetchMediaEpic(action$, state$, undefined)
      .pipe(toArray())
      .subscribe(outputActions => {
        expect(outputActions).toHaveLength(1);

        const outputAction1 = outputActions[0];
        expect(outputAction1.type).toBe('mediaGrid/FETCH_MEDIA_LIST_FAILURE');

        done();
      });
  });
});
