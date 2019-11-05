import React, { memo, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  isMediaListLoadedSelector,
  isMediaListErroredSelector
} from '../../selectors/mediaListSelectors';
import { ErrorHandler, InputField, Loader } from '../../../../components';
import * as Actions from '../../actions/mediaListActions';
import * as S from './MediaList.style';
import { RootState } from '../../../../redux/rootReducer';
import Grid from '../Grid/Grid';

const MediaList: React.FC<Props> = ({
  isLoaded,
  isErrored,
  onFetchMediaList
}) => {
  const [state, setState] = useState({
    filter: '',
    sortField: 'id',
    sortAsc: true
  });

  useEffect(() => {
    onFetchMediaList();
  }, [onFetchMediaList]);

  const { filter, sortField, sortAsc } = state;
  return (
    <S.Container>
      {isLoaded && <Loader />}
      {isErrored && <ErrorHandler />}
      {!isLoaded && !isErrored && (
        <>
          <InputField
            label='Filter by name:'
            placeholder='Type here to filter list'
            onChange={e => setState({ ...state, filter: e.target.value })}
            value={filter}
          />

          <Grid
            filter={filter}
            sortField={sortField}
            sortAsc={sortAsc}
            onSortColumn={column =>
              setState({
                ...state,
                sortField: column,
                sortAsc: !sortAsc
              })
            }
          />
        </>
      )}
    </S.Container>
  );
};

const mapStateToProps = (state: RootState) => ({
  isLoaded: isMediaListLoadedSelector(state),
  isErrored: isMediaListErroredSelector(state)
});

const mapDispatch = {
  onFetchMediaList: Actions.onFetchMediaList.request
};

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatch;

export default connect(
  mapStateToProps,
  mapDispatch
)(memo(MediaList));
