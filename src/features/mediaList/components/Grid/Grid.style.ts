import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GridTable = styled.table`
  width: 100%;

  th {
    color: ${({ theme }) => theme.colours.text.medium};
    cursor: pointer;
    text-align: left;
    text-decoration-line: underline;
  }

  td {
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 12px;
  }
`;

export const NoData = styled.div`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;
  padding: 50px;
  text-align: center;
`;
