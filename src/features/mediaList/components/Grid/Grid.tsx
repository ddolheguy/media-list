import React, { memo } from 'react';
import { connect } from 'react-redux';
import { mediaListSelector } from '../../selectors/mediaListSelectors';
import * as Actions from '../../actions/mediaListActions';
import * as S from './Grid.style';
import { RootState } from '../../../../redux/rootReducer';

const Grid: React.FC<Props> = ({ mediaList, onSortColumn }) => {
  return (
    <>
      <S.GridTable>
        <thead>
          <tr>
            <th onClick={() => onSortColumn('id')}>Id</th>
            <th onClick={() => onSortColumn('name')}>Name</th>
            <th onClick={() => onSortColumn('desc')}>Description</th>
            <th onClick={() => onSortColumn('ext')}>Media Type</th>
            <th onClick={() => onSortColumn('size')}>Size</th>
            <th onClick={() => onSortColumn('created')}>Created</th>
          </tr>
        </thead>
        <tbody>
          {mediaList.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.desc}</td>
              <td>{item.ext}</td>
              <td>{item.size}</td>
              <td>{item.created}</td>
            </tr>
          ))}
        </tbody>
      </S.GridTable>
      {mediaList.length === 0 && <S.NoData>No records found...</S.NoData>}
    </>
  );
};

const mapStateToProps = (
  state: RootState,
  { filter, sortField, sortAsc }: OwnProps
) => ({
  mediaList: mediaListSelector(state, { filter, sortField, sortAsc })
});

const mapDispatch = {
  onFetchMediaList: Actions.onFetchMediaList.request
};

type OwnProps = { filter: string; sortField: string; sortAsc: boolean };
type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatch & {
    filter: string;
    sortField: string;
    onSortColumn: (column: string) => void;
  };

export default connect(
  mapStateToProps,
  mapDispatch
)(memo(Grid));
