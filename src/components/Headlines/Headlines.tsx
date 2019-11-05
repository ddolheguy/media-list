import styled from 'styled-components';

const HeadlineBase = styled.div`
  color: ${({ theme }) => theme.colours.text.dark};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
  letter-spacing: 1px;
`;

export const H1 = styled(HeadlineBase)`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 21px;
`;
