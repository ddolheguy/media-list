import { createSelector } from 'reselect';
import { orderBy } from 'lodash';
import { RootState } from '../../../redux/rootReducer';

const propsSelector = (
  state: RootState,
  props: { filter: string; sortField: string; sortAsc: boolean }
) => props;

const mediaSelector = (state: RootState) => state.mediaList;

export const isMediaListLoadedSelector = createSelector(
  mediaSelector,
  state => state.state === 'PENDING'
);

export const isMediaListErroredSelector = createSelector(
  mediaSelector,
  state => state.state === 'ERROR'
);

export const mediaListSelector = createSelector(
  [mediaSelector, propsSelector],
  (state, props) => {
    if (state.state !== 'SUCCESS') {
      return [];
    }

    const data = state.data.filter(i =>
      i.name.toLowerCase().startsWith(props.filter.toLowerCase())
    );
    return orderBy(data, props.sortField, props.sortAsc ? 'asc' : 'desc');
  }
);
