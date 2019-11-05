import {
  isMediaListLoadedSelector,
  isMediaListErroredSelector,
  mediaListSelector
} from './mediaListSelectors';
import { MediaItem } from '../../../../types';

describe('isMediaListLoadedSelector', () => {
  it('returns true if state equals PENDING', () => {
    expect(
      isMediaListLoadedSelector({
        mediaList: {
          state: 'PENDING'
        }
      })
    ).toEqual(true);
  });

  it('returns false if state not equal PENDING', () => {
    expect(
      isMediaListLoadedSelector({
        mediaList: {
          state: 'SUCCESS',
          data: []
        }
      })
    ).toEqual(false);
  });

  it('returns false if state errored', () => {
    expect(
      isMediaListLoadedSelector({
        mediaList: {
          state: 'ERROR',
          error: new Error()
        }
      })
    ).toEqual(false);
  });
});

describe('isMediaListErroredSelector', () => {
  it('returns true if state equals ERROR', () => {
    expect(
      isMediaListErroredSelector({
        mediaList: {
          state: 'ERROR',
          error: new Error()
        }
      })
    ).toEqual(true);
  });

  it('returns false if state not equal ERROR', () => {
    expect(
      isMediaListErroredSelector({
        mediaList: {
          state: 'SUCCESS',
          data: []
        }
      })
    ).toEqual(false);
  });
});

describe('mediaListSelector', () => {
  it('returns an empty array if not SUCCESS', () => {
    expect(
      mediaListSelector(
        {
          mediaList: {
            state: 'PENDING'
          }
        },
        { filter: '', sortField: 'id', sortAsc: true }
      )
    ).toEqual([]);
  });

  it('returns an data array if SUCCESS', () => {
    const data = [{ id: 1, name: 'Test' }] as MediaItem[];
    expect(
      mediaListSelector(
        {
          mediaList: {
            state: 'SUCCESS',
            data
          }
        },
        { filter: '', sortField: 'id', sortAsc: true }
      )
    ).toEqual(data);
  });

  it('returns filtered data when filter prop has value', () => {
    expect(
      mediaListSelector(
        {
          mediaList: {
            state: 'SUCCESS',
            data: [
              { id: 2, name: 'Hello' },
              { id: 1, name: 'Test' }
            ] as MediaItem[]
          }
        },
        { filter: 'hel', sortField: 'id', sortAsc: true }
      )
    ).toEqual([{ id: 2, name: 'Hello' }] as MediaItem[]);
  });

  it('returns sorted array when sortField provided', () => {
    expect(
      mediaListSelector(
        {
          mediaList: {
            state: 'SUCCESS',
            data: [
              { id: 2, name: 'Hello' },
              { id: 1, name: 'Test' }
            ] as MediaItem[]
          }
        },
        { filter: '', sortField: 'id', sortAsc: true }
      )
    ).toEqual([
      { id: 1, name: 'Test' },
      { id: 2, name: 'Hello' }
    ] as MediaItem[]);
  });
});
